# CWV follow-up — how to verify (mobile-first)

After deploying mobile CWV improvements (tighter Cloudinary `srcset` defaults, footer `prefetch={false}`, `browserslist`, TTFB notes), plus the **homepage perf** pass (Apr 2026):

- **Consent banner:** [`components/ConsentBanner.jsx`](../components/ConsentBanner.jsx) defers paint with `requestIdleCallback` (max **400 ms**) so the hero can win LCP; outer container uses **`contain: layout paint`**.
- **Images:** Narrower `widths` / `sizes` for product tour, feature cards, and Why Oasis — see [`ProductTourCard`](../components/ProductTourCard.jsx), [`FeaturesShowcase`](../components/FeaturesShowcase.jsx), [`pages/index.js`](../pages/index.js).
- **YouTube:** [`OasisYouTubeEmbed`](../components/OasisYouTubeEmbed.jsx) uses **`hqdefault`** poster (smaller than `maxresdefault`).
- **sf-syn badge:** [`Footer`](../components/Footer.jsx) injects after **`window.load`**, then **`requestIdleCallback`** (max **2.5 s**).
- **Bundles:** [`next.config.js`](../next.config.js) `experimental.optimizePackageImports` for icon / motion packages. Run **`ANALYZE=true npm run build`** to inspect treemaps locally.

## Lab (immediate)

1. **PageSpeed Insights** — **Mobile** tab, URL `https://kahana.co/`.
2. **Desktop** tab — confirm scores stay **~90+** on Performance / no regression vs prior baseline.
3. Chrome DevTools → Lighthouse → **Mobile**, **Slow 4G** — check **LCP**, **Improve image delivery**, **Reduce unused JavaScript** (`about` / `privacy-policy` should not prefetch from footer on cold load the same way).
4. Optional: Network → filter `about-` / `privacy-policy` — fewer early requests after footer `prefetch={false}`.

## Field (4–28 days)

- **CrUX** updates on a **rolling 28-day** window — expect gradual movement on **LCP** and **INP** on **Mobile**.
- **Search Console** → Core Web Vitals for trend lines.
- Compare mobile vs desktop in PSI: mobile is the **priority** for remaining gaps; desktop already passed in the Apr 2026 snapshot.

## Related docs

- [cwv-report-kahana-co-2026-04-04-1828.md](./cwv-report-kahana-co-2026-04-04-1828.md) — baseline metrics and opportunities.
- [cwv-report-kahana-beta-2026-04-04-1850.md](./cwv-report-kahana-beta-2026-04-04-1850.md) — beta Lighthouse (consent LCP, Cloudinary, legacy JS).
- [cwv-ttfb-hosting-notes.md](./cwv-ttfb-hosting-notes.md) — TTFB / hosting levers (not code-only).

## Scripts checklist

- Warmly (marketing consent) loads after **`requestIdleCallback`** (see [`pages/_app.js`](../pages/_app.js)).
- **ipapi** region cache: [`contexts/ConsentContext.jsx`](../contexts/ConsentContext.jsx).
- **sf-syn** footer badge: deferred until after **`load`** + idle — see [`components/Footer.jsx`](../components/Footer.jsx).

## Build / polyfills

- **`browserslist`** in [`package.json`](../package.json) targets **last 2** major browsers — may reduce **legacy JavaScript** polyfill bytes slightly; if a regression appears for older browsers, widen the query.

**Unused CSS (~22 KiB)** in Lighthouse was left as a lower-priority follow-up (Tailwind/global bundle); revisit after LCP/INP trends improve.
