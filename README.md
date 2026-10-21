# SK Taxation — Landing Page

Single-page marketing site for **SK Taxation**, a tax advisory firm.

**Live preview:** https://dumanga.github.io/sk-taxation-landing/

## Highlights

- Premium dark hero with an accounting photo backdrop and animated glass dashboard cards
- Light / dark theme toggle (dark by default), remembered between visits
- Scroll-triggered animations throughout, plus a sun/moon character that travels with the scroll
- Fully responsive; respects `prefers-reduced-motion`
- Contact form opens the visitor's mail app with a pre-filled consultation request

## Stack

Next.js 16 (App Router, static export) · TypeScript · Tailwind CSS v4 · Framer Motion 12

## Local development

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other commands:

```bash
npm run build   # production build + type-check (outputs to ./out)
npm run lint    # eslint
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the static
export and publishes it to GitHub Pages. The workflow sets `GITHUB_PAGES=true` so
the build picks up the `/sk-taxation-landing` base path; local development is
unaffected and still runs at the root.

## Notes

- Phone numbers and email are the client's confirmed details; the hero stats are placeholders pending confirmation.
- See [AGENTS.md](AGENTS.md) for the design system and component architecture, and
  [PROGRESS.md](PROGRESS.md) for the change log.
