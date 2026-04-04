# Core Web Vitals & performance report — kahana.co (homepage)

**Second snapshot — evening lab run** (compare with [cwv-report-kahana-co-2026-04-04.md](./cwv-report-kahana-co-2026-04-04.md) from the earlier same-day capture.)

| Field | Value |
| --- | --- |
| **URL** | https://kahana.co/ |
| **Report captured** | April 4, 2026, 6:28:05 PM (CDT) |
| **Origin** | This URL (kahana.co) |
| **Chrome UX Report window** | Latest 28-day period |
| **Lab capture** | April 4, 2026, 6:28 PM CDT |

---

## Executive summary

- **CrUX — Core Web Vitals assessment:** **Failed** (75th percentile still outside “good” for at least one CWV).
- **Field gaps (unchanged vs morning snapshot):** **LCP** **2.7 s** (needs improvement), **INP** **236 ms** (needs improvement); **CLS** **0.04** (good).
- **Lighthouse (lab) — notable changes:** **Performance 72** (same band). **Lab LCP improved** to **7.4 s** (from **8.3 s** in the earlier run). **TBT** reported as **0 ms**. **Accessibility** and **Best Practices** both **100** in this run (see [Accessibility](#accessibility-lighthouse) — automated contrast issues not listed in this export).
- **Image audit:** “Improve image delivery” estimated savings **~240 KiB** total Cloudinary-related (down from **~444 KiB** in the earlier report), consistent with responsive `srcset` / sizing work.
- **Unused JavaScript:** Lighthouse now flags **~96 KiB** unused, mainly **`about`** and **`privacy-policy`** chunks — **not** the large **white-paper** / **enterprise-buyer-guide** bundles seen in the earlier homepage audit (aligns with **`prefetch={false}`** on those nav links).

---

## Field data (Chrome UX Report)

Real users, mixed devices and networks, last 28 days. Percentiles are **75th percentile** unless noted.

### Core Web Vitals

| Metric | Value | “Good” threshold | Assessment |
| --- | ---: | --- | --- |
| **LCP** | **2.7 s** | ≤ 2.5 s | Needs improvement |
| **INP** | **236 ms** | ≤ 200 ms | Needs improvement |
| **CLS** | **0.04** | ≤ 0.1 | Good |

**Distributions (same structure as earlier snapshot):**  
LCP: Good 70% · NI 22% · Poor 8% · INP: Good 62% · NI 31% · Poor 6% · CLS: Good 79% · NI 6% · Poor 15%

### Other notable metrics (field)

| Metric | 75th percentile | “Good” threshold |
| --- | ---: | --- |
| **FCP** | 2.4 s | ≤ 1.8 s |
| **TTFB** | 1.1 s | ≤ 0.8 s |

**CrUX context:** Various mobile devices · Many samples · Full visit durations · Various network connections · All Chrome versions.

---

## Lab data (Lighthouse 13.0.1)

Controlled **single** cold load — not equivalent to 28-day field data.

| Setting | Value |
| --- | --- |
| Device | Emulated **Moto G Power** |
| Network | **Slow 4G** throttling |
| Session | Single page load, initial navigation |
| Runtime | Headless Chromium 146.0.7680.153 |

### Lab metrics

| Metric | This run (6:28 PM) | Earlier run (4:30 PM) |
| --- | ---: | ---: |
| First Contentful Paint | 1.2 s | 1.2 s |
| Largest Contentful Paint | **7.4 s** | 8.3 s |
| Total Blocking Time | **0 ms** | 20 ms |
| Cumulative Layout Shift | 0 | 0 |
| Speed Index | 5.0 s | 5.0 s |

### Lighthouse category scores

| Category | Score |
| --- | ---: |
| Performance | 72 |
| Accessibility | **100** |
| Best Practices | **100** |
| SEO | 72 |

**Performance score contributors (lab):** FCP +10 · LCP +1 · TBT +30 · CLS +25 · Speed Index +6 (estimated weights from tool).

---

## Opportunities & diagnostics (Lighthouse)

### Improve image delivery (~240 KiB estimated savings)

Cloudinary remains the main bucket (**~300 KiB** transferred; **~239 KiB** estimated savings). Images now use **`src` + `srcset` + `sizes`** in the audit output; Lighthouse still suggests some candidates are larger than the rendered box (e.g. hero **1080×701** vs displayed **~318×206**, Product Tour **828×465** vs **~364×237**, several **640×416** vs **~246×160**). Further tightening: refine **`sizes`** or add intermediate **`w_`** steps for the worst offenders.

| Asset theme | Notes from audit |
| --- | --- |
| Oasis Custom Themes (Product Tour) | `w_828` selected vs smaller display |
| Feature cards (Security, Tab Groups, etc.) | `w_640` vs ~246×160 display |
| Welcome to Oasis (hero) | `w_1080` default `src` vs ~318×206 — consider aligning default `src` / preload with **640** or **828** candidate |
| Why-Oasis cards | `w_640` / `557×416` vs ~341×222 |

### Legacy JavaScript (~13 KiB)

Same pattern as before: **`main-*.js`** polyfills (`Array.prototype.at`, `flat`, `Object.hasOwn`, etc.). Optional follow-up: modern **Browserslist** targets if product policy allows.

### Efficient cache lifetimes (~72 KiB)

Short TTLs on **YouTube** poster domains (~2 h), **Cloudflare** beacon (~1 d), **sf-syn** badge (~4 h). Mostly third-party controlled.

### LCP breakdown — third parties

Insight references third-party contribution; use DevTools **Performance** trace for detail.

### Reduce unused CSS (~22 KiB)

Global **`css/48ea65f37bcb8489.css`** — Tailwind/global CSS; incremental cleanup or critical-CSS strategies if needed.

### Reduce unused JavaScript (~96 KiB)

| Chunk (hashed names from report) | Transfer | Est. unused |
| --- | ---: | ---: |
| `pages/about-*.js` | ~61 KiB | ~60.6 KiB |
| `pages/privacy-policy-*.js` | ~36.5 KiB | ~35.4 KiB |

**Interpretation:** Remaining prefetch or shared layout may still pull **About** and **Privacy** into the analysis; next step is to confirm **`Link`** usage (footer/nav) and whether **`prefetch={false}`** is appropriate on those routes if they should not load on homepage cold path.

### Other

- **User Timing** marks: 7  
- **Passed audits:** 19  

---

## Accessibility (Lighthouse)

**Score: 100** in this export. The earlier same-day report listed contrast issues on **#978455** and the consent **privacy** link; if this run was after contrast/CSS updates, automated contrast may pass. **Manual** accessibility review is still recommended.

---

## Best practices (Lighthouse)

**Score: 100** in this export. (The earlier snapshot noted **ipapi.co 429** under console errors — not repeated in this paste.)

---

## How to use this report

1. **Field (CrUX):** Still the source of truth for **pass/fail** on real users; updates on a **rolling 28-day** window.  
2. **Lab:** Use **7.4 s LCP** and **~240 KiB** image audit vs the **4:30 PM** snapshot as a **before/after** signal for the same URL and profile.  
3. **Next steps:** Tighten hero / tour **`sizes`** and default **`src`** if lab LCP remains high; trim **about/privacy** unused JS if still in critical path; re-run after deploy.

---

*Generated from a cleaned export of PageSpeed Insights / Lighthouse output — April 4, 2026, ~6:28 PM CDT.*
