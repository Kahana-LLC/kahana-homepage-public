# Brevo D&D spec: Paid Zen welcome email

**Trigger:** Zen plan upgrade ($20/mo)  
**Full HTML:** [`brevo-oasis-paid-zen-welcome.html`](brevo-oasis-paid-zen-welcome.html)  
**Plain text:** [`brevo-oasis-paid-zen-welcome-plain-text.txt`](brevo-oasis-paid-zen-welcome-plain-text.txt)  
**Billing portal:** https://billing.stripe.com/p/login/bIYg16d6l3FqelieUU

## Campaign setup

| Field | Value |
|-------|--------|
| Subject | `Welcome to Oasis Zen` |
| Preheader | `1M tokens per day and priority support are now active.` |
| From name | `Oasis by Kahana` |

## Block checklist

| Block | Action |
|-------|--------|
| Title | `Welcome to Zen` |
| Body | Thank you + Zen benefits list |
| Button | Manage billing → Stripe portal URL |
| Footer | Support links snippet |

## Brevo trigger note

Fire from Stripe checkout webhook or Brevo automation when contact attribute `plan = zen`. Separate workflow from day 3/10 sequence.

## QA

- [ ] Billing portal link works
- [ ] Zen benefits match [`pages/oasis-pricing.jsx`](../pages/oasis-pricing.jsx)
