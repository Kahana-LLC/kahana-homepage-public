# Blog SEO Checklist

You can't force "instant" Google traffic, but you can **increase how many people find and click your posts** by tightening a few key things. Use this checklist before publishing each post.

---

## 1. Pick the right topics and keywords

- **Use solid keyword research** so you write what people actually search for, not just what you feel like writing.
- **Target long-tail keywords** (more specific phrases); they're easier to rank and usually bring more motivated readers.
- In each post JSON you can add an optional **`focusKeyword`** (e.g. `"fastest web browser 2026"`). It’s used in meta keywords and helps keep the post focused on one main idea.

---

## 2. Make your SEO fundamentals strong

- **Title tag** – Comes from `title` in the post JSON (or optional **`seoTitle`** for a CTR-optimized variant). Kept under ~60 characters so it doesn’t get cut off in search results.
- **Meta description** – Comes from `excerpt` (or optional **`metaDescription`**). Automatically truncated to ~155 characters so it displays fully in Google.
- **URL** – Derived from **`slug`**. Keep it short, readable, and keyword-relevant (e.g. `fastest-web-browser-2026-benchmarks-caveats`).
- **Headings** – Use clear `<h2>` and `<h3>` in the post `content`; they help Google understand structure and give readers scannable sections.
- **Internal links** – Link to other blog posts and key site pages (e.g. `/products/oasis-enterprise-browser`, `/blog`) where it fits naturally. The "Related Blogs" block on each post helps too.
- **Canonical URL** – Set automatically per post; no action needed.

---

## 3. Write CTR-friendly titles and snippets

- **Titles:** Short, clear, action-oriented, with a specific benefit. Use numbers when they fit (e.g. *"7 Ways to Make Your Browser Faster in 2026"*).
- **Meta description:** Include your main keyword, speak to the reader’s problem, and invite a click—don’t just repeat the first sentence of the post.
- **Optional overrides in post JSON:**
  - **`seoTitle`** – Use when you want a different, CTR-optimized title in the browser tab and search results (e.g. shorter or with a number). If omitted, `title | Kahana Blog` is used.
  - **`metaDescription`** – Use when you want a dedicated snippet for search/social. If omitted, `excerpt` is used (and truncated to 155 chars).

---

## 4. Improve content quality and user experience

- **Real value:** Detailed answers, examples, and updated info so users stay longer and share (positive signals for Google).
- **Images:** Use **`featuredImage`** with a fast, relevant image. Compress images before adding; avoid huge unoptimized assets.
- **Site performance:** The blog uses Next.js and optimized images where possible. Keep heavy scripts and third-party embeds minimal on blog pages.
- **Mobile:** Layout is responsive; preview on mobile before publishing.

---

## 5. Get traffic from more than just Google

- **Share every new post** on social platforms, niche communities, Reddit, and email lists so you get early traffic and engagement while the post is still new.
- **Build backlinks** via guest posts, link-worthy resources (e.g. definitive guides, comparisons), and outreach; quality links are one of the strongest ranking factors.
- **Open Graph & Twitter Card** meta tags are set automatically from the post so shares look good on social.

---

## Quick reference: post JSON SEO fields

| Field | Required | Purpose |
|-------|----------|--------|
| `title` | Yes | Main headline; used for title tag if `seoTitle` is not set. |
| `excerpt` | Yes | Short summary; used for meta description if `metaDescription` is not set (truncated to 155 chars). |
| `slug` | Yes | URL path; keep it short and keyword-relevant. |
| `seoTitle` | No | CTR-optimized title for tab/SERP (e.g. with numbers, under ~60 chars). |
| `metaDescription` | No | CTR-optimized snippet for SERP/social (under ~155 chars). |
| `focusKeyword` | No | One main keyword; used in meta keywords and to keep the post focused. |
| `featuredImage` | No | Hero image; used for OG/Twitter and SERP. |
| `category` | Yes | Used in schema and filters; pick one clear category. |

---

## Niche and blog URL

- **Niche:** Enterprise browser security, productivity, and comparisons (Chrome, Edge, Oasis, etc.).
- **Blog URL:** `https://kahana.co/blog`

For specific SEO titles, long-tail keywords, and post ideas tailored to this niche, run keyword research (e.g. Ahrefs, SEMrush, or Google Keyword Planner) and align each post with one primary intent and one focus keyword.
