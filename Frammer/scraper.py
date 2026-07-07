"""
Framer Marketplace — Free Components scraper.

Collects every free component from https://www.framer.com/community/marketplace/components/
For each component it:
  1. Opens the component page
  2. Clicks the "Copy Component" button
  3. Reads the clipboard (the copied Framer link / package string)
  4. Downloads the thumbnail image
  5. Records: name, category, component page link, copied clipboard value, thumbnail file

Output: components.xlsx + components.csv + thumbnails/*.jpg

Setup (uv):
    uv sync
    uv run playwright install chromium
    uv run python scraper.py

Optional flags:
    --limit N       stop after N components (default: all)
    --headed        show the browser window (default: headless)
    --out DIR       output directory (default: ./output)
"""

import argparse
import csv
import re
import time
from pathlib import Path
from urllib.parse import urljoin

import pandas as pd
import requests
from playwright.sync_api import sync_playwright, TimeoutError as PWTimeout

BASE = "https://www.framer.com"
LISTING_URL = f"{BASE}/community/marketplace/components/?pricing=free"
COMPONENT_LINK_RE = re.compile(r"^/community/marketplace/components/[a-z0-9\-]+/?$")


def collect_component_links(page, limit=None):
    """Scroll the free-components listing until no new links load."""
    print("[*] loading listing page…")
    page.goto(LISTING_URL, wait_until="domcontentloaded")
    page.wait_for_timeout(1500)

    seen = set()
    stable_rounds = 0
    while True:
        anchors = page.eval_on_selector_all(
            "a[href]", "els => els.map(e => e.getAttribute('href'))"
        )
        new_links = {
            urljoin(BASE, h) for h in anchors if h and COMPONENT_LINK_RE.match(h)
        }
        before = len(seen)
        seen |= new_links
        after = len(seen)

        if limit and after >= limit:
            break
        if after == before:
            stable_rounds += 1
        else:
            stable_rounds = 0
        if stable_rounds >= 3:
            break

        page.mouse.wheel(0, 3000)
        page.wait_for_timeout(900)

    links = sorted(seen)
    if limit:
        links = links[:limit]
    print(f"[*] found {len(links)} free components")
    return links


def scrape_component(page, url):
    page.goto(url, wait_until="domcontentloaded")
    page.wait_for_timeout(800)

    name = page.title().split("·")[0].strip() if page.title() else ""
    h1 = page.locator("h1").first
    if h1.count():
        name = h1.inner_text().strip()

    # category (breadcrumb-ish link under /components/categories/)
    category = ""
    cat_links = page.locator("a[href*='/components/categories/']")
    if cat_links.count():
        category = cat_links.first.inner_text().strip()

    # thumbnail — prefer og:image meta
    thumb_url = ""
    og = page.locator("meta[property='og:image']")
    if og.count():
        thumb_url = og.first.get_attribute("content") or ""
    if not thumb_url:
        img = page.locator("img").first
        if img.count():
            thumb_url = img.get_attribute("src") or ""

    # click "Copy Component" and read clipboard
    copied_value = ""
    try:
        copy_btn = page.get_by_text("Copy Component", exact=False).first
        copy_btn.click(timeout=5000)
        page.wait_for_timeout(500)
        copied_value = page.evaluate("navigator.clipboard.readText()")
    except (PWTimeout, Exception) as e:  # noqa: BLE001
        copied_value = f"ERROR: {e}"

    return {
        "name": name,
        "category": category,
        "component_url": url,
        "copied_link": copied_value,
        "thumbnail_url": thumb_url,
    }


def slugify(url: str) -> str:
    return url.rstrip("/").split("/")[-1] or "component"


def download_thumbnail(url: str, dest: Path) -> str:
    if not url:
        return ""
    try:
        r = requests.get(url, timeout=20)
        r.raise_for_status()
        ext = ".jpg"
        if "png" in r.headers.get("content-type", ""):
            ext = ".png"
        elif "webp" in r.headers.get("content-type", ""):
            ext = ".webp"
        path = dest.with_suffix(ext)
        path.write_bytes(r.content)
        return str(path)
    except Exception as e:  # noqa: BLE001
        return f"ERROR: {e}"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=None)
    ap.add_argument("--headed", action="store_true")
    ap.add_argument("--out", default="output")
    args = ap.parse_args()

    out_dir = Path(args.out)
    thumb_dir = out_dir / "thumbnails"
    thumb_dir.mkdir(parents=True, exist_ok=True)

    columns = [
        "name", "category", "component_url", "copied_link",
        "thumbnail_url", "thumbnail_file", "status",
    ]
    csv_path = out_dir / "components.csv"
    xlsx_path = out_dir / "components.xlsx"

    # resume: load already-scraped rows/urls if csv exists
    rows = []
    done_urls = set()
    if csv_path.exists():
        try:
            prev = pd.read_csv(csv_path)
            rows = prev.to_dict("records")
            done_urls = set(prev["component_url"].dropna())
            print(f"[*] resuming — {len(done_urls)} components already done, skipping them")
        except Exception:
            rows, done_urls = [], set()

    if not csv_path.exists() or not done_urls:
        with open(csv_path, "w", newline="", encoding="utf-8") as f:
            csv.DictWriter(f, fieldnames=columns, quoting=csv.QUOTE_ALL).writeheader()

    with sync_playwright() as pw:
        browser = pw.chromium.launch(headless=not args.headed)
        context = browser.new_context(permissions=["clipboard-read", "clipboard-write"])
        page = context.new_page()

        links = collect_component_links(page, args.limit)
        links = [u for u in links if u not in done_urls]  # skip already-done, no dupes
        print(f"[*] {len(links)} remaining to scrape")

        for i, url in enumerate(links, 1):
            print(f"[{i}/{len(links)}] {url}")
            try:
                data = scrape_component(page, url)
            except Exception as e:  # noqa: BLE001
                print(f"    ! failed: {e}")
                continue

            slug = slugify(url)
            thumb_path = download_thumbnail(data["thumbnail_url"], thumb_dir / slug)
            data["thumbnail_file"] = thumb_path
            ok = bool(data["copied_link"]) and not str(data["copied_link"]).startswith("ERROR")
            data["status"] = "Copied component [paste]" if ok else "copy failed"
            if not ok:
                print(f"    ! clipboard copy failed: {data['copied_link']!r}")
            rows.append(data)

            with open(csv_path, "a", newline="", encoding="utf-8") as f:
                csv.DictWriter(f, fieldnames=columns, quoting=csv.QUOTE_ALL).writerow(data)

            if i % 25 == 0 or i == len(links):
                pd.DataFrame(rows, columns=columns).to_excel(xlsx_path, index=False)

            time.sleep(0.3)

        browser.close()

    pd.DataFrame(rows, columns=columns).to_excel(xlsx_path, index=False)

    print(f"\n[done] {len(rows)} components saved")
    print(f"  CSV : {csv_path}")
    print(f"  XLSX: {xlsx_path}")
    print(f"  Thumbnails: {thumb_dir}")


if __name__ == "__main__":
    main()
