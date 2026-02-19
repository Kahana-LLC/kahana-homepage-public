/**
 * Audit blog featured images - find which resolve to Cloudinary vs may be broken
 *
 * Usage: node scripts/audit-blog-images.js
 */

const fs = require('fs');
const path = require('path');

const BLOG_INDEX = path.join(process.cwd(), 'data', 'blog-index.js');
const MAPPING_FILE = path.join(process.cwd(), 'cloudinary-mapping.json');

// Extract featuredImage and slug from blog-index.js
function parseBlogIndex(content) {
  const entries = [];
  const slugRe = /slug:\s*["']([^"']+)["']/g;
  const imgRe = /featuredImage:\s*["']([^"']+)["']/g;
  const slugs = [...content.matchAll(slugRe)].map((m) => m[1]);
  const imgs = [...content.matchAll(imgRe)].map((m) => m[1]);
  const len = Math.min(slugs.length, imgs.length);
  for (let i = 0; i < len; i++) {
    entries.push({ slug: slugs[i], featuredImage: imgs[i] });
  }
  return entries;
}

// Build set of paths that have Cloudinary mapping (successful or skipped)
function getMappedPaths(mapping) {
  const set = new Set();
  [...(mapping.successful || []), ...(mapping.skipped || [])].forEach((item) => {
    if (item.localPath && item.publicId) {
      const p = item.localPath.replace(/^\.\//, '').replace(/\\/g, '/');
      set.add(p);
      set.add(p.replace(/^public\//, ''));
      set.add(`/blog/${p.replace(/^public\/blog\//, '')}`);
      set.add(`blog/${p.replace(/^public\/blog\//, '')}`);
    }
  });
  return set;
}

function main() {
  const content = fs.readFileSync(BLOG_INDEX, 'utf8');
  const mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));
  const entries = parseBlogIndex(content);
  const mapped = getMappedPaths(mapping);

  const localPaths = entries.filter((e) => {
    const img = e.featuredImage.trim();
    return !img.startsWith('http://') && !img.startsWith('https://');
  });

  const broken = [];
  const ok = [];

  for (const { slug, featuredImage } of localPaths) {
    const norm = featuredImage.replace(/^\/+/, '').replace(/^blog\//, 'blog/');
    const key1 = `blog/${featuredImage.replace(/^\/blog\//, '')}`;
    const key2 = `public/blog/${featuredImage.replace(/^\/blog\//, '')}`;
    const key3 = featuredImage.startsWith('/') ? featuredImage : `/${featuredImage}`;

    const hasMapping = mapped.has(key1) || mapped.has(key2) || mapped.has(key3) || mapped.has(featuredImage);

    const localFile = path.join(process.cwd(), 'public', featuredImage.replace(/^\//, ''));
    const fileExists = fs.existsSync(localFile);

    if (!hasMapping && !fileExists) {
      broken.push({ slug, featuredImage, reason: 'no Cloudinary mapping and file does not exist' });
    } else if (!hasMapping && fileExists) {
      broken.push({ slug, featuredImage, reason: 'no Cloudinary mapping (served locally, not from CDN)' });
    } else {
      ok.push({ slug, featuredImage });
    }
  }

  console.log('\n📋 Blog image audit\n');
  console.log(`Total blog entries: ${entries.length}`);
  console.log(`Local paths (not full Cloudinary URL): ${localPaths.length}`);
  console.log(`✅ Resolve to Cloudinary: ${ok.length}`);
  console.log(`❌ Potentially broken or not on Cloudinary: ${broken.length}\n`);

  if (broken.length > 0) {
    console.log('Potentially broken / not on Cloudinary:\n');
    broken.forEach(({ slug, featuredImage, reason }) => {
      console.log(`  slug: ${slug}`);
      console.log(`  image: ${featuredImage}`);
      console.log(`  reason: ${reason}\n`);
    });
  }

  if (ok.length > 0 && localPaths.length > 0) {
    console.log('Local paths that resolve to Cloudinary (OK):');
    ok.forEach(({ slug, featuredImage }) => console.log(`  ${slug} → ${featuredImage}`));
  }

  console.log('\n');
}

main();
