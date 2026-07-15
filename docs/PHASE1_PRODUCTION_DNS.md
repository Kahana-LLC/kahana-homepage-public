# Production Phase 1 — Namecheap CNAMEs

Add these under **kahana.io → Advanced DNS**. Do **not** change apex/`www` records.

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | `about` | `dimensional-seahorse-wdtil1rtnsvhxgias5a8oaxl.herokudns.com` | Automatic |
| CNAME Record | `newsroom` | `shielded-pandsy-t3y8gipjue7w8yuzac52zmo7.herokudns.com` | Automatic |
| CNAME Record | `careers` | `tranquil-moose-ivv1n2zohkoopxwz2wn54wc8.herokudns.com` | Automatic |
| CNAME Record | `help` | `serene-rook-0wr60vlgjdgb4zpi755sd8ft.herokudns.com` | Automatic |

After save, wait for ACM (`heroku certs:auto -a kahana-public`), then smoke:

- https://about.kahana.io/
- https://newsroom.kahana.io/
- https://careers.kahana.io/
- https://help.kahana.io/
- https://kahana.io/ (unchanged)

Heroku app: `kahana-public` · Release **v435** (`512bede`) · Domains added 2026-07-14
