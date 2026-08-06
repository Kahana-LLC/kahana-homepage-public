# Aura Library brand — corporate CNAMEs (kahana-public)

Mirror of Kahana Phase 1 corporate hosts on **auralibrary.org**, served by the same Heroku app `kahana-public`.

## Heroku (`kahana-public` → Settings → Domains)

Add (ACM will stay pending until DNS works):

| Domain |
|--------|
| `about.auralibrary.org` |
| `newsroom.auralibrary.org` |
| `careers.auralibrary.org` |
| `help.auralibrary.org` |

Optional (same apex Phase 2.5 behavior as kahana.io):

| Domain |
|--------|
| `auralibrary.org` |
| `www.auralibrary.org` |

Copy each row’s **DNS Target** (`….herokudns.com`).

> Product app (`kahana-alpha`) already uses apex/`www` for the React app if you added those there. **Do not** attach the same hostname to two Heroku apps. Corporate subdomains (`about` / `newsroom` / `careers` / `help`) belong on **`kahana-public` only**.

## Namecheap (auralibrary.org → Advanced DNS)

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME | `about` | DNS target for `about.auralibrary.org` | Automatic |
| CNAME | `newsroom` | DNS target for `newsroom.auralibrary.org` | Automatic |
| CNAME | `careers` | DNS target for `careers.auralibrary.org` | Automatic |
| CNAME | `help` | DNS target for `help.auralibrary.org` | Automatic |

If apex/`www` stay on **product** (`kahana-alpha`), leave `@` / `www` alone here.

After DNS propagates: **Refresh ACM Status** on `kahana-public`, then smoke:

- https://about.auralibrary.org/
- https://newsroom.auralibrary.org/
- https://careers.auralibrary.org/
- https://help.auralibrary.org/

App code must recognize these hosts (see `config/corporateHosts.js` + `middleware.js`) and be deployed to `kahana-public` before or with DNS.
