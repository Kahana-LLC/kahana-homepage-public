# Phase 1 — Corporate subdomains

Implements **Phase 1** of [`DOMAIN_CONSOLIDATION_CHARTER.md`](../DOMAIN_CONSOLIDATION_CHARTER.md): four corporate hosts resolve to this marketing app while **`kahana.io` stays unchanged**.

---

## URL inventory (locked for Phase 1)

| Host | Role | `/` serves | Also available (same app paths) |
|------|------|------------|----------------------------------|
| `about.kahana.io` | Marketing home | Homepage (`/`) | Full current site (nav/footer work) |
| `newsroom.kahana.io` | News / press | `/blog` (rewrite) | `/press`, `/press-kit`, `/press-releases`, `/events`, `/white-papers`, `/blog/[slug]` |
| `careers.kahana.io` | Careers | `/careers` (rewrite) | `/learning-internship`, `/right-to-work` |
| `help.kahana.io` | Help center | `/docs` (rewrite) | `/support`, `/community`, `/community-faq`, `/community-guidelines`, `/docs/[slug]` |

**Out of scope:** `developers.kahana.io`

**SEO (Phase 1):** Page canonicals remain `https://kahana.io/...` so subdomain mirrors do not create a second indexed host yet. Hard 301s from apex → subdomains happen later (Phase 3 marketing relocate).

Config source of truth: [`config/corporateHosts.js`](../config/corporateHosts.js)  
Routing: [`middleware.js`](../middleware.js) (`x-kahana-surface` response header for debugging)

---

## How it works

1. Heroku (or local) accepts the corporate hostnames and points them at **this** Next app.
2. Middleware detects the host.
3. For `newsroom` / `careers` / `help`, a request to `/` is **rewritten** to that surface’s `homePath`.
4. `about` needs no rewrite — `/` is already the marketing homepage.
5. All other paths behave as on apex (additive; no feature removal).

---

## Beta / Heroku preview testing (`kahana-public-beta`)

`newsroom.<app>.herokuapp.com` does **not** work — Heroku does not nest custom subdomains under `*.herokuapp.com`.

After this middleware is deployed to [kahana-public-beta](https://dashboard.heroku.com/apps/kahana-public-beta), use the **preview surface override** on the normal Heroku URL:

| Surface | Browser URL |
|---------|-------------|
| About (homepage) | https://kahana-public-beta-c1ed93018879.herokuapp.com/?kahana_surface=about |
| Newsroom → blog | https://kahana-public-beta-c1ed93018879.herokuapp.com/?kahana_surface=newsroom |
| Careers | https://kahana-public-beta-c1ed93018879.herokuapp.com/?kahana_surface=careers |
| Help → docs | https://kahana-public-beta-c1ed93018879.herokuapp.com/?kahana_surface=help |

Or curl:

```bash
BASE=https://kahana-public-beta-c1ed93018879.herokuapp.com
curl -sSI "$BASE/?kahana_surface=newsroom" | head
# Expect: x-kahana-surface: newsroom
```

Override is only honored on preview hosts (`*.herokuapp.com`, localhost) — not on production `kahana.io`.

For true subdomain QA later: CNAME `newsroom-beta.kahana.io` (etc.) → this Heroku app and add those hostnames with `heroku domains:add`.

---

## Ops: DNS + Heroku (production custom domains)

Replace `APP_NAME` with the Heroku app that serves this repo (production marketing).

```bash
# 1) Add custom domains on the Heroku app
heroku domains:add about.kahana.io --app APP_NAME
heroku domains:add newsroom.kahana.io --app APP_NAME
heroku domains:add careers.kahana.io --app APP_NAME
heroku domains:add help.kahana.io --app APP_NAME

# 2) Note DNS targets
heroku domains --app APP_NAME
```

At your DNS provider for `kahana.io`, create **CNAME** records (or ALIAS) for each subdomain → the Heroku DNS target shown above.

Preferred TLS: ACM wildcard `*.kahana.io` / automated certs once domains are verified (Heroku ACM: `heroku certs:auto:enable --app APP_NAME` if not already on).

Deploy a build that includes the updated `middleware.js` **before** or **with** DNS going live.

---

## Local verification

```bash
# Terminal A
npm run dev

# Terminal B — Host header simulates corporate subdomains
curl -sSI -H 'Host: about.localhost' http://127.0.0.1:3000/ | head
curl -sSI -H 'Host: newsroom.localhost' http://127.0.0.1:3000/ | head
curl -sSI -H 'Host: careers.localhost' http://127.0.0.1:3000/ | head
curl -sSI -H 'Host: help.localhost' http://127.0.0.1:3000/ | head
```

Expect `x-kahana-surface` on each. For newsroom/careers/help, `/` should rewrite (200 of the home path content; Location header is not set on rewrite).

Browser optional: add to `/etc/hosts`:

```
127.0.0.1 about.localhost newsroom.localhost careers.localhost help.localhost
```

Then open `http://newsroom.localhost:3000/`.

---

## Production smoke (after DNS)

```bash
curl -sSI https://about.kahana.io/ | head
curl -sSI https://newsroom.kahana.io/ | head
curl -sSI https://careers.kahana.io/ | head
curl -sSI https://help.kahana.io/ | head

# Apex must still be marketing (unchanged)
curl -sSI https://kahana.io/ | head
```

---

## Exit criteria checklist

- [ ] Code with corporate host middleware deployed
- [ ] DNS + TLS for `about`, `newsroom`, `careers`, `help`
- [ ] Each host HTTPS loads correct surface home
- [ ] `kahana.io` marketing unchanged
- [ ] `developers.*` still deferred
- [ ] Phase 2 (sidebar) can start once URLs are public

---

## Follow-ons (not Phase 1)

- Phase 2: `kahana-web` sidebar → absolute subdomain URLs + new window  
- Phase 3: apex → product; marketing home durable on `about.`; `app.` 301s; Hub SEO flip
