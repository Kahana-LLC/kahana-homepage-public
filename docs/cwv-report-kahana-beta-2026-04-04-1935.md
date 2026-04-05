# Lighthouse / PageSpeed Insights — beta (Heroku), homepage (post–PSI 90+ deploy)

**Same PSI session — mobile + desktop** (Apr 4, 2026, **7:35 PM** CDT). Follows deploy of shorter consent copy, **`next/dynamic`** app shell ([`pages/_app.js`](../pages/_app.js)), and navbar **`prefetch={false}`** on `/about`.

| Field | Value |
| --- | --- |
| **URL** | `https://kahana-public-beta-c1ed93018879.herokuapp.com/` |
| **Report captured** | April 4, 2026, 7:35 PM (CDT) |
| **Lighthouse** | **13.0.1** |
| **Chrome** | HeadlessChromium **146.0.7680.153** |

---

## Mobile vs desktop (7:35 PM) — at a glance

| | Mobile | Desktop |
| --- | --- | --- |
| **Performance** | **74** | **96** |
| **Accessibility** | **96** | **93** |
| **SEO** | 74 | **96** |
| **FCP** | 1.7 s | 0.4 s |
| **LCP** | 6.2 s | 1.3 s |
| **TBT** | 0 ms | 30 ms |
| **CLS** | 0 | 0 |
| **SI** | 4.8 s | **0.9 s** |

**Desktop Performance 96** meets the **90+** stretch goal for **lab / custom throttling**. **Mobile** remains constrained by **Slow 4G** + **LCP** (consent still the reported LCP node).

---

## Executive summary (mobile)

| Category | Score |
| --- | ---: |
| **Performance** | **74** |
| Accessibility | 96 |
| Best Practices | 100 |
| SEO | 74 |

### Estimated metric weights (this report UI)

| Metric | Weight |
| --- | ---: |
| FCP | +9 |
| LCP | +3 |
| TBT | +30 |
| CLS | +25 |
| SI | +7 |

---

## Core metrics (mobile)

| Metric | Value | Notes |
| --- | --- | --- |
| **FCP** | **1.7 s** | Slightly slower than **7:21 PM** (**1.4 s**); lab variance |
| **LCP** | **6.2 s** | Still Poor; unchanged vs **7:21** headline |
| **TBT** | **0 ms** | Excellent (was **60 ms** at 7:21) |
| **CLS** | **0** | Stable |
| **SI** | **4.8 s** | Needs improvement |

---

## LCP breakdown

| Subpart | Duration |
| --- | ---: |
| Time to first byte | 0 ms |
| Element render delay | **2,430 ms** |

**LCP element:** `#consent-banner-description` — copy now matches the **short banner** (“We use cookies for essential site features, analytics, and optional personaliza…”) with classes `text-sm text-gray-700 mb-0 max-w-prose`. Consent still wins LCP over the hero in this run; **render delay** improved slightly vs **~2,510 ms** (7:21 PM).

---

## Insights (selected)

- **Use efficient cache lifetimes** — ~15 KiB (`hqdefault` **17 KiB**, sf-syn **3 KiB**).
- **Legacy JavaScript** — ~13 KiB on `main-bd8aeafb8d64baa0.js` (same pattern as prior reports).

---

## Diagnostics

| Audit | Notes |
| --- | --- |
| **Reduce unused CSS** | ~21.1 KiB on `903fd57302cc5841.css` |
| **Long main-thread tasks** | **1** task (**51 ms** in `framework` chunk) vs **4** tasks in the **7:21 PM** mobile paste — aligns with lighter hydration after **`dynamic`** splits |

### Next.js user timings (this run)

| Name | Duration |
| --- | --- |
| Next.js-before-hydration | **463.08 ms** |
| Next.js-hydration | **66.76 ms** |

Compare to **7:21 PM** mobile ([1921](./cwv-report-kahana-beta-2026-04-04-1921.md)): **802 ms** / **120.86 ms** — **before-hydration** and **hydration** both **faster** in this run, consistent with the **`_app`** bundle reduction.

---

## Comparison — mobile beta snapshots

| Run (CDT) | Performance | LCP | TBT | CLS | SI |
| --- | ---: | --- | --- | --- | --- |
| 7:21 PM | 75 | 6.2 s | 60 ms | 0 | 4.7 s |
| **7:35 PM** | **74** | 6.2 s | **0 ms** | 0 | 4.8 s |

**Takeaway:** Headline **Performance** is within single-run noise (**74 vs 75**). Main wins in this export are **TBT 0** and **faster hydration**; **LCP** remains gated by **consent-as-LCP** on Slow 4G — next lever is making the **hero** the largest paint (e.g. further consent UX, cookie/middleware, or stronger image priority), not small copy tweaks alone.

---

## Desktop — executive summary (7:35 PM)

| Category | Score |
| --- | ---: |
| **Performance** | **96** |
| Accessibility | 93 |
| Best Practices | 100 |
| SEO | 96 |

| Lab setup | Value |
| --- | --- |
| Device | Emulated **Desktop** |
| Network | **Custom throttling** (PSI desktop preset) |

### Desktop — estimated metric weights (this report UI)

| Metric | Weight |
| --- | ---: |
| FCP | +10 |
| LCP | +21 |
| TBT | +30 |
| CLS | +25 |
| SI | +10 |

### Desktop — core metrics

| Metric | Value |
| --- | --- |
| **FCP** | **0.4 s** |
| **LCP** | **1.3 s** |
| **TBT** | **30 ms** |
| **CLS** | **0** |
| **SI** | **0.9 s** |

### Desktop — LCP breakdown

| Subpart | Duration |
| --- | ---: |
| Time to first byte | 0 ms |
| Element render delay | **1,140 ms** |

**LCP element:** still `#consent-banner-description` (short copy). Headline **LCP 1.3 s** remains in a good band; subpart **render delay** is large but overall score is strong.

### Desktop — diagnostics (selected)

| Audit | Notes |
| --- | --- |
| **Reduce unused CSS** | ~20.1 KiB on `903fd57302cc5841.css` |
| **Long main-thread tasks** | **2** (vs **8** in [1921 desktop](./cwv-report-kahana-beta-2026-04-04-1921.md) session) |
| **Legacy JS / cache TTL** | Same themes as mobile |

**Passed audits:** **20** (desktop).

### Desktop vs prior snapshot (7:21 PM)

| | 7:21 PM desktop | 7:35 PM desktop |
| --- | --- | --- |
| **Performance** | 71 | **96** |
| **TBT** | 540 ms | **30 ms** |
| **SI** | 1.9 s | **0.9 s** |

*Large swing is partly **lab variance** and different main-thread contention; the **7:35** run aligns with **`_app` code-splitting** and low long-task count.*

---

## Accessibility (desktop tab — 7:35 PM)

Automatic audits reported **93**. Examples from the export (for follow-up; not part of **Performance** score):

| Theme | Examples cited |
| --- | --- |
| **Contrast** | [`ConsentBanner`](../components/ConsentBanner.jsx) — title link `text-[#3D4A00]`, body `text-gray-700`, “Full cookie notice” / Privacy links on white banner |
| **Touch targets** | [`NavbarDup`](../components/NavbarDup.jsx) — dropdown toggles adjacent to **`nav-link`** (Products, Pricing, Learn, About) |
| **ARIA / roles** | [`OasisYouTubeEmbed`](../components/OasisYouTubeEmbed.jsx) / **react-lite-youtube-embed** — `role="img"` on **`article.yt-lite`** |

**Mobile Accessibility was 96** in the same session — differing viewport and audit emphasis.

---

*Generated from Lighthouse / PSI export, April 4, 2026, 7:35 PM CDT (mobile + desktop).*
