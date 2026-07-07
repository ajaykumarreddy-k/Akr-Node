---
name: akr-design-perfection
version: 8.1.0
last_updated: 2026-07-06
description: "AKR Design Perfection: concept-first world-building UI generation with a closed verify/iterate loop, bundling the akr-design reference library (tokens, anti-patterns, accessibility, components, mobile, graphic/print, asset scripts) as its first-line design resource. Pulls refs from the bundled akr-design/ library + AKR-Inspo repo + React Bits, applies taste-skill anti-slop rules, Color Hunt palettes, Fontjoy-assisted type pairing, and generates a reusable design token system. Concept→World→Typography→Palette→Tokens→Creative Exploration→Implement→Quality-Gate-Verify→Iterate→akr-design.md. Trigger: UI implementation, component gen, redesign, animation, scaffolding (bun create akr), explicit SEO/AEO/GEO. Do not trigger: design discussion, feedback-only, color-Q, plain debugging."
---

# AKR Design Perfection

This skill bundles the **`akr-design/`** library (design tokens, anti-pattern checklist,
accessibility, component/shadcn/mobile-responsive references, graphic/print guidance, and
icon/favicon scripts — see `akr-design/SKILL.md` for its own index) as the first-line resource
throughout the loop below. It is consulted before external fetches (AKR-Inspo, React Bits,
taste-skill, Fontjoy, Color Hunt) at every step that names it.

## Pre-Ship Hard Checklist (print filled-in, all ✓ required — any ✗ blocks shipping)
- [ ] Font pairing — Style Library entry (or validated custom) named, not a default/system font left in place.
- [ ] Palette — Color Hunt/brand-derived pick scored, not a leftover default/Tailwind-gray theme.
- [ ] Design Tokens — full token set (colors/spacing/radius/shadows/type/animation/grid) generated and actually consumed by components, no hardcoded raw values.
- [ ] AI-Slop Detector — zero hits (see Step 2 list).
- [ ] Uniqueness — metaphor/signature object confirmed different from any prior project in this session.
- [ ] Full section coverage — printed table (Section | Present-in-code+name | Forbidden-reason) for Nav/Header/Hero/Pricing/Comparison/Testimonials/Footer, verified against actual files, not just the plan.
- [ ] VERIFY score ≥8.5.
- [ ] `dev` boots clean, zero console errors.
- [ ] Common-error grep done (Step 7c) — no undefined `cn`/utility/icon/hook references, no unresolved `@/` aliases.
- [ ] Visual hierarchy is a real Primary Peak + Secondary Peak + Calm Zones (not flat equal weight); spacing rhythm varies; component states (default/hover/loading/active) defined; density stress-tested at 3/10/25 items; Design Debt Detector run (no repeated card/spacing/interaction/layout patterns).

## Uniqueness + Zero-Error Mandate (non-negotiable)
- **Never reuse a metaphor, signature object, or Direction-C pick from a prior project.** Each Step 2.5 must be derived fresh from *this* brief — if it resembles an earlier build, go back and sharpen it.
- **Ship only working code.** No missing imports, no broken links, no placeholder-in-final-output, no console errors. `dev` boots clean or it's not done.
- **VERIFY score <8.5 = not done, no exceptions.** Loop until it passes or explicitly report why it can't reach 8.5.
- **Beauty bar:** this isn't just error-free, it must be genuinely good-looking — someone landing on it cold should think "this is a one-of-a-kind, well-crafted site," not "this works." If the honest answer to "would a person screenshot this and share it" is no, it hasn't cleared the bar — go back to 2.6c, don't ship functional-but-flat.

## Loop Architecture (governs the whole skill)
```
DISCOVER (Step 0-2) → PLAN (2.5-2.6) → EXECUTE (3-7) → VERIFY (Quality Gate, independent pass) → ITERATE or DONE (9)
```
**VERIFY must be an independent re-read of the built output** — not a continuation of the same reasoning that built it. Re-open the finished sections fresh, score against the Quality Gate below, without reusing earlier self-praise. Fail (<8.5) → back to 2.6c with a stated new direction, not the same direction restated. Never ship on a first pass without running VERIFY.

## Core Rules (always apply)
- **R0** Memorability > beauty.
- **R1** Design worlds, not websites — metaphor/narrative before any screen.
- **R2** Creativity must increase usefulness (understanding/discovery/nav/trust/decision/conversion) or get cut.
- **R3** "Why only this product?" — competitor-claimable = not specific enough.
- **R4** Implementation bias — once valid, build; don't loop on ideation.
- **R5** Complexity budget — anything not earning its keep gets removed.

Chain: `PRD → Audience → Brand Personality → Metaphor → Narrative → Visual Language → Signature Components → Layout → Implementation`.

**Reference priority:** existing codebase > existing brand system > bundled `akr-design/` library > AKR-Inspo > React Bits > taste-skill/design-md rules > build fresh.
**Contamination guard:** ≥60% of final experience must trace to Step 2.5's concept, not to references.

---

## Step 0 — Gate (mandatory, first)
Scan project (depth 3, core configs + requested route only). Read any PRD/README/design doc fully.

Answer yes/no aloud:
1. PRD or user-stated (what/who/exact component)?
2. Existing inspectable brand system?
3. Single narrowly-named component (not redesign/new project)?

**All "no" → STOP**, ask only: project purpose+audience / existing brand colors+fonts / exact component(s) wanted / must-avoid+must-keep / (if SEO mentioned) domain.
**≥1 "yes" → proceed**, state which + assumptions inline.
Brand extraction: primary/accent color, type, category, audience — existing brand always wins.

Skip Steps 2.5–2.6c and World Engine only for a genuine single-component edit — state existing concept briefly instead.

---

## Step 1 — `bun create akr` bootstrap
Minimal runnable scaffold + placeholder content. Pick ONE moodboard ref (`assets/images`), state why (one line, filenames only). Font pairing per Typography Intelligence (2.6b). Reuse existing tokens/primitives before fetching anything external.

---

## Step 2 — Taste Rules + AKR Identity
State: "Reading this as: `<page kind>` for `<audience>`, `<vibe>` language, `<aesthetic family>`."
- Dual-mode (light+dark), parity kept. Dark mode first by default.
- No pure `#000`/`#fff`. No neon/AI-slop unless asked. WCAG AA body text — full contrast/keyboard/ARIA detail in `akr-design/references/accessibility.md`.
- **Identity:** Apple-level spacing, Google-Labs experimentation, brutalist restraint. Type first, motion only if clarifying.
- **Visual DNA:** controlled asymmetry, editorial type, storytelling layout, object-based UI, layered depth. Avoid empty glassmorphism, random gradients, decorative motion, bento-by-default.
- **AI-Slop Detector** — reject and redo if ANY apply: generic Inter/system-ui with no display font; purple-to-blue or pink-to-orange gradient hero; floating blurred gradient blobs in the background; unstyled default shadcn/Tailwind-UI card look; headline+subhead+two-button hero with no other identity; 3-icon feature grid (rocket/shield/lightning-bolt clichés); rounded-2xl cards + soft shadow on everything; emoji used as icons; numbered 01/02/03 markers where content isn't actually sequential; >~60% resemblance to Vercel/Stripe/Supabase/Clerk/Linear/Resend. Also flag the three current AI-design defaults unless the brief explicitly asks for one: (a) warm cream bg (~#F4F1EA) + high-contrast serif + terracotta accent, (b) near-black bg + single acid-green/vermilion accent, (c) broadsheet hairline-rule dense-column newspaper layout. Any hit → back to 2.6c, pick a different Style Library entry/direction.
- **Restraint rule** — spend boldness in exactly one place (the signature element); keep everything else quiet and disciplined. Before finalizing, remove one accessory/flourish — if the design survives without it, it wasn't earning its place.
- **Must print a Taste Checklist before Step 3**, one line per rule with pass/fix: dual-mode parity / no pure black-white / no neon-slop / WCAG AA / anti-SaaS check. A rule marked "fix" blocks moving on until resolved — don't silently skip it.
- Before any external fetch, cross-check the AI-Slop Detector list above against `akr-design/references/anti-patterns.md` (bundled, no fetch needed) — it's the same class of checklist and catches a few extras (touch targets, motion-property mistakes, copy anti-patterns).
- Full taste rule set: `github.com/Leonxlnx/taste-skill/tree/main/skills` — pull the `design-taste-frontend` skill folder for deeper rules (spacing systems, color theory, layout grids) whenever available; if the fetch fails or is unavailable, fall back first to `akr-design/references/design-tokens.md` and `accessibility.md`, then to the summary above — never skip the Taste Checklist itself just because the deep-dive fetch failed. Browse via Contents API, don't clone.

---

## Step 2.5 — Concept Extraction (mandatory, must print before any code)
```
Product: <type>
Audience: <audience>
Brand Personality: <personality>
Metaphor: <core metaphor>
Narrative: <how the story plays out>
Signature Object: <recurring visual/interaction motif>
Signature Interaction: <one interaction unique to this product>
Visual Language: <type/color/motion direction>
```
No implementation before this exists (skip only per Step 0 single-edit exception).

## Step 2.5b — Layout Selection Engine (mandatory, full builds)
Pick the structural bias from product type — this determines what the page leads with, not just what it contains:
| Product type | Structural bias |
|---|---|
| Developer tool | Documentation-first |
| AI product | Demo-first |
| Marketplace | Trust-first |
| Consumer app | Emotion-first |
| Enterprise SaaS | Proof-first |
| Portfolio | Story-first |
State which bias applies (or a blend, if the product spans two) before Section Intelligence — it changes what's Required vs Optional in 2.6a #5.

---

## Step 2.6a — World Engine (mandatory, full builds; print each numbered result)
1. **World Audit** — concept concrete enough? If not, back to 2.5.
2. **World Logic** — World Rules / Vocabulary / Objects / Systems / Relationships. Later additions breaking these get rejected.
3. **World Ownership Test** — strip logo/name; could another product own this world? Yes → refine metaphor. No → pass.
4. **Narrative Arc** — map every section to: Introduction → Understanding → Exploration → Evaluation → Decision → Commitment. Merge/remove stage duplicates.
5. **Section Intelligence** — score Trust/Conversion/Narrative/Community/Education/Complexity. **First run the Full Section Inventory Check** — explicitly evaluate every standard section against this world before excluding any: Nav/Header, Hero, Features, Comparison, Pricing, Testimonials, FAQ, CTA, Footer (plus product-specific ones: dashboard/gallery/docs/etc). Each gets a Required/Optional/Forbidden verdict + reason — "forbidden" is a real decision stated out loud, not a silent omission. A full build missing Nav, Header, or Footer without a stated reason is a fail. Output the three lists.
6. **Section Ownership Test** — could a required section appear unchanged in a competitor? Yes → redesign into world terms.
7. **Component Intelligence** — per section: info density + intent + exploration/trust/conversion need → generate accordingly (high exploration→explorers/graphs; high trust→evidence/case studies; high conversion→comparison/decision panels). **Adaptive bias by product nature:** visual product → showcase-heavy; technical product → code examples; workflow-based product → timeline; analytical product → data visualization. Never default to card grid / feature grid / testimonial carousel / plain table. **Component variety pool** (pick what fits, don't force all): bento grid, timeline, feature-comparison layout, split-screen showcase, sticky-scroll storytelling, metrics/stats section, testimonial-style content block, `<FeatureShowcase>` (below).
7z. **Signature Showcase Component (mandatory, full builds)** — every high-end landing page has one section people remember (Stripe: animated diagrams; Linear: product screenshots; Vercel: terminal/code demos; Apple: immersive product showcase). Build a reusable `<FeatureShowcase>` that renders whichever fits the PRD — screenshots, graphs, dashboards, 3D visuals, code blocks, AI output — driven by the Step 2.5 metaphor. This is the section the Emotional Memory Test (VERIFY #3) should point to.
7y. **Visual Peak System** — sections must NOT carry equal visual weight. Every page gets exactly: **1 Primary Peak** (the hero), **1 Secondary Peak** (the Signature Showcase, 7z), and **multiple Calm Zones** between/after them (features, footer, supporting content — deliberately quieter). Never Peak-Peak-Peak-Peak in a row. Flat equal weighting across all sections is a fail.
7x. **Design Debt Detector** — before finalizing, scan the built page for repetition that flattens it: same card style reused 3+ times unmodified, same spacing value used everywhere, same interaction pattern on every element, the same layout template used twice on one page, or the same visual-hierarchy pattern repeating section after section. Any hit → vary it, don't ship the repeat.
8. **Component Ownership Test** — same yes/no logic, per component.
9. **Pattern Translation** — never ship generic Testimonials/Pricing/FAQ/Features/**Comparison**/Dashboard/Footer as-is; translate into world vocabulary first (e.g. Forge-world testimonials → Architect Field Reports; a Comparison table → a world-native analysis tool, never a bare `<table>`).
10. **Feature Translation** — every generic feature → world term (Search→Scanner, Dashboard→Control Center). None ships generic.
11. **Signature Interaction Engine** — one interaction only this product could own; prioritize understanding/exploration/discovery over decoration.
12. **Signature Component Expansion Test** — each signature component must teach, navigate, clarify, or aid decisions. An icon+text feature card is decoration, not signature — reject and rebuild as a functional component (comparator, visualizer, evidence piece).
13. **World Completion Test** — what's missing (objects/places/tools/archives/systems)? Fold best 1–3 into the build (Experience Expansion).
14. **World Density Test** — world must appear in hero, nav, cards, sections, interactions, **loading/empty/error states**, footer, microcopy. Hero+cards-only → FAIL, add touchpoints until it isn't.
15. **Signature Object Evolution** — object evolves (raw material→blueprint→assembly→artifact); track explicitly hero→nav→sections→interactions→footer; absent >2 consecutive sections → FAIL, add it back.
16. **Empty/Error State Intelligence** — loading/empty/error copy must be world-voiced (e.g. "No artifacts detected in the forge," never "No results found").
17. **Footer Consistency** — footer must continue the narrative; generic link-list footer is an automatic fail, redesign it.

Hand the finalized, fully-translated section list to Typography + Palette + 2.6c next.

---

## Step 2.6b — Typography Intelligence
1. **Strategy** — derive Display/Body/Data/Utility role needs from the concept.
2. **Candidates** — 2–3 pairings from: existing brand fonts (priority) > `assets/Fonts` > **Style Library** below (always available, no fetch needed — pick the style matching Step 2.5's personality, or compose two: e.g. terminal+cyberpunk, swiss-minimalist+dark) > Fontjoy (`fontjoy.com`) as inspiration only, never accepted unvalidated.

**Style Library** (pick 1, or compose a base+modifier) — mode / type-category / concrete pairing:
| Style | Mode | Type | Pairing |
|---|---|---|---|
| Monochrome/Editorial | light | serif | Playfair Display + Georgia |
| Newsprint | light | serif | Fraunces + Source Serif |
| Luxury | light | serif | Canela/Söhne alt + Neue Montreal |
| Academia | light | serif | Lora + Libre Baskerville |
| Botanical/Organic | light | serif | Cormorant + Karla |
| Bauhaus | light | sans | Archivo + Space Grotesk |
| Swiss Minimalist | light | sans | Neue Haas Grotesk + Inter |
| SaaS (use sparingly — high slop risk) | light | sans | Geist + IBM Plex Sans |
| Neo-Brutalism | light | sans | Archivo Black + JetBrains Mono |
| Claymorphism/Playful | light | sans | Fredoka + General Sans |
| Terminal | dark | mono | JetBrains Mono + Fira Code |
| Cyberpunk | dark | mono | Orbitron + Space Mono |
| Modern Dark | dark | sans | Clash Display + Satoshi |
| Art Deco | dark | serif | Poiret One (display only) + Raleway |
| Web3/Kinetic | dark | sans | Cabinet Grotesk + Inter |
| Minimal Dark | dark | sans | Sora + Manrope |
| Vaporwave | dark | display | VT323 (display only) + Space Grotesk |
| Industrial | light | sans | Neue Machina + Archivo |
| Maximalist | light | sans | Unbounded + Manrope |
| Retro | light | sans | Righteous (display) + DM Sans |

Never accept a pairing unvalidated against brand/narrative/accessibility. If Fontjoy is unreachable, use the Style Library — don't stall or skip typography. **Absolute last-resort fallback:** if nothing above resolves (no brand fonts, Style Library somehow inapplicable, Fontjoy down), use Google Sans (Display) + Google Sans Text (Body) — always available, never leave a page on browser-default/system-ui.
3. **Score & pick** — rank by Primary: brand fit; Secondary: readability + originality; Tertiary: accessibility + technical compatibility. **Must print:** pick + runner-up + the one-line reason the pick wins.
4. **Ownership test** — strip logo/color/motion; still distinctive? No → back to #2.
5. **Hierarchy audit** — Display/Heading/Subheading/Body/Caption/Data/Code/Nav/Buttons each justified.
6. **Consistency** — one type system across all sections.
7. Prefer variable fonts unless static weights are genuinely required.

## Step 2.6b.2 — Palette Intelligence
1. **Candidates** — 2–3 palettes from: existing brand colors (priority) > Color Hunt (`colorhunt.co`, browse/search by mood — e.g. "dark," "pastel," "retro" — matching the Step 2.5 personality) > custom-derived from the metaphor.
2. **Score & pick** — rank by Primary: brand/metaphor fit; Secondary: contrast+A11y (WCAG AA) + dual-mode viability; Tertiary: originality. **Must print:** pick + runner-up + the one-line reason.
3. **Ownership test** — does the palette read as generic SaaS blue/purple gradient? If yes, back to #1.
4. Pair the winning palette with the winning type system — check they don't fight (e.g. a loud experimental palette needs a quieter type system, and vice versa).

Record both as **Typography System** + **Palette System** blocks in `akr-design.md`.

## Step 2.6b.3 — Design Token System (mandatory, must generate before 2.6c)
Compile the winning palette + typography into a single reusable token set — code, not prose:
```
Colors:    --bg, --fg, --primary, --accent, --muted, --border (+ dark-mode pair for each)
Spacing:   --space-1..8 (one consistent scale, e.g. 4/8/12/16/24/32/48/64)
Radius:    --radius-sm/md/lg (0 allowed if brutalist/editorial direction)
Shadows:   --shadow-sm/md/lg (or none, if flat direction)
Typography: --font-display/body/mono, --text-xs..5xl, --leading, --tracking
Animation: --ease-standard/emphasized, --duration-fast/base/slow
Grid:      --container-max, --gutter, breakpoints
```
Values must derive from 2.6b/2.6b.2's picks, not generic Tailwind defaults left untouched. Write as actual CSS custom properties (or Tailwind theme config) in the project — every component in Step 7 consumes these tokens, none hardcodes a raw hex/px. Use `akr-design/references/design-tokens.md` for the three-layer (primitive/semantic/component) architecture, surface-layering, and CVA surface-component patterns — don't reinvent the layering scheme from scratch. This is what makes the output reusable/extendable, not a one-off. Record the full token block in `akr-design.md`.

---

## Step 2.6c — Creative Exploration
Generate three directions (score originality/UX/memorability/brand fit/feasibility):
- **A Safe** — conventional for category.
- **B Creative** — distinct, low technical risk.
- **C Experimental** — boldest reading of the concept.

Pick winner (don't default to A unless brief explicitly wants conventional/enterprise-safe). **Design Director Review**: what's generic? what's expected? what would a top agency change? what's memorable at 6 months? Refine once.

**Two-pass discipline:** Pass 1 — brainstorm a compact token system for the winning direction: Color (4–6 named hex values), Type (display/body/utility roles, per 2.6b), Layout (one-sentence concept + ASCII wireframe), Signature (one sentence: the single element this page will be remembered by). Pass 2 — critique that plan against the brief: does any part read like the generic default for this category rather than a choice made for this brief? Revise, state what changed and why. Only then write code, deriving every color/type decision from the revised plan. Take a screenshot after building and self-critique against this plan before calling it done.

---

## Step 3 — Browse AKR-Inspo (never clone)
GitHub Contents API on subtrees only: `https://api.github.com/repos/ajaykumarreddy-k/AKR-Inspo/contents/<path>`. Pass `$GITHUB_TOKEN` if available. Never list recursively, never re-list a folder this session, skim filenames before fetching.

**Unavailable** → local cache → ask user for path/code → build from Step 2 + design-md rules. Don't stall.

**React Bits** (`DavidHDev/react-bits`, React only) — combine with AKR-Inspo (AKR-Inspo=layout/structure, React Bits=text/scroll/hover micro-anim). Match variant (JS-CSS/JS-TW/TS-CSS/TS-TW) to project setup.

---

## Step 4 — Request → folder map
| Want | Folder |
|---|---|
| Accessibility deep-dive (WCAG/ARIA/contrast/keyboard) | `akr-design/references/accessibility.md` (bundled) |
| Component/shadcn/mobile-responsive patterns | `akr-design/references/components.md`, `shadcn-components.md`, `mobile-responsive.md` (bundled) |
| Icon/favicon generation, image/palette scripts | `akr-design/references/asset-generation.md` + `akr-design/scripts/` (bundled) |
| Logo/brand/print production, design critique by persona | `akr-design/references/graphic-design-print.md` (bundled) |
| Buttons/cards/pricing/testimonials/nav/footer/CTA | `Components-maintiles/<Category>` |
| Framer/GSAP micro-interactions | `Frammer&21st dev Components/<Effect>` |
| Full landing page/site | `Entire site/<Site Name>` |
| Scroll animation | `Scroll animations/src` |
| 3D text/WebGL | `3d text animations/good ones` |
| GSAP (pick a few) | `opencode GSAP/` |
| Design principles | `Design md files/awesome-design-md/design-md` (matching `.md` only) |
| Taste rules (deep dive) | `github.com/Leonxlnx/taste-skill/tree/main/skills` |
| Top-300 site refs | `assets/images` — moodboard filenames for direction; if the brief needs real inspiration imagery (hero backgrounds, texture, mood), the `.webp` files themselves are usable assets — fetch and adapt/crop as needed, don't just cite the filename |
| Fonts | `assets/Fonts` (secondary to Fontjoy-validated pick) |
| Palettes | Color Hunt `colorhunt.co` (secondary to existing brand) |
| Gradients | `Resource-Boy-Retro-Photoshop-Gradients/` |
| React micro-interactions | `DavidHDev/react-bits` |

Unsure → `ls` top 2–3, skim, pick. **Multiple fits →** rank by Primary: originality (avoids Anti-Slop hits, serves the concept); Secondary: visual + brand fit; Tertiary: technical + accessibility fit. State pick + runner-up.

---

## Step 5 — Read before applying
View matched component fully (code + co-located `.md`) before touching the project. Note deps, classes, assets.

## Step 6 — State confidence (mandatory, must print before coding)
- **High** — exact match, stack supported, brand clear → proceed.
- **Medium** — similar-not-exact → proceed, flag the adaptation in one line.
- **Low** — no match / major redesign implied / requirements unclear → stop, ask.

---

## Step 7 — Implement (EXECUTE stage of the loop)
1. Detect stack from `package.json`/existing code.
2. Rewrite fetched code to stack conventions.
3. New deps only if native API / existing dep / <~50-line utility can't cover it.
4. Copy assets into project's own folder.
5. Wire into the actual route.
6. Reskin to the winning palette+type system via the 2.6b.3 Design Token System, apply Step 2 taste rules. Every color/spacing/radius/shadow/font/animation value pulls from tokens — no raw hardcoded hex/px in component code.
7. **Perf budget** — no stacked animation libs, no Three.js/WebGL for pure decoration, no large video bg, font payload <100KB. Target Lighthouse 90+, CLS<0.1, LCP<2.5s.
7a. **CSS specificity check** — avoid classes that cancel each other out (e.g. a type selector `.section` fighting an element selector `.cta` on padding/margin) — check computed spacing between sections actually applies.
7b. **Copy** — write from the user's side of the screen (name things by what people control, not system internals); active voice, same verb through a whole flow (button "Publish" → toast "Published"); errors state what happened + how to fix it, never vague or apologetic; empty states are an invitation to act, in the world's voice (per 2.6a #16). No filler, no generic template copy — copy is design material, not placeholder text.
7c. **Common-error prevention (mandatory, run before declaring done)** — grep every new/edited file for identifiers used but not imported. Known repeat offenders: `cn`/`clsx`/`twMerge` utility (must import from `@/lib/utils` or equivalent, or write the 3-line fallback if no utils file exists), icon components (each used icon actually imported from its package), any hook (`useState`/`useEffect`/etc.) missing its import, path aliases (`@/...`) that don't resolve in `tsconfig`/`vite.config`. This is a static check, not "run it and see" — do it by reading the file, not by waiting for the browser to throw.
7d. **Spacing rhythm** — section-to-section spacing must vary intentionally (e.g. Large/Medium/Large/Small/Large), never uniform Large/Large/Large/Large. Uniform spacing across every section is a fail.
7e. **Interaction pattern library** (apply where it clarifies, keep subtle) — hover elevation, magnetic buttons, scroll reveal, stagger animations on lists, cursor-aware effects, section transitions. Don't stack all on one page — pick what the direction calls for (Step 2's motion-only-if-it-clarifies rule).
7f. **Component state matrix** — every interactive component (buttons, cards, inputs, upload areas, nav items) must define default, hover, loading, active/focus states. A component with only a default state is incomplete.
7g. **Content-density stress test** — before calling a section done, check it at low (~3 items), medium (~10), high (~25) content volume. A layout that only works at demo content-count is a fail — must reflow/paginate/scroll gracefully at all three.
8. **Signature requirement (full builds)** — ≥3 signature components (each passing the 2.6a #12 teach/navigate/decide test), 1 signature motion system, 1 signature illustration system, 1 signature interaction, 1 signature storytelling mechanism — all from the Step 2.5 concept. Every page needs ≥1 signature component.
9. **Signature object persistence** — object appears hero→nav→cards→interactions→footer, evolving, never absent >2 sections running (per 2.6a #15).
10. **Visual consistency check** — every section (footer especially) visibly belongs to the hero's universe; redesign any that doesn't.
11. **Full-site coverage check (code-level, not just plan-level)** — after building, actually open the page/route file(s) and confirm each of Nav/Header, Hero, Pricing, Comparison, Testimonials, Footer either renders as a real component (name it) or was marked Forbidden in 2.6a #5 with a reason. Print a short table: `Section | Present in code (file+component name) | or Forbidden-reason`. A section marked "Required" in planning but absent from the actual rendered file is a fail — go implement it, don't just assume the plan shipped. Comparison/Testimonials/Footer are historically the most-skipped translations: confirm they're world-voiced, not generic — re-run Pattern Translation (2.6a #9) on any that slipped through.

---

## Step 8 — SEO/AEO/GEO (only if explicitly requested)
Confirm which of SEO/AEO/GEO is wanted; don't assume one implies the others. Ask for domain if unknown.
- **Findable:** HTTPS; `/robots.txt` (allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended, `*`); `/sitemap.xml` from real routes; canonical `<link>`.
- **Quotable:** meta description 50–160 chars/page; ≥100 words real body text; freshness signals; `FAQPage` schema only where real Q&A exists.
- **Understandable:** one `<h1>`/page; clean hierarchy; OG tags; JSON-LD as applicable; alt text ≥50% of images.
- **Trustworthy:** ≥3 contextual internal links (nav/footer excluded); ≥2 outbound citation links; generate `/llms.txt`.
- Report a plain ✓/✗ checklist — don't rubber-stamp.

---

## VERIFY — AKR Quality Gate (mandatory before Step 9, full builds; independent pass, must print scores)
Re-read the built output fresh — don't reuse the reasoning that built it.
1. Design Compression — one-sentence identity; can't state it → back to 2.6c.
2. Section Uniqueness — any section copy-pasteable into another SaaS unmodified? → redesign it.
3. Emotional Memory — what's remembered at 24h? Generic → fail.
4. First Impression — 3-second what/why/different test.
5. Competitive Differentiation — vs top 3 competitors, what's only possible here?
6. Interaction Ownership — could a competitor claim the core interaction?
7. Brand Recognition Without Logo.

**Score /10 each, average:** Originality, Usefulness, Storytelling, Worldbuilding, Consistency, Memorability, Logo-less Recognition, Differentiation.
- <8.5 → **ITERATE**: return to 2.6c with a genuinely new direction (not the same one restated), re-run EXECUTE, re-run VERIFY.
- 8.5–8.9 good · 9.0–9.4 AKR quality · 9.5+ AKR signature.
Print the average; if <9.0, print the single biggest reason why.

---

## Step 9 — `akr-design.md` (mandatory, any full build/redesign) → DONE
Write/update at project root:
- Provenance per fetched component: source repo/path, adaptation summary, deps added.
- Step 2.5 concept summary.
- World Engine section list (required/optional/excluded + reasons) + feature/pattern translations.
- Typography System block (fonts/roles/rationale/scores) + Palette System block (colors/source/scores).
- Step 6 confidence level.
- Taste/Visual-DNA rules applied.
- AKR Quality Gate score + iteration count (how many VERIFY loops ran).
- SEO validation results (if Step 8 ran).

Report briefly in chat, point to the file for detail.

## Before declaring done (every time)
- `npm install`/`bun install` completes clean.
- `npm run dev`/`bun run dev` boots, zero console errors, no missing imports/assets.
- Every Step 0 requirement re-checked against final output.
- VERIFY score ≥8.5, else still looping.

## Notes
- `akr-design/` (bundled alongside this file) is a local library, not a fetch — always available, check it first per the reference-priority chain above.
- AKR-Inspo and taste-skill are moodboards/rule sets, not packages — adapt, never import as-is.
- Nothing fits → say so, build original.
- Repo map stale → `curl -s "https://api.github.com/repos/ajaykumarreddy-k/AKR-Inspo/contents/"`.