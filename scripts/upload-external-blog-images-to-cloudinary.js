/**
 * Upload External Blog Featured Images to Cloudinary
 *
 * Reads blog-index.js and data/blog/*.json; for any featuredImage that is an
 * external URL (not already Cloudinary), uploads it to Cloudinary and updates
 * both blog-index.js and the corresponding blog JSON file with the new URL.
 *
 * Usage: node scripts/upload-external-blog-images-to-cloudinary.js [--dry-run]
 *
 * Requires .env.local:
 *   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_API_KEY
 *   CLOUDINARY_API_SECRET
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

const BLOG_INDEX_PATH = path.join(process.cwd(), 'data', 'blog-index.js');
const BLOG_DATA_DIR = path.join(process.cwd(), 'data', 'blog');
const CLOUDINARY_FOLDER = 'kahana-homepage';
const BLOG_PUBLIC_ID_PREFIX = 'blog';

function configureCloudinary() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  return { cloudName, apiKey, apiSecret };
}

/**
 * Parse blog-index.js to extract { slug, featuredImage } for each entry.
 * Matches slug and featuredImage in order of appearance (same order as in file).
 */
function parseBlogIndex(content) {
  const slugs = [];
  const images = [];
  let m;
  const slugRe = /slug:\s*["']([^"']+)["']/g;
  const featuredRe = /featuredImage:\s*["']([^"']+)["']/g;
  while ((m = slugRe.exec(content)) !== null) slugs.push(m[1]);
  while ((m = featuredRe.exec(content)) !== null) images.push(m[1]);
  const len = Math.min(slugs.length, images.length);
  const entries = [];
  for (let i = 0; i < len; i++) entries.push({ slug: slugs[i], featuredImage: images[i] });
  return entries;
}

function isExternalUrl(url) {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed.startsWith('http://') && !trimmed.startsWith('https://')) return false;
  if (trimmed.includes('res.cloudinary.com')) return false;
  return true;
}

function uploadFromUrl(imageUrl, slug, dryRun) {
  const publicId = `${BLOG_PUBLIC_ID_PREFIX}/${slug}`;
  if (dryRun) {
    return Promise.resolve({ secure_url: `https://res.cloudinary.com/PLACEHOLDER/image/upload/${CLOUDINARY_FOLDER}/${publicId}`, public_id: `${CLOUDINARY_FOLDER}/${publicId}` });
  }
  return cloudinary.uploader.upload(imageUrl, {
    folder: CLOUDINARY_FOLDER,
    public_id: publicId,
    resource_type: 'image',
    overwrite: false,
    invalidate: true,
  }).then((result) => ({ secure_url: result.secure_url, public_id: result.public_id }));
}

function updateBlogIndexContent(content, replacements) {
  let updated = content;
  for (const { oldUrl, newUrl } of replacements) {
    const escapedOld = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`(featuredImage:\\s*["'])${escapedOld}(["'])`, 'g');
    const safeNew = newUrl.replace(/\$/g, '$$');
    updated = updated.replace(re, `$1${safeNew}$2`);
  }
  return updated;
}

function updateBlogJson(slug, newFeaturedImageUrl) {
  const jsonPath = path.join(BLOG_DATA_DIR, `${slug}.json`);
  try {
    const raw = fs.readFileSync(jsonPath, 'utf8');
    const data = JSON.parse(raw);
    data.featuredImage = newFeaturedImageUrl;
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2), 'utf8');
    return true;
  } catch (e) {
    return false;
  }
}

async function main() {
  require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');

  const { cloudName, apiKey, apiSecret } = configureCloudinary();
  if (!dryRun && (!cloudName || !apiKey || !apiSecret)) {
    console.error('❌ Cloudinary credentials not found. Add to .env.local (from Cloudinary Console → Dashboard):');
    if (!cloudName) console.error('   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name');
    if (!apiKey) console.error('   CLOUDINARY_API_KEY=your_api_key');
    if (!apiSecret) console.error('   CLOUDINARY_API_SECRET=your_api_secret');
    console.error('\nThen run: node scripts/upload-external-blog-images-to-cloudinary.js');
    process.exit(1);
  }

  console.log('🚀 Upload external blog images to Cloudinary\n');
  if (dryRun) console.log('🔍 DRY RUN — no uploads or file changes\n');

  const indexContent = fs.readFileSync(BLOG_INDEX_PATH, 'utf8');
  const entries = parseBlogIndex(indexContent);
  const toMigrate = entries.filter((e) => isExternalUrl(e.featuredImage));

  console.log(`📋 Total blog entries: ${entries.length}`);
  console.log(`🌐 External featured images to migrate: ${toMigrate.length}\n`);

  if (toMigrate.length === 0) {
    console.log('✅ All blog featured images are already local or on Cloudinary.');
    return;
  }

  const replacements = [];
  for (const { slug, featuredImage } of toMigrate) {
    try {
      console.log(`📤 ${slug}`);
      const result = await uploadFromUrl(featuredImage, slug, dryRun);
      const newUrl = result.secure_url;
      replacements.push({ oldUrl: featuredImage, newUrl });
      if (!dryRun) {
        updateBlogJson(slug, newUrl);
      }
      console.log(`   ✅ ${newUrl}`);
    } catch (err) {
      console.error(`   ❌ ${err.message || err}`);
    }
  }

  if (replacements.length > 0 && !dryRun) {
    const newContent = updateBlogIndexContent(indexContent, replacements);
    fs.writeFileSync(BLOG_INDEX_PATH, newContent, 'utf8');
    console.log('\n💾 Updated data/blog-index.js');
  }

  console.log('\n✨ Done.\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
