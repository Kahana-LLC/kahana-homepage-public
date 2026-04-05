# CWV follow-up — how to verify (mobile-first)

After deploying mobile CWV improvements (tighter Cloudinary `srcset` defaults, footer `prefetch={false}`, `browserslist`, TTFB notes), plus the **homepage perf** pass (Apr 2026):

- **Consent banner:** [`components/ConsentBanner.jsx`](../components/ConsentBanner.jsx) uses **short** banner copy (full legal text in [`CookiePreferencesModal`](../components/CookiePreferencesModal.jsx)), **double `requestAnimationFrame`** then `requestIdleCallback` (max **650 ms**), and **`contain: layout paint`** so the hero is likelier to win **LCP**.
- **App shell code-splitting:** [`pages/_app.js`](../pages/_app.js) loads [`NavbarDup`](../components/NavbarDup.jsx), [`Footer`](../components/Footer.jsx), and [`CookiePreferencesModal`](../components/CookiePreferencesModal.jsx) via **`next/dynamic`** (smaller `_app` chunk → lower hydration / **TBT** on desktop). Cookie modal is **`ssr: false`**.
- **Navbar:** [`/about`](../components/NavbarDup.jsx) links use **`prefetch={false}`** (with footer) to avoid pulling `about` JS on cold homepage load.
- **Images:** Narrower `widths` / `sizes` for product tour, feature cards, and Why Oasis — see [`ProductTourCard`](../components/ProductTourCard.jsx), [`FeaturesShowcase`](../components/FeaturesShowcase.jsx), [`pages/index.js`](../pages/index.js).
- **YouTube:** [`OasisYouTubeEmbed`](../components/OasisYouTubeEmbed.jsx) uses **`hqdefault`** poster (smaller than `maxresdefault`).
- **sf-syn badge:** [`Footer`](../components/Footer.jsx) injects after **`window.load`**, then **`requestIdleCallback`** (max **2.5 s**).
- **CLS (Apr 2026 beta rerun):** homepage gradient wrapper used **`fixed` until `useEffect` set mobile** → reflow. Fixed by **`absolute md:fixed`** on the background layer in [`pages/index.js`](../pages/index.js) (see [cwv-report-kahana-beta-2026-04-04-1912.md](./cwv-report-kahana-beta-2026-04-04-1912.md)). **Verified:** PSI mobile **7:21 PM** — **CLS 0**, Performance **75** ([1921 report](./cwv-report-kahana-beta-2026-04-04-1921.md)).
- **Bundles:** [`next.config.js`](../next.config.js) `experimental.optimizePackageImports` for icon / motion packages. Run **`ANALYZE=true npm run build`** to inspect treemaps locally.

## Lab (immediate)

1. **PageSpeed Insights** — **Mobile** tab, URL `https://kahana.co/`.
2. **Desktop** tab — scores vary by metric weights (**TBT** can dominate on desktop lab runs). Beta **7:21 PM** snapshot: Performance **71**, **CLS 0**, **TBT 540 ms** — see [cwv-report-kahana-beta-2026-04-04-1921.md](./cwv-report-kahana-beta-2026-04-04-1921.md) (desktop section).
3. Chrome DevTools → Lighthouse → **Mobile**, **Slow 4G** — check **LCP**, **Improve image delivery**, **Reduce unused JavaScript** (`about` / `privacy-policy` should not prefetch from footer on cold load the same way).
4. Optional: Network → filter `about-` / `privacy-policy` — fewer early requests after footer `prefetch={false}`.

## Field (4–28 days)

- **CrUX** updates on a **rolling 28-day** window — expect gradual movement on **LCP** and **INP** on **Mobile**.
- **Search Console** → Core Web Vitals for trend lines.
- Compare mobile vs desktop in PSI: mobile is the **priority** for remaining gaps; desktop already passed in the Apr 2026 snapshot.

## PSI 90+ lab targets (stretch goals)

Use **median of 3–5** PageSpeed Insights runs per form factor after each deploy; single-run scores vary.

| Milestone | Mobile (Slow 4G) | Desktop |
| --- | --- | --- |
| **Strong progress** | Performance **85+**, **LCP &lt; 4 s**, **CLS 0** | Performance **85+**, **TBT &lt; 300 ms** |
| **Stretch** | Performance **90+**, **LCP &lt; 2.5 s** | Performance **90+**, **TBT &lt; 200 ms** |

**Implemented toward these goals:** shorter consent banner + modal copy split, deferred banner paint (2× `rAF` + idle), `_app` dynamic splits, **`prefetch={false}`** on navbar **About** links. Re-run PSI on beta/production and confirm **LCP element** is no longer only `#consent-banner-description` when the hero image paints first.

## Related docs

- [cwv-report-kahana-co-2026-04-04-1828.md](./cwv-report-kahana-co-2026-04-04-1828.md) — baseline metrics and opportunities.
- [cwv-report-kahana-beta-2026-04-04-1850.md](./cwv-report-kahana-beta-2026-04-04-1850.md) — beta Lighthouse before CLS fix (consent LCP, Cloudinary, legacy JS).
- [cwv-report-kahana-beta-2026-04-04-1912.md](./cwv-report-kahana-beta-2026-04-04-1912.md) — beta Lighthouse after perf pass (LCP/SI gains, CLS regression + mitigation).
- [cwv-report-kahana-beta-2026-04-04-1921.md](./cwv-report-kahana-beta-2026-04-04-1921.md) — beta PSI after CLS fix deploy (**CLS 0**, Performance **75**).
- [cwv-ttfb-hosting-notes.md](./cwv-ttfb-hosting-notes.md) — TTFB / hosting levers (not code-only).

## Scripts checklist

- Warmly (marketing consent) loads after **`requestIdleCallback`** (see [`pages/_app.js`](../pages/_app.js)).
- **ipapi** region cache: [`contexts/ConsentContext.jsx`](../contexts/ConsentContext.jsx).
- **sf-syn** footer badge: deferred until after **`load`** + idle — see [`components/Footer.jsx`](../components/Footer.jsx).

## Build / polyfills

- **`browserslist`** in [`package.json`](../package.json) targets **last 2** major browsers — may reduce **legacy JavaScript** polyfill bytes slightly; if a regression appears for older browsers, widen the query.

**Unused CSS (~22 KiB)** in Lighthouse was left as a lower-priority follow-up (Tailwind/global bundle); revisit after LCP/INP trends improve.
