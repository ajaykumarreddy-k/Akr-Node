# Anti-Patterns — "AI Slop" Checklist

> **Chain Role:** This is the extended anti-pattern reference for `AKR-Designperfection-Skill` **Step 2**.
> The parent skill's Step 2 instructs: "Before any external fetch, cross-check the AI-Slop Detector list
> against `akr-design/references/anti-patterns.md` — it catches a few extras (touch targets, motion-property
> mistakes, copy anti-patterns)." It is also the target for direct slop/taste audits via the
> `akr-design/SKILL.md` Step 0 route table.

Generic AI-generated design clusters around a few predictable looks. If a design resembles any of these and the brief didn't ask for it, that's a signal to revise, not a coincidence to keep.

## The Three Defaults to Avoid (unless the brief specifically asks for them)
1. Warm cream background (~#F4F1EA) + high-contrast serif display + terracotta/warm-clay accent (~#D97757).
2. Near-black background + single bright acid-green or vermilion accent.
3. Broadsheet layout: hairline rules, zero border-radius, dense newspaper columns.

## Typography
- ❌ Arial, Inter, Roboto, system-ui, Open Sans as the *only* choice — too generic when used without intention.
- ❌ More than 2 font families on one page.
- ❌ Timid weight range (400-600 only) with no real contrast between heading and body weight.
- ❌ Minimal size progression (1.25x-1.5x) for hero/display text — go bolder (3x+) for real impact.
- ✅ Choose characterful fonts: Geist, Instrument Serif, DM Sans, Sora, Cabinet Grotesk, Satoshi, Space Grotesk, Playfair Display, General Sans, Plus Jakarta Sans.
- ✅ Build a modular type scale (1.25 or 1.333 ratio).

## Color
- ❌ Purple/blue gradient on white — the single most recognizable "AI-generated" tell.
- ❌ 5+ evenly-distributed colors with no hierarchy.
- ❌ Gray text on a colored background.
- ❌ Pure black `#000000` or pure white `#ffffff` as base colors — always use tinted values.
- ❌ Color as the *only* indicator of state/meaning (excludes colorblind users) — pair with icon or text.
- ❌ Generic Bootstrap blue (`#007bff`).
- ✅ Use `oklch()` for perceptually-uniform color definitions.
- ✅ Dominant + sharp accent (70-20-10 rule), not an evenly-weighted palette.
- ✅ Commit to dark OR light as the base.

## Layout & Spacing
- ❌ Centering everything — weakens hierarchy; left-align body text and content blocks.
- ❌ Arbitrary padding/margin numbers (13px, 22px, 17px).
- ❌ Predictable, perfectly symmetrical card grids with no visual tension.
- ❌ Margin on children instead of `gap` on the parent (causes margin-collapse bugs).
- ✅ 4px or 8px base spacing scale, applied consistently.
- ✅ More space between groups than within groups.
- ✅ Content width limits: ~65ch for body copy, ~1280px for wide containers.

## Motion
- ❌ Bounce/elastic easing — reads as cheap or dated.
- ❌ Animations longer than ~500-600ms — feels sluggish.
- ❌ Animating `width`/`height`/`top`/`left` — causes layout thrash; animate `transform` and `opacity` only.
- ❌ Scattered micro-interactions with no orchestration, or generic fade-in on every single element.
- ❌ Ignoring `prefers-reduced-motion`.
- ✅ Micro-interactions: 100-200ms. Page transitions: 300-500ms. Easing: `cubic-bezier(0.16, 1, 0.3, 1)`.
- ✅ One orchestrated, memorable moment beats many small effects.

## Interaction & Forms
- ❌ Removing focus outlines without a visible custom replacement.
- ❌ Disabled controls with no explanation of why.
- ❌ Vague error copy ("Input error") instead of specific, actionable copy ("Email needs an @ symbol").
- ❌ Spinners for predictable-shape content — use skeletons instead.
- ❌ Touch targets smaller than 44×44px.
- ✅ Button copy starts with a verb ("Save changes," not "Confirm" or "Submit").
- ✅ Empty states explain why and offer a next action.

## Backgrounds & Atmosphere
- ❌ Solid flat white or light gray with nothing else happening.
- ✅ Subtle gradient meshes, grain/noise textures, geometric patterns, layered transparency, or dramatic shadow depth — pick one that fits the direction, don't stack all of them.

## Accessibility (non-negotiable, not a nice-to-have)
- ❌ Skipping contrast checks on any text/background pairing.
- ❌ Any interactive element without a visible `:focus-visible` state.
- ❌ Non-semantic `<div>` soup instead of `<button>`, `<nav>`, `<main>`, `<section>`.
- ❌ Images without alt text.
- ✅ 4.5:1 contrast for normal text, 3:1 for large text (≥18px bold / ≥24px) and UI components.

## Process
- ❌ Writing code before deciding on an aesthetic direction ("vibes before CSS").
- ❌ Shipping without a self-critique pass — take a screenshot if possible and look for anything generic.
- ❌ Hedging on the aesthetic direction ("a little bit minimal, a little bit maximalist") — pick one and commit.

## Confidence Traps (reasoning-level anti-patterns — catch before they compound)

These are the moments where the skill convinces itself slop is good. Each one is a pass/fail gate:

- ❌ **"I used an unusual font, so the layout doesn't need to be ownable."** Typography is one dimension. The layout, section structure, and interaction patterns still need to pass the World Ownership Test independently. Exotic font on a 3-card feature grid is still a 3-card feature grid.
- ❌ **"The concept is interesting, so the implementation will be too."** A strong concept described in prose ≠ a strong design. The concept must be visible in every component, interaction, and microcopy choice. If the concept is only legible in the hero section and the rest is generic SaaS, the concept failed.
- ❌ **"I scored this 8.5+ so it's done."** Self-scored VERIFY is only valid if each dimension is printed individually and the minimum-dimension rule passes. A blanket "overall feels 9/10" with no per-dimension breakdown is not a VERIFY — it's avoidance.
- ❌ **"The reference inspired this section."** If the reference shaped more than the interaction concept — if it shaped the layout, hierarchy, or visual weight — the contamination guard has been violated. Being inspired ≠ being derivative; name exactly what was adapted and what came from the brief's concept.
- ❌ **"This is sophisticated because it's minimal."** Minimal is an aesthetic choice, not a quality signal. A minimal design still needs the Signature Object to appear consistently, the World Density Test to pass, and the footer to be world-voiced. Stripping things out is not the same as building something ownable.
- ❌ **"The user will fill this in with real content later."** Placeholder copy is design debt. Copy is a design material. Every heading, CTA label, error state, and empty state must be written in the world's voice now. If it reads like a template, it ships like a template.

