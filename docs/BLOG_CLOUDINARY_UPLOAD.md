# Blog Images on Cloudinary

## Overview

Blog featured images can be served from Cloudinary when a mapping exists in `cloudinary-mapping.json`. Local paths like `/blog/image.jpg` are automatically resolved to Cloudinary URLs via `getBlogImageUrl()` in `utils/blog-image-url.js`.

## Uploading Blog Images

### 1. Add Cloudinary API Credentials

Add these to `.env.local` (get them from [Cloudinary Console](https://console.cloudinary.com)):

```
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 2. Run the Blog-Only Upload Script

```bash
node scripts/upload-blog-images-to-cloudinary.js
```

This script:

- Scans `public/blog/` for images (jpg, png, webp, gif)
- Uploads only images not already in `cloudinary-mapping.json`
- Merges new results into the existing mapping without overwriting other assets

### 3. Alternative: Full Bulk Upload

To upload all project media (including blog):

```bash
node scripts/upload-to-cloudinary.js
```

This overwrites `cloudinary-mapping.json` with a fresh mapping of all scanned directories.

## Current Mapping

- **Already on Cloudinary:** `cloud-migration-hero.jpg`, `devsecops-hero.jpg`, `zero-trust-hero.jpg`
- **Previously failed:** `placeholder.jpg`, `technical-debt-hero.jpg` (Invalid image file — replace with valid images if needed)
- **To upload:** All other images in `public/blog/` not yet in the mapping

## How It Works

1. `featuredImage` in blog JSON can be a local path (e.g. `/blog/foo.jpg`) or a full URL
2. `getBlogImageUrl()` resolves local paths via `cloudinary-mapper.js` using `cloudinary-mapping.json`
3. If a mapping exists, a Cloudinary URL is returned; otherwise the original path is used
4. Components (`BlogCard`, `pages/blog/[slug].jsx`) use `getBlogImageUrl()` for display and SEO meta tags
