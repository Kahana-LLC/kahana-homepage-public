# Blog SEO: Reaching Top 10 for "AI Browsers" and Related Queries

## Goal

Rank in the top 10 for searches like **AI browsers**, **best AI browser**, **enterprise AI browser**, and related long-tail terms.

## What’s Already in Place

- **`utils/blogSeo.js`**  
  Base keywords for all posts include: `AI browser`, `AI browsers`, `best AI browser`, `enterprise AI browser`, plus `enterprise browser`, `browser security`, `Oasis browser`.

- **Blog post JSON**  
  Use `seoTitle`, `metaDescription`, and `focusKeyword` in each post so snippets and meta tags support AI-browser and enterprise-browser queries where relevant.

- **Blog slug page**  
  Uses `getBlogPostSeo()` and `getBlogKeywords()` for `<title>`, `<meta name="description">`, `<meta name="keywords">`, Open Graph, Twitter Card, and JSON-LD.

## Best Practices for New Posts

1. **Title and meta**  
   Where it fits, include “AI browser” or “AI browsers” in `seoTitle` and/or `metaDescription` (e.g. “... & AI Browsers: ...” or “Why modern AI browsers and enterprise browsers like Oasis ...”).

2. **Focus keyword**  
   Set `focusKeyword` to a primary phrase that includes “AI browsers” or “enterprise AI browser” when the post is about AI browsers, enterprise browsers, or Oasis.

3. **Content**  
   Use natural phrases like “AI browsers,” “enterprise AI browser,” “best AI browser for enterprise” and link to `/blog`, `/products/oasis-enterprise-browser`, or specific comparison posts (e.g. Perplexity Comet vs Oasis).

4. **Internal links**  
   Link from security/enterprise posts to Oasis and to AI-browser comparison posts so “AI browsers” and “Oasis” are well connected.

5. **Length and structure**  
   Prefer 1,500+ words, clear H2/H3, and lists/tables where they help; keep meta description under ~155 characters.

## Running the External-Image Upload (Cloudinary)

To move all blog featured images to Cloudinary so they’re fast and reliable:

```bash
node scripts/upload-external-blog-images-to-cloudinary.js
```

Dry run (no uploads or file changes):

```bash
node scripts/upload-external-blog-images-to-cloudinary.js --dry-run
```

See `docs/BLOG_CLOUDINARY_UPLOAD.md` for full image workflow.
