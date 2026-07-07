# Design Tokens Architecture

## Document the Aesthetic Before Writing Code
```markdown
## The Vibe
[1-2 sentences describing the visual feel]

## Inspirations
- [Reference 1 - what to take from it]
- [Reference 2 - what to take from it]

## Emotions to Evoke
| Emotion | How It's Achieved |
|---|---|
| [X] | [specific technique] |
```

## Three-Layer Token System
```css
/* Layer 1: Primitives — raw values, never used directly in components */
--blue-500: oklch(0.55 0.2 250);
--gray-100: oklch(0.95 0.005 250);
--radius-md: 0.5rem;

/* Layer 2: Semantic — meaning-based, what components reference */
--color-primary: var(--blue-500);
--color-surface: var(--gray-100);
--radius-button: var(--radius-md);

/* Layer 3: Component — scoped to one component */
--btn-bg: var(--color-primary);
--btn-radius: var(--radius-button);
--btn-padding: var(--space-2) var(--space-4);
```
This layering allows full theme switching by remapping Layer 2 only. Mirror the same three layers in Tailwind config and, optionally, a TypeScript export for use in JS/TS logic (charts, canvas, etc).

```typescript
// tailwind.config.ts
colors: {
  primary: 'hsl(var(--primary))',
  tone: { primary: 'rgb(var(--tone-primary))' },
}
```

## Color Roles (every palette needs these five)
| Role | Purpose | Usage |
|---|---|---|
| Primary | Brand identity | Buttons, links, active states |
| Neutral | Text, backgrounds | Body text, cards, dividers — always tinted, never pure gray |
| Accent | Secondary actions | Tags, badges, highlights |
| Semantic | Feedback | Success / warning / error / info |
| Surface | Layered backgrounds | Cards, modals, overlays, popovers |

Dominant + sharp accent: use a 70-20-10 distribution (primary–secondary–accent), not 5 evenly-weighted colors. Commit to dark OR light as the base — don't hedge with a gray middle-ground.

### Surface Layering for Depth (dark mode)
```css
:root {
  --surface-0: hsl(220 15% 8%);   /* page background */
  --surface-1: hsl(220 15% 12%);  /* card */
  --surface-2: hsl(220 15% 16%);  /* raised element */
  --surface-3: hsl(220 15% 20%);  /* popover/modal */
}
```
Build depth through lightness steps, not just drop shadows. Never use pure black `#000` as a base or pure white `#fff` for text — use tinted blacks/whites that match the palette.

### Color Space
Prefer `oklch()` for perceptually-uniform color definitions and for shadow colors; it makes generating consistent tints/shades far easier than HSL/RGB.

## Typography Scale (1.25 modular ratio)
```css
--text-xs:   0.64rem;   /* 10px */
--text-sm:   0.8rem;    /* 13px */
--text-base: 1rem;      /* 16px — body default, never go smaller */
--text-lg:   1.25rem;   /* 20px */
--text-xl:   1.563rem;  /* 25px */
--text-2xl:  1.953rem;  /* 31px */
--text-3xl:  2.441rem;  /* 39px */
--text-4xl:  3.052rem;  /* 49px */
```
Use 1.25 or 1.333 as the modular scale ratio. For hero/display sizing, prefer larger jumps (3x+) over timid 1.5x increments — confident size contrast reads as more intentional.

## Spacing (8px/4px base unit)
```css
--space-1: 0.25rem;  /* 4px  - tight gaps */
--space-2: 0.5rem;   /* 8px  - input padding */
--space-3: 0.75rem;  /* 12px - button padding */
--space-4: 1rem;     /* 16px - default spacing */
--space-6: 1.5rem;   /* 24px - section padding */
--space-8: 2rem;     /* 32px - section gaps */
--space-12: 3rem;    /* 48px - major breaks */
--space-16: 4rem;    /* 64px - page rhythm */
```
Use `gap` on the parent instead of margins on children (avoids margin-collapse bugs). Give more space between groups than within groups (Gestalt proximity). Never use arbitrary pixel values outside the scale.

## Motion Tokens
```javascript
// tailwind.config.ts
keyframes: {
  shimmer: { '0%': { backgroundPosition: '200% 0' }, '100%': { backgroundPosition: '-200% 0' } },
  'pulse-glow': { '0%,100%': { opacity: '1' }, '50%': { opacity: '0.5' } },
  'slide-in': { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
},
animation: {
  shimmer: 'shimmer 1.5s ease-in-out infinite',
  'pulse-glow': 'pulse-glow 1.8s ease-in-out infinite',
  'slide-in': 'slide-in 0.2s ease-out',
}
```
Easing: `cubic-bezier(0.16, 1, 0.3, 1)` (fast-in, slow-out) reads as premium; bounce/elastic easing reads as dated — avoid it. Always respect `prefers-reduced-motion`.

## Surface Component Pattern (CVA)
```tsx
const surfaceVariants = cva(
  'rounded-lg backdrop-blur-sm transition-colors',
  {
    variants: {
      layer: {
        panel: 'bg-surface-1/40 border border-white/10',
        tile: 'bg-surface-2/60 border border-white/5',
        chip: 'bg-primary/10 border border-primary/20 rounded-full',
      },
    },
  }
);
export function Surface({ layer, children }: SurfaceProps) {
  return <div className={surfaceVariants({ layer })}>{children}</div>;
}
```
Glass/blur panels need `backdrop-filter: blur(...)` to actually read as glass — don't skip it. Modulate high-saturation colors with opacity (rgba/oklch alpha) rather than using them at full strength across large areas.

## Loading States
```tsx
export function Skeleton({ className }: { className?: string }) {
  return (
    <div className={cn(
      'rounded-md bg-muted animate-shimmer',
      'bg-gradient-to-r from-muted via-muted-foreground/10 to-muted bg-[length:200%_100%]',
      className
    )} />
  );
}
```
Prefer skeletons over spinners for perceived performance.

## File Structure
```
styles/
├── globals.css          # CSS variables, base styles
├── design-tokens.ts     # TypeScript exports
└── theme.css            # Component-level patterns
tailwind.config.ts        # Token integration
components/ui/
├── surface.tsx
├── skeleton.tsx
└── button.tsx
```

## Recognizable Aesthetic Directions
Pick ONE and commit — timid, hedged designs are forgettable.

| Direction | Characteristics | Use When |
|---|---|---|
| Brutally Minimal | Sparse, monochrome, massive type, raw edges | Dev tools, productivity |
| Maximalist Chaos | Layered, dense, overlapping, controlled disorder | Creative/entertainment |
| Retro-Futuristic | Neon accents, CRT texture, glow, monospace | Gaming, tech-forward brands |
| Warm Cyberpunk | Tan/beige base, emerald accents, glass panels | Fintech, data products |
| Organic/Natural | Soft curves, earth tones, hand-drawn touches | Wellness, sustainability |
| Luxury/Refined | Subtle animation, premium type, restrained palette | High-end, fashion |
| Editorial/Magazine | Strong grid, dramatic headlines, whitespace as feature | Content, publishing |
| Brutalist/Raw | Exposed structure, harsh contrast, anti-design | Portfolios, art |
| Industrial/Utilitarian | Functional, monospace, data-dense | B2B, enterprise, dashboards |

## Token Pollution Guard

A token system that grows unchecked becomes noise. Before shipping:
- **Count your tokens.** A full design system should have ~30–50 CSS custom properties. >80 is a red flag.
- **Check semantic integrity.** Every `--semantic-*` variable must map to exactly one `--primitive-*`. If two primitives map to the same semantic role, consolidate.
- **Check Tailwind conflict.** If using Tailwind, every custom token must appear in `tailwind.config.ts` as a theme extension OR be applied only via inline `style` or `@apply` — never both, never neither.
- **Hardcoded value audit.** After implementing all components, grep for raw hex values (`#`), raw pixel values not from the scale (`px` values other than `0`, `1`, and your scale values), and raw HSL/RGB literals. Every hit is a token violation — replace with the semantic variable.
- **Token ownership.** If you can delete a token and nothing breaks, it wasn't doing work — remove it.

