# Oasis Product Hunt waitlist emails (Brevo)

Oasis waitlist contacts (Tally form `w8V8GA` → Brevo list).

## Primary path: drag-and-drop editor

| Spec | Send date | Purpose |
|------|-----------|---------|
| [`brevo-oasis-ph-teaser-dnd-spec.md`](brevo-oasis-ph-teaser-dnd-spec.md) | **May 26, 2026** | Tease PH launch + transparency story |
| [`brevo-oasis-ph-launch-dnd-spec.md`](brevo-oasis-ph-launch-dnd-spec.md) | **May 27, 2026** | Live on PH (duplicate teaser first) |

## Standalone HTML (paste into D&D HTML block — single root `<table>`)

| File | Notes |
|------|-------|
| [`brevo-oasis-ph-teaser-waitlist.html`](brevo-oasis-ph-teaser-waitlist.html) | Full teaser email |
| [`brevo-oasis-ph-launch-waitlist.html`](brevo-oasis-ph-launch-waitlist.html) | Full launch email |
| [`brevo-oasis-ph-payload-snippets.html`](brevo-oasis-ph-payload-snippets.html) | Privacy section + JSON only (D&D Text block) |

---

## Email 1 — Teaser (May 26)

**Subject:** `Tomorrow on Product Hunt: Oasis Browser for Mac`

**Preheader:** `Mac desktop (Firefox) on Product Hunt May 27. See the anonymized JSON we send by default.`

**From name:** `Oasis by Kahana`

**Single CTA button:** Follow us on Product Hunt (no Mac download button)

### Plain text

See full plain-text in [`brevo-oasis-ph-teaser-dnd-spec.md`](brevo-oasis-ph-teaser-dnd-spec.md).

---

## Email 2 — Launch (May 27)

**Subject:** `We're live on Product Hunt — Oasis for Mac`

**Preheader:** `Mac desktop (Firefox) is live on Product Hunt. See the anonymized JSON we send by default.`

**From name:** `Oasis by Kahana`

**Single CTA button:** Follow us on Product Hunt (`#ff6154` on launch)

### Plain text

See [`brevo-oasis-ph-launch-dnd-spec.md`](brevo-oasis-ph-launch-dnd-spec.md).

---

## Links reference

| Label | URL |
|-------|-----|
| Product Hunt (teaser) | https://www.producthunt.com/products/kahana |
| Product Hunt (launch + UTM) | https://www.producthunt.com/products/kahana?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-oasis-browser-for-mac |
| Interaction data doc | https://kahana.co/docs/technical-and-interaction-data |
| Choose your version (Tally) | https://tally.so/r/w8V8GA |
| Hero image | https://kahana.co/images/oasis-browser-assistant-screenshot.png |
| PH badge image | https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1146179&theme=light |

Payload examples source: [`data/docs/interaction-payload-examples.js`](../data/docs/interaction-payload-examples.js)

---

## QA checklist

- [ ] No “acts on tabs/history/pages” phrasing
- [ ] Single Product Hunt button only — no Mac download CTA
- [ ] JSON payload examples render in preview
- [ ] Doc link: `https://kahana.co/docs/technical-and-interaction-data`
- [ ] `{{ unsubscribe }}` renders in Brevo preview
