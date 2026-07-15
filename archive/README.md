# Archived marketing content

Oasis-era content was moved here so the public site focuses on the Kahana platform, while keeping Oasis pay/install paths live.

## Data (2026-07-15)

| Path | Contents |
|------|----------|
| `archive/data/blog/` | Former `data/blog/*.json` posts (~360) |
| `archive/data/docs/` | Former `data/docs/*.json` articles (~88), plus optional Mozilla HTML dumps |

Public catalogs: empty `data/blog-index.js`; no JSON under `data/docs/` (payload helper `.js` may remain).

Redirects: `config/archivedContentRedirects.js` — regen with `node scripts/generate-archived-content-redirects.js`.

## Pages (local archive after blog/docs)

| Path | Contents |
|------|----------|
| `archive/pages/features/` | Oasis feature deep-dives + user-analytics |
| `archive/pages/products/` | Oasis product pages |
| `archive/pages/markets/` | Market pages |
| `archive/pages/solutions/` | Solution pages |
| `archive/pages/use-cases/` | Use-case pages |
| `archive/pages/*.jsx` | Waitlist, beta, mobile, AR, buyer guides, sales/demo, consortium, etc. |

**Kept live on purpose:** `/oasis-pricing`, `/installations`, `/oasis-auth`, NPS/PMF/feedback surveys, and Your Tech Compass coverage on `/press`.

Redirects: `config/archivedOasisPageRedirects.js` — regen with `node scripts/generate-archived-oasis-page-redirects.js`. Product aliases in `next.config.js` now point to `/oasis-pricing`.

## Restore

1. Move the page file back under `pages/` (same relative path).
2. Remove that source from the archived redirects file (or regenerate after removing from archive).
3. Redeploy.
