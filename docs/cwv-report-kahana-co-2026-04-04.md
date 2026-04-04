# Core Web Vitals & performance report — kahana.co (homepage)

| Field | Value |
| --- | --- |
| **URL** | https://kahana.co/ |
| **Report captured** | April 4, 2026, 4:30:54 PM (CDT) |
| **Origin** | This URL (kahana.co) |
| **Chrome UX Report window** | Latest 28-day period |
| **Lab capture** | April 4, 2026, 4:30 PM CDT |

---

## Executive summary

- **CrUX — Core Web Vitals assessment:** **Failed** (at least one CWV outside the “good” threshold at the 75th percentile).
- **Primary gap:** **LCP** is slightly over the “good” line in the field (**2.7 s** vs ≤ 2.5 s). **INP** is in “needs improvement” (**236 ms** vs ≤ 200 ms).
- **Lighthouse (lab) vs field:** Lab **LCP (8.3 s)** on emulated slow 4G is much worse than field **LCP (2.7 s)** — expected; treat lab as stress-test and field as real-user baseline.
- **Lighthouse performance score:** **72** (mobile, Slow 4G, Moto G Power, single navigation).

---

## Field data (Chrome UX Report)

Real users, mixed devices and networks, last 28 days. Percentiles are **75th percentile** unless noted.

### Core Web Vitals

| Metric | Value | “Good” threshold | Assessment |
| --- | ---: | --- | --- |
| **LCP** — Largest Contentful Paint | **2.7 s** | ≤ 2.5 s | **Needs improvement** (fails CWV “good”) |
| **INP** — Interaction to Next Paint | **236 ms** | ≤ 200 ms | **Needs improvement** |
| **CLS** — Cumulative Layout Shift | **0.04** | ≤ 0.1 | **Good** |

**LCP distribution:** Good 70% · Needs improvement 22% · Poor 8%  
**INP distribution:** Good 62% · Needs improvement 31% · Poor 6%  
**CLS distribution:** Good 79% · Needs improvement 6% · Poor 15%

### Other notable metrics (field)

| Metric | 75th percentile | “Good” threshold |
| --- | ---: | --- |
| **FCP** — First Contentful Paint | 2.4 s | ≤ 1.8 s |
| **TTFB** — Time to First Byte | 1.1 s | ≤ 0.8 s |

**FCP distribution:** Good 64% · Needs improvement 23% · Poor 13%  
**TTFB distribution:** Good 56% · Needs improvement 34% · Poor 10%

**CrUX context:** Various mobile devices · Many samples · Full visit durations · Various network conditions · All Chrome versions.

---

## Lab data (Lighthouse 13.0.1)

Controlled **single** page load — not the same as 28-day field data.

| Setting | Value |
| --- | --- |
| Device | Emulated **Moto G Power** |
| Network | **Slow 4G** throttling |
| Session | Single page load, initial navigation |
| Runtime | Headless Chromium 146.0.7680.153 |

### Lab metrics

| Metric | Value |
| --- | ---: |
| First Contentful Paint (FCP) | 1.2 s |
| Largest Contentful Paint (LCP) | **8.3 s** |
| Total Blocking Time (TBT) | 20 ms |
| Cumulative Layout Shift (CLS) | 0 |
| Speed Index | 5.0 s |

### Lighthouse category scores

| Category | Score |
| --- | ---: |
| Performance | 72 |
| Accessibility | 96 |
| Best Practices | 96 |
| SEO | 100 |

**Performance score contributors (lab):** FCP +10 · LCP +1 · TBT +30 · CLS +25 · Speed Index +6 (estimated weighting; values from report).

---

## Opportunities & diagnostics (Lighthouse)

### Improve image delivery (~444 KiB estimated savings)

Cloudinary and related assets dominate. Common issue: **requested dimensions exceed displayed size** — use **responsive images** (`srcset` / `sizes`) and width-appropriate Cloudinary transforms.

| Theme | Examples from report |
| --- | --- |
| Feature / figma-imports | “Zero Trust Security”, “Homepage Personalization”, “Serene illustration…”, themes, tab grouping, security screenshots — many at **w_800** or **w_1000** while displayed much smaller on mobile. |
| Hero — “Welcome to Oasis” | Served up to **1200px** wide; Lighthouse suggests displayed ~**318×206** — **~36 KiB** savings called out for better sizing / `sizes`. |

### Reduce unused JavaScript (~616 KiB estimated savings)

Lighthouse attributes large **unused** bundles to preloaded or shared chunks, including routes not needed for the homepage:

| Asset (from report) | Transfer / savings hint |
| --- | --- |
| `white-paper-future-of-ergonomic-work-*.js` | ~295 KiB (nearly all flagged unused) |
| `enterprise-buyer-guide-*.js` | ~146 KiB |
| Shared chunk `9827-*.js` | ~90 KiB |
| `about-*.js` | ~61 KiB |
| `privacy-policy-*.js` | ~37 KiB |

*Interpretation:* Strengthen **route-level code splitting** and avoid pulling heavy route bundles into the homepage critical path (aligns with bundle analyzer and dynamic imports work).

### Reduce unused CSS (~22 KiB)

Global bundle `css/230fb847140cb0ef.css` — consider Tailwind/content coverage and deferring non-critical CSS.

### Legacy JavaScript (~13 KiB)

`main-*.js` includes polyfills (e.g. `Array.prototype.at`, `flat`, `Object.hasOwn`, etc.). For modern-only browsers, build targets could drop some polyfill weight.

### Efficient cache lifetimes (~73 KiB)

| Resource | TTL note |
| --- | --- |
| YouTube poster (`maxresdefault.webp`, i.ytimg.com / img.youtube.com) | ~2 h |
| Cloudflare beacon | ~1 d |
| Third-party badge (sf-syn.com) | ~4 h |

*Note:* Short TTLs on third parties are often not controllable; focus on **first-party** and **self-hosted** assets.

### LCP breakdown — third parties

Report flags **third-party** contribution to LCP; use DevTools **Performance** panel with a trace for detail.

### Other

- **One long main-thread task** noted (diagnostic; does not directly change the score).
- **18 passed audits** (collapsed in source).

---

## Accessibility (Lighthouse)

**Score: 96**

### Automated failures

- **Contrast:** Insufficient ratio on some text, including:
  - Heading “Fall in Love” — `text-[#978455]` on white
  - Cookie banner link “We Value Your Privacy” — green (`#617500` / `rgb(97, 117, 0)`) on white

### Other

- **ARIA:** “Uses ARIA roles only on compatible elements” (best-practice note).
- **Manual checks:** 10 items suggested for full a11y review.

---

## Best practices (Lighthouse)

**Score: 96**

- **Console errors:** **ipapi.co** `429 Too Many Requests` on `/json/` — matches known rate-limit risk; caching/debouncing reduces noise and failed requests.
- **Detected JavaScript libraries** — informational.

---

## How to read this report

1. **Ship decisions:** Prioritize **field CrUX** (LCP, INP, CLS) for “are we good for real users?”
2. **Regression / experiments:** Use **lab Lighthouse** on a fixed device + throttle profile for before/after comparisons.
3. **Next engineering focus (from this snapshot):**
   - **LCP + images:** Responsive Cloudinary widths and hero `sizes` / preload alignment.
   - **INP:** Reduce long tasks and main-thread work from third parties and large JS.
   - **JS weight:** Keep heavy routes off the homepage initial bundle.
   - **ipapi:** Avoid 429s in production monitoring (cache, backoff, or alternative).

---

*Generated from a cleaned export of PageSpeed Insights / Lighthouse output dated April 4, 2026.*
