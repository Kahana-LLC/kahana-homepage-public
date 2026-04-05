# Lighthouse / PageSpeed Insights — beta (Heroku), homepage (post–CLS fix deploy)

Taken after deploy of **`absolute md:fixed`** gradient wrapper ([`pages/index.js`](../pages/index.js), commit addressing CLS from [cwv-report-kahana-beta-2026-04-04-1912.md](./cwv-report-kahana-beta-2026-04-04-1912.md)).

| Field | Value |
| --- | --- |
| **URL** | `https://kahana-public-beta-c1ed93018879.herokuapp.com/` |
| **Report captured** | April 4, 2026, 7:21 PM (CDT) |
| **Tool** | PageSpeed Insights (Lighthouse **13.0.1**) |
| **Chrome** | HeadlessChromium **146.0.7680.153** |

This file records **both** **Mobile** and **Desktop** tabs from the same PSI session.

---

## Mobile — executive summary

| Category | Score |
| --- | ---: |
| **Performance** | **75** |
| Accessibility | 96 |
| Best Practices | 100 |
| SEO | 75 |

| Lab setup | Value |
| --- | --- |
| Device | Emulated **Moto G Power** |
| Network | **Slow 4G** throttling |

- **CLS is back to 0** — confirms the **gradient `fixed` → `absolute` hydration flip** was the source of the **0.37** regression in the 7:12 PM run; the **`absolute md:fixed`** fix works in lab.
- **Performance 75** vs **62** (7:12 run with bad CLS): restoring **CLS** helps the headline score even when **LCP** / **SI** move between runs.

### Mobile — estimated metric weights (PSI UI)

| Metric | Weight |
| --- | ---: |
| FCP | +10 |
| LCP | +3 |
| TBT | +30 |
| CLS | +25 |
| SI | +7 |

*“Values are estimated and may vary.”* [Lighthouse scoring calculator](https://googlechrome.github.io/lighthouse/scorecalc/)

---

## Mobile — core metrics

| Metric | Value | Lighthouse signal |
| --- | --- | --- |
| **First Contentful Paint** | **1.4 s** | Good |
| **Largest Contentful Paint** | **6.2 s** | Poor |
| **Total Blocking Time** | **60 ms** | Good |
| **Cumulative Layout Shift** | **0** | Good |
| **Speed Index** | **4.7 s** | Needs improvement |

*Lab variance is normal: compare trends over multiple runs, not single LCP/SI numbers.*

---

## Mobile — LCP breakdown (Insights)

| Subpart | Duration |
| --- | ---: |
| Time to first byte | 0 ms |
| Element render delay | **2,510 ms** |

**LCP element:** `#consent-banner-description` (cookie consent copy) — same class of issue as earlier beta reports: **consent text** wins LCP with large **render delay** in some sessions.

---

## Mobile — insights (selected)

### Legacy JavaScript — est. **13 KiB**

`main-bd8aeafb8d64baa0.js` — same Babel / polyfill pattern as prior reports (line refs in Lighthouse export).

### Use efficient cache lifetimes — est. **15 KiB**

| Request | TTL | Size |
| --- | --- | ---: |
| YouTube `hqdefault.webp` | 2 h | 17 KiB |
| sf-syn `badge_js` | 4 h | 3 KiB |

### Third parties (summary)

Cloudinary **129 KiB**, YouTube poster **17 KiB**, sf-syn **3 KiB**, ipapi **2 KiB** — listed for transfer / main-thread context in PSI.

---

## Mobile — diagnostics

| Audit | Notes |
| --- | --- |
| **Reduce unused CSS** | ~21 KiB on hashed global CSS (`…css/e1b3c5e179….css`) |
| **Reduce unused JavaScript** | ~96 KiB — `about` / `privacy-policy` page chunks |
| **Avoid long main-thread tasks** | 4 long tasks (document + framework + main chunks; durations ~55–111 ms in export) |

### Next.js user timings (from report)

| Name | Duration |
| --- | --- |
| Next.js-before-hydration | 802.10 ms |
| Next.js-hydration | 120.86 ms |

---

## Mobile — passed audits

**19** passed (full list in PSI / Lighthouse HTML).

---

## Desktop — executive summary (same session: 7:21 PM CDT)

| Category | Score |
| --- | ---: |
| **Performance** | **71** |
| Accessibility | 93 |
| Best Practices | 100 |
| SEO | 71 |

| Lab setup | Value |
| --- | --- |
| Device | **Emulated Desktop** (Lighthouse default) |
| Network | **Custom throttling** (PSI desktop preset) |

**Why Performance 71 is slightly below Mobile 75:** Desktop PSI uses a **different weight mix** — here **LCP +22** and **TBT +8**. **Total Blocking Time** is **540 ms** (poor), which drags the score even though **FCP / LCP / SI** look strong. Mobile had **TBT +30** weight but only **60 ms** TBT.

### Desktop — estimated metric weights (PSI UI)

| Metric | Weight |
| --- | ---: |
| FCP | +10 |
| LCP | +22 |
| TBT | +8 |
| CLS | +25 |
| SI | +7 |

---

## Desktop — core metrics

| Metric | Value | Lighthouse signal |
| --- | --- | --- |
| **First Contentful Paint** | **0.4 s** | Good |
| **Largest Contentful Paint** | **1.3 s** | Good |
| **Total Blocking Time** | **540 ms** | Poor (main drag vs mobile) |
| **Cumulative Layout Shift** | **0** | Good |
| **Speed Index** | **1.9 s** | Good |

---

## Desktop — LCP breakdown (Insights)

| Subpart | Duration |
| --- | ---: |
| Time to first byte | 0 ms |
| Element render delay | **3,130 ms** |

**LCP element:** again **`#consent-banner-description`**. Headline **LCP 1.3 s** is still in a good band; the **subpart** timings describe phases of the chosen LCP element and do not always read as a simple sum versus the top-line **LCP** value — use DevTools **Performance** for a full trace if tuning.

---

## Desktop — additional insights

### Optimize DOM size (Unscored)

| Statistic | Value |
| --- | ---: |
| Total elements | 461 |
| Max DOM depth | 20 (e.g. `span.lty-visually-hidden` chain) |
| Most children on one node | 26 (`body`) |

### Next.js user timings (desktop)

| Name | Duration |
| --- | --- |
| Next.js-before-hydration | 1,599.03 ms |
| Next.js-hydration | 403.57 ms |

Hydration is heavier on desktop in this run than on mobile — aligns with **long main-thread tasks** and high **TBT**.

### Long main-thread tasks

**8** long tasks reported (including **Unattributable** rows and **framework** / **main** chunks; up to **~112 ms** single task in the export).

---

## Desktop — diagnostics (selected)

| Audit | Notes |
| --- | --- |
| **Reduce unused JavaScript** | ~96 KiB — `about` / `privacy-policy` chunks (same theme as mobile) |
| **Reduce unused CSS** | ~20.1 KiB on hashed global CSS |
| **Avoid long main-thread tasks** | See above — ties to **TBT 540 ms** |

Same **Legacy JavaScript ~13 KiB**, **cache TTL** (YouTube `hqdefault`, sf-syn), and **third-party** listings as mobile, with similar transfer sizes.

---

## Mobile vs desktop (this 7:21 PM session)

| | Mobile | Desktop |
| --- | --- | --- |
| **Performance** | **75** | **71** |
| **LCP** | 6.2 s | 1.3 s |
| **TBT** | 60 ms | **540 ms** |
| **CLS** | 0 | 0 |
| **SI** | 4.7 s | 1.9 s |

---

## Comparison (same URL, recent beta snapshots — mobile)

| Run (CDT) | Performance | LCP | CLS | SI | Notes |
| --- | ---: | --- | --- | --- | --- |
| 6:50 PM | 74 | 6.8 s | 0 | 4.4 s | Pre–perf-pass baseline [1850](./cwv-report-kahana-beta-2026-04-04-1850.md) |
| 7:12 PM | 62 | 5.0 s | **0.37** | 3.5 s | CLS regression [1912](./cwv-report-kahana-beta-2026-04-04-1912.md) |
| **7:21 PM** | **75** | 6.2 s | **0** | 4.7 s | Mobile — CLS fix verified |

---

*Generated from PageSpeed Insights / Lighthouse export, April 4, 2026, 7:21 PM CDT (mobile + desktop).*

---

## Follow-up after PSI 90+ implementation (fill in post-deploy)

| Check | Target (strong progress) | Median actual (3–5 runs) |
| --- | --- | --- |
| Mobile Performance | 85+ (stretch 90+) | _TBD_ |
| Mobile LCP | &lt; 4 s (&lt; 2.5 s stretch) | _TBD_ |
| Mobile CLS | 0 | _TBD_ |
| Desktop Performance | 85+ (stretch 90+) | _TBD_ |
| Desktop TBT | &lt; 300 ms (&lt; 200 ms stretch) | _TBD_ |
| LCP element (mobile) | Prefer hero / headline vs consent-only | _TBD_ |

See [cwv-follow-up-verification.md](./cwv-follow-up-verification.md) for the full verification checklist.
