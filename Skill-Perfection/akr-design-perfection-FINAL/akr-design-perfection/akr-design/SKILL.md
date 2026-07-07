---
name: akr-design
version: 1.0.0
description: >
  Unified design skill covering UI/UX, frontend implementation, design systems,
  graphic/print design, and design assets. Use for building or reviewing web/mobile
  interfaces, landing pages, dashboards, design tokens, component libraries, icons/favicons,
  logos, brand/print collateral, and accessibility (WCAG 2.2). Triggers on: design,
  UI, UX, layout, typography, color palette, design system, tokens, Tailwind, shadcn,
  React component, responsive/mobile design, accessibility, icon/favicon generation,
  logo, brand guidelines, print/CMYK, or any request to make something "look better"
  or "more professional."
tags: [design, ui, ux, frontend, accessibility, design-system, graphic-design, print, assets]
---

# akr-design — Unified Design Skill

One skill for every design task: web/product UI, design systems and tokens, graphic/print
design, and asset generation. Consolidates 10 separate design skills into a single source
of truth. Deep-dive material lives in `references/`; this file is the orchestrator — read
it first, then pull the reference file that matches the task.

> **Bundled Sub-skill Note:** When this file is loaded as part of `akr-design-perfection`
> (i.e., the parent `SKILL.md` / `AKR-Designperfection-Skill.md` was the trigger), the
> parent's **Steps 2.5–2.6c** (Concept Extraction → World Engine → Typography → Palette
> → Tokens → Creative Exploration) have already established the aesthetic direction.
> In that context, **skip this file's Steps 1–2** (Understand context + Commit to direction)
> — the direction is inherited from the parent. Jump directly to Step 3 (Build the token
> system) or the relevant reference file as directed by Step 4 of the parent skill.
> When used **standalone** (no parent skill active), follow all steps in order.

## Step 0 — Route the Request

| Request looks like... | Do this |
|---|---|
| Build/critique a web or app UI, landing page, dashboard | Follow the **Web/Product UI Workflow** below |
| "Set up a design system / tokens / theming" | Follow the workflow, emphasis on `references/design-tokens.md` |
| Logo, brand identity, print collateral, social graphic, design critique for a class/portfolio | Go straight to `references/graphic-design-print.md` — detect the person's level first |
| Icons, favicons, image resize/convert, color palette script | Go straight to `references/asset-generation.md` |
| Anti-pattern check, slop audit, taste review only (no build) | Go straight to `references/anti-patterns.md` — run through it top to bottom, report each hit |
| `/audit`, `/polish`, `/critique`, etc. on existing code | See **Commands** below |

If the request is genuinely ambiguous (e.g., "make me a logo" could mean a quick Canva-style
mark or a full brand system), ask one quick question about deliverable format and audience
before proceeding — otherwise just make a reasonable assumption and say so.

---

## Web/Product UI Workflow

Work in this order. Don't skip straight to code — vibes (and tokens) before CSS.

### 1. Understand context
Purpose, audience, constraints (performance, accessibility level, brand guidelines, existing
codebase). If nothing is specified, pick one concrete, sensible interpretation and state it.

### 2. Commit to an aesthetic direction
Pick ONE direction and push it — the middle ground is where designs go to die. See the
direction table and full "signature element" guidance in `references/design-tokens.md`.
Name the one unforgettable element this design will be remembered by.

### 3. Build the token system
Three layers — primitives → semantic → component. Color, type scale, spacing, motion,
surfaces. Full detail, code, and the 70-20-10 color rule are in `references/design-tokens.md`.

### 4. Layout
- CSS Grid for 2D/page structure, Flexbox for 1D/component-internal layout.
- Standard content width: `max-width: 1280px`, body copy capped at ~65ch.
- Mobile-first: design at 320-375px first, expand as space allows.
- Breakpoints: 640px (tablet), 768px, 1024px (desktop), 1440px (wide).

### 5. Typography
Carries ~40% of perceived design quality. Choose 1-2 font families deliberately (never the
same generic pair for every project) — a characterful display face used with restraint, a
readable body face, optionally a mono face for data/code. Full pairing table and type scale
in `references/design-tokens.md`.

### 6. Color
Five roles: primary, neutral, accent, semantic (success/warning/error), surface. 70-20-10
distribution. Verify contrast as you go, not at the end.

### 7. Motion
One orchestrated moment (staggered hero reveal, scroll-triggered entrance) beats scattered
micro-interactions. Timing: hover/press 100-200ms, page transitions 300-500ms. Easing
`cubic-bezier(0.16, 1, 0.3, 1)`. Always respect `prefers-reduced-motion`. Animate `transform`
and `opacity` only.

### 8. Components & states
Every interactive element needs: default, hover, active/pressed, focus-visible, disabled,
loading. Component-level patterns (cards, forms, nav, buttons) are in `references/components.md`;
shadcn/ui-specific reference in `references/shadcn-components.md`.

### 9. Responsive pass
Mobile-first patterns and the specific fixes (hero grids collapsing to flex, horizontal
scroll → accordion, multi-column forms stacking) are in `references/mobile-responsive.md`.

### 10. Accessibility (non-negotiable)
WCAG 2.2 AA minimum: 4.5:1 text contrast, 3:1 large text/UI components, visible keyboard
focus, semantic HTML, alt text, `prefers-reduced-motion` support, 44×44px touch targets.
Full guide with testing tools and ARIA patterns: `references/accessibility.md`.

### 11. Self-critique before shipping
Check the design against `references/anti-patterns.md`. If any part reads like the generic
default you'd produce for any similar brief, revise it and note what changed. Screenshot
your own work if the environment supports it.

---

## Quick Reference

### 80/20 of Perceived Quality
| Factor | Impact | Focus |
|---|---|---|
| Typography | ~40% | Choose 1-2 fonts well, real weight/size contrast |
| Spacing | ~25% | Consistent 4/8px scale, generous whitespace |
| Color | ~20% | Limited palette (3-5), verified contrast |
| Everything else | ~15% | Shadows, borders, motion |

### The 5 Laws of Beautiful UI
1. Contrast creates hierarchy (big vs. small, dark vs. light)
2. Whitespace creates calm — never fear empty space
3. Consistency builds trust — repeat the same patterns
4. Feedback confirms action — animation, success/error states
5. Accessibility includes everyone — contrast, keyboard, screen readers

### Stack Quickstart (React/Tailwind/shadcn)
```bash
npx create-next-app@latest project-name --typescript --tailwind --app
cd project-name && npx shadcn@latest init
npx shadcn@latest add button card dialog
```
For a pure static bundle (no framework), Tailwind via CDN + vanilla JS is fine for prototypes;
use real placeholder images (Unsplash, placehold.co) — never invent image URLs.

### Pre-Delivery Checklist
- [ ] Aesthetic direction picked and committed to (not hedged)
- [ ] Typography: intentional pairing, consistent scale, 16px min body, ≤75ch lines
- [ ] Color: 3-5 colors, dominant + accent, WCAG contrast verified, dark mode considered
- [ ] Spacing: consistent scale, no arbitrary values, mobile padding ≥16px
- [ ] Motion: transform/opacity only, reduced-motion respected, one orchestrated moment
- [ ] All interactive states covered (hover/active/focus/disabled/loading)
- [ ] Responsive: tested at 375px, no horizontal overflow, 44px touch targets
- [ ] Accessibility: keyboard nav, focus-visible, semantic HTML, alt text
- [ ] Checked against `references/anti-patterns.md`

---

## Commands (use in any design/frontend conversation)

| Command | Action |
|---|---|
| `/audit [component]` | List 3-5 concrete accessibility/performance/responsive issues |
| `/critique [component]` | UX review: hierarchy, clarity, what's confusing |
| `/polish [component]` | Final pre-ship pass — output full revised code + what changed |
| `/distill [component]` | Simplify — remove non-essential elements |
| `/colorize [component]` | Introduce strategic, purposeful color |
| `/animate [component]` | Add meaningful motion (not decoration) |
| `/bolder [component]` | Push a timid design further in its chosen direction |
| `/quieter [component]` | Rein in an overly loud design |
| `/normalize [component]` | Align with the existing design system/tokens |
| `/harden [component]` | Add error handling, edge cases, i18n considerations |

When a command fires: state what you're changing and why, then output the full revised
code — don't leave design advice at the conceptual level.

---

## Reference Files

| File | Use for |
|---|---|
| `references/design-tokens.md` | Color/type/spacing/motion token architecture, aesthetic directions, CVA surface components |
| `references/anti-patterns.md` | Full "AI slop" banned-pattern checklist (typography, color, layout, motion, forms) |
| `references/accessibility.md` | WCAG 2.2 deep dive: contrast, keyboard nav, ARIA, screen readers, testing tools |
| `references/components.md` | Component-level patterns (cards, nav, forms, modals) |
| `references/shadcn-components.md` | Full shadcn/ui component list and landing-page usage |
| `references/mobile-responsive.md` | Responsive CSS fixes for hero/grid/form/list patterns |
| `references/graphic-design-print.md` | Logos, brand, print production, design education/critique — persona-adaptive |
| `references/asset-generation.md` | Icon/favicon generation, ImageMagick/sips reference, palette generator |
| `scripts/generate-app-icons.sh` | Generate iOS/macOS/Android icon sets from one 1024px source |
| `scripts/generate-favicons.sh` | Generate favicon set + site.webmanifest |

## Always
- Ground the design in the actual subject/content — generic briefs get a stated, concrete assumption before designing.
- Prefer code-level specificity over abstract advice — every suggestion should be implementable.
- Verify accessibility as part of the work, not an afterthought.
- Pick a direction and commit; note the one deliberate risk taken and why it fits the brief.
