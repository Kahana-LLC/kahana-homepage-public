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
| From name | `Oasis by Kahana` |

## Block checklist

| Block | Action |
|-------|--------|
| Title | `How are we doing so far?` |
| Body | Short NPS ask (2 paragraphs) |
| Button | Share your score → `https://tally.so/r/ODoBz7` |
| Fallback link | Same Tally URL as text link |
| Footer | Support links snippet |

## QA

- [ ] Tally survey opens from button and fallback link
- [ ] Exclude unsubscribed users from automation
