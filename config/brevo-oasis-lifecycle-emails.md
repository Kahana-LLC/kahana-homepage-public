# Oasis lifecycle emails (Brevo)

HTML templates for signup, feedback, and paid-plan automations. Same design system as Product Hunt waitlist emails in [`brevo-oasis-ph-waitlist-emails.md`](brevo-oasis-ph-waitlist-emails.md).

## Files

| Email | Trigger | HTML | Plain text | D&D spec |
|-------|---------|------|------------|----------|
| Welcome | On signup | [`brevo-oasis-welcome.html`](brevo-oasis-welcome.html) | [`brevo-oasis-welcome-plain-text.txt`](brevo-oasis-welcome-plain-text.txt) | [`brevo-oasis-welcome-dnd-spec.md`](brevo-oasis-welcome-dnd-spec.md) |
| NPS (day 3) | 3 days after signup | [`brevo-oasis-nps-day3.html`](brevo-oasis-nps-day3.html) | [`brevo-oasis-nps-day3-plain-text.txt`](brevo-oasis-nps-day3-plain-text.txt) | [`brevo-oasis-nps-day3-dnd-spec.md`](brevo-oasis-nps-day3-dnd-spec.md) |
| PMF (day 10) | 10 days after signup | [`brevo-oasis-pmf-day10.html`](brevo-oasis-pmf-day10.html) | [`brevo-oasis-pmf-day10-plain-text.txt`](brevo-oasis-pmf-day10-plain-text.txt) | [`brevo-oasis-pmf-day10-dnd-spec.md`](brevo-oasis-pmf-day10-dnd-spec.md) |
| Paid Zen welcome | Zen plan upgrade | [`brevo-oasis-paid-zen-welcome.html`](brevo-oasis-paid-zen-welcome.html) | [`brevo-oasis-paid-zen-welcome-plain-text.txt`](brevo-oasis-paid-zen-welcome-plain-text.txt) | [`brevo-oasis-paid-zen-welcome-dnd-spec.md`](brevo-oasis-paid-zen-welcome-dnd-spec.md) |

## Shared snippets

| File | Purpose |
|------|---------|
| [`brevo-oasis-support-links-snippet.html`](brevo-oasis-support-links-snippet.html) | Docs · Slack · Contact footer row |
| [`brevo-oasis-email-links.js`](brevo-oasis-email-links.js) | Canonical URLs (site reference) |

---

## Campaign setup

### Welcome (on signup)

| Field | Value |
|-------|--------|
| Subject | `Welcome to Oasis` |
| Preheader | `Docs, Slack, and support links to get started.` |
| From name | `Oasis by Kahana` |
| Trigger | Brevo automation: new Oasis user signup |

### NPS (day 3)

| Field | Value |
|-------|--------|
| Subject | `Quick question: how likely are you to recommend Oasis?` |
| Preheader | `One question. Your feedback helps us improve.` |
| From name | `Oasis by Kahana` |
| Trigger | Brevo automation: 3 days after signup |
| Primary CTA | https://tally.so/r/ODoBz7 |

### PMF (day 10)

| Field | Value |
|-------|--------|
| Subject | `Help us understand how Oasis fits your workflow` |
| Preheader | `2-minute product survey. Your answers shape what we build next.` |
| From name | `Oasis by Kahana` |
| Trigger | Brevo automation: 10 days after signup |
| Primary CTA | https://tally.so/r/EkNbXX |

### Paid Zen welcome

| Field | Value |
|-------|--------|
| Subject | `Welcome to Oasis Zen` |
| Preheader | `1M tokens per day and priority support are now active.` |
| From name | `Oasis by Kahana` |
| Trigger | Stripe checkout / Brevo when plan = Zen |
| Primary CTA | https://billing.stripe.com/p/login/bIYg16d6l3FqelieUU |

---

## Automation flow

```text
Signup → Welcome (immediate)
       → Wait 3 days → NPS
       → Wait 10 days → PMF
Zen upgrade → Paid Zen welcome (immediate, separate workflow)
```

Rules:
- Exclude unsubscribed contacts from NPS/PMF
- Paid Zen welcome is independent of the day 3/10 sequence
- Test send each template before enabling automations

---

## Links reference

| Label | URL |
|-------|-----|
| Docs | https://kahana.co/docs |
| Contact | https://kahana.co/contact |
| Join Slack | https://kahanaworkspace.slack.com/archives/C0B3QDPLH4P |
| NPS survey | https://tally.so/r/ODoBz7 |
| PMF survey | https://tally.so/r/EkNbXX |
| Zen billing portal | https://billing.stripe.com/p/login/bIYg16d6l3FqelieUU |
| Install Mac | https://kahana.co/installations |
| Assistant themes | https://kahana.co/docs/assistant-themes |
| Privacy Policy | https://kahana.co/privacy-policy |

---

## QA checklist

- [ ] Single root `<table>`; no DOCTYPE wrapper
- [ ] No em dashes in copy
- [ ] All links open correctly (docs, contact, Slack, Tally, billing)
- [ ] `{{ contact.FIRSTNAME }}`, `{{ mirror }}`, `{{ unsubscribe }}` render in Brevo preview
- [ ] Plain-text tab pasted for each campaign
- [ ] Mobile preview: buttons and link rows readable
- [ ] Test send completed before enabling automations
