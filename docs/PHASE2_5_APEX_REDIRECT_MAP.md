# Phase 2.5 — Apex → subdomain redirect map

**Status:** Implemented in [`config/apexRedirects.js`](../config/apexRedirects.js) + [`middleware.js`](../middleware.js).  
**Rule:** 301 only when `Host` is `kahana.io` (or `www.kahana.io` before apex canonicalize). Never redirect when already on `about.` / `newsroom.` / `careers.` / `help.` (or `*-beta`). QA: Host-header against local/beta slug, or deploy to prod apex when ready.

Until Phase 3, `https://kahana.io` (Discover) 301s to **about.kahana.io**. Product explore remains on **app.kahana.io**.

---

## Core (path-preserving)

| Apex | → |
|------|---|
| `/` | `https://about.kahana.io/` |
| `/about`, `/team`, `/manifesto`, `/contact`, `/security`, `/security-guide`, `/press-kit`, `/pricing`, `/testimonials`, legal | `https://about.kahana.io{path}` |
| `/blog`, `/blog/*`, `/press`, `/press-releases`, `/events`, `/white-papers` | `https://newsroom.kahana.io{path}` |
| `/docs`, `/docs/*`, `/support`, `/community*` | `https://help.kahana.io{path}` |
| `/careers`, `/learning-internship`, `/right-to-work` | `https://careers.kahana.io{path}` |

## Oasis / leftovers → about home

`/products/*`, `/features/*`, `/markets/*`, `/solutions/*`, `/oasis-*`, buyer guides, consortium, installations, schedule-demo, sales, explore, Oasis auth helpers, etc. → `https://about.kahana.io/`

## Excluded

- `/api/*`, `/_next/*`, static files (matcher + resolver skip)

## Curl gate

```bash
curl -sSI https://kahana.io/ | head -15          # 301 → about.kahana.io/
curl -sSI https://kahana.io/about | head -15
curl -sSI https://kahana.io/blog | head -15
curl -sSI https://kahana.io/docs | head -15
curl -sSI https://kahana.io/careers | head -15
curl -sS -o /dev/null -w "%{http_code}\n" https://about.kahana.io/
```
