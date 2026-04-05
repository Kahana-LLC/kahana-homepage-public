# Lighthouse performance report — beta (Heroku), homepage (post–perf pass)

**Lab snapshot — mobile, Slow 4G**, after deploy of consent defer, Cloudinary tuning, `hqdefault` YouTube poster, deferred sf-syn, and `optimizePackageImports`. Compare with the earlier snapshot: [cwv-report-kahana-beta-2026-04-04-1850.md](./cwv-report-kahana-beta-2026-04-04-1850.md).

| Field | Value |
| --- | --- |
| **URL** | `https://kahana-public-beta-c1ed93018879.herokuapp.com/` |
| **Report captured** | April 4, 2026, 7:12 PM (CDT) |
| **Lighthouse** | 13.0.1 |
| **Chrome** | HeadlessChromium 146.0.7680.153 |
| **Device** | Emulated **Moto G Power** · Single page session · Initial load |

---

## Executive summary

- **Performance score:** **62** (needs improvement: 50–89). *Lower than the 6:50 PM run (74) primarily because **CLS regressed** from **0** to **0.37** — Lighthouse heavily penalizes layout shift in this scoring mix.*
- **Improvements vs 6:50 PM run:** **LCP** **6.8 s → 5.0 s**, **Speed Index** **4.4 s → 3.5 s**. **FCP** and **TBT** unchanged at strong values.
- **New issue:** **CLS 0.37** — one dominant culprit: the **green blur orb** (`absolute -bottom-20 left-1/3 …`) under `main > div.relative > div.absolute`. Root cause: **React state `isMobile` defaulted to `false`**, so the gradient wrapper used **`fixed` until `useEffect` switched to `absolute` on mobile**, reflowing the page. **Fix (code):** use **`absolute md:fixed`** on that wrapper in [`pages/index.js`](../pages/index.js) so positioning follows **CSS breakpoints only** (no post-hydration flip). Re-run Lighthouse after deploy to confirm CLS returns near **0**.

### Estimated score weights (this Lighthouse UI)

| Metric | Estimated weight |
| --- | ---: |
| First Contentful Paint (FCP) | +10 |
| Largest Contentful Paint (LCP) | +7 |
| Total Blocking Time (TBT) | +30 |
| Cumulative Layout Shift (CLS) | +7 |
| Speed Index (SI) | +9 |

*Values are estimated; see the [Lighthouse scoring calculator](https://googlechrome.github.io/lighthouse/scorecalc/).*

---

## Core metrics (this run)

| Metric | Value | Notes |
| --- | --- | --- |
| **FCP** | **1.4 s** | Good (unchanged) |
| **LCP** | **5.0 s** | Improved vs 6.8 s; still poor band |
| **TBT** | **10 ms** | Good |
| **CLS** | **0.37** | Poor — layout shift from decorative gradient layer (see below) |
| **Speed Index** | **3.5 s** | Improved vs 4.4 s |

---

## Insights (selected)

### Layout shift culprits (CLS) — **0.370** total

| Element | Shift score |
| --- | ---: |
| `main .flex-grow > div.relative > div.absolute > div.absolute` (green blur orb, `#8BA500` gradient) | **0.370** |

### Use efficient cache lifetimes — est. **15 KiB** (down from ~68 KiB)

| Request | Cache TTL | Size |
| --- | --- | ---: |
| YouTube `hqdefault.webp` (`i.ytimg.com`) | 2 h | **17 KiB** |
| sf-syn `badge_js` | 4 h | 3 KiB |

*Confirms **`hqdefault`** poster path; duplicate `img.youtube.com` row no longer dominant in this paste.*

### Legacy JavaScript — est. **13 KiB** (unchanged)

Same pattern: `main-bd8aeafb8d64baa0.js`, Babel transforms and polyfills at listed column positions (line refs slightly shifted vs prior `main-ca8c…` bundle).

### LCP breakdown

| Subpart | Duration |
| --- | ---: |
| Time to first byte | 0 ms |
| Element render delay | **1,750 ms** |

**LCP element:** still **`#consent-banner-description`** (cookie copy). Delay improved vs **2,310 ms** in the earlier report (consent defer + other changes).

### Third parties (summary)

| Party | Transfer |
| --- | ---: |
| Cloudinary (several assets) | 129 KiB |
| YouTube `hqdefault.webp` | 17 KiB |
| sf-syn badge | 3 KiB |
| ipapi.co `/json/` | 2 KiB |

### Diagnostics (unchanged themes)

- **Reduce unused CSS** — ~21 KiB on `2595efabecb274fb.css`; PurgeCSS / defer non-critical CSS (Next.js).
- **Reduce unused JavaScript** — ~96 KiB on `about` / `privacy-policy` chunks; bundle analyzer; prefetch already off on footer links.

### Other

- **User Timing:** Next.js hydration measures (~1.34 s before hydration, ~73 ms hydration).
- **Long main-thread tasks:** framework chunk ~64 ms @ ~3.6 s; document task ~61 ms @ ~941 ms.

---

## Passed audits

Omitted here; see the full Lighthouse HTML in Chrome for the complete list.

---

*Generated from Lighthouse 13.0.1 export, April 4, 2026, 7:12 PM CDT. CLS fix documented for follow-up verification.*
