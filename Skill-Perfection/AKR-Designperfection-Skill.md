---
name: akr-inspo-design
version: 3.0.0
last_updated: 2026-07-05
description: "Pulls UI reference components, animations, design-principle docs, and full-site designs from Ajay's personal repo (github.com/ajaykumarreddy-k/AKR-Inspo), layers in Leonxlnx/taste-skill's anti-slop design taste rules plus an AKR creative-direction layer (concept extraction, world logic/section/feature-translation engine, typography intelligence with Fontjoy, anti-SaaS detection, signature components), scaffolds new projects via `bun create akr` with a picked top-300 reference design + font pairing, implements chosen components directly in the user's project, and runs a full SEO/AEO/GEO discoverability audit+fix ONLY when explicitly asked. Before touching any code, requires a scoped project scan and, if requirements are unclear, asking for a PRD/requirements before implementing. Requires a concept/world/typography pass before any layout or component is chosen — layout is never the starting point. After any implementation, writes/updates `akr-design.md` in the project root explaining exactly what changed and why. Trigger ONLY for: UI implementation requests, component generation, site/page redesign, animation requests, template scaffolding (`bun create akr`), or explicit SEO/AEO/GEO audit requests. Do NOT trigger for: general design discussion, feedback on existing UI, color-palette questions, or plain frontend debugging with no build/redesign ask."
---

# AKR-Inspo Design Skill

**AKR Rule #0: Memorability is more important than beauty.** A beautiful generic design fails. A memorable design succeeds.

**AKR Rule #1: Do not design websites. Design worlds.** Every project must establish a recognizable visual universe — product meaning, metaphor, and narrative — before any screen or layout gets built.

**AKR Rule #2: Creativity must increase usefulness.** Every signature component, motion system, illustration, interaction, and storytelling mechanism must improve at least one of: understanding, discovery, navigation, trust, decision-making, or conversion. If it only looks cool, remove it.

**AKR Rule #3: Every design decision must answer "why can this only exist in this product?"** If the answer could apply equally to a competitor, the idea isn't specific enough — go back to Step 2.5.

Adapts proven UI patterns, design systems, and implementation references from AKR-Inspo (and React Bits for animated React components) into production-ready, distinctive components matched to the user's stack, brand, and requirements. Live preview: https://akr-inspo.vercel.app/

**Trigger when:** UI implementation, component generation, site/page redesign, animation requests, template scaffolding (`bun create akr`), or explicit SEO/AEO/GEO audit requests.
**Do not trigger for:** general design discussion, feedback-only requests, color-palette questions, or plain frontend debugging with no build/redesign ask.

**Reference priority** (when sources conflict, higher wins):
1. Existing project codebase
2. Existing brand/design system
3. AKR-Inspo
4. React Bits
5. Design principles (`Design md files/awesome-design-md/design-md`, taste-skill rules)
6. Original implementation (nothing fits — build fresh)

**Reference contamination guard:** references may inspire, they may not define. Seeing AKR-Inspo, React Bits, and the top-300-sites moodboard side by side risks blending them into another generic modern SaaS look. At least 60% of the final experience must originate from the Step 2.5 Concept Extraction output (metaphor, narrative, signature object/interaction) — references fill in execution details around that concept, they don't replace it.

## Step 0 — Get full context first (mandatory, do not skip)
Never touch the repo, scaffold a project, or write SEO files before this.

1. **Scan the project structure safely (max depth 3).** Read only core config files (`package.json`, `tailwind.config.ts`, `globals.css`, etc.) and the specific files tied to the requested route/component. Do not ingest the entire file tree — that causes context collapse and slows everything down for no benefit.
2. **Check for a PRD/requirements doc** (`PRD.md`, `README.md`, `requirements.md`, `design.md`, `docs/`). Read it fully if present.
3. **Answer this checklist explicitly, out loud, before writing any code or fetching anything:**
   - Is there a PRD/requirements doc, OR did the user's own message already state: what this is for, who it's for, and which exact component/page is wanted? (yes/no)
   - Is there an existing, inspectable brand/design system in the project (colors, fonts, tokens already defined)? (yes/no)
   - Is the request a single, narrowly-named component (e.g. "add the pricing card from Components-maintiles"), not a redesign or new project? (yes/no)

   **If all three are "no," or the ask is a new project/redesign/multi-component build with none of the above present: STOP HERE.** Do not scaffold, fetch, or write code in this turn. Output only the clarifying questions below and end your turn — wait for the user's reply before continuing:
   - What is this project/page for, and who's the user?
   - Any existing brand colors, fonts, or design language to match?
   - Which exact component(s)/section(s) do you want?
   - Any must-avoid patterns or must-keep existing elements?
   - (If SEO/AEO/GEO was mentioned) What's the production domain?

   **Proceed without asking only if at least one checklist item is a genuine "yes"** — and even then, state which one and state your assumptions for the rest inline before implementing.
4. Only proceed to Step 1 once this gate is cleared.
5. **Brand extraction** (alongside the scan, not separately): pull primary color, accent color, typography, product category, target audience, and existing design language if any exists. An existing brand always wins over an imported reference — use references to fill gaps, not override what's already there.

Hard gate: no repo fetch, no scaffold, no SEO files while the checklist in point 3 above isn't cleared. This is a mechanical stop, not a suggestion — "the request seemed clear enough" is not a valid reason to skip it.

## Step 1 — New project bootstrap (`bun create akr`)
Output is a base template only — not a finished product. Keep it minimal:
1. Scaffold a runnable base template with placeholder/test data and content (dummy copy, sample images/text) filled into a working default layout. No real content, no extra features beyond the layout shell.
2. Pick ONE reference design from `assets/images` (top-300-sites moodboard) matching the project category and Step 0 brief. State which one and why, one line. (Only read image metadata/filenames for reference — do not download heavy image assets into the base template.)
3. Pick font pairing per the Typography Intelligence System below (not a flat pick from `assets/Fonts` alone — that library is one candidate source among several).
4. Apply design + font to the base layout only — this is a starting point for the user to build on, not the final implementation.

**AKR package awareness:** when scaffolding, prefer components/tokens/primitives already present in the template over pulling new ones. Reuse existing design tokens, animation primitives, and layout primitives before fetching anything from AKR-Inspo or React Bits. Don't duplicate functionality the scaffold already provides.

## AKR Core Philosophy (highest priority — governs every step below)
**Never start from layout. Always start from meaning.**
```
PRD → Audience → Brand Personality → Core Metaphor → Narrative →
Visual Language → Signature Components → Layout → Implementation
```
Layout is the *result* of this chain, never the starting point. If a design could be mistaken for a generic SaaS site after removing its logo, it has failed — see the AKR Quality Gate before Step 9.

## Step 2 — Fetch design taste rules (Leonxlnx/taste-skill) + AKR Identity Layer
Layer these rules on top of anything pulled from AKR-Inspo or React Bits — they govern *how* components are adapted, not what's fetched:
- Infer page kind + audience + vibe from the brief before writing any code; state it in one line ("Reading this as: <page kind> for <audience>, <vibe> language, leaning toward <aesthetic family>").
- Dual-mode by default: open every page in light and dark, keep contrast/hierarchy parity between both.
- No pure `#000000` / `#ffffff` — use off-black/off-white for depth.
- No neon glows or generic AI-slop signatures unless explicitly requested.
- WCAG AA minimum on body text.

**AKR Identity Layer** — default aesthetic direction unless the brief or existing brand says otherwise:
- Apple-level spacing discipline, Google-Labs-style experimentation in interaction, brutalist restraint in ornamentation.
- Typography first, content before effects, motion only when it clarifies something (not decoration).
- Dark mode first when no existing brand dictates otherwise.

**AKR Visual DNA** — default creative principles:
- Controlled asymmetry, intentional imperfection, editorial typography, storytelling layouts, object-based interfaces, meaningful motion, layered depth, non-linear section transitions, illustration before decoration, function before effects.
- Avoid: empty glassmorphism, random gradients, decorative motion with no purpose, AI-generated visual clutter.

**Don't over-design.** Do not introduce unnecessary motion, excessive gradients, complex 3D effects, glassmorphism, or bento-grid layouts unless the chosen reference or the user's request actually calls for them. Defaulting to these because they look impressive is the exact "AI portfolio syndrome" this skill exists to avoid.

**Anti-SaaS Detection** — after drafting a direction, check it against generic-SaaS fail conditions: a hero that's just headline+subtitle+CTA, a plain 3-card feature grid, a generic testimonial section, a standard SaaS footer, or visual similarity to Vercel/Stripe/Supabase/Clerk/Linear/Resend exceeding roughly 60%. If it trips these, stop and return to Step 2.6's creative exploration rather than shipping a lookalike — the failure mode is a design with no identity.

If the user wants the full taste-skill rule set, tell them it's installable directly: `npx skills add https://github.com/Leonxlnx/taste-skill --skill "design-taste-frontend"`. Otherwise apply the summarized rules above inline — don't fetch the whole repo for a handful of rules already captured here.

## Step 2.5 — Concept Extraction Engine (mandatory)
Before reading AKR-Inspo, React Bits, or any reference/component, extract and state explicitly:
```
Reading this project as:
Product: <type>
Audience: <audience>
Brand Personality: <personality>
Metaphor: <core metaphor>
Narrative: <how the product's story plays out>
Signature Object: <a recurring visual/interaction motif>
Signature Interaction: <one interaction unique to this product>
Visual Language: <typography/color/motion direction>
```
Example — a package-manager dev tool ("NodeForge"): metaphor = digital forge; narrative = developers forge software from modules; signature object = package ingots; signature interaction = dependencies visually forging together.
No implementation may begin before this is written out. Skip only when Step 0 already established a genuine single-component, brand-already-defined edit (per the Step 0 checklist) — in that case state the existing concept briefly instead of re-deriving it.

## AKR World Engine (mandatory for full builds — determines content/structure before typography or creative direction)
Answers "what belongs in this world and what doesn't." Runs immediately after Concept Extraction, before Typography or Creative Exploration. Skip for single scoped component edits (per Step 0's checklist) — apply only to full projects/redesigns. This stage decides content and structure only — it adds no scoring, audits, or SEO of its own; those stay in the AKR Quality Gate and Step 8.

**Pipeline:** World Audit → World Logic Engine → Section Intelligence Engine → World Expansion → Feature Translation Engine → Missing Signature Opportunity Engine → Experience Expansion → World Density Test. Run in this order — don't jump to sections before the world's own logic is defined, or sections will drift from the metaphor.

1. **World Audit** — check the Step 2.5 concept is concrete enough to build from: clear metaphor, a narrative arc, at least one signature object. If any is missing or vague, go back and sharpen Concept Extraction first.
2. **World Logic Engine** — define the world's internal rules before inventing content: World Rules (what is/isn't possible in this metaphor), World Vocabulary (words this world uses instead of generic UI/business terms), World Objects (recurring nouns, e.g. NodeForge: raw material, blueprint, forge, artifact), World Systems (how objects transform/interact), World Relationships (how objects/systems relate to the user). Anything added later that breaks these rules — a page, component, section — gets redesigned or rejected. A "Corporate Team Section" breaks NodeForge's forge metaphor even though "most sites have one" — it doesn't belong.
3. **Section Intelligence Engine** — never default to a fixed site structure (hero/features/testimonials/pricing/FAQ/footer just because it's typical). Determine sections from product type, audience, trust requirements, conversion requirements, the world's narrative, and industry expectations. Output three lists with reasons: **Required** (why each is required for this specific product/audience), **Optional** (worth considering, tradeoff stated), **Unnecessary** (explicitly excluded, why). For every section ask "why does this exist?" — if the honest answer is "most websites have it," delete it.
4. **World Expansion** — extend the World Logic Engine's vocabulary/objects/systems to cover every required section, so each is expressible in world terms before feature translation.
5. **Feature Translation Engine** — every generic feature must be translated into the world's vocabulary before it's built: Search → Scanner, Dashboard → Control Center, Comparison → Analysis Bench, Notifications → Signal Alerts, Collections → Archives (illustrative — translate per this world's own vocabulary). A feature left in generic terms hasn't been integrated into the world yet — translate it or reconsider whether it belongs.
6. **Missing Signature Opportunity Engine** — originality comes from what the world implies but doesn't yet have, not from the requested feature list. Ask: what unique experiences are implied by this world's metaphor/vocabulary but don't exist yet? Generate candidate missing components, interactions, systems, experiences; prioritize originality. Example — a "Cosmos Lab" world with Planet Explorer and Mission Control implies but is missing: an Observatory, a Research Archive, Deep Space Missions, Discovery Logs.
7. **Experience Expansion** — fold the best 1-3 highest-originality missing opportunities into the actual build plan, don't just list and move on. This is what makes the world feel larger than its current implementation.
8. **World Density Test** — does the world feel thin (metaphor applied only to the hero) or dense (shows up in navigation, empty states, error messages, micro-copy, loading states)? Thin is a fail — pick 2-3 more touchpoints from Experience Expansion and apply the world there.

**World-engine hard rules:**
- Every page must contribute to the world; a page that doesn't reinforce the metaphor/narrative doesn't belong.
- Every feature must have a world equivalent (per Feature Translation) — none ships in generic terms.
- A user should be able to describe the world after using the product, not just list its features.
- The world should feel larger than the current implementation (per Experience Expansion).
- The best ideas are often implied rather than requested — the Missing Signature Opportunity Engine exists to find them, not just fulfill the literal brief.

Hand the finalized section list (world-translated features + expanded signature opportunities) to Typography Intelligence and Step 2.6 next.

## Typography Intelligence System (after Concept Extraction and World Engine, before Creative Exploration)
Font selection is not "pick a nice pairing" — it runs through the same rigor as everything else:

1. **Strategy** — from the Step 2.5 concept, extract brand personality, emotional tone, product category, trust level, energy level, audience expectations. Decide the roles needed: Display, Body, Data (numbers/tables), Utility (nav/buttons/labels) — and why each role exists for this product.
2. **Pairing candidates** — generate 2-3 candidates from: existing brand fonts (if any, highest priority), the internal `assets/Fonts` library, Fontjoy (jackyeah's github.com/Jack000/fontjoy, or its live pairing tool) as a pairing assistant, or a custom pairing. Never blindly accept a Fontjoy-generated pairing — mathematical compatibility isn't the same as a strong pairing; validate every candidate against brand personality, narrative, visual language, audience, and accessibility before accepting it.
3. **Score candidates** — Brand fit 40%, Readability 25%, Originality 15%, Accessibility 10%, Technical compatibility 10%. Select the highest score, state the pick and runner-up.
4. **Typography ownership test** — mentally strip logo, colors, imagery, and motion. Does the product still feel distinctive from typography alone? If not, the pairing is too generic — go back to step 2 (candidates).
5. **Hierarchy audit** — verify each level has a clear, distinct purpose: Display, Heading, Subheading, Body, Caption, Data, Code, Navigation, Buttons. Avoid unnecessary extra weights/sizes that don't serve a role.
6. **Consistency + memorability** — every section must use the same type system (a section that looks like a different product's typography gets redesigned); and after 24 hours, would a user remember a distinctive typographic treatment, or only colors/graphics? Type should pull its own weight in the identity, not ride along.
7. **Prefer variable fonts** when available — smaller payload, better performance, flexible hierarchy, more responsive. Only ship multiple static font files when the project genuinely needs weights/styles a variable font can't cover.

Record the result in `akr-design.md` (Step 9) as a **Typography System** block: Display / Heading / Body / Code / Fallback fonts, pairing rationale, and the score from step 3 above.

## Step 2.6 — Creative Exploration Engine
Before selecting any reference, generate three directions and evaluate each on originality, UX, memorability, brand alignment, and technical feasibility:
- **Direction A — Safe:** closest to conventional patterns for this category.
- **Direction B — Creative:** distinct visual language, still low-risk to implement.
- **Direction C — Experimental:** the boldest interpretation of the Step 2.5 concept.
Select the winner — do not default to Direction A. Prioritize memorability and brand recognition over safety, unless Step 0's brief explicitly calls for conventional/safe (e.g. enterprise B2B constraints).

## Design Director Review (before implementation)
Attack the chosen direction once before building anything:
- What feels generic?
- What feels expected?
- What would a top creative agency improve?
- What would make this memorable after 6 months, not just on first look?
Refine the direction once based on this — don't ship the first draft unchallenged. Skip for single scoped component edits.

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

**Secondary source — React Bits (React projects only, actively used, not just fallback):** for animated text/background/UI components in a React stack, `reactbits.dev` (repo: `DavidHDev/react-bits`) is a well-maintained fit. On any React implementation task, pick a few relevant React Bits components alongside AKR-Inspo ones (e.g. AKR-Inspo for layout/hero/section structure, React Bits for text/scroll/hover micro-animations) rather than treating it as only a fallback when AKR-Inspo has nothing — the two are meant to be combined. It ships 4 variants (JS-CSS, JS-TW, TS-CSS, TS-TW) — pick the variant matching the project's actual JS/TS + styling setup rather than converting after the fact. Browse the same way: Contents API on the repo, drill into `src/content` (JS-CSS), `src/tailwind` (JS-TW), `src/ts-default` (TS-CSS), or `src/ts-tailwind` (TS-TW) depending on variant needed. Do not use this for non-React projects.

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
| React-specific animation/micro-interaction (text, hover, scroll, background) | `DavidHDev/react-bits` (see Step 3 secondary source) — combine with AKR-Inspo on React projects, not fallback-only |

Unsure which folder fits → `ls` the closest 2-3 candidates, skim filenames, pick.

**When multiple candidates fit** (more than one component/design/font could work), score them instead of picking by gut:
- Originality (does it avoid the Anti-SaaS fail conditions and serve the Step 2.5 concept) — 30%
- Visual fit to the brief/reference — 25%
- Brand fit (matches extracted brand from Step 0) — 20%
- Technical fit to the project's stack — 15%
- Accessibility fit (contrast, semantic structure) — 10%
Pick the highest score; state the pick and runner-up in one line so the choice is auditable, not silent. Originality is weighted highest deliberately — it's what stops the skill from converging on the same safe pick every time.

## Step 5 — Read before applying
`view`/`cat` the matched component fully (code + any co-located `.md`) before touching the user's project. Note dependencies (framer-motion/gsap/three.js), tailwind classes, referenced assets.

## Step 6 — State implementation confidence
Before writing any code, state confidence level and act accordingly:
- **High** — matching component found, stack supported, brand clear → proceed directly.
- **Medium** — only a similar (not exact) component found, or minor adaptation required → proceed, but flag the adaptation being made in one line.
- **Low** — no matching reference, a major redesign is implied, or requirements are still missing → stop and ask before writing code, don't guess your way through a low-confidence build.

## Step 7 — Implement directly in the user's project
On React projects, this step must draw on all three together — AKR-Inspo (layout/structure/full-section references), React Bits (a few picked micro-animation/text/hover components), and the Step 2 taste rules (governing how everything is styled/toned) — not any one in isolation.
1. Detect actual stack from `package.json`/existing components — framework, styling system, JS/TS.
2. Rewrite fetched code (from AKR-Inspo and/or React Bits) to match that stack's conventions.
3. Install missing deps via the project's package manager — but apply dependency guardrails first: never add a new dependency if a native browser API already solves it, an existing project dependency already covers it, or the needed utility is under ~50 lines of code to write directly. Prefer fewer dependencies over convenience installs.
4. Copy needed assets into the project's own asset folder (don't reference the repo path).
5. Wire into the actual page/route being worked on.
6. Keep the original's visual polish (spacing, easing, color treatment) but reskin to the user's brand if one exists, applying Step 2's taste rules throughout.
7. **Performance budget** — avoid stacking multiple animation libraries in one project, avoid Three.js/WebGL for purely decorative effects, avoid large video backgrounds, keep font payload under 100KB. Target Lighthouse 90+, CLS < 0.1, LCP < 2.5s. Don't let AKR-Inspo's flashier references (GSAP/Three.js/WebGL pieces) or React Bits animations turn an ordinary page into a GPU benchmark — use them only when the brief actually calls for that level of spectacle.
8. **Signature design requirement** — a full project/redesign build (not a single scoped component edit) must land at least 3 signature components, 1 signature motion system, 1 signature illustration system, 1 signature interaction, and 1 signature storytelling mechanism, all derived from the Step 2.5 metaphor/narrative — not generic UI dressed up. Example (dev tool "NodeForge"): dependency galaxy, package DNA viewer, install-flow visualizer as components; storytelling mechanism = forge → molten package → dependency chain → built artifact, told through the page's scroll sequence, not just displayed as static content. Example (music product): soundwave navigation, dynamic playlist clusters, audio-reactive hero. Missing these on a full build is a fail — go back to Step 2.6.
   **Signature component rule:** the homepage should be remembered *through* its signature components. Test each one — if removing it wouldn't noticeably weaken the experience, it was never a real signature component, just decoration wearing the label. Replace it with something that actually earns the name.
9. **Signature object persistence** — the Step 2.5 signature object must appear throughout the experience (hero, nav, cards, interactions, transitions, footer), evolving in form but never disappearing. Example (NodeForge's "package ingot"): hero shows the ingot forming, trending section shows ingots, comparison view shows "refined ingots," dashboard shows "forged artifacts." A signature object used once in the hero and forgotten everywhere else doesn't count.
10. **Visual consistency check** — every section must visibly belong to the same universe as the hero: same typography, shape language, motion language, component language, and storytelling language. If a section (the footer is the most common offender) reads like it was pulled from a different, generic website, redesign that section before moving on — don't let the hero carry all the identity alone.

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

## AKR Quality Gate (before Step 9, full builds only — skip for single scoped component edits)
One consolidated gate, not a stack of separate audits. Run these checks in order, then score:

1. **Design Compression Test** — summarize the product's design identity in one sentence (e.g. Apple: "technology disappears"; Stripe: "financial infrastructure"; NodeForge: "software is forged"). If you can't, the identity is weak — back to Step 2.6. If you can, verify the built site actually reinforces that sentence.
2. **Section Uniqueness Test** — for every section, ask: could this be copied into another SaaS site unmodified? Any "yes" is a fail on that section — redesign it.
3. **Emotional Memory Test** — imagine the user 24 hours after leaving. If what they'd remember is hero text, a gradient, or a generic animation → fail. If it's the signature interaction, signature component, visual metaphor, or storytelling sequence → pass.
4. **First Impression Test** — 3 seconds on the homepage: can they tell what this is, why it exists, and what makes it different? If not, the hero/narrative needs another pass.
5. **Competitive Differentiation Test** — compare against the top 3 competitors in this category. Ask: what can users do here that they can't do there? (NodeForge vs npm/pnpm/yarn — if the design can't visually communicate the difference, it fails.) If the answer is unclear, the design is insufficiently differentiated — back to Step 2.6.
6. **Interaction Ownership Test** — identify the single most memorable interaction. Ask: could another product in this space claim this same interaction? A generic hover card — yes, anyone could claim it, improve it. A dependency galaxy expanding into alternatives — no, that belongs to this product specifically, pass.
7. **Brand recognition without logo** — if the logo disappeared, is the product still recognizable from layout, motion, and signature components alone?

**Final AKR Score** — score each /10, average:
```
Originality
Usefulness (per Rule #2 — does the creativity actually help, or just look cool)
Storytelling
Worldbuilding (could this exist in its own visual universe?)
Consistency (per the Step 7 visual consistency check)
Memorability
Recognition Without Logo
Differentiation (per the Competitive Differentiation Test)
```
- **< 8.5** → fail, return to Step 2.6.
- **8.5–8.9** → good.
- **9.0–9.4** → AKR quality.
- **9.5+** → AKR signature quality.
State the average and, if below 9.0, the single biggest reason why.

## Step 9 — Write akr-design.md and confirm
Before declaring done:
1. Re-check output against Step 0's gathered requirements and, for full builds, the AKR Quality Gate score — not just "does it look cool."
2. Create or update `akr-design.md` in the project's root (main tree). For every component pulled from an external source, record its **provenance**: source repo, source path, adaptation summary (what changed from the original), and dependencies added. Also document: the Step 2.5 concept summary, the World Engine's section list (required/optional/excluded, with reasons) and feature translations, the Typography System block, confidence level from Step 6, which taste-skill/AKR Visual DNA rules were applied, the AKR Score if run, and — if Step 8 ran — the SEO validation results. This file exists so the user and any AI reading the project later can cross-verify what happened and why, without re-deriving it from git history.
3. Report the same summary briefly in chat, pointing to `akr-design.md` for detail. Don't over-explain in chat — the file holds the detail.

## Notes
- AKR-Inspo is a personal moodboard, not a package — treat contents as reference to adapt, never import as-is.
- If nothing in the repo fits, say so and build original UI instead of forcing a mismatch.
- If repo structure changes, refresh the map by listing the root: `curl -s "https://api.github.com/repos/ajaykumarreddy-k/AKR-Inspo/contents/"`