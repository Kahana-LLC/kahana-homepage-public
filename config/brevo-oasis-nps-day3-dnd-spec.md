# Brevo D&D spec: NPS email (day 3)

**Trigger:** 3 days after signup  
**Full HTML:** [`brevo-oasis-nps-day3.html`](brevo-oasis-nps-day3.html)  
**Plain text:** [`brevo-oasis-nps-day3-plain-text.txt`](brevo-oasis-nps-day3-plain-text.txt)  
**Survey URL:** https://tally.so/r/ODoBz7

## Campaign setup

| Field | Value |
|-------|--------|
| Subject | `Quick question: how likely are you to recommend Oasis?` |
| Preheader | `One question. Your feedback helps us improve.` |
| From name | `Adam from Oasis` |

## Snippets to paste

| Snippet | Use |
|---------|-----|
| [`brevo-oasis-lifecycle-founder-header-snippet.html`](brevo-oasis-lifecycle-founder-header-snippet.html) | After greeting |
| [`brevo-oasis-slack-button-snippet.html`](brevo-oasis-slack-button-snippet.html) | After survey CTA |
| [`brevo-oasis-lifecycle-founder-signoff-snippet.html`](brevo-oasis-lifecycle-founder-signoff-snippet.html) | Before footer |
| [`brevo-oasis-support-links-snippet.html`](brevo-oasis-support-links-snippet.html) | Footer |

## Block checklist

| Block | Action |
|-------|--------|
| Title | `How are we doing so far?` |
| Body | Adam headshot + first-person NPS ask |
| Button 1 | Share your score → Tally URL |
| Button 2 | Join Slack (purple `#4A154B`) |
| Signoff | Connect with me → `https://kahana.co/adam-kershner` |
| Footer | Support links snippet |

## QA

- [ ] Adam headshot loads
- [ ] Tally survey opens from button and fallback link
- [ ] Slack button and footer icon load
- [ ] Connect with me link works
- [ ] Exclude unsubscribed users from automation
