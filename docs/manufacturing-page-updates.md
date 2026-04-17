# Manufacturing market page updates

Summary of changes to [`pages/markets/manufacturing.jsx`](pages/markets/manufacturing.jsx) and related configuration touched while improving this page in this working session.

## Positioning and copy (narrative alignment)

- **Hero:** Reframed around Oasis as a managed enterprise browser: session-level governance, IdP and DLP, contractor/partner access without laptop shipping or VDI as the default. CTAs: Schedule a demo, Buyer’s guide.
- **`securityFeatures`:** Four blocks aligned to enterprise narrative (where work happens, third parties, unified policies, IdP + DLP integration). Removed unverified product percentages from older “effectiveness” stats.
- **`industryBenefits`:** Outcome-focused cards (velocity, cost structure, governance, scalability) without fabricated metrics; conditional rendering when `stat` / `statLabel` are absent.
- **Section headings and intros:** Updated for browser governance / Oasis framing; guardrail-friendly language (no placeholder quotes, careful claims).
- **CTA band:** Copy aligned to external collaboration and browser governance.
- **SEO and JSON-LD:** Titles, descriptions, and `manufacturingSchema` updated for Oasis and manufacturing SaaS positioning.
- **Cleanup:** Removed unused `next/image` import when no longer needed.

## Industry metrics grid

- **Typography:** Metric values use olive (`#4A5745`) with `tabular-nums` instead of light teal for a more consistent, enterprise look.
- **Labels:** Uppercase, tracked labels under the figure for clearer hierarchy.
- **Cards:** Border + light shadow; hover uses teal accent on border, not heavy drop shadow.
- **Sources:** “Source: …” styling with hover/focus states; muted olive instead of gray-only.
- **Layout:** Two-column grid with `max-w-5xl`; odd fifth card spans and centers so the grid does not look broken.
- **Industry stats:** Third-party cited metrics in `manufacturingMetrics` retained; intro copy explains industry risk vs session governance.

## Feature and outcomes cards (“What Oasis delivers” / “Outcomes…”)

- Replaced pastel gradient cards and aqua gradient icon orbs with **white cards**, **subtle borders**, and **solid `kahana-primary-800`** icon tiles (rounded square, light ring).
- **Lists:** Small primary-colored bullets instead of repeated teal check circles.
- **Section bands:** Muted background and border on the features section for separation from flat white.
- **Operational scalability:** Distinct icon (trending-up) instead of duplicating the shield used elsewhere.

## Copy tightening (later passes)

- **Hero and nearby intros:** Shorter sentences; removed scattered `<strong>` emphasis.
- **Em dashes:** Removed all em dashes (`—`) on the manufacturing page; replaced with colons, commas, periods, or light rewrites. Titles use `Manufacturing: …` before the product phrase instead of em dash separators.

## Related fix (dev experience, not page content)

- **`next.config.js`:** `Cache-Control` for `/_next/static/:path*` is **long-cache immutable only in production**; in **development** it uses **`no-store`** so webpack HMR runtime (e.g. `chunks/webpack.js`) is not cached with a stale hot-update hash. This stopped Fast Refresh / hot-update **404 reload loops** that showed up while working on `/markets/manufacturing` (the loop was config/cache-related, not manufacturing page logic).

---

*If you extend other market pages, consider reusing the same card and metrics patterns for visual consistency.*
