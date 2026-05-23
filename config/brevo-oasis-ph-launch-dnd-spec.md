# Brevo drag-and-drop spec — Product Hunt launch (May 27)

**Prerequisite:** Teaser template updated per `brevo-oasis-ph-teaser-dnd-spec.md`.

**How to start:** Duplicate the saved teaser template in Brevo, then apply changes below.

**Full HTML reference:** `brevo-oasis-ph-launch-waitlist.html`  
**Payload-only paste:** `brevo-oasis-ph-payload-snippets.html`

---

## Campaign setup

| Field | Value |
|-------|--------|
| Subject | `We're live on Product Hunt — Oasis for Mac` |
| Preheader | `Mac desktop (Firefox) is live on Product Hunt. See the anonymized JSON we send by default.` |
| From name | `Oasis by Kahana` |

---

## Changes from teaser duplicate

| Block | Change |
|-------|--------|
| Title | `We're live on Product Hunt today` |
| Body opening | “live today” wording (see below) |
| Payload section | Same as teaser — `brevo-oasis-ph-payload-snippets.html` |
| Button 1 | Follow us on Product Hunt → PH badge URL with UTM, `#ff6154` |
| PH badge image | Optional, linked to badge URL |
| Download button | **Delete** |

**Body opening:**

```html
<p>Hi {{ contact.FIRSTNAME }},</p>
<p>Oasis is <strong>live on Product Hunt today</strong> — a privacy-first AI browser <strong>you can train</strong>, built to stay transparent about what leaves your device.</p>
<p>The launch build is <strong>Oasis for Mac</strong> — <strong>desktop only</strong>, built on <strong>Firefox</strong>, for <strong>Apple Silicon and Intel</strong>.</p>
<p><strong>Mobile</strong> and a <strong>Chromium</strong>-engine build for <strong>Windows, Mac, and Linux</strong> are coming soon. <a href="https://tally.so/r/w8V8GA">Choose your version</a> so we know what to notify you about.</p>
```

**Closing before button:**

```html
<p>To stay in the loop on new versions and new features, <strong>follow us on Product Hunt</strong> — upvotes and comments help more people discover Oasis.</p>
```

**Button 1:**

| Field | Value |
|-------|--------|
| Label | Follow us on Product Hunt |
| URL | `https://www.producthunt.com/products/kahana?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-oasis-browser-for-mac` |
| Background | `#ff6154` |

---

## Plain-text version

```
Hi {{ contact.FIRSTNAME }},

Oasis is live on Product Hunt today — a privacy-first AI browser you can train, built to stay transparent about what leaves your device.

The launch build is Oasis for Mac — desktop only, built on Firefox, for Apple Silicon and Intel.

Mobile and a Chromium-engine build for Windows, Mac, and Linux are coming soon. Choose your version: https://tally.so/r/w8V8GA

TRANSPARENT BY DEFAULT

(Same JSON examples as teaser — see brevo-oasis-ph-teaser-dnd-spec.md plain-text section)

How Oasis collects interaction data:
https://kahana.co/docs/technical-and-interaction-data

Follow us on Product Hunt:
https://www.producthunt.com/products/kahana?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-oasis-browser-for-mac

You're receiving this because you joined the Oasis waitlist.
Contact: https://kahana.co/contact
Privacy: https://kahana.co/privacy-policy
Unsubscribe: {{ unsubscribe }}
```

---

## QA before send

- [ ] Single PH button only (orange on launch)
- [ ] No Mac download links
- [ ] Privacy section + JSON blocks present
- [ ] Copy says “live today”
