# Phase 3 handoff — `app.kahana.io` → `kahana.io` (for `kahana-web`)

> **Purpose:** Status handoff from the marketing repo to **kahana-web** + Heroku/Firebase ops for Phase 3.  
> **Audience:** Product, engineering, ops working in the product CRA.  
> **As of:** 2026-07-14  
> **Related:** [`DOMAIN_PHASE3_READINESS.md`](../DOMAIN_PHASE3_READINESS.md), [`DOMAIN_CONSOLIDATION_CHARTER.md`](../DOMAIN_CONSOLIDATION_CHARTER.md), [`PHASE2_5_APEX_REDIRECT_MAP.md`](./PHASE2_5_APEX_REDIRECT_MAP.md)

---

## Target end state

```
kahana.io              → Product CRA (today’s app.kahana.io)
kahana.io/hub/…        → Product hubs
about.kahana.io        → Company / marketing home
newsroom.kahana.io     → News / press
careers.kahana.io      → Careers
help.kahana.io         → Docs / help
app.kahana.io          → permanent path-preserving 301 → kahana.io (incl. /hub/…)
```

---

## Already done (do not redo)

### Phase 1 — Corporate subdomains (marketing)

`about`, `newsroom`, `careers`, and `help.kahana.io` each return HTTPS **200** on Heroku `kahana-public`.

### Phase 2 — In-app company links (product)

Product Resources / sidebar use company subdomain URLs (`COMPANY_RESOURCE_LINKS` and related) on `app.kahana.io` — not apex marketing paths that will become product routes.

### Phase 2.5 — Marketing off apex (marketing, live on prod)

Shipped to **`kahana-public` v436** (`e144cb2`, 2026-07-14). Curl gate **green**:

| URL | Expect | Result |
|-----|--------|--------|
| `https://kahana.io/` | **301** → `https://about.kahana.io/` | Live |
| `https://kahana.io/about` | **301** → `about.kahana.io` | Live |
| `https://kahana.io/blog` | **301** → `newsroom.kahana.io` | Live |
| `https://kahana.io/docs` | **301** → `help.kahana.io` | Live |
| `https://kahana.io/careers` | **301** → `careers.kahana.io` | Live |
| Company subdomains | **200** | Live |
| Marketing home | `about.kahana.io` | Live (platform marketing home) |

Until Phase 3 finishes, visiting `kahana.io` goes to **about**, not the product. Product entry remains **`app.kahana.io`**.

---

## Current hosting (Phase 3 not started)

| Host | Serves today | Heroku app |
|------|----------------|------------|
| `kahana.io`, `www.kahana.io` | Marketing Next (apex hard-301s only) | `kahana-public` |
| `about` / `newsroom` / `careers` / `help.kahana.io` | Company sections | `kahana-public` |
| `app.kahana.io` | Product CRA | `kahana-alpha` |
| `curio.store` | Legacy alias on alpha | `kahana-alpha` |

---

## What needs to be done (Phase 3 — `kahana-web` + ops)

Apex marketing paths already 301 away, so DNS rebind is unblocked once config below is ready. Execute intentionally; do not treat this as a marketing-repo deploy.

### 1. DNS / Heroku

- [ ] Add `kahana.io` (and decide `www` policy) to **`kahana-alpha`**
- [ ] Remove / stop apex product-colliding ownership on **`kahana-public`** so product owns apex (keep `about` / `newsroom` / `careers` / `help` on marketing)
- [ ] Path-preserving **301** `app.kahana.io/*` → `kahana.io/*` (including `/hub/:id`, `/explore`, auth routes)
- [ ] Decide `curio.store` / `www.kahana.io` (prefer 301 into the new map)

### 2. App + API config

- [ ] Firebase Auth authorized domains + OAuth redirect URIs include `kahana.io`
- [ ] Cloud Functions CORS / origin verification allowlist includes `kahana.io`
- [ ] Env: `APP_BASE_URL` / `REACT_APP_*` / password-reset continue URLs → apex
- [ ] Stripe return URLs if host-bound
- [ ] Mixpanel / email CTAs / hardcoding: stop treating `app.kahana.io` as the only product origin

### 3. Hub SEO

- [ ] Flip `APP_CANONICAL_URL` / `APP_CANONICAL_ORIGIN` → `https://kahana.io`
- [ ] Prod Functions SEO sitemap / canonical / `llms.txt` → `kahana.io`
- [ ] `public/robots.txt` Sitemap → `https://kahana.io/sitemap.xml`
- [ ] Search Console: `kahana.io` property + sitemap; monitor `app.` 301s

### 4. Regression before calling done

- [ ] Login / signup / OAuth on apex
- [ ] Explore, hub open, checkout, billing
- [ ] `curl -sSI https://app.kahana.io/hub/$HUB_ID` → **301** → `https://kahana.io/hub/$HUB_ID`
- [ ] Googlebot HTML on `https://kahana.io/hub/$HUB_ID` is **200** with apex canonical
- [ ] Confirm `about.kahana.io` still serves marketing home; company subdomains stay healthy on `kahana-public`

---

## Constraints / safe order

1. Do **not** rebind DNS until Firebase / CORS / env are ready enough for login on apex.
2. Prefer staging/beta (if available) → prod, with rollback: keep `app.` serving until apex is verified, then enable `app.` → apex 301s.
3. Keep marketing Phase 2.5 green: apex must not go back to marketing **200**s; company subdomains must keep working on `kahana-public`.
4. Historical risk: do not accidentally push the product CRA git tree to `kahana-public` (marketing). Apex cutover moves **domains**, not the marketing buildpack owner for `about.*`.

---

## Suggested ask for a `kahana-web` agent session

Use this as a paste-in prompt:

```text
Context: Phase 3 domain cutover — make kahana.io the primary product URL.

You are in kahana-web (product CRA on Heroku kahana-alpha / app.kahana.io).
Marketing Phase 1–2.5 is DONE on kahana-public v436: apex kahana.io hard-301s to
about/newsroom/careers/help; marketing home is about.kahana.io. Product still lives
on app.kahana.io. Phase 3 (apex = product, app. → path-preserving 301s, Firebase/
CORS/env, hub SEO canonical flip) is NOT started.

Full handoff checklist: see kahana-homepage-public docs/PHASE3_KAHANA_WEB_HANDOFF.md
(or DOMAIN_PHASE3_READINESS.md §7 if you only have that).

Please:
1) Audit this repo for everywhere we assume app.kahana.io as canonical product origin.
2) Produce a concrete Phase 3 runbook (code/env/Heroku/Firebase/SEO) with safe order
   and rollback.
3) Implement what can be done in-repo now; clearly call out pure ops steps
   (Firebase/Heroku/DNS/Search Console).
```

---

## Document history

| Date | Note |
|------|------|
| 2026-07-14 | Created after Phase 2.5 prod ship (`kahana-public` v436) for `kahana-web` handoff. |
