name: akr-inspo-design
version: 3.3.0
last_updated: 2026-07-05
description: "Pulls UI reference components, animations, design-principle docs, and full-site designs from Ajay's personal repo, layers in taste-skill's anti-slop design rules plus an AKR creative-direction layer (concept extraction, world logic engine, typography intelligence, anti-SaaS detection, signature components), scaffolds new projects, implements components directly, and runs SEO audits when asked."

AKR-Inspo Design Skill

Trigger Rules

Trigger ONLY for: UI implementation requests, component generation, site/page redesign, animation requests, template scaffolding (bun create akr), or explicit SEO/AEO/GEO audit requests.
Do NOT trigger for: General design discussion, feedback on existing UI, color-palette questions, or plain frontend debugging with no build/redesign ask.

AKR Core Philosophy

Never start from layout. Always start from meaning.
PRD → Audience → Brand Personality → Core Metaphor → Narrative → Visual Language → Signature Components → Layout → Implementation. Layout is the result of this chain, never the starting point.

AKR Rule #0: Memorability is more important than beauty. A beautiful generic design fails. A memorable design succeeds.

AKR Rule #1: Do not design websites. Design worlds. Every project must establish a recognizable visual universe — product meaning, metaphor, and narrative — before any screen or layout gets built.

AKR Rule #2: Creativity must increase usefulness. Every signature component, motion system, illustration, interaction, and storytelling mechanism must improve at least one of: understanding, discovery, navigation, trust, decision-making, or conversion. If it only looks cool, remove it.

AKR Rule #3: Every design decision must answer "why can this only exist in this product?" If the answer could apply equally to a competitor, the idea isn't specific enough.

AKR Rule #4: Implementation Bias. When multiple valid solutions exist: prefer implementation. Do not continue generating new concepts once a valid concept has been selected. Move toward building to prevent analysis loops.

AKR Rule #5: Complexity Budget. Every world has a complexity limit. If adding a new component, interaction, section, or system does not significantly improve understanding, discovery, navigation, trust, or conversion — remove it.

Reference Priority (Highest Wins)

Existing project codebase

Existing brand/design system

AKR-Inspo

React Bits

Design principles (Design md files/awesome-design-md/design-md, taste-skill rules)

Original implementation (nothing fits — build fresh)

Reference contamination guard: References inspire; they do not define. At least 60% of the final experience must originate from the Step 2.5 Concept Extraction output.

Step 0 — Get Full Context First (MANDATORY)

Never touch the repo, scaffold a project, or write SEO files before this.

Scan the project structure safely (max depth 3). Read only core config files and the specific files tied to the requested route/component. Do not ingest the entire file tree.

Check for a PRD/requirements doc. Read it fully if present.

Answer this checklist explicitly, out loud, before writing code/fetching:

Is there a PRD/requirements doc, OR did the user state what this is for, who it's for, and the exact component wanted? (yes/no)

Is there an existing, inspectable brand/design system in the project? (yes/no)

Is the request a single, narrowly-named component (not a redesign/new project)? (yes/no)

Hard Gate: If all three are "no," or the ask is a new project/redesign with none of the above present: STOP HERE. Output only the clarifying questions below and end your turn:

What is this project/page for, and who's the user?

Any existing brand colors, fonts, or design language to match?

Which exact component(s)/section(s) do you want?

Any must-avoid patterns or must-keep elements?

(If SEO/GEO mentioned) What's the production domain?

Brand Extraction: Pull primary color, accent color, typography, category, audience, and existing design language. Existing brand always wins over imported references.

Step 1 — New Project Bootstrap (bun create akr)

Output is a base template only. Keep it minimal.

Scaffold runnable base template with placeholder/test data in a default layout shell.

Pick ONE reference design from assets/images (top-300-sites moodboard) matching Step 0 brief. State which one and why.

Pick font pairing per the Typography Intelligence System.

Apply design + font to the base layout only. Reuse existing design tokens/primitives before fetching from AKR-Inspo or React Bits.

Step 2 — Design Taste Rules (Leonxlnx/taste-skill) + AKR Identity

Infer Context: State it in one line: "Reading this as:  for ,  language, leaning toward ".

Dual-mode: Open every page in light and dark, keep parity. Dark mode first by default.

Rules: No pure #000000 / #ffffff. No neon glows or generic AI-slop signatures unless requested. WCAG AA minimum on body text.

AKR Identity Layer: Apple-level spacing discipline, Google-Labs-style experimentation in interaction, brutalist restraint in ornamentation. Typography first, content before effects, motion only when it clarifies.

AKR Visual DNA: Controlled asymmetry, intentional imperfection, editorial typography, storytelling layouts, object-based interfaces. Avoid empty glassmorphism, random gradients, bento-grid defaults, and decorative motion.

Anti-SaaS Detection: Check for generic-SaaS fail conditions (e.g., standard 3-card feature grid, Vercel/Stripe lookalike > 60%). If triggered, return to Step 2.6.

Step 2.5 — Concept Extraction & World Engine (MANDATORY)

Skip only for single scoped component edits.

Part A: Concept Extraction

Extract and state explicitly:

Product: 

Audience: 

Brand Personality: 

Metaphor: 

Narrative: <how the product's story plays out>

Signature Object: <a recurring visual/interaction motif>

Signature Interaction: 

Visual Language: <typography/color/motion direction>

Part B: AKR World Engine Pipeline

Execute in exact order. This determines structure and content.

World Audit: Check Step 2.5 concept. Clear metaphor? Narrative arc? Signature object? If vague, refine Concept Extraction first.

World Logic Engine: Define World Rules, Vocabulary, Objects, Systems, and Relationships. Anything that breaks these rules gets rejected.

World Ownership Test:

Remove: Logo & Brand Name.

Ask: Can this world belong to another product?

YES → Refine metaphor (it is too generic).

NO → Pass.

Narrative Arc Engine:

The user journey MUST follow: Introduction → Understanding → Exploration → Evaluation → Decision → Commitment.

Map every section to a stage.

If multiple sections perform the same stage: Merge or remove.

Section Intelligence Matrix:

Determine levels for: Trust, Conversion, Narrative, Community, Education, Complexity.

Decide: Required Sections, Optional Sections, Forbidden Sections.

For every section, ask: "Why does this exist?"

If the honest answer is "Most websites have it" → Delete it.

Section Ownership Test:

For every required section ask: Could this section appear unchanged in a competitor product?

YES → Redesign it to belong to this world.

NO → Pass.

Component Intelligence Engine:

For every section, determine: Information Density, User Intent, Exploration Need, Trust Need, Conversion Need.

Generate components accordingly.

High Exploration → Interactive Maps, Visual Graphs, Explorers.

High Trust → Evidence Components, Case Studies, Verification Systems.

High Conversion → Decision Components, Comparison Systems, Action Panels.

Never default to: Card Grid, Feature Grid, Testimonial Carousel.

Component Ownership Test:

For every component ask: Could this component appear inside another product unchanged?

YES → Redesign.

NO → Pass.

(Catches generic cards, tables, and accordions)

Pattern Translation Engine:

Never import a generic section directly (e.g., Testimonials, Pricing, FAQ, Features, Comparison, Dashboard).

Translate it into the world's language first.

Examples:

Forge World Testimonials → Architect Field Reports

Space World Testimonials → Discovery Logs

Music World Testimonials → Signal Echoes

World Expansion & Feature Translation: Translate every generic feature into the world's vocabulary (e.g., Search → Scanner, Dashboard → Control Center). None ships in generic terms.

Signature Interaction Engine:

Generate one interaction users will remember.

Ask: What interaction can only exist in this product?

Prioritize: Understanding, Exploration, and Discovery over pure decoration.

Signature Component Expansion:

Every signature component MUST: Teach something, help navigation, improve understanding, or improve decision making.

Reject: Cool looking decorative widgets that do none of the above.

World Completion Test:

Imagine this world is real. What is missing?

Check for missing: Objects, Places, Tools, Archives, Systems, Experiences.

Generate these missing elements.

Experience Expansion: Fold the best 1-3 missing elements from the World Completion Test into the actual build plan.

World Density Engine:

The world MUST appear in: Hero, Navigation, Cards, Sections, Interactions, Loading States, Empty States, Footer, Microcopy.

If the world only exists in the hero → FAIL. Pick 2-3 touchpoints and apply the world there.

World Evolution Rule:

The signature object MUST evolve throughout the experience (e.g., Raw Material → Blueprint → Assembly → Artifact).

Never repeat the exact same representation everywhere.

Signature Object Evolution Check:

Track the signature object through the experience: Hero, Navigation, Sections, Interactions, Footer.

If the object disappears for more than 2 sections → FAIL. (Prevents worlds from fading halfway down the page).

Empty State Intelligence:

Loading States, Empty States, and Error States MUST belong to the world.

Example (NodeForge): "No package found" → "No artifacts detected in the forge."

Footer Consistency Rule:

The footer MUST continue the world's narrative.

A generic link-list footer automatically fails visual consistency. Redesign it.

Part C: Typography Intelligence System

Strategy: Determine roles (Display, Body, Data, Utility) based on concept.

Candidates: 2-3 pairings from existing brand, internal assets, or Fontjoy. Never blindly accept math-generated pairings.

Score: Brand fit (40%), Readability (25%), Originality (15%), A11y (10%), Tech (10%). State pick and runner-up.

Ownership Test: Strip logos/colors. Does the product feel distinctive from typography alone? If no, retry.

Step 2.6 — Creative Exploration Engine

Generate three directions before selecting a reference:

Direction A (Safe): Conventional patterns.

Direction B (Creative): Distinct visual language, low technical risk.

Direction C (Experimental): Boldest interpretation of metaphor.

Select winner: Do not default to Direction A unless explicitly requested. Priority is memorability. Run a Design Director Review (What feels generic? What feels expected?) to refine the chosen direction.

Step 3 — Browse AKR-Inspo

Never clone the whole repo. Use GitHub Contents API to browse only the needed subtree.

React Only: Combine with reactbits.dev (DavidHDev/react-bits) for micro-animations/text/hover effects.

Fallback: Use local cache, ask user for code, or build from rules. Do not stall.

Step 4 — Map Request → Folder

Buttons, cards, pricing, nav, footer: Components-maintiles/<Category>

Framer/GSAP micro-interactions: Frammer&21st dev Components/

Full site: Entire site/<Site Name>

Scroll animations: Scroll animations/src

3D text/WebGL: 3d text animations/good ones

Design principles: Design md files/awesome-design-md/design-md

React micro-interactions: DavidHDev/react-bits

Scoring Candidates: Originality (30%), Visual fit (25%), Brand fit (20%), Tech fit (15%), A11y (10%).

Step 5 & 6 — Read & State Confidence

cat the matched component fully before touching the project.

State Confidence:

High (Exact match) → Proceed.

Medium (Adaptation needed) → Flag adaptation, proceed.

Low (No match/unclear) → STOP and ask.

Step 7 — Implement Directly

Detect stack and rewrite fetched code to match conventions.

Install missing deps only if native APIs or existing deps can't handle it. Keep payload small.

Target Lighthouse 90+, CLS < 0.1, LCP < 2.5s.

Signature Design Requirement (Full Builds): Must land at least 3 signature components, 1 signature motion system, 1 signature illustration system, 1 signature interaction, and 1 signature storytelling mechanism.

CRITICAL: Every page MUST contain at least one signature component. No page may rely entirely on generic components.

Signature Object Persistence: The Step 2.5 object must appear throughout the experience, evolving but never disappearing.

Visual Consistency Check: Every section must visibly belong to the same universe as the hero.

Step 8 — SEO / AEO / GEO Compliance

Trigger ONLY when explicitly requested.

Findable: HTTPS; /robots.txt (allow GPTBot, ClaudeBot, PerplexityBot, Google-Extended); /sitemap.xml; Canonical <link>.

Quotable: Meta descriptions (50-160 chars); ≥100 words real body text; Schema JSON-LD; FAQ schema only if real Q&A.

Understandable: One descriptive <h1>; Clean hierarchy; OG tags; Alt text on ≥50% images.

Trustworthy: ≥3 internal links; ≥2 outbound citation links; generate /llms.txt.

Report validation plainly (✓ format).

AKR Quality Gate (Full Builds Only)

Run these checks in order, then score /10 (Average):

Design Compression Test: Summarize product identity in one sentence.

Section Uniqueness Test: Could a section be copied to another SaaS unmodified?

Emotional Memory Test: What is remembered after 24hrs?

First Impression Test: 3 seconds to know what/why/how it's different.

Competitive Differentiation Test: What can users do here that they can't elsewhere?

Interaction Ownership Test: Could a competitor claim the core interaction?

Brand Recognition Without Logo.

Scores: Originality, Usefulness, Storytelling, Worldbuilding, Consistency, Memorability, Logo-less Recognition, Differentiation.

< 8.5 → FAIL, return to 2.6.

9.0–9.4 → AKR Quality.

9.5+ → AKR Signature.

Step 9 — Write akr-design.md

Create/update akr-design.md in the project root.

Document: provenance (repo/path/adaptations) for fetched components, dependencies added, Step 2.5 concept summary, World Engine section list (required/optional/excluded + reasons), feature translations, Typography System block, Step 6 confidence, taste rules applied, AKR score, and SEO validation (if run).

Report briefly in chat, point to the file for details.

Notes

AKR-Inspo is a personal moodboard, not a package — treat contents as reference to adapt, never import as-is.

If nothing in the repo fits, say so and build original UI instead of forcing a mismatch.

If repo structure changes, refresh the map by listing the root: curl -s "https://api.github.com/repos/ajaykumarreddy-k/AKR-Inspo/contents/"