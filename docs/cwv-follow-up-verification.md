# CWV follow-up — how to verify (mobile-first)

After deploying mobile CWV improvements (tighter Cloudinary `srcset` defaults, footer `prefetch={false}`, `browserslist`, TTFB notes):

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
- [cwv-ttfb-hosting-notes.md](./cwv-ttfb-hosting-notes.md) — TTFB / hosting levers (not code-only).

## Scripts checklist

- Warmly (marketing consent) loads after **`requestIdleCallback`** (see [`pages/_app.js`](../pages/_app.js)).
- **ipapi** region cache: [`contexts/ConsentContext.jsx`](../contexts/ConsentContext.jsx).

## Build / polyfills

- **`browserslist`** in [`package.json`](../package.json) targets **last 2** major browsers — may reduce **legacy JavaScript** polyfill bytes slightly; if a regression appears for older browsers, widen the query.

**Unused CSS (~22 KiB)** in Lighthouse was left as a lower-priority follow-up (Tailwind/global bundle); revisit after LCP/INP trends improve.
