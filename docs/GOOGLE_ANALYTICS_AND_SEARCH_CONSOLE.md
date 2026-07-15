# Google Analytics + Search Console (marketing)

> Companion to product runbook: `kahana-web/scripts/GOOGLE_ANALYTICS_AND_SEARCH_CONSOLE.md`

## GA4 on this site

- Consent-gated in `pages/_app.js` via `utils/googleAnalytics.js`
- Measurement: `NEXT_PUBLIC_GA_MEASUREMENT_ID` (default `G-KQHFL9605P`)
- SPA `page_view` on route changes after analytics consent
- Cross-domain linker includes `app.kahana.io` + corporate hosts
- **GTM:** only if `NEXT_PUBLIC_GTM_ID` is set — never also put GA4 Config in GTM

Per-page `<Script>` gtag blocks were removed so consent + a single config path own all pageviews.

## Search Console (ops — Domain property)

1. Add Domain property `kahana.io` in Search Console → DNS TXT verify.
2. Submit sitemaps:

| URL |
|-----|
| `https://about.kahana.io/sitemap.xml` |
| `https://newsroom.kahana.io/sitemap.xml` |
| `https://careers.kahana.io/sitemap.xml` |
| `https://help.kahana.io/sitemap.xml` |
| `https://app.kahana.io/sitemap.xml` |

`public/robots.txt` already lists the corporate sitemap URLs.

## QA

1. Accept analytics cookies on `about.kahana.io`
2. GA4 Realtime / DebugView for `G-KQHFL9605P` — one `page_view` per route
3. Network: `gtag/js?id=G-…` present; `gtm.js` only if `NEXT_PUBLIC_GTM_ID` is set


## Live audit (2026-07-15, about.kahana.io prod — before GTM opt-in fix)

After analytics consent, network showed:

| Hit | Source |
|-----|--------|
| `G-KQHFL9605P` `page_view` | Inline gtag in `_app.js` |
| `G-DDFRJ2NV4B` `page_view` | GTM `GTM-WBXNXKQ` |
| `UA-160716841-1` pageview | GTM (legacy Universal Analytics) |
| `AW-328737278` + AdSense | GTM / ads scripts |

**Fix shipped in code:** gtag-only for analytics; GTM loads only when `NEXT_PUBLIC_GTM_ID` is set **and** advertising consent is granted. Ops should clean GTM: remove UA + duplicate GA4 Config for Kahana product analytics; keep Ads conversion tags if still needed, then set the env var.
