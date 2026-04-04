# CWV follow-up — how to verify (post–Apr 2026)

After deploying the follow-up changes (responsive Cloudinary `srcset`, hero `sizes` + preload, navbar `prefetch={false}` on heavy routes, Warmly idle-defer, contrast):

## Lab (immediate)

1. Open Chrome DevTools → Lighthouse → **Mobile**, **Slow 4G**, **Navigate** to `https://kahana.co/`.
2. Compare to the baseline in [cwv-report-kahana-co-2026-04-04.md](./cwv-report-kahana-co-2026-04-04.md): **LCP** (lab is stress-test), **Improve image delivery**, **Reduce unused JavaScript** (white paper / buyer guide chunks should not load on cold homepage if nav links are not prefetching).
3. Optional: Network tab → filter `white-paper` / `enterprise-buyer` — should not appear on first paint without navigation.

## Field (4–28 days)

- **CrUX** in PageSpeed Insights updates on a **rolling 28-day** window; expect gradual movement on **LCP** and **INP**, not instant jumps.
- Use **Search Console** Core Web Vitals report for trend lines.

## Scripts checklist

- Warmly (marketing consent) loads after **`requestIdleCallback`** (or `setTimeout` fallback) to reduce contention with first input.
