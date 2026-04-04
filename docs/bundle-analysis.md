# Bundle analysis and Core Web Vitals baselines

## Bundle analyzer

Run a production build with the webpack bundle analyzer UI:

```bash
npm run analyze
```

This sets `ANALYZE=true` and runs `next build` with `@next/bundle-analyzer` (see `next.config.js`). Use the treemap to find large chunks and which modules feed the homepage and heavy routes.

For a normal CI-style build without the analyzer:

```bash
npm run build
```

## Lighthouse (lab) — suggested URLs

Run Chrome DevTools Lighthouse (mobile) after meaningful CWV changes and record **LCP element**, **Total Blocking Time**, and **JS transfer size**:

| Route | Why |
| --- | --- |
| `/` | Homepage LCP hero, main bundle |
| `/blog` | Blog index and shared layout |
| `/markets/retail` | Representative markets page (adjust if your canonical path differs) |

Store before/after numbers in your release notes or ticket; this repo does not commit Lighthouse JSON by default.

## `next/image` and Cloudinary

`next.config.js` keeps `images.unoptimized: true` until a Cloudinary loader (or full `next/image` optimization) is validated across all remote hosts. See the comment in `next.config.js` under `images`.

## ISR / revalidation (reference)

| Page | `revalidate` (seconds) |
| --- | ---: |
| `pages/index.js` (home) | `86400` (prod), `10` (dev) |
| `pages/blog/index.jsx` | `3600` |
| `pages/blog/[slug].jsx` | `3600` |
| `pages/docs/[slug].jsx` | `3600` |
| `pages/resources.jsx` | `86400` |

Tune only with product input on content freshness vs. origin load.

## Heavy routes (bundle audit)

- **`pages/white-paper-future-of-ergonomic-work.jsx`** — very large single file; most cost is self-contained JSX and `framer-motion`. No shared root layout pulling extra deps beyond normal page scope.
- **`pages/enterprise-buyer-guide.jsx`** — imports `KeyPointsCard`, `BrowserComparisonTable`, etc.; keep new shared imports out of `_app.js` to avoid global bundle growth.

## Verification checklist

After merges that touch images, YouTube embeds, fonts, or consent:

1. `npm run build` succeeds.
2. Spot-check homepage hero and **FeaturedBlogSection** / markets featured posts for layout and font rendering.
3. Optional: Lighthouse on `/` (mobile).
