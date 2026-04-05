# Follow-on plan — mobile LCP & early paint (post–Apr 4, 2026 beta PSI)

**Context:** Plan written after beta mobile lab results showing **LCP** as the main drag on Performance, with large **element render delay** and (in some runs) a long **blank** filmstrip before content appears. Use with [cwv-follow-up-verification.md](./cwv-follow-up-verification.md) (**median 3–5 PSI runs** per deploy). Compare field context in [cwv-report-kahana-co-2026-04-04-1828.md](./cwv-report-kahana-co-2026-04-04-1828.md).

---

## Baseline snapshot (example — kahana-public-beta, Apr 4, 2026 ~8:19 PM CDT)

| Field | Value |
| --- | --- |
| **Performance** | 75 |
| **LCP** | ~5.9 s |
| **FCP** | ~1.5 s |
| **Speed Index** | ~4.6 s |
| **TBT** | ~20 ms |
| **CLS** | 0 |

**LCP breakdown (illustrative):** resource load duration small (~tens of ms); **element render delay** large (~2+ s). **Next.js-before-hydration** User Timing on the order of **hundreds of ms** in the same export.

**Important:** Lab scores **vary run-to-run** on Slow 4G (e.g. another capture the same evening showed better LCP/SI). Treat **median** metrics as truth, not a single run.

---

## Guiding idea

Improve **mobile Slow 4G** lab by:

1. Shortening **time until the LCP element can paint** (reduce **element render delay**).
2. Improving **early paint** so the filmstrip is not blank for many frames (**FCP**, **SI**).
3. Reducing **JS work before hydration / first render** where safe (User Timing **before-hydration**).

Network optimization for the hero image alone is **secondary** once load duration is already low; **connection setup** and **critical-path JS/CSS** matter more.

---

## Phase 1 — Resource hints & hero URL alignment (low risk)

**Goal:** Reduce **resource load delay** for the Cloudinary LCP image; avoid duplicate fetches.

1. Add **`rel="preconnect"`** (and optionally **`dns-prefetch`**) for **`https://res.cloudinary.com`** in [`pages/_document.js`](../pages/_document.js) or homepage [`Head` in `pages/index.js`](../pages/index.js).
2. Keep **`<link rel="preload" as="image" …>`** for the hero; ensure the preload **URL** matches the default **`src` / `srcset`** choice for a typical **narrow** viewport (see [`ProductSection.jsx`](../components/ProductSection.jsx) `OASIS_HERO_PRELOAD_WIDTH` / `OASIS_HERO_WIDTHS` and [`getCloudinarySrcSet`](../utils/cloudinary.js)).

**Success:** Stable or lower **resource load delay** in PSI **LCP breakdown**; no desktop regression.

---

## Phase 2 — Less JS before first useful paint

**Goal:** Earlier **FCP** / fewer blank filmstrip frames; lower **Next.js-before-hydration** time.

1. Extend **`next/dynamic`** with **`ssr: true`** for additional **below-the-fold** homepage sections still loaded synchronously in [`pages/index.js`](../pages/index.js) (blog strip, “Why Oasis” grid, etc.), matching patterns already used for **FeaturesShowcase**, **HowItWorks**, **ProductTourCard**.
2. Revisit **`scrollY` / `isMobile`** and the gradient background in [`pages/index.js`](../pages/index.js): keep **CLS-safe** behavior (no `isMobile` layout flip); reduce **effect** surface area if possible so less work runs in the first moments after load.

**Success:** **FCP** / **SI** trend down; **before-hydration** duration drops in User Timing; **TBT** / **CLS** unchanged or better.

---

## Phase 3 — Simpler hero stack on small viewports

**Goal:** Cut compositing / paint cost on the **LCP** subtree (`Welcome to Oasis`).

1. On **`max-md`** (or similar), use a **flat** hero: remove or hide **decorative** blur layers behind the image; **minimal shadow**; **solid** background instead of heavy glass (`backdrop-blur`). Preserve richer styling from **`sm`/`md`+** for brand parity on larger screens. Primary files: [`ProductSection.jsx`](../components/ProductSection.jsx), decorative orbs in [`pages/index.js`](../pages/index.js) `#products` section.
2. Confirm **no opacity / visibility gates** on above-the-fold content ([`FadeInSection`](../components/FadeInSection.jsx) **`eager`**, [`ConsentBanner`](../components/ConsentBanner.jsx) deferral).

**Success:** **Element render delay** in LCP breakdown trends down (compare **medians**).

---

## Phase 4 — CSS on the critical path (medium effort)

**Goal:** Address Lighthouse **unused CSS** (~20+ KiB) without breaking Tailwind.

1. Audit [`styles/globals.css`](../styles/globals.css) for large rulesets that are **route-specific** — scope or defer where safe.
2. Verify **Tailwind `content` globs** in [`tailwind.config.js`](../tailwind.config.js) cover all JSX entry points.
3. Avoid blanket **PurgeCSS** unless the build pipeline is validated for dynamic class names.

**Success:** Smaller or cheaper first-paint CSS; possible **SI** / **FCP** gains.

---

## Phase 5 — Legacy JS (~13 KiB) / polyfills (lower priority)

1. Run **`ANALYZE=true npm run build`**; attribute **`main` / `framework`** chunks ([`package.json`](../package.json) **`browserslist`** already targets recent evergreen browsers).
2. Tune **compiler / Next** only if ROI is clear and **Safari** coverage is tested.

---

## Phase 6 — Verification

| Step | Action |
| --- | --- |
| 1 | Deploy to beta/production |
| 2 | **PSI Mobile** — **median 3–5 runs** — record Performance, **LCP**, **FCP**, **SI**, **LCP subparts** |
| 3 | Optional: DevTools **Performance** trace (Slow 4G, Moto G) — map **LCP** to **long tasks** / hydration |

**Stretch targets (lab):** Align with [cwv-follow-up-verification.md](./cwv-follow-up-verification.md) — e.g. **LCP &lt; 4 s**, Performance **85+** as stretch; **LCP &lt; 5 s** / high 70s–80s Performance as nearer-term progress on Slow 4G.

---

## Related docs

- [cwv-follow-up-verification.md](./cwv-follow-up-verification.md) — measurement checklist, prior implementation notes.
- [cwv-ttfb-hosting-notes.md](./cwv-ttfb-hosting-notes.md) — TTFB / CDN / hosting (if TTFB becomes a lab issue).
- [cwv-report-kahana-co-2026-04-04-1828.md](./cwv-report-kahana-co-2026-04-04-1828.md) — field CrUX snapshot (kahana.co).

---

## Implementation log

**Follow-on batch (code):**

- **Phase 1:** [`pages/_document.js`](../pages/_document.js) — `dns-prefetch` + `preconnect` to `res.cloudinary.com`. [`pages/index.js`](../pages/index.js) — LCP `<link rel="preload" as="image">` with **`imageSrcSet` + `imageSizes`** when Cloudinary mapping exists (fallback to single `href`). [`ProductSection.jsx`](../components/ProductSection.jsx) exports **`OASIS_HERO_SIZES`** for alignment.
- **Phase 2:** **Why Oasis** grid moved to [`HomeWhyOasisSection.jsx`](../components/HomeWhyOasisSection.jsx) and loaded via **`next/dynamic` (`ssr: true`)** from [`pages/index.js`](../pages/index.js). **Scroll** parallax on the global gradient layer runs **only on desktop** (`resize` syncs; no scroll listener on mobile).
- **Phase 3:** **Hero** — decorative glow **hidden below `md`**, mobile card uses **flat** styling (`rounded-2xl`, solid `bg-white`, light shadow; glass **`md:`+**). **`#products`** background orbs **hidden below `md`** (`hidden md:block` on the orb container).
- **Phase 4:** [`tailwind.config.js`](../tailwind.config.js) content globs already cover `./pages/**`, `./components/**`; no change required for this pass.
