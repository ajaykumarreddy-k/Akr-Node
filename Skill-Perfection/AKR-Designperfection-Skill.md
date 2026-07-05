---
name: akr-inspo-design
version: 5.0.0
last_updated: 2026-07-05
description: "AKR-Inspo design skill: concept-first world-building UI generation with a closed verify/iterate loop. Pulls refs from AKR-Inspo repo + React Bits, applies taste-skill anti-slop rules, Color Hunt palettes, Fontjoy-assisted type pairing. Concept→World→Typography→Palette→Creative Exploration→Implement→Quality-Gate-Verify→Iterate→akr-design.md. Trigger: UI implementation, component gen, redesign, animation, scaffolding (bun create akr), explicit SEO/AEO/GEO. Do not trigger: design discussion, feedback-only, color-Q, plain debugging."
---

# AKR-Inspo Design Skill

## Uniqueness + Zero-Error Mandate (non-negotiable)
- **Never reuse a metaphor, signature object, or Direction-C pick from a prior project.** Each Step 2.5 must be derived fresh from *this* brief — if it resembles an earlier build, go back and sharpen it.
- **Ship only working code.** No missing imports, no broken links, no placeholder-in-final-output, no console errors. `dev` boots clean or it's not done.
- **VERIFY score <8.5 = not done, no exceptions.** Loop until it passes or explicitly report why it can't reach 8.5.

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

**Reference priority:** existing codebase > existing brand system > AKR-Inspo > React Bits > taste-skill/design-md rules > build fresh.
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
- No pure `#000`/`#fff`. No neon/AI-slop unless asked. WCAG AA body text.
- **Identity:** Apple-level spacing, Google-Labs experimentation, brutalist restraint. Type first, motion only if clarifying.
- **Visual DNA:** controlled asymmetry, editorial type, storytelling layout, object-based UI, layered depth. Avoid empty glassmorphism, random gradients, decorative motion, bento-by-default.
- **Anti-SaaS check:** hero=headline+sub+CTA only / plain 3-card grid / generic testimonials / standard footer / >~60% similarity to Vercel/Stripe/Supabase/Clerk/Linear/Resend → trips → back to 2.6c.
- Full taste rule set: `github.com/Leonxlnx/taste-skill/tree/main/skills` — pull the `design-taste-frontend` skill folder when deeper rules are needed (spacing systems, color theory, layout grids); otherwise the summary above is enough. Treat it same as AKR-Inspo: browse via Contents API, don't clone.

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

---

## Step 2.6a — World Engine (mandatory, full builds; print each numbered result)
1. **World Audit** — concept concrete enough? If not, back to 2.5.
2. **World Logic** — World Rules / Vocabulary / Objects / Systems / Relationships. Later additions breaking these get rejected.
3. **World Ownership Test** — strip logo/name; could another product own this world? Yes → refine metaphor. No → pass.
4. **Narrative Arc** — map every section to: Introduction → Understanding → Exploration → Evaluation → Decision → Commitment. Merge/remove stage duplicates.
5. **Section Intelligence** — score Trust/Conversion/Narrative/Community/Education/Complexity. **First run the Full Section Inventory Check** — explicitly evaluate every standard section against this world before excluding any: Nav/Header, Hero, Features, Comparison, Pricing, Testimonials, FAQ, CTA, Footer (plus product-specific ones: dashboard/gallery/docs/etc). Each gets a Required/Optional/Forbidden verdict + reason — "forbidden" is a real decision stated out loud, not a silent omission. A full build missing Nav, Header, or Footer without a stated reason is a fail. Output the three lists.
6. **Section Ownership Test** — could a required section appear unchanged in a competitor? Yes → redesign into world terms.
7. **Component Intelligence** — per section: info density + intent + exploration/trust/conversion need → generate accordingly (high exploration→explorers/graphs; high trust→evidence/case studies; high conversion→comparison/decision panels). Never default to card grid / feature grid / testimonial carousel / plain table.
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
2. **Candidates** — 2–3 pairings from: existing brand fonts (priority) > `assets/Fonts` > Fontjoy-assisted (`github.com/Jack000/fontjoy`) > custom. Never accept a Fontjoy pairing unvalidated against brand/narrative/accessibility.
3. **Score & pick** — Brand fit 40 / Readability 25 / Originality 15 / A11y 10 / Tech 10. **Must print:** pick + runner-up + numeric scores.
4. **Ownership test** — strip logo/color/motion; still distinctive? No → back to #2.
5. **Hierarchy audit** — Display/Heading/Subheading/Body/Caption/Data/Code/Nav/Buttons each justified.
6. **Consistency** — one type system across all sections.
7. Prefer variable fonts unless static weights are genuinely required.

## Step 2.6b.2 — Palette Intelligence
1. **Candidates** — 2–3 palettes from: existing brand colors (priority) > Color Hunt (`colorhunt.co`, browse/search by mood — e.g. "dark," "pastel," "retro" — matching the Step 2.5 personality) > custom-derived from the metaphor.
2. **Score & pick** — Brand/metaphor fit 40 / Contrast+A11y (WCAG AA) 25 / Dual-mode viability (works light+dark) 20 / Originality 15. **Must print:** pick + runner-up + scores.
3. **Ownership test** — does the palette read as generic SaaS blue/purple gradient? If yes, back to #1.
4. Pair the winning palette with the winning type system — check they don't fight (e.g. a loud experimental palette needs a quieter type system, and vice versa).

Record both as **Typography System** + **Palette System** blocks in `akr-design.md`.

---

## Step 2.6c — Creative Exploration
Generate three directions (score originality/UX/memorability/brand fit/feasibility):
- **A Safe** — conventional for category.
- **B Creative** — distinct, low technical risk.
- **C Experimental** — boldest reading of the concept.

Pick winner (don't default to A unless brief explicitly wants conventional/enterprise-safe). **Design Director Review**: what's generic? what's expected? what would a top agency change? what's memorable at 6 months? Refine once.

---

## Step 3 — Browse AKR-Inspo (never clone)
GitHub Contents API on subtrees only: `https://api.github.com/repos/ajaykumarreddy-k/AKR-Inspo/contents/<path>`. Pass `$GITHUB_TOKEN` if available. Never list recursively, never re-list a folder this session, skim filenames before fetching.

**Unavailable** → local cache → ask user for path/code → build from Step 2 + design-md rules. Don't stall.

**React Bits** (`DavidHDev/react-bits`, React only) — combine with AKR-Inspo (AKR-Inspo=layout/structure, React Bits=text/scroll/hover micro-anim). Match variant (JS-CSS/JS-TW/TS-CSS/TS-TW) to project setup.

---

## Step 4 — Request → folder map
| Want | Folder |
|---|---|
| Buttons/cards/pricing/testimonials/nav/footer/CTA | `Components-maintiles/<Category>` |
| Framer/GSAP micro-interactions | `Frammer&21st dev Components/<Effect>` |
| Full landing page/site | `Entire site/<Site Name>` |
| Scroll animation | `Scroll animations/src` |
| 3D text/WebGL | `3d text animations/good ones` |
| GSAP (pick a few) | `opencode GSAP/` |
| Design principles | `Design md files/awesome-design-md/design-md` (matching `.md` only) |
| Taste rules (deep dive) | `github.com/Leonxlnx/taste-skill/tree/main/skills` |
| Top-300 site refs | `assets/images` |
| Fonts | `assets/Fonts` (secondary to Fontjoy-validated pick) |
| Palettes | Color Hunt `colorhunt.co` (secondary to existing brand) |
| Gradients | `Resource-Boy-Retro-Photoshop-Gradients/` |
| React micro-interactions | `DavidHDev/react-bits` |

Unsure → `ls` top 2–3, skim, pick. **Multiple fits →** score Originality 30 / Visual fit 25 / Brand fit 20 / Tech fit 15 / A11y 10; state pick + runner-up.

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
6. Reskin to the winning palette+type system, apply Step 2 taste rules.
7. **Perf budget** — no stacked animation libs, no Three.js/WebGL for pure decoration, no large video bg, font payload <100KB. Target Lighthouse 90+, CLS<0.1, LCP<2.5s.
8. **Signature requirement (full builds)** — ≥3 signature components (each passing the 2.6a #12 teach/navigate/decide test), 1 signature motion system, 1 signature illustration system, 1 signature interaction, 1 signature storytelling mechanism — all from the Step 2.5 concept. Every page needs ≥1 signature component.
9. **Signature object persistence** — object appears hero→nav→cards→interactions→footer, evolving, never absent >2 sections running (per 2.6a #15).
10. **Visual consistency check** — every section (footer especially) visibly belongs to the hero's universe; redesign any that doesn't.
11. **Full-site coverage check** — confirm Nav/Header, Hero, Pricing, Comparison, Testimonials, and Footer are all present (per Step 2.6a #5's inventory) or explicitly marked Forbidden with a stated reason — no silent gaps. Comparison/Testimonials/Footer are historically the most-skipped translations: confirm they're world-voiced, not generic — re-run Pattern Translation (2.6a #9) on any that slipped through.

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
- AKR-Inspo and taste-skill are moodboards/rule sets, not packages — adapt, never import as-is.
- Nothing fits → say so, build original.
- Repo map stale → `curl -s "https://api.github.com/repos/ajaykumarreddy-k/AKR-Inspo/contents/"`.