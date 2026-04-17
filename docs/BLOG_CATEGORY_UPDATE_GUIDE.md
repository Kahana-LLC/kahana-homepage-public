# How to Update the Blog Category on BlogCard

The **category** appears as a pill/badge at the bottom of each blog card on `/blog` and links to the category filter. To change it, update the category in the right places.

---

## Quick steps

1. **Update `data/blog-index.js`** — This is the source of truth for the blog index and BlogCard.
2. **Update `data/blog/[slug].json`** — Keeps the full post page consistent (optional but recommended).

---

## Step 1: Update `data/blog-index.js`

1. Open `data/blog-index.js`.
2. Find the post by slug (e.g. `what-is-enterprise-browser-2025`).
3. Change the `category` field:

```javascript
// Single category (string)
{
  slug: "what-is-enterprise-browser-2025",
  category: "Browser & Technology",  // ← Change this
  // ...
}

// Multiple categories (array)
{
  slug: "risk-over-centralizing-security-enterprise-browser-2026",
  category: ["Enterprise", "Economics", "ROI"],  // ← Change this
  // ...
}
```

4. Save the file.

---

## Step 2: Update the blog JSON file (recommended)

1. Open `data/blog/[slug].json` (e.g. `data/blog/what-is-enterprise-browser-2025.json`).
2. Update the `category` field to match:

```json
{
  "title": "...",
  "category": "Browser & Technology",
  ...
}
```

3. Save the file.

---

## Where the category is used

| Location | Source | Purpose |
|----------|--------|---------|
| Blog index (`/blog`) | `blog-index.js` | Cards, filters, pagination |
| BlogCard component | `post.category` from index | Pill label + link to `/blog?category=...` |
| Individual post page | `[slug].json` (fallback: `blog-index.js`) | SEO, related posts |

---

## Category format

- **String**: One category, e.g. `"Security"`, `"AI & Browser Technology"`.
- **Array**: Multiple categories, e.g. `["Enterprise", "Economics", "ROI"]`.

The blog index page supports both. BlogCard shows the first category when given an array.

---

## Consolidating categories (optional)

To standardize categories across many posts:

```bash
node scripts/consolidate-blog-categories.js
```

This script maps old category names to a smaller set (see `CONSOLIDATED_CATEGORIES` in the script) and updates `blog-index.js`. Run it only when you intend to bulk-normalize categories.

---

## Checklist

- [ ] Updated `category` in `data/blog-index.js`
- [ ] Updated `category` in `data/blog/[slug].json` (if the file exists)
- [ ] Verified the change on `/blog` (card pill and filter)
