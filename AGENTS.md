<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# SK Taxation — Landing Page

Single-page marketing site for **SK Taxation**, a tax advisory firm. Animation-heavy landing page inspired by the content structure of dasanayakaassociates.com (modernised design). **Dark theme is the default**; a light theme is available via the header toggle.

## Stack

- **Next.js 16** (App Router, TypeScript, static output — all sections prerender)
- **Tailwind CSS v4** — no `tailwind.config`; design tokens live in `@theme inline` inside `app/globals.css`
- **Framer Motion 12** for all animations
- Fonts via `next/font`: Fraunces (serif, headings) + Space Grotesk (sans, body)

## Commands

- `npm run dev` — dev server
- `npm run build` — production build (run this to type-check)
- `npm run lint` — eslint

## Theming

Semantic CSS variables are defined on `:root` (light) and `.dark` (dark) in `app/globals.css`, then mapped to Tailwind colors via `@theme inline`. Token names are legacy: **`cream` = page background, `ink` = foreground** — in dark mode they flip, so sections styled `bg-ink text-cream` (Marquee, Process, Footer) intentionally render as light bands on the dark theme.

| Token | Light | Dark | Use |
|---|---|---|---|
| `cream` / `cream-dark` | `#e7f5ef` / `#d4ecdf` | `#071d1a` / `#0c2824` | page + alternate section backgrounds (light = mint tint, NOT white/cream — client requirement) |
| `ink` / `ink-soft` | `#06332c` / `#14584a` | `#e9f5f0` / `#c9e2d8` | headings, inverted bands / body emphasis |
| `muted` | `#47776a` | `#8fada4` | secondary text |
| `gold` / `gold-soft` | `#d3941f` / `#e9b95d` | `#f0b452` / `#c98b2d` | primary accent (matches logo) |
| `teal` | `#089a86` | `#35d0bc` | secondary accent, gradients |
| `line` | `#bcdfd0` | `#17352f` | borders/dividers |
| `surface` | `#fbfffd` | `#0e2b26` | cards, form panels |

- Theme is applied before first paint by an inline script in `app/layout.tsx`: **dark unless** `localStorage["sk-theme"] === "light"`. `ThemeToggle` (in the header) flips the `.dark` class and persists the choice.
- The `dark:` variant is class-based (`@custom-variant dark`), but components rarely need it — token flipping handles both themes.
- `.text-shine` (globals.css) = teal→gold gradient text, used on the accent word of section headings.
- Headings use `font-serif`; section kickers are uppercase letter-spaced sans with a gold rule.

## Structure

`app/page.tsx` composes: Header → Hero → Marquee → About → Services → WhyUs → Process → Testimonials → Contact → Footer, plus `ScrollCompanion` (fixed overlay). All components live in `components/`, one file per section. The logo is a text wordmark (`components/Logo.tsx`) — no image asset.

Notable components:
- `Hero` — premium **dark treatment in both themes**: accounting photo (`public/hero-bg.jpg`) under a deep-teal overlay, so it uses fixed hex colours (not tokens). The header floats over it with fixed light colours until scrolled (`Logo tone="overlay"`, `ThemeToggle overlay`).
- `HeroIllustration` — glassmorphism dashboard cards (analytics + savings ring + compliance checklist), fixed light-on-dark styling, staggered entrances and floating loops; top-aligned with the headline.
- `ScrollCompanion` — character pinned to the right edge that travels top→bottom with scroll progress (spring-smoothed): **sun in light mode, moon in dark mode** (tracks the `.dark` class with a MutationObserver). Hidden for reduced motion.
- `ThemeToggle` — sun/moon button; see Theming.

Shared animation primitives are in `components/Reveal.tsx`:
- `Reveal` — scroll-triggered fade/slide (uses `whileInView`)
- `SplitText` — word-by-word masked headline reveal. **Gotcha:** the animated words are fully clipped by `overflow-hidden`, so `whileInView` on them never fires; visibility is observed on the unclipped container via `useInView` instead. Don't "simplify" this back.

All animation components respect `prefers-reduced-motion` via `useReducedMotion`.

## Conventions

- Update `PROGRESS.md` with a dated entry (date **and** time) after any meaningful change — client requirement.
- Contact details (`+94 11 234 5678`, `hello@sktaxation.com`) are placeholders pending real client info.
- The contact form has no backend: submit builds a `mailto:` URL from the field values (opens the visitor's mail app with a pre-filled draft) and then shows a thank-you state.
