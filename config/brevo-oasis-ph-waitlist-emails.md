# Oasis Product Hunt waitlist emails (Brevo)

Oasis waitlist contacts (Tally form `w8V8GA` → Brevo list).

## Primary path: drag-and-drop editor

| Spec | Send date | Purpose |
|------|-----------|---------|
| [`brevo-oasis-ph-teaser-dnd-spec.md`](brevo-oasis-ph-teaser-dnd-spec.md) | **May 26, 2026** | Tease PH launch + transparency story |
| [`brevo-oasis-ph-launch-dnd-spec.md`](brevo-oasis-ph-launch-dnd-spec.md) | **May 27, 2026** | Live on PH (duplicate teaser first) |

## Standalone HTML (paste into D&D HTML block: single root `<table>`)

| File | Notes |
|------|-------|
| [`brevo-oasis-ph-teaser-waitlist.html`](brevo-oasis-ph-teaser-waitlist.html) | Full teaser email |
| [`brevo-oasis-ph-launch-waitlist.html`](brevo-oasis-ph-launch-waitlist.html) | Full launch email |
| [`brevo-oasis-ph-founder-intro-snippet.html`](brevo-oasis-ph-founder-intro-snippet.html) | Adam headshot + founder voice copy |
| [`brevo-oasis-ph-founder-signoff-snippet.html`](brevo-oasis-ph-founder-signoff-snippet.html) | Parting remark + Connect with me link |
| [`brevo-oasis-ph-theme-gallery-snippet.html`](brevo-oasis-ph-theme-gallery-snippet.html) | Bottom theme gallery toss-in |
| [`brevo-oasis-ph-payload-snippets.html`](brevo-oasis-ph-payload-snippets.html) | Privacy section + JSON only (D&D Text block) |
| [`brevo-oasis-ph-tally-form-snippet.html`](brevo-oasis-ph-tally-form-snippet.html) | In-email Tally form buttons (teaser) |
| [`brevo-oasis-ph-tally-form-setup.md`](brevo-oasis-ph-tally-form-setup.md) | Tally hidden-field setup for pre-fill |
| [`brevo-oasis-ph-product-card-snippet.html`](brevo-oasis-ph-product-card-snippet.html) | PH product card for launch (replaces hero) |
| [`brevo-oasis-ph-teaser-plain-text.txt`](brevo-oasis-ph-teaser-plain-text.txt) | Teaser plain-text tab paste |
| [`brevo-oasis-ph-launch-plain-text.txt`](brevo-oasis-ph-launch-plain-text.txt) | Launch plain-text tab paste |

---

## Email 1: Teaser (May 26)

**Subject:** `Tomorrow on Product Hunt: Oasis Browser for Mac`

**Preheader:** `Privacy-first AI browser you can train. See assistant themes and the JSON we send by default.`

**From name:** `Oasis by Kahana`

**Single CTA button:** Follow us on Product Hunt (no Mac download button)

### Plain text

Paste [`brevo-oasis-ph-teaser-plain-text.txt`](brevo-oasis-ph-teaser-plain-text.txt) into Brevo Plain-text tab.

---

## Email 2: Launch (May 27)

**Subject:** `We're live on Product Hunt: Oasis for Mac`

**Preheader:** `Privacy-first AI browser you can train. See assistant themes and the JSON we send by default.`

**From name:** `Oasis by Kahana`

**Single CTA button:** Follow us on Product Hunt (`#ff6154` on launch)

**Send:** Manual once PH listing is live: see [Launch day runbook](#launch-day-runbook-may-27) below.

### Plain text

Paste [`brevo-oasis-ph-launch-plain-text.txt`](brevo-oasis-ph-launch-plain-text.txt) into Brevo Plain-text tab.

---

## Launch day runbook (May 27)

Use this on launch day. Do **not** schedule the campaign in advance.

### Before you send

1. **Confirm PH is live**: open [Product Hunt listing](https://www.producthunt.com/products/kahana) in a browser; post and product page load.
2. **Re-check assets** (verified May 23, 2026: re-check morning of launch):
   - Adam linktree: `https://kahana.co/adam-kershner`
   - Adam headshot: `https://kahana.co/images/about/adam-kershner.jpg`
   - Theme images: `https://kahana.co/images/oasis/assistant-themes/01-stargazer.png` through `07-desert.png`
   - PH thumbnail: `https://ph-files.imgix.net/b83aefb0-b6c2-408e-b4b8-9e4a0360e1d6.png` (200 OK)
   - PH badge: `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1146179&theme=light` (200 OK)
   - Doc: `https://kahana.co/docs/technical-and-interaction-data` (200 OK)
   - Assistant themes: `https://kahana.co/docs/assistant-themes`
3. **Build template in Brevo** (if not already done):
   - Duplicate saved May 26 teaser → name `Oasis PH Launch: May 27`
   - Follow [`brevo-oasis-ph-launch-dnd-spec.md`](brevo-oasis-ph-launch-dnd-spec.md) block checklist
   - Paste plain text from [`brevo-oasis-ph-launch-plain-text.txt`](brevo-oasis-ph-launch-plain-text.txt)
4. **Test send** to yourself: verify links, JSON blocks, orange button, headshot, theme gallery, mobile layout.

### Send

1. Open Brevo campaign (draft).
2. Audience: Oasis waitlist segment.
3. **Send now** (manual: do not schedule).
4. Monitor Brevo for bounces and spam complaints.

### Teaser vs launch quick diff

| Element | Teaser | Launch |
|---------|--------|--------|
| Headline | "tomorrow" | "live today" |
| Hero | None (founder intro leads) | PH product card |
| Founder voice | Future tense ("launching tomorrow") | Present tense ("just launched") |
| Theme gallery | Bottom toss-in after signoff | Bottom toss-in after signoff |
| Signoff | Journey to the Oasis + Connect with me | Journey to the Oasis + Connect with me |
| Tally form | In-email engine buttons | Footer link only |
| Button color | `#4A6200` | `#ff6154` |
| PH URL | Plain product URL | UTM badge URL |
| Personal close | Feedback ask + thanks | Feedback ask + thanks |
| Closing | "stay in the loop on launch day" | "upvotes and comments help discover Oasis" |

---

## Links reference

| Label | URL |
|-------|-----|
| Product Hunt (teaser) | https://www.producthunt.com/products/kahana |
| Product Hunt (launch + UTM) | https://www.producthunt.com/products/kahana?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-oasis-browser-for-mac |
| Interaction data doc | https://kahana.co/docs/technical-and-interaction-data |
| Assistant themes doc | https://kahana.co/docs/assistant-themes |
| Choose your version (Tally) | https://tally.so/r/w8V8GA |
| Adam linktree (social hub) | https://kahana.co/adam-kershner |
| Adam headshot | https://kahana.co/images/about/adam-kershner.jpg |
| Theme images | https://kahana.co/images/oasis/assistant-themes/01-stargazer.png (through 07-desert.png) |
| PH thumbnail (launch card) | https://ph-files.imgix.net/b83aefb0-b6c2-408e-b4b8-9e4a0360e1d6.png |
| PH badge image | https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1146179&theme=light |

Payload examples source: [`data/docs/interaction-payload-examples.js`](../data/docs/interaction-payload-examples.js)

---

## QA checklist (both emails)

- [ ] No em dashes in copy
- [ ] Adam headshot loads
- [ ] Adam linktree loads: `https://kahana.co/adam-kershner`
- [ ] All 7 theme thumbnails load and link to assistant themes doc
- [ ] **One button only** (Product Hunt)
- [ ] Two JSON `<pre>` blocks readable on mobile preview
- [ ] Doc link: `https://kahana.co/docs/technical-and-interaction-data`
- [ ] Tally link: `https://tally.so/r/w8V8GA`
- [ ] `{{ unsubscribe }}` and `{{ mirror }}` render in Brevo preview
- [ ] Plain-text version matches HTML intent
- [ ] No "acts on tabs/history/pages" phrasing
- [ ] Test send completed before bulk send

## QA checklist (launch only)

- [ ] Copy says **"live today"**: not "tomorrow"
- [ ] Orange `#ff6154` button with UTM PH URL
- [ ] **No Mac download** links or `/oasis-pricing` CTAs
- [ ] PH product card thumbnail loads
- [ ] PH badge image loads (if included)
