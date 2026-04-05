# Lighthouse performance report — beta (Heroku), homepage

**Lab snapshot — mobile, Slow 4G.** Targets the deployed beta app referenced in bundle URLs (`kahana-public-beta-…herokuapp.com`). For production `kahana.co` snapshots, see [cwv-report-kahana-co-2026-04-04-1828.md](./cwv-report-kahana-co-2026-04-04-1828.md).

| Field | Value |
| --- | --- |
| **Environment** | Heroku beta (1st-party assets from `kahana-public-beta-c1ed93018879.herokuapp.com`) |
| **Report captured** | April 4, 2026, 6:50 PM (CDT) |
| **Lighthouse** | 13.0.1 |
| **Chrome** | HeadlessChromium 146.0.7680.153 |
| **Session** | Single page session · Initial page load |

---

## Executive summary

- **Performance score:** **74** (needs improvement: 50–89).
- **Primary bottleneck:** **Largest Contentful Paint (LCP) at 6.8 s** (poor). FCP and TBT are strong; CLS is perfect in this run.
- **LCP breakdown (Insights):** **Time to first byte 0 ms**; **element render delay 2,310 ms**. Lighthouse identified the LCP element as the cookie-consent copy (`#consent-banner-description`), not hero media — treat follow-up runs and DevTools traces with that context.
- **Score weighting (Lighthouse):** Values are **estimated** and may vary; the overall performance score is derived from the weighted metrics below.

### How this score combines (weighted contributions)

| Metric | Estimated weight to Performance score |
| --- | ---: |
| First Contentful Paint (FCP) | +10 |
| Largest Contentful Paint (LCP) | +2 |
| Total Blocking Time (TBT) | +30 |
| Cumulative Layout Shift (CLS) | +25 |
| Speed Index (SI) | +7 |

*Lighthouse notes: “Values are estimated and may vary. The performance score is calculated directly from these metrics.” See the [Lighthouse scoring calculator](https://googlechrome.github.io/lighthouse/scorecalc/) for reproducibility.*

---

## Lab configuration

| Setting | Value |
| --- | --- |
| Device | Emulated **Moto G Power** |
| Network | **Slow 4G** throttling |
| Throttling | Applied (lab conditions) |

---

## Core metrics (this run)

| Metric | Value | Lighthouse signal |
| --- | --- | --- |
| **First Contentful Paint (FCP)** | **1.4 s** | Good |
| **Largest Contentful Paint (LCP)** | **6.8 s** | Poor |
| **Total Blocking Time (TBT)** | **10 ms** | Good |
| **Cumulative Layout Shift (CLS)** | **0** | Good |
| **Speed Index (SI)** | **4.4 s** | Needs improvement |

**Definitions (short):**

- **FCP** — First text or image painted.
- **LCP** — Largest text or image painted (often hero or largest above-the-fold media).
- **TBT** — Sum of blocking time (tasks longer than 50 ms) between FCP and Time to Interactive.
- **CLS** — Visual stability of content in the viewport.
- **SI** — How quickly the viewport content appears to fill in.

---

## Opportunities and diagnostics (Lighthouse)

*Insights and diagnostics are labeled **Unscored** in Lighthouse: they do not add or subtract points directly, but they guide where bytes and main-thread work can be reduced. Lighthouse also notes that **diagnostic** figures (for example unused CSS/JS estimates) do not directly change the Performance score.*

---

### Legacy JavaScript (Insights) — est. savings **13 KiB** (~13.4 KiB measured)

**Lighthouse copy:** Polyfills and transforms enable older browsers to use new JavaScript features; many are not necessary for modern browsers. Consider changing the build so you **do not transpile Baseline features** unless older browsers must be supported. Most sites can ship ES6+ without transpiling those features.

| Source | Est. wasted bytes |
| --- | ---: |
| Heroku 1st party — `…/chunks/main-ca8c8a4bef16a90e.js` (`kahana-public-beta-c1ed93018879.herokuapp.com`) | **13.4 KiB** |

**Flagged code (all in `main-ca8c8a4bef16a90e.js`, 1st party):**

| Item | Location (report) |
| --- | --- |
| Bundle (aggregate) | `…chunks/main-ca8c8a4bef16a90e.js` — **13.4 KiB** |
| `@babel/plugin-transform-classes` | line **1:145059** |
| `@babel/plugin-transform-spread` | line **1:151360** |
| `Array.prototype.at` | line **1:1275** |
| `Array.prototype.flat` | line **1:663** |
| `Array.prototype.flatMap` | line **1:776** |
| `Object.fromEntries` | line **1:1152** |
| `Object.hasOwn` | line **1:1410** |
| `String.prototype.trimEnd` | line **1:405** |
| `String.prototype.trimStart` | line **1:320** |

**Relevance:** Unscored; can still affect **LCP** / **FCP** via parse and execute cost.

---

### Use efficient cache lifetimes (Insights) — est. savings **68 KiB**

**Lighthouse copy:** A long cache lifetime speeds up repeat visits.

| Request | Cache TTL | Transfer size |
| --- | --- | ---: |
| **YouTube video** — `…e4D1-cmBqCo/maxresdefault.webp` (`i.ytimg.com`) | **2 h** | **44 KiB** |
| Same thumbnail — `…e4D1-cmBqCo/maxresdefault.webp` (`img.youtube.com`) | **2 h** | **44 KiB** |
| **sf-syn.com** — `b.sf-syn.com/badge_js?sf_id=3652674&variant_id=sf` | **4 h** | **3 KiB** |

*YouTube rows sum to **88 KiB** in this export; plus the badge **3 KiB**.*

---

### Improve image delivery (Insights) — est. savings **101 KiB** (Cloudinary **141.1 KiB** total, **~100.8 KiB** savings)

**Lighthouse copy:** Reducing image download time improves perceived load and **LCP**.

| Label / context | Resource size | Est. savings | Lighthouse note |
| --- | ---: | ---: | --- |
| **Cloudinary (aggregate)** | **141.1 KiB** | **100.8 KiB** | — |
| Oasis Custom Themes — `…figma-imports/Custom%20Themes` | 44.1 KiB | 31.0 KiB | Served **720×405**; displayed **~364×237** — use responsive images |
| Serene illustration — `…figma-imports/er` (“Serene illustration representing focused Oasis browsing”) | 29.6 KiB | 20.0 KiB | Served **557×416**; displayed **~341×222** |
| Zero Trust Security — `…figma-imports/Security%201` | 25.0 KiB | 18.5 KiB | Served **480×312**; displayed **~246×160** |
| Homepage Personalization — `…figma-imports/New%20Tab%20Page` | 23.6 KiB | 17.4 KiB | Served **480×312**; displayed **~246×160** |
| Ease with Tab Grouping — `…figma-imports/Tab%20Groups` | 18.9 KiB | 13.9 KiB | Served **480×312**; displayed **~246×160** |

Markup pattern in the report: Cloudinary `src` / `srcset` with `w_*`, `c_fill`, `g_auto`, `f_auto`, `loading="lazy"`, `decoding="async"`, and `object-cover` or `object-contain` per card.

**Takeaway:** Tighten **`sizes`** (and matching `srcset` widths) so the chosen file matches rendered size on narrow viewports.

---

### LCP breakdown (Insights) — **Unscored**

**Lighthouse copy:** Each subpart has specific improvement strategies. Ideally most LCP time is spent **loading resources**, not in delays.

| Subpart | Duration |
| --- | ---: |
| Time to first byte | **0 ms** |
| Element render delay | **2,310 ms** |

**Reported LCP element (this run):** Cookie consent copy, not the hero:

- Element: `<p id="consent-banner-description" class="text-sm text-gray-700 mb-0">`
- Text begins: “We use cookies and similar technologies to enhance your browsing experience, an…”

So in this session, **LCP was tied to the consent banner description** with a large **element render delay** — re-run after accepting/dismissing cookies or compare with a run that does not surface the banner the same way; also use **Chrome DevTools → Performance** to record a trace for fuller waterfall detail (Lighthouse links the same workflow).

---

### Reduce unused CSS (Diagnostics) — est. savings **21 KiB**

**Lighthouse copy:** Remove unused rules and defer CSS not needed above the fold to cut network bytes.

**Next.js:** Consider **PurgeCSS** (or equivalent) in Next.js config to strip unused stylesheet rules.

| URL (1st party) | Transfer | Est. savings |
| --- | ---: | ---: |
| `…/css/2595efabecb274fb.css` (`kahana-public-beta-c1ed93018879.herokuapp.com`) | 25.6 KiB | 21.1 KiB |

---

### Reduce unused JavaScript (Diagnostics) — est. savings **96 KiB** (~96.1 KiB of **97.6 KiB** transfer)

**Lighthouse copy:** Defer or remove unused JavaScript until it is required.

**Next.js:** Use **Webpack Bundle Analyzer** (or similar) to find dead code and oversized chunks.

| URL (1st party) | Transfer | Est. savings |
| --- | ---: | ---: |
| Heroku aggregate | **97.6 KiB** | **96.1 KiB** |
| `…/pages/about-ee7ccc7dded1d406.js` | 61.2 KiB | 60.7 KiB |
| `…/pages/privacy-policy-834db0444de38409.js` | 36.5 KiB | 35.4 KiB |

*Footer prefetch policy for about/privacy aligns with keeping these off the critical path; further gains come from splitting or loading route JS only on navigation.*

---

## Passed audits

Lighthouse lists **Passed audits** separately; those checks passed in this run. Open the full HTML/JSON report in Chrome for the complete list.

---

## Suggested next checks

1. **LCP:** This run attributed LCP to the **cookie consent** paragraph with **~2.31 s element render delay** — validate in DevTools (element timing, layout, fonts, overlay) and compare with a run where the banner is not the largest paint (e.g. after consent).
2. **Images:** Reconcile Cloudinary **`sizes`** with real card widths on Moto G Power; the Insights table lists per-asset dimension gaps.
3. **Legacy JS:** Align **browserslist** / build with supported browsers so Babel transforms and polyfills match reality.
4. **Third parties:** YouTube thumbnails (short TTL) and **sf-syn** badge — cache is controlled by vendors; lazy-load or defer if they contend with first paint.
5. **Unused CSS/JS:** PurgeCSS-style CSS trimming and bundle analysis for `about` / `privacy-policy` chunks.

---

*Generated from Lighthouse 13.0.1 export, April 4, 2026, 6:50 PM CDT.*
