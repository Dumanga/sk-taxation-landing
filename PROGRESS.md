# Progress Log — SK Taxation Landing Page

## 2026-08-09 16:22

**Client approved the design. Created the content-collection workbook.**

- Built `SK-Taxation-Website-Content-Form.xlsx` (7 sheets) for the client to fill in and return:
  Start Here (instructions + legend), 1. Business Details, 2. Testimonials, 3. Key Numbers,
  4. Services, 5. About & Team, 6. Logo & Images.
- Yellow cells = client input; grey italic rows = worked examples. Testimonials and Team sheets
  include a realistic sample row; Testimonials also explains what a testimonial is, how to ask
  clients for one, and what makes a strong one. Yes/No and Keep/Change/Remove cells use dropdowns.
- **Flagged the fabricated content prominently.** The hero stats (15+ years, 200+ clients,
  98% retention) and all three testimonials currently on the live site were written by us as
  placeholders. The "Key Numbers" sheet carries a red warning that these are invented, must be
  replaced, and could be treated as misleading advertising if published unverified; the
  "Start Here" sheet repeats the warning and offers to take the preview offline until the real
  content lands.
- Validated the file: zip integrity OK, all OOXML parts present, read back cleanly via openpyxl.
- File lives in the repo root, untracked (not committed — it is a client document, and the repo
  is public).

**Next once the form comes back:** swap the real details into `Contact.tsx`, `Footer.tsx`,
`Testimonials.tsx`, `Hero.tsx` (stats), `Services.tsx` and `About.tsx`, then redeploy.

## 2026-08-09 01:40

**Deployed to GitHub Pages for client review.**

- Live URL: **https://dumanga.github.io/sk-taxation-landing/**
- Configured static export in `next.config.ts`: `output: "export"`, `trailingSlash: true`,
  `images.unoptimized`, and `basePath`/`assetPrefix` gated behind `GITHUB_PAGES=true` so local
  dev still runs at the root.
- **Bug caught pre-deploy:** `images.unoptimized` bypasses the image loader, so `next/image`
  emitted `src="/hero-bg.jpg"` without the base path — the hero photo would have 404'd on Pages
  while working fine locally. Fixed by exporting `NEXT_PUBLIC_BASE_PATH` from the config and
  prefixing the src in `Hero.tsx`.
- Added `.github/workflows/deploy.yml` (build + `actions/deploy-pages`, `enablement: true`).
- Verified the built export locally by serving `out/` under a `/sk-taxation-landing/` path:
  index, hero image, JS and CSS all 200; page rendered correctly and the theme toggle worked.
- Pruned unused create-next-app SVGs from `public/`; gitignored `.claude/settings.local.json`;
  replaced the scaffold README with a project one.
- Repo was private (Pages needs public on the free plan) — **made public with the client's
  approval** after scanning for secrets (none: no `.env`, contact details are placeholders).

**Note for client review:** contact details are still placeholders, and the contact form opens
the visitor's mail app rather than posting to a backend.

## 2026-08-09 01:17

**Two hero tweaks from client review.**

- Removed the bottom fade overlay (`from-transparent to-cream`) between the hero and the services marquee — in light mode it read as an unwanted white shadow. The hero photo now runs straight into the marquee band in both themes.
- Glass cards drop to the headline's line on laptops: illustration column padding `lg:pt-1` → `lg:pt-9` (36px). Cards now start at 176px vs the headline box at 148px, instead of sitting up at the kicker. Mobile/tablet layout untouched (the offset is `lg:` only).
- Re-verified at an 800px-tall viewport: stats row still ends at 732px and the marquee still enters at 756px, so the first screen is unchanged; no gradient-to-cream elements remain in either theme. Production build passes.

## 2026-08-09 01:11

**Hero polish round: first-screen fit, aligned glass cards, theme-reactive hero.**

- **First-screen fit (laptop)**: compressed the hero's vertical rhythm (top/bottom padding, headline scale capped at 3.6rem, tighter paragraph/CTA/stats spacing). Verified at a 800px-tall viewport: stats row bottom lands at 732px and the services marquee peeks in at 777px — both visible without scrolling (client's 14" MacBook has more room than that).
- **Glass cards realigned**: replaced the absolute-positioned, overlapping layout with a deliberate 5-column grid — main analytics card (3 cols) + right column stack (ring card, compliance card) with even 16px gutters. Removed the decorative rings that read as stray overlapping shapes. Verified zero bounding-box overlaps.
- **Theme-reactive hero**: hero stays premium-dark in both themes, but now visibly responds to the toggle via new `--hero-overlay` / `--hero-glass` variables — light mode gets a brighter green-teal overlay (more photo showing through), 2× brighter glass cards, and the bottom fade into the page colour turns mint. Dark mode keeps the deep near-black treatment.
- Production build passes; measurements verified via DOM (preview pane hidden).

## 2026-08-09 01:00

**Hero redesign: premium dark photo hero (both themes), professional glass dashboard element, raised alignment; light theme color-blocking.**

- **Hero**: full-bleed accounting photo (`public/hero-bg.jpg`, tax forms + calculator) under a deep-teal overlay — the hero is now a fixed dark "premium" treatment in BOTH themes, so the first impression is identical and striking. Parallax retained; gold/teal glows on top.
- **New hero element** replacing the cartoon-style SVG: a glassmorphism dashboard composition (frosted `backdrop-blur` cards with fixed light-on-dark styling) — main analytics card ("98.2% returns filed on time" + gold sparkline + effective-rate delta), a 24% savings progress ring, and a compliance calendar checklist with Filed/Due status pills. Staggered entrances + independent floating loops.
- **Alignment fix**: the element column is `items-start` and top-aligned with the kicker/headline (was vertically centred, sitting too low).
- **Header** is now overlay-aware: fixed light text/logo/toggle while floating over the dark hero, switching to theme tokens once scrolled or when the mobile menu opens (`Logo` gained a `tone` prop: default/footer/overlay).
- **Light theme punch-up**: WhyUs cards now carry teal/gold gradient tints, Services fades cream-dark→cream, Testimonials gets a teal-tinted gradient band.
- Verified via DOM (preview pane hidden): photo loads, 3 glass cards render, element top (176px) level with kicker (160px), overlay nav colour correct, dark default intact; production build passes.

## 2026-08-09 00:50

**Light theme recolour — off the white/cream base onto a mint-teal palette.**

- Client feedback: light mode still too dull; no cream *or* plain white. Light theme now sits on a visibly coloured mint base: page `#e7f5ef`, alternate sections `#d4ecdf`, borders `#bcdfd0`, cards `#fbfffd`.
- Accents saturated for pop: gold `#d3941f`, teal `#089a86`; deep teal ink `#06332c` kept for contrast (WCAG-safe on the mint backgrounds).
- Dark theme untouched apart from slightly minted inverted-band tones (`--ink: #e9f5f0`). Dark remains the default theme.
- Hero glow washes strengthened (gold/teal at 20% opacity).
- Verified via DOM (preview pane was hidden): light tokens resolve to the new mint palette, dark default restored; production build passes.

## 2026-08-09 00:46

**Modern revamp: dark-first theming, new fonts, vector hero, themed scroll character, mailto contact form.**

- **Theme system**: semantic CSS variables on `:root`/`.dark` mapped through Tailwind v4 `@theme inline`. **Dark is now the default** (applied pre-paint via inline script; choice persisted in `localStorage`). New `ThemeToggle` (sun/moon) in the header.
- **New light palette** replacing the dull cream: crisp white/mint backgrounds (`#f7faf9`/`#e9f2ef`), deep teal ink (`#08322c`), vivid amber gold (`#c98b2d`) + new teal accent (`#0e9384`); dark theme uses deep teal-black with brighter gold/teal. Dark sections (Marquee/Process/Footer) intentionally invert to light bands in dark mode.
- **Fonts**: Playfair Display/Jost → **Fraunces** (headings) + **Space Grotesk** (body).
- **Hero**: replaced the stock photo with `HeroIllustration` — a hand-built animated SVG scene (dashboard with rising chart, receipt marked PAID, coin stack, shield badge, sparkles) that floats gently and recolours itself per theme; dot-grid + gold/teal glow background; removed `public/hero-accounting.jpg`.
- **`.text-shine`** teal→gold gradient applied to the accent word of section headings (About, Services, Process, Contact).
- **ScrollCompanion**: the character that travels down the right edge with scroll is now theme-aware — **sun with spinning rays in light mode, cratered moon with twinkling stars in dark mode** (blinking face on both); tracks the `.dark` class via MutationObserver.
- **Contact form**: submit now composes a `mailto:hello@sktaxation.com` URL with subject + all field values and opens the visitor's default mail app; thank-you copy updated accordingly.
- Verified: production build passes; both themes checked in browser (toggle persists, tokens flip, sun/moon swap confirmed); form fields all named and included in the draft.

## 2026-08-03 21:51

**Hero background image added.**

- Added a real accounting photo to the hero (tax forms, calculator, pen — Unsplash, free licence) at `public/hero-accounting.jpg` (290 KB, 2200×1262).
- Rendered full-bleed behind the hero via `next/image` (`fill` + `priority`), desaturated and blended with two cream gradient washes (left-to-right and bottom-to-top) so the light theme and headline legibility are preserved; image pans with the existing parallax.
- Tuned `object-position` (35% 60%) so the calculator/forms — not the photographer's arm — sit under the right side of the hero.
- Replaced the old flat cream circle with a gold-tinted ring + kept the spinning dashed dial on top of the photo.
- Verified in browser at desktop and mobile widths; production build passes.

## 2026-08-03 20:34

**Initial build — complete landing page shipped.**

- Studied reference site (dasanayakaassociates.com) via browser: captured full-page screenshot and extracted content structure (hero → about → services → why-us → team → testimonials → contact → footer).
- Scaffolded Next.js 16 (App Router, TypeScript) + Tailwind CSS v4 + Framer Motion 12 in the repo root.
- Defined light theme design system in `app/globals.css` (cream background, deep-ink green, gold accent — matched to the SK Taxation wordmark aesthetic).
- Set up fonts: Playfair Display (headings) + Jost (body) via `next/font`.
- Built all sections as components:
  - `Header` — fixed, shrinks + blurs on scroll, animated mobile menu
  - `Hero` — word-by-word masked headline reveal, parallax decorative circles, slow-spinning dial, animated stat counters (15+ / 200+ / 98%)
  - `Marquee` — infinite scrolling specialties strip on ink background
  - `About` — reveal-on-scroll copy + 2×2 capability grid
  - `Services` — editorial accordion list (Tax Services, Accounting Services, Financial Advisory, Audit & Assurance, Fractional CFO Services) with hover-expand descriptions, gold ↗ arrows and "Need more help?" pill (per client's reference image)
  - `WhyUs` — three lift-on-hover cards
  - `Process` — dark section, 4 steps with scroll-progress gold line
  - `Testimonials` — auto-rotating quote carousel with dot navigation
  - `Contact` — split layout: contact details + consultation form (UI-only, thank-you state)
  - `Footer` — dark, wordmark + nav + contact columns
- Fixed a real bug found during visual verification: `SplitText` words are fully clipped by `overflow-hidden`, so `whileInView` never fired (IntersectionObserver reports zero intersection for clipped elements). Switched to `useInView` on the unclipped container.
- All animations respect `prefers-reduced-motion`.
- Verified: production build passes (static prerender), full page visually checked in browser at desktop and narrow widths — hero, all sections, and footer render and animate correctly.

**Open items / placeholders:**
- Phone, email, and working hours are placeholders — swap in real client details.
- Contact form has no backend yet (front-end only).
- Favicon is still the default Next.js one; a branded favicon could be generated from the wordmark.
