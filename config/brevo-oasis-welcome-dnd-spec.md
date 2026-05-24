# Brevo D&D spec: Oasis welcome email

**Trigger:** On signup (all new Oasis users)  
**Full HTML:** [`brevo-oasis-welcome.html`](brevo-oasis-welcome.html)  
**Plain text:** [`brevo-oasis-welcome-plain-text.txt`](brevo-oasis-welcome-plain-text.txt)  
**Support links snippet:** [`brevo-oasis-support-links-snippet.html`](brevo-oasis-support-links-snippet.html)

## Campaign setup

| Field | Value |
|-------|--------|
| Subject | `Welcome to Oasis` |
| Preheader | `Docs, Slack, and support links to get started.` |
| From name | `Oasis by Kahana` |

## Global styles

| Token | Value |
|-------|--------|
| Button | `#4A6200` |
| Links | `#4A6200` |
| Body text | `#4A5745` |
| Headings | `#313A00` |

## Block checklist

| Block | Action |
|-------|--------|
| Title | `Welcome to Oasis` |
| Body | Opening + 3-card support block (docs, Slack, contact) |
| Button | Browse docs → `https://kahana.co/docs` |
| Footer | Paste support links snippet + mirror/unsubscribe |

## QA

- [ ] Docs, Slack, and contact links work
- [ ] Single CTA button (Browse docs)
- [ ] Plain-text pasted from `brevo-oasis-welcome-plain-text.txt`
