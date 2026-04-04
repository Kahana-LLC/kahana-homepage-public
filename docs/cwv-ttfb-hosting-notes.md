# TTFB / hosting notes (mobile CrUX)

Mobile **Time to First Byte** (75th percentile) was **~1.1 s** vs **~0.8 s** on desktop in PageSpeed field data — both affect **FCP/LCP** because HTML must arrive before paint.

## What the app already does

- **ISR** on the homepage: [`pages/index.js`](../pages/index.js) uses `revalidate: 86400` in production (daily rebuild of static HTML).
- **Cache headers** for static assets: [`next.config.js`](../next.config.js) `headers()` — `/images/*`, `/fonts/*`, `/figma-imports/*`, `/_next/static/*`.

## Infrastructure levers (outside this repo’s code)

| Lever | Why it matters |
| --- | --- |
| **Heroku dyno** | Cold starts or single web dyno can add latency to the first HTML byte. **Always-on** or **multiple dynos** reduce wake-up delay. |
| **CDN in front of Heroku** | Edge-cached HTML (where safe) improves TTFB for global users. Requires cache rules that respect dynamic/auth routes. |
| **Region** | Deploy near primary users if the origin is not behind a global CDN. |

## How to measure

- **Field:** CrUX TTFB in PageSpeed Insights (mobile tab) — **28-day** rolling window.
- **Lab:** Lighthouse does not replace TTFB field; use **WebPageTest** or **Chrome DevTools** → Network → document **Waiting (TTFB)** on repeat runs.

Document **before/after** when changing hosting or CDN so mobile **FCP/LCP** can be attributed correctly.
