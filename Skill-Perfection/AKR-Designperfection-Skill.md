---
name: akr-inspo-design
version: 1.1.0
last_updated: 2026-07-04
description: "Pulls UI reference components, animations, design-principle docs, and full-site designs from Ajay's personal repo (github.com/ajaykumarreddy-k/AKR-Inspo), layers in Leonxlnx/taste-skill's anti-slop design taste rules, scaffolds new projects via `bun create akr` with a picked top-300 reference design + font pairing, implements chosen components directly in the user's project, and runs a full SEO/AEO/GEO discoverability audit+fix ONLY when explicitly asked. Before touching any code, requires scanning the full project and, if requirements are unclear, asking for a PRD/requirements before implementing. After any implementation, writes/updates `akr-design.md` in the project root explaining exactly what changed and why. Trigger ONLY for: UI implementation requests, component generation, site/page redesign, animation requests, template scaffolding (`bun create akr`), or explicit SEO/AEO/GEO audit requests. Do NOT trigger for: general design discussion, feedback on existing UI, color-palette questions, or plain frontend debugging with no build/redesign ask."
---

# AKR-Inspo Design Skill

Adapts proven UI patterns, design systems, and implementation references from AKR-Inspo (and React Bits for animated React components) into production-ready components matched to the user's stack, brand, and requirements. Live preview: https://akr-inspo.vercel.app/

**Trigger when:** UI implementation, component generation, site/page redesign, animation requests, template scaffolding (`bun create akr`), or explicit SEO/AEO/GEO audit requests.
**Do not trigger for:** general design discussion, feedback-only requests, color-palette questions, or plain frontend debugging with no build/redesign ask.

**Reference priority** (when sources conflict, higher wins):
1. Existing project codebase
2. Existing brand/design system
3. AKR-Inspo
4. React Bits
5. Design principles (`Design md files/awesome-design-md/design-md`, taste-skill rules)
6. Original implementation (nothing fits — build fresh)

## Step 0 — Get full context first (mandatory, do not skip)
Never touch the repo, scaffold a project, or write SEO files before this.

1. **Scan the project structure safely (max depth 3).** Read only core config files (`package.json`, `tailwind.config.ts`, `globals.css`, etc.) and the specific files tied to the requested route/component. Do not ingest the entire file tree — that causes context collapse and slows everything down for no benefit.
2. **Check for a PRD/requirements doc** (`PRD.md`, `README.md`, `requirements.md`, `design.md`, `docs/`). Read it fully if present.
3. **If none exists AND the ask is non-trivial** (new project, redesign, multi-component, brand/UX/SEO implications) — stop and ask: project purpose + audience, existing brand colors/fonts, exact component(s) wanted, must-keep elements, and (if SEO mentioned) production domain.
4. **Skip asking only when unambiguous** — exact folder/component named, design system already obvious, single scoped component. Even then state assumptions inline.
5. Only proceed once context is solid.
6. **Brand extraction** (alongside the scan, not separately): pull primary color, accent color, typography, product category, target audience, and existing design language if any exists. An existing brand always wins over an imported reference — use references to fill gaps, not override what's already there.

Hard gate: no repo fetch, no scaffold, no SEO files while requirements are still ambiguous.

## Step 1 — New project bootstrap (`bun create akr`)
Output is a base template only — not a finished product. Keep it minimal:
1. Scaffold a runnable base template with placeholder/test data and content (dummy copy, sample images/text) filled into a working default layout. No real content, no extra features beyond the layout shell.
2. Pick ONE reference design from `assets/images` (top-300-sites moodboard) matching the project category and Step 0 brief. State which one and why, one line. (Only read image metadata/filenames for reference — do not download heavy image assets into the base template.)
3. Pick ONE font pairing from `assets/Fonts` matching that design's tone.
4. Apply design + font to the base layout only — this is a starting point for the user to build on, not the final implementation.

**AKR package awareness:** when scaffolding, prefer components/tokens/primitives already present in the template over pulling new ones. Reuse existing design tokens, animation primitives, and layout primitives before fetching anything from AKR-Inspo or React Bits. Don't duplicate functionality the scaffold already provides.

## Step 2 — Fetch design taste rules (Leonxlnx/taste-skill) + AKR Identity Layer
Layer these rules on top of anything pulled from AKR-Inspo — they govern *how* components are adapted, not what's fetched:
- Infer page kind + audience + vibe from the brief before writing any code; state it in one line ("Reading this as: <page kind> for <audience>, <vibe> language, leaning toward <aesthetic family>").
- Dual-mode by default: open every page in light and dark, keep contrast/hierarchy parity between both.
- No pure `#000000` / `#ffffff` — use off-black/off-white for depth.
- No neon glows or generic AI-slop signatures unless explicitly requested.
- WCAG AA minimum on body text.

**AKR Identity Layer** — default aesthetic direction unless the brief or existing brand says otherwise:
- Apple-level spacing discipline, Google-Labs-style experimentation in interaction, brutalist restraint in ornamentation.
- Typography first, content before effects, motion only when it clarifies something (not decoration).
- Dark mode first when no existing brand dictates otherwise.

**Don't over-design.** Do not introduce unnecessary motion, excessive gradients, complex 3D effects, glassmorphism, or bento-grid layouts unless the chosen reference or the user's request actually calls for them. Defaulting to these because they look impressive is the exact "AI portfolio syndrome" this skill exists to avoid.

If the user wants the full taste-skill rule set, tell them it's installable directly: `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"`. Otherwise apply the summarized rules above inline — don't fetch the whole repo for a handful of rules already captured here.

## Step 3 — Browse AKR-Inspo, don't clone it
Never `git clone` the whole repo (`dist/`, gradients, fonts, full site copies make it heavy). Browse only the needed subtree via the GitHub Contents API — this is the fast path, keep it that way.

Use your native HTTP tool or `curl` to fetch:
```
https://api.github.com/repos/ajaykumarreddy-k/AKR-Inspo/contents/Components-maintiles/Hero-Sections
```
**Crucial:** if `$GITHUB_TOKEN` is available in your environment, pass it in the request headers (`Authorization: Bearer $GITHUB_TOKEN`) to bypass the 60 req/hr unauthenticated limit.

Returns `name`, `type` (`file`/`dir`), `download_url`. Drill into `dir` entries by re-calling with the subpath. Fetch matched files directly from their `download_url`.

Speed rules: never list the whole tree recursively, never re-list a folder already listed this session, fetch only files you're actually going to use (skim filenames first, don't download-then-decide). Stay well under rate limits by being targeted.

**If GitHub API access is unavailable** (no internet, blocked network, rate-limited out):
1. Check for a local AKR-Inspo copy already on disk (previously cloned/cached) and use that.
2. If none, ask the user for the specific component path or to paste the code directly.
3. If neither is possible, fall back to building from the design-taste rules in Step 2 and the design-md principles in Step 4 alone — don't stall the task waiting on network access.

**Secondary source — React Bits (React projects only):** for animated text/background/UI components in a React stack, `reactbits.dev` (repo: `DavidHDev/react-bits`) is a well-maintained fit — use it when AKR-Inspo doesn't have a matching component, or when the user asks for a React-specific animation. It ships 4 variants (JS-CSS, JS-TW, TS-CSS, TS-TW) — pick the variant matching the project's actual JS/TS + styling setup rather than converting after the fact. Browse the same way: Contents API on the repo, drill into `src/content` (JS-CSS), `src/tailwind` (JS-TW), `src/ts-default` (TS-CSS), or `src/ts-tailwind` (TS-TW) depending on variant needed. Do not use this for non-React projects.

## Step 4 — Map request → folder
| User wants | Folder |
|---|---|
| Buttons, cards, pricing, testimonials, nav, footer, CTA | `Components-maintiles/<Category>` |
| Framer-motion/GSAP micro-interactions | `Frammer&21st dev Components/<Effect Name>` |
| Full landing page / site template | `Entire site/<Site Name>` |
| Scroll-triggered animation | `Scroll animations/src` |
| 3D text / WebGL text effect | `3d text animations/good ones` |
| GSAP components (pick a few that fit, don't dump the folder) | `opencode GSAP/` and its subfolders |
| Design principle references (spacing, color theory, layout systems, etc.) | `Design md files/awesome-design-md/design-md` — read only the specific `.md` matching the current problem (e.g. `spacing.md` when spacing is the issue), not the whole set |
| Top-300-sites design reference | `assets/images` |
| Fonts | `assets/Fonts` |
| Gradients | `Resource-Boy-Retro-Photoshop-Gradients/` |
| React-specific animated component, no AKR-Inspo match | `DavidHDev/react-bits` (see Step 3 secondary source) — React projects only |

Unsure which folder fits → `ls` the closest 2-3 candidates, skim filenames, pick.

**When multiple candidates fit** (more than one component/design/font could work), score them instead of picking by gut:
- Visual fit to the brief/reference — 40%
- Technical fit to the project's stack — 30%
- Brand fit (matches extracted brand from Step 0) — 20%
- Accessibility fit (contrast, semantic structure) — 10%
Pick the highest score; state the pick and runner-up in one line so the choice is auditable, not silent.

## Step 5 — Read before applying
`view`/`cat` the matched component fully (code + any co-located `.md`) before touching the user's project. Note dependencies (framer-motion/gsap/three.js), tailwind classes, referenced assets.

## Step 6 — State implementation confidence
Before writing any code, state confidence level and act accordingly:
- **High** — matching component found, stack supported, brand clear → proceed directly.
- **Medium** — only a similar (not exact) component found, or minor adaptation required → proceed, but flag the adaptation being made in one line.
- **Low** — no matching reference, a major redesign is implied, or requirements are still missing → stop and ask before writing code, don't guess your way through a low-confidence build.

## Step 7 — Implement directly in the user's project
1. Detect actual stack from `package.json`/existing components — framework, styling system, JS/TS.
2. Rewrite fetched code to match that stack's conventions.
3. Install missing deps via the project's package manager — but apply dependency guardrails first: never add a new dependency if a native browser API already solves it, an existing project dependency already covers it, or the needed utility is under ~50 lines of code to write directly. Prefer fewer dependencies over convenience installs.
4. Copy needed assets into the project's own asset folder (don't reference the repo path).
5. Wire into the actual page/route being worked on.
6. Keep the original's visual polish (spacing, easing, color treatment) but reskin to the user's brand if one exists, applying Step 2's taste rules throughout.
7. **Performance budget** — avoid stacking multiple animation libraries in one project, avoid Three.js/WebGL for purely decorative effects, avoid large video backgrounds, keep font payload under 100KB. Target Lighthouse 90+, CLS < 0.1, LCP < 2.5s. Don't let AKR-Inspo's flashier references (GSAP/Three.js/WebGL pieces) turn an ordinary page into a GPU benchmark — use them only when the brief actually calls for that level of spectacle.

## Step 8 — SEO / AEO / GEO Compliance (only when explicitly requested — never auto-triggers)
Run this step ONLY if the user asks for one of: SEO, AEO, GEO, AI search optimization, LLM/ChatGPT/Claude/Perplexity optimization, discoverability, better indexing, search ranking, "make it findable." Asking for AEO does not imply GEO or SEO or vice versa — if the user's intent spans more than one, confirm which before doing extra work; don't assume one term auto-triggers the others. Never run as part of ordinary UI work. If domain/production URL is unknown, ask first.

Adapt to whatever framework Step 0 detected: Next.js, React/Vite, Astro, Nuxt, Vue, SvelteKit, Go templates, static HTML. If a requirement can't be implemented due to framework limits, say why and hand over the raw file/code instead of skipping silently.

**Findable** — confirm HTTPS; generate/update `/robots.txt` allowing GPTBot, ClaudeBot, PerplexityBot, Google-Extended plus `*`:
```
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: *
Allow: /
Sitemap: https://<domain>/sitemap.xml
```
Generate/update `/sitemap.xml` from real routes only (don't invent pages). Add canonical `<link>` to every page head.

**Quotable** — meta description per page (50–160 chars, from real content); ≥100 words real body text per page (flag thin pages, don't pad with fluff); freshness signals (JSON-LD dates, meta tags, sitemap `lastmod`); FAQ sections + `FAQPage` schema only where content genuinely has Q&A shape.

**Understandable** — one descriptive `<h1>` per page, clean heading hierarchy; OG tags (`og:title/description/image/url`); JSON-LD (`Organization`, `WebSite`, `WebPage`, `FAQPage`, `Article`, `BreadcrumbList` — whichever apply); alt text on ≥50% of images, written descriptively.

**Trustworthy** — ≥3 contextual internal body links (nav/footer don't count); ≥2 outbound citation links where relevant; generate `/llms.txt`:
```
# Site Information
Name: <Site Name>
Description: <Site Description>
Primary Topics:
- Topic 1
- Topic 2
Important URLs:
- /
- /about
- /contact
```

**Validation** — report plainly, don't rubber-stamp:
```
✓ robots.txt exists, AI crawlers allowed
✓ sitemap.xml matches real routes
✓ llms.txt exists
✓ canonical URLs on every page
✓ JSON-LD valid
✓ Open Graph tags present
✓ heading hierarchy valid
✓ alt text coverage ≥ 50%
✓ ≥3 internal + ≥2 external links per page
✓ meta description 50–160 chars, ≥100 words real content
```

## Step 9 — Write akr-design.md and confirm
Before declaring done:
1. Re-check output against Step 0's gathered requirements — not just "does it look cool."
2. Create or update `akr-design.md` in the project's root (main tree). For every component pulled from an external source, record its **provenance**: source repo, source path, adaptation summary (what changed from the original), and dependencies added. Also document: confidence level from Step 6, which taste-skill rules were applied, and — if Step 8 ran — the SEO validation results. This file exists so the user and any AI reading the project later can cross-verify what happened and why, without re-deriving it from git history.
3. Report the same summary briefly in chat, pointing to `akr-design.md` for detail. Don't over-explain in chat — the file holds the detail.

## Notes
- AKR-Inspo is a personal moodboard, not a package — treat contents as reference to adapt, never import as-is.
- If nothing in the repo fits, say so and build original UI instead of forcing a mismatch.
- If repo structure changes, refresh the map by listing the root: `curl -s "https://api.github.com/repos/ajaykumarreddy-k/AKR-Inspo/contents/"`
