# Brevo drag-and-drop spec — Product Hunt teaser (May 26)

Edit your **existing** Brevo D&D template (v3.0.1) in the visual editor. Do **not** paste full HTML into the raw-html block.

**Audience:** Oasis waitlist (Tally `w8V8GA` → Brevo list)  
**Send:** May 26, 2026 (morning PDT)  
**Full HTML reference:** `brevo-oasis-ph-teaser-waitlist.html`  
**Payload-only paste:** `brevo-oasis-ph-payload-snippets.html`

---

## Campaign setup (Setup step)

| Field | Value |
|-------|--------|
| Subject | `Tomorrow on Product Hunt: Oasis Browser for Mac` |
| Preheader | `Mac desktop (Firefox) on Product Hunt May 27. See the anonymized JSON we send by default.` |
| From name | `Oasis by Kahana` |

---

## Global styles (Styles panel)

| Style token | Property | Value |
|-------------|----------|-------|
| `default-button` | `background-color`, `border-color` | `#4A6200` |
| `default-link` | `color` | `#4A6200` |
| `default-heading2` | `color` | `#313A00` |
| `default` | `color` | `#4A5745` |

---

## Block checklist

### Keep as-is

| Block | Notes |
|-------|-------|
| View in browser | Uses `{{ mirror }}` |
| Logo | Brevo CDN Kahana logo |
| Social | LinkedIn, YouTube, Instagram, website, Discord |
| Spacer | Optional |

### Update content

| Block | Action |
|-------|--------|
| Title | `Oasis launches on Product Hunt tomorrow` |
| Body | Opening + platform lines + paste `brevo-oasis-ph-payload-snippets.html` + PH follow line |
| Button 1 | **Only button:** Follow us on Product Hunt → `https://www.producthunt.com/products/kahana` |
| Image | `https://kahana.co/images/oasis-browser-assistant-screenshot.png` |

**Body opening** — paste into Text block:

```html
<p>Hi {{ contact.FIRSTNAME }},</p>
<p>Thanks for joining the Oasis waitlist. Tomorrow, <strong>Wednesday, May 27</strong>, we're launching on Product Hunt — a privacy-first AI browser <strong>you can train</strong>, built to stay transparent about what leaves your device.</p>
<p>The version launching on Product Hunt is <strong>Oasis for Mac</strong> — <strong>desktop only</strong>, built on <strong>Firefox</strong>, for <strong>Apple Silicon and Intel</strong>.</p>
<p><strong>Mobile</strong> and a <strong>Chromium</strong>-engine build for <strong>Windows, Mac, and Linux</strong> are coming soon. <a href="https://tally.so/r/w8V8GA">Choose your version</a> so we know what to notify you about.</p>
```

**Transparent by default + JSON** — paste contents of [`brevo-oasis-ph-payload-snippets.html`](brevo-oasis-ph-payload-snippets.html) into a second Text block (source mode).

**Closing line** (before button):

```html
<p>To stay in the loop on launch day, new versions, and new features, <strong>follow us on Product Hunt</strong> — it's the best way to get updates as we ship.</p>
```

### Remove

| Block | Action |
|-------|--------|
| Download for Mac button | **Delete** — no Mac download CTA |
| raw-html block | **Delete** unless using inline fallback below |
| Navigation placeholders | **Delete** |

**Fallback links** (optional Text block):

```html
<p style="font-size:14px;color:#6b7355;">If the button doesn't work: <a href="https://www.producthunt.com/products/kahana">Product Hunt</a> · <a href="https://kahana.co/docs/technical-and-interaction-data">Interaction data doc</a> · <a href="https://tally.so/r/w8V8GA">Choose your version</a></p>
```

---

## Plain-text version

```
Hi {{ contact.FIRSTNAME }},

Thanks for joining the Oasis waitlist. Tomorrow, Wednesday, May 27, we're launching on Product Hunt — a privacy-first AI browser you can train, built to stay transparent about what leaves your device.

The version launching on Product Hunt is Oasis for Mac — desktop only, built on Firefox, for Apple Silicon and Intel.

Mobile and a Chromium-engine build for Windows, Mac, and Linux are coming soon. Choose your version: https://tally.so/r/w8V8GA

TRANSPARENT BY DEFAULT

Oasis sends minimal interaction data to Kahana so we can improve the assistant — fix bugs, measure latency, and understand what helps. By default, personalization is off: payloads are anonymized with no email or account ID. You only share identifying fields if you opt in from Settings.

Unlike Chromium browsers that can gather broad behavioral signals in the background, Oasis is explicit about what leaves your device. We do not build ad profiles from your location, searches, likes, or purchases — sensitive context stays local.

Default — anonymized (no user block):
{
  "client": { "os": "macOS", "platform": "desktop", "browser_name": "Oasis", "browser_version": "1.0.0" },
  "prompt": { "text": "tell me some recipes for thai food", "language": "en-US", "input_tokens": 2922 },
  "context": { "org_tier": "free", "active_tab_url": "about:preferences#privacy", "active_tab_title": "Settings" },
  "response": { "text": "Thai food is fantastic! …", "latency_ms": 2600, "output_tokens": 60 },
  "timestamp": "2026-05-21T20:05:13.562Z",
  "session_id": "046ab22b-6074-41d9-9bc6-1ecee0b1c745",
  "interaction_id": "1bd1d64a-68fd-4731-be86-56deab7f72d6",
  "app_version": "1.0.0"
}

Opt-in only — includes user block:
{
  "user": {
    "role": "user",
    "email": "user@example.com",
    "locale": "en-US",
    "user_id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "opt_in_data_collection_use": true
  },
  "client": { "os": "macOS", "platform": "desktop", "browser_name": "Oasis", "browser_version": "1.0.0" },
  "prompt": { "text": "tell me some italian recipes", "language": "en-US", "input_tokens": 2970 },
  "response": { "text": "Italian food is incredibly diverse …", "latency_ms": 6078, "output_tokens": 851 }
}

Illustrative examples. Full field reference:
https://kahana.co/docs/technical-and-interaction-data

To stay in the loop on launch day, new versions, and new features, follow us on Product Hunt:
https://www.producthunt.com/products/kahana

You're receiving this because you joined the Oasis waitlist.
Contact: https://kahana.co/contact
Privacy: https://kahana.co/privacy-policy
Unsubscribe: {{ unsubscribe }}
```

Payload source: `data/docs/interaction-payload-examples.js`

---

## QA before send

- [ ] No “acts on tabs/history/pages” phrasing
- [ ] Single button only (Product Hunt)
- [ ] JSON `<pre>` blocks render in preview
- [ ] Doc link works: `https://kahana.co/docs/technical-and-interaction-data`
- [ ] Copy says “tomorrow” — not “we’re live”

---

## After teaser ships

Duplicate in Brevo and follow `brevo-oasis-ph-launch-dnd-spec.md` for May 27.
