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
- [cwv-report-kahana-beta-2026-04-04-1935.md](./cwv-report-kahana-beta-2026-04-04-1935.md) — beta **7:35 PM** after PSI 90+ deploy: mobile **Performance 74** (LCP still consent); **desktop Performance 96**; Accessibility notes (contrast / nav / YouTube embed).
- [cwv-ttfb-hosting-notes.md](./cwv-ttfb-hosting-notes.md) — TTFB / hosting levers (not code-only).

## Scripts checklist

- Warmly (marketing consent) loads after **`requestIdleCallback`** (see [`pages/_app.js`](../pages/_app.js)).
- **ipapi** region cache: [`contexts/ConsentContext.jsx`](../contexts/ConsentContext.jsx).
- **sf-syn** footer badge: deferred until after **`load`** + idle — see [`components/Footer.jsx`](../components/Footer.jsx).

## Build / polyfills

- **`browserslist`** in [`package.json`](../package.json) targets **last 2** major browsers — may reduce **legacy JavaScript** polyfill bytes slightly; if a regression appears for older browsers, widen the query.

**Unused CSS (~22 KiB)** in Lighthouse was left as a lower-priority follow-up (Tailwind/global bundle); revisit after LCP/INP trends improve.

## Post–Apr 4, 2026 PSI plan (implementation notes)

Aligned with the **Core Web Vitals enhancement plan** (mobile LCP first, desktop regression guard).

### Mobile LCP render delay (lab)

- **Hero card** ([`components/ProductSection.jsx`](../components/ProductSection.jsx)): On small viewports, **lighter** decorative blur, **no `backdrop-blur`** on the card (`backdrop-blur-none sm:backdrop-blur`), softer shadow, slightly more opaque background so the hero stays readable without glass blur.
- **Homepage `#products` (and `#how-it-works`)** ([`pages/index.js`](../pages/index.js)): Large background orbs use **`blur-[200px] md:blur-[420px]`** and reduced opacity on narrow breakpoints to cut compositing cost during scroll/paint.
- **Preload ↔ `src` alignment:** [`pages/index.js`](../pages/index.js) documents that **`OASIS_HERO_PRELOAD_WIDTH` (640)** must match [`getCloudinarySrcSet`](../utils/cloudinary.js) default `src` for [`OASIS_HERO_WIDTHS`](../components/ProductSection.jsx) (middle index = 640).

After deploy, re-run PSI Mobile (Slow 4G) and compare **LCP breakdown → element render delay** (median of 3–5 runs).

### Bundle analysis (legacy JS / bytes)

From a production build, **First Load JS shared by all** is typically **~141 kB** (framework **~45 kB**, `main` **~45 kB**, `_app` **~22 kB**, CSS **~26 kB**, other **~2.6 kB**). Lighthouse **“Legacy JavaScript”** on `main-*.js` is largely **Next.js runtime + core polyfills**; [`package.json`](../package.json) **`browserslist`** already targets current evergreen browsers.

- Run **`ANALYZE=true npm run build`** (or **`npm run analyze`**) locally; open **`.next/analyze/client.html`** for an interactive treemap (not committed).
- **Unused CSS:** The main CSS chunk is mostly **Tailwind utilities + [`styles/globals.css`](../styles/globals.css)**. Next steps when prioritized: audit **globals** for dead rules; avoid broad selectors that pull rarely used utilities; do **not** blanket PurgeCSS without testing all routes.

### Third parties (load order, no LCP regression)

- [`OasisYouTubeEmbed`](../components/OasisYouTubeEmbed.jsx): Documented as **below-the-fold** on LCP-critical pages; **lite-youtube** loads the iframe **on click**; poster uses **`hqdefault`**.
- [`Footer`](../components/Footer.jsx): **sf-syn** badge remains **`load` → `requestIdleCallback`** (comment in file).

### Accessibility / Best Practices

- **Nav:** Removed redundant **`role="list"`** on a native **`<ul>`** in [`NavbarDup`](../components/NavbarDup.jsx) (fixes “ARIA roles only on compatible elements” style issues in automated audits).
- **Consent:** [`ConsentBanner`](../components/ConsentBanner.jsx) uses **high-contrast** grays for links/body (`text-gray-900` / `text-gray-800`).
- **ipapi.co:** [`ConsentContext`](../contexts/ConsentContext.jsx) **defers** the geo `fetch` until **`requestIdleCallback`** (timeout cap), sets **`sessionStorage`** skip flag on **HTTP 429** so the same tab does not retry the network call; still uses **CA** fallback for compliance when unknown.

### Verification checklist (post-deploy)

| Step | Action |
| --- | --- |
| 1 | Deploy to beta/production URL used in PSI |
| 2 | **PageSpeed Insights** — **Mobile** (Slow 4G), **median 3–5 runs** — record **Performance**, **LCP**, **LCP element**, **LCP subparts** (esp. **element render delay**) |
| 3 | **Desktop** tab — median 3–5 runs — confirm **Performance** and **LCP** do not regress vs ~99 / ~1 s (Apr 2026 baseline) |
| 4 | Optional: Chrome DevTools **Performance** trace on mobile emulation — confirm hero paints without long blur/compositor blocks |

### Desktop regression

After mobile-focused CSS changes, desktop layout should match prior design at **`sm`+** breakpoints; spot-check **navbar** dropdown hit targets (min **44×44** px) and **hero** glass card on **tablet/desktop**.
