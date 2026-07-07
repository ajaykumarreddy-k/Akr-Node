# Framer Free Components Scraper

## Setup
```
uv sync
uv run playwright install chromium
```

## Run
```
uv run python scraper.py
```
Flags: `--limit N` (test with fewer items), `--headed` (watch browser), `--out DIR` (default `output/`)

## Output (in `output/`)
- `components.csv`, `components.xlsx` — columns: name, category, component_url, copied_link, thumbnail_url, thumbnail_file, status
- `thumbnails/` — downloaded images

`status` shows `Copied component [paste]` when the clipboard copy succeeded.

## Notes
- Site structure can change; if "Copy Component" isn't found, inspect the page and update the selector in `scrape_component()`.
- Respect Framer's terms of use/rate limits — script pauses briefly between items.
