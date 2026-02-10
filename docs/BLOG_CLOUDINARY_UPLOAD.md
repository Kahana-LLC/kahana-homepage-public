# Blog Images on Cloudinary

## Overview

Blog featured images can be served from Cloudinary when a mapping exists in `cloudinary-mapping.json`, or when `featuredImage` is already a Cloudinary URL. Local paths like `/blog/image.jpg` are automatically resolved to Cloudinary URLs via `getBlogImageUrl()` in `utils/blog-image-url.js`. **All blog and page images should be on Cloudinary** for performance, reliability, and to avoid third-party host dependencies.

## Uploading Blog Images

### 1. Add Cloudinary API Credentials

Add these to `.env.local` (get them from [Cloudinary Console](https://console.cloudinary.com)):

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 2. Local Blog Images (in `public/blog/`)

```bash
node scripts/upload-blog-images-to-cloudinary.js
```

This script:

- Scans `public/blog/` for images (jpg, png, webp, gif)
- Uploads only images not already in `cloudinary-mapping.json`
- Merges new results into the existing mapping without overwriting other assets

### 3. External Blog Featured Images (URLs from other sites)

To **migrate all blog posts that use external featured image URLs** to Cloudinary:

```bash
node scripts/upload-external-blog-images-to-cloudinary.js
```

Optional dry run (no uploads or file changes):

```bash
node scripts/upload-external-blog-images-to-cloudinary.js --dry-run
```

This script:

- Reads `data/blog-index.js` and finds every `featuredImage` that is an `http(s)` URL and **not** already on `res.cloudinary.com`
- Uploads each image to Cloudinary with public ID `kahana-homepage/blog/{slug}`
- Updates `data/blog-index.js` and the corresponding `data/blog/{slug}.json` with the new Cloudinary URL

Run this whenever you add or change blog posts that reference external image URLs so **all blog images live on Cloudinary**.

### 4. Full Bulk Upload (all project media)

To upload all project media (including blog and other assets):

```bash
node scripts/upload-to-cloudinary.js
```

This overwrites `cloudinary-mapping.json` with a fresh mapping of all scanned directories.

## Current Mapping

- **Already on Cloudinary:** `cloud-migration-hero.jpg`, `devsecops-hero.jpg`, `zero-trust-hero.jpg`, and any posts migrated via the external-image script
- **Previously failed:** `placeholder.jpg`, `technical-debt-hero.jpg` (Invalid image file — replace with valid images if needed)
- **To upload:** Run `upload-blog-images-to-cloudinary.js` for local files; run `upload-external-blog-images-to-cloudinary.js` for any blog with external `featuredImage` URLs

## How It Works

1. `featuredImage` in blog JSON can be a local path (e.g. `/blog/foo.jpg`), a full Cloudinary URL, or any external URL (prefer migrating to Cloudinary via the external-image script).
2. `getBlogImageUrl()` resolves local paths via `cloudinary-mapper.js` using `cloudinary-mapping.json`; full URLs are returned as-is.
3. If a mapping exists for a local path, a Cloudinary URL is returned; otherwise the original path is used.
4. Components (`BlogCard`, `pages/blog/[slug].jsx`) use `getBlogImageUrl()` for display and SEO meta tags (og:image, Twitter card, etc.).
