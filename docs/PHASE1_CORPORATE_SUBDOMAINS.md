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

## Beta subdomain testing (`kahana-public-beta`)

Nested hosts like `newsroom.<app>.herokuapp.com` **do not work**. Use real DNS on `kahana.io` pointed at the beta app.

| Host | Role | `/` serves |
|------|------|------------|
| `about-beta.kahana.io` | Marketing home | Homepage |
| `newsroom-beta.kahana.io` | Newsroom | `/blog` |
| `careers-beta.kahana.io` | Careers | `/careers` |
| `help-beta.kahana.io` | Help | `/docs` |
| `kahana-public-beta-….herokuapp.com` | Beta “apex” | Unchanged full site |

```bash
heroku domains:add about-beta.kahana.io --app kahana-public-beta
heroku domains:add newsroom-beta.kahana.io --app kahana-public-beta
heroku domains:add careers-beta.kahana.io --app kahana-public-beta
heroku domains:add help-beta.kahana.io --app kahana-public-beta
heroku domains --app kahana-public-beta
```

Create matching **CNAME** records at your DNS provider → the Heroku DNS targets.

### Fallback without DNS (query override)

Only on `*.herokuapp.com` / localhost:

| Surface | Browser URL |
|---------|-------------|
| About | https://kahana-public-beta-c1ed93018879.herokuapp.com/?kahana_surface=about |
| Newsroom | https://kahana-public-beta-c1ed93018879.herokuapp.com/?kahana_surface=newsroom |
| Careers | https://kahana-public-beta-c1ed93018879.herokuapp.com/?kahana_surface=careers |
| Help | https://kahana-public-beta-c1ed93018879.herokuapp.com/?kahana_surface=help |

```bash
BASE=https://kahana-public-beta-c1ed93018879.herokuapp.com
curl -sSI "$BASE/?kahana_surface=newsroom" | head
# Expect: x-kahana-surface: newsroom
```

---

## Ops: DNS + Heroku (production custom domains)

Production app: **`kahana-public`** (ACM enabled). Domains were added 2026-07-14; release **v435** includes Phase 1 middleware (`512bede`).

Namecheap **CNAME** records for `kahana.io` (do not change apex/`www`):

| Host | Value |
|------|--------|
| `about` | `dimensional-seahorse-wdtil1rtnsvhxgias5a8oaxl.herokudns.com` |
| `newsroom` | `shielded-pandsy-t3y8gipjue7w8yuzac52zmo7.herokudns.com` |
| `careers` | `tranquil-moose-ivv1n2zohkoopxwz2wn54wc8.herokudns.com` |
| `help` | `serene-rook-0wr60vlgjdgb4zpi755sd8ft.herokudns.com` |

Also see [`PHASE1_PRODUCTION_DNS.md`](./PHASE1_PRODUCTION_DNS.md).

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
