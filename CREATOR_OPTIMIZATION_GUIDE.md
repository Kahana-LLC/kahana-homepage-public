# How to optimize on Kahana

> **Purpose:** Quick playbook for creators who want to get discovered, look polished, and sell.  
> **Audience:** Creators, support macros, help-center drafts, GTM  
> **Product facts SoT:** [`KAHANA_PLATFORM.md`](KAHANA_PLATFORM.md) · [`PLATFORM_FAQ.md`](PLATFORM_FAQ.md)  
> **Primary product URL:** https://app.kahana.io  
> **Last updated:** 2026-07-14

---

## The loop (memorize this)

1. **Create a hub** and fill it with real content  
2. **Complete Explore listing fields** (title, cover, description, category, etc.)  
3. **Make it public and list it on Explore**  
4. **Connect Stripe and monetize** (if you sell)  
5. **Check previews** so Explore and paywall look right  
6. **Watch analytics** (views, members, purchasers, Aura) and iterate  

You get ROI when buyers can find you on Explore, understand the offer in one glance, and complete checkout without friction.

---

## 1. Create a hub

A **hub** is your product: a curated container for files, notes, folders, embeds, and optional collaborators.

**Do this:**

1. Sign in at [app.kahana.io](https://app.kahana.io)
2. Create a new hub (sidebar **Create**, or **My hubs**)
3. Give it a working title you can refine later
4. Upload your core content before worrying about listing polish

**What to upload:**

- Primary product files (PDFs, docs, packs, templates, media)
- Supporting notes that explain how to use the hub
- Folders so the buyer’s first open feels organized

**Plan limits (quick):** Free includes up to 3 hubs and smaller file caps; Growth unlocks more hubs, larger files, and more storage. See in-app **Billing** for current limits.

**Tip:** Empty hubs can still be listed later, but discovery converts when there is something worth opening. Ship content first, then optimize the marketplace card.

---

## 2. Title, cover, and listing copy

Marketplace shoppers decide in seconds. Treat your hub like a product listing, not a private folder.

| Field | Why it matters | Good practice |
|-------|----------------|---------------|
| **Title** | Primary search and card headline | Specific and scannable — what it is + who it’s for |
| **Cover image** | First visual on Explore | Custom cover (not the default). Strong subject, readable at small size |
| **Description** | Explains the offer | At least **40 characters** to list; write for browsers: what’s inside, outcome, who it’s for |
| **Category** | Explore filters and relevance | Pick at least one standard category that matches the buyer’s intent |
| **Custom tags** | Extra discovery context | A few precise tags beat a long pile of vague ones |
| **18+ setting** | Required honesty + filtering | Confirm whether the hub contains adult content |
| **Profile picture** | Trust on Explore cards | Set a clear creator avatar on your profile |

**Where to edit:** Open the hub → hub settings (**General**). Use **Get discovered** / Discovery Setup if you want a guided path field-by-field.

---

## 3. Get on Explore (checklist)

Explore lists **public, active hubs with Explore listing turned on**. Before you can enable listing, Kahana expects this readiness checklist:

| Requirement | Done when… |
|-------------|------------|
| Hub title | Name is set (not blank) |
| Custom cover | You uploaded a non-default cover image |
| Description | Description has **40+ characters** |
| Category | At least one standard category is set |
| Profile picture | Your creator profile has a photo |
| 18+ setting | Adult content is explicitly confirmed (yes or no) |
| Public access | Hub visibility is **public** (Access settings) |

Then:

1. Open hub settings → **Access** / listing controls  
2. Set the hub to **public**  
3. Turn on **Explore listing** when the checklist is complete  
4. Confirm it appears on Explore (filters, search, or “View on Explore” from hub Analytics)

**Adult hubs** can list, but Explore hides them by default until buyers opt into adult content and age-verify. Expect a smaller public funnel than non-adult hubs.

**Profile still matters:** Keep your creator profile (bio, links, avatar) current. Many buyers land from your profile link, not only from Explore browse.

There is **no separate listing fee**. Platform + Stripe fees apply when someone **buys** a monetized hub.

---

## 4. Monetize the hub

### Enable selling

1. Connect **Stripe** (Stripe Connect) from monetization / billing flows in the app  
2. Open the hub → settings → **Monetization**  
3. Turn monetization on and set:
   - **Price**
   - **Payment type:** one-time (lifetime hub access) or **monthly** subscription  
   - Optional **free trial** where offered  
4. Configure **Storefront** (paywall headline, listing copy, whether buyers can peek at hub content behind the paywall)

### Fees (product facts)

- Kahana takes a **5% platform fee** on hub sales  
- Stripe processing fees apply separately (often ~2.9% + $0.30 for US cards)  
- Payouts run through Stripe — check Stripe for revenue detail; Kahana analytics focuses on activity (views, purchasers, etc.)

### Trust extras

Creators who complete **Stripe Identity** verification may show a verified badge — useful social proof on profiles/paywalls, not a ranking guarantee.

---

## 5. Use previews before you share

Don’t guess how shoppers see you. Preview in settings, then check the live surfaces.

| Preview | Where | What to verify |
|---------|-------|----------------|
| **Explore preview** | Hub settings **General** (right rail) and Discovery Setup | Cover, title, description length, category, adult blur treatment |
| **Paywall preview** | Hub settings **Storefront** (when monetized) | Headline, price framing, trial copy, locked vs peek experience |
| **Live Explore** | `/explore` or “View on Explore” | Card in the real marketplace grid/filters |
| **Live hub / paywall** | Open the hub in a private window or logged-out session | Guest vs signed-in experience; adult gate if applicable |
| **Creator profile** | Your public profile URL | Hub stack order, monetization indicators, OG share look |

**Optimization tip:** If Explore looks great but the paywall feels thin, fix Storefront copy and price explanation — click-through and conversion are different jobs.

---

## 6. Check analytics (is it being discovered?)

### Account-level: **Analytics** in the sidebar (`/analytics`)

Across hubs you own you’ll see summary stats such as:

- **Total views**
- **Hubs / members / files**
- **Purchasers** (when you have monetized hubs)
- **Aura** earned across hubs

Open a hub row for deeper per-hub stats.

### Hub-level: Hub settings → **Analytics**

| Metric | What it tells you | How to react |
|--------|-------------------|--------------|
| **Views** | Discovery + open interest | Low views → improve title/cover/category, share profile/Explore link, earn Aura |
| **Members** | People with hub access (collaborators / granted access) | Rising without purchases can still mean free/public traction |
| **Purchasers** | Paid conversions (monetized hubs) | High views, low purchasers → price, trial, paywall/storefront copy |
| **Files** | Catalog size / completeness | Thin file count → add or organize content buyers expect |
| **Aura** | Community “worth noticing” signal on Explore | Engage the marketplace; strong hubs attract Aura over time |

**Saves:** Buyers can **save** hubs; save counts show on Explore cards and creator surfaces as social proof. Use them as a demand signal alongside views and Aura — they reflect wishlist interest, not necessarily a purchase.

**Aura reminder:** Members get a small **daily Aura budget** to endorse hubs they value. You cannot Aura your own hub. Aura is endorsement / discovery signal — **not** payment currency or crypto.

Revenue and payout detail: use **Stripe** (linked from Monetization). Kahana analytics is for product/discovery performance.

---

## 7. Weekly creator checklist

Use this when you want a short “am I optimizing?” pass:

- [ ] Hub has real content (files/notes organized)  
- [ ] Custom cover + clear title + 40+ char description  
- [ ] Category set; 18+ confirmed; profile pic present  
- [ ] Public + listed on Explore  
- [ ] Explore preview looks like a product you’d click  
- [ ] If selling: Stripe connected, price set, paywall preview checked  
- [ ] Profile link shared (bio, newsletter, socials)  
- [ ] Analytics checked: views → saves/Aura → purchasers  

---

## Where things live in the product

| Job | Go here |
|-----|---------|
| Create / open hubs | Sidebar **My hubs** / Create |
| Listing fields + Explore readiness | Hub → settings → **General** (+ Discovery Setup) |
| Public / private + members | Hub → settings → **Access** |
| Upload / organize files | Hub → files sidebar or settings → **Content** |
| Views, members, purchasers, Aura | Sidebar **Analytics**, or hub → settings → **Analytics** |
| Price + Stripe | Hub → settings → **Monetization** |
| Paywall UX | Hub → settings → **Storefront** |
| Browse how buyers discover you | **Explore** (`/explore`) |
| Saved hubs (buyer side) | Sidebar **Saved** |
| Plans / billing | In-app **Billing** |
| Help | In-app **Support** (`/support`) |

---

## Related docs

- [`MARKETING_VALUE_PROPOSITION.md`](MARKETING_VALUE_PROPOSITION.md) — “create → list → monetize → Aura” GTM framing  
- [`PLATFORM_FAQ.md`](PLATFORM_FAQ.md) — short Q&As for buyers and creators  
- [`KAHANA_PLATFORM.md`](KAHANA_PLATFORM.md) — full product facts (fees, plans, architecture)
