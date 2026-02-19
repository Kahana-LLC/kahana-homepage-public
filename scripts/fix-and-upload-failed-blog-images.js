/**
 * Fix failed blog images and upload to Cloudinary
 *
 * Uses sharp to fix images that Cloudinary rejects:
 * - 1x1 / tiny placeholders → resize to 100x100 valid placeholder
 * - "Invalid image file" → re-encode to clean JPEG
 *
 * Usage: node scripts/fix-and-upload-failed-blog-images.js [--dry-run]
 */

const cloudinary = require('cloudinary').v2;
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });

const FAILED_IMAGES = [
  'public/blog/choosing-secure-enterprise-browser-saas-2026.jpg',
  'public/blog/dark-web-browsers-tor-i2p-freenet-2026.jpg',
  'public/blog/drm-privacy-innovation-browsers-locked-down-2026.jpg',
  'public/blog/placeholder.jpg',
  'public/blog/technical-debt-hero.jpg',
];

const MAPPING_FILE = path.join(process.cwd(), 'cloudinary-mapping.json');
const TMP_DIR = path.join(process.cwd(), '.tmp-fixed-images');

function configureCloudinary() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });
  return { cloudName, apiKey, apiSecret };
}

async function fixImage(srcPath) {
  const stats = fs.statSync(srcPath);
  const ext = path.extname(srcPath).toLowerCase();
  const outPath = path.join(TMP_DIR, path.basename(srcPath));

  if (stats.size < 500 || stats.size === 286) {
    // Tiny placeholder – create 100x100 gray image
    await sharp({
      create: {
        width: 100,
        height: 100,
        channels: 3,
        background: { r: 220, g: 220, b: 220 },
      },
    })
      .jpeg({ quality: 80 })
      .toFile(outPath.replace(/\.png$/i, '.jpg'));
    return outPath.replace(/\.png$/i, '.jpg');
  }

  // Re-encode to fix corruption / invalid format
  const img = sharp(srcPath);
  const meta = await img.metadata();
  if (meta.width && meta.width < 10) {
    await sharp(srcPath)
      .resize(100, 100, { fit: 'fill' })
      .jpeg({ quality: 85 })
      .toFile(outPath.replace(/\.png$/i, '.jpg'));
    return outPath.replace(/\.png$/i, '.jpg');
  }
  await sharp(srcPath)
    .jpeg({ quality: 90 })
    .toFile(outPath.replace(/\.(png|webp)$/i, '.jpg'));
  return outPath.replace(/\.(png|webp)$/i, '.jpg');
}

async function uploadToCloudinary(localPath, dryRun) {
  const name = path.basename(localPath, path.extname(localPath));
  const publicId = `kahana-homepage/blog/${name}`;

  if (dryRun) {
    console.log(`  [DRY RUN] Would upload: ${localPath}`);
    return { public_id: publicId, secure_url: `https://res.cloudinary.com/xxx/image/upload/${publicId}` };
  }

  const result = await cloudinary.uploader.upload(localPath, {
    folder: 'kahana-homepage',
    public_id: `blog/${name}`,
    resource_type: 'image',
    overwrite: true,
    invalidate: true,
  });
  return result;
}

async function main() {
  const dryRun = process.argv.includes('--dry-run');

  const { cloudName, apiKey, apiSecret } = configureCloudinary();
  if (!dryRun && (!cloudName || !apiKey || !apiSecret)) {
    console.error('Cloudinary credentials required in .env.local');
    process.exit(1);
  }

  console.log('Fix and upload failed blog images\n');
  if (dryRun) console.log('[DRY RUN]\n');

  if (!fs.existsSync(TMP_DIR)) {
    fs.mkdirSync(TMP_DIR, { recursive: true });
  }

  const mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));
  const successful = mapping.successful || [];
  const failed = (mapping.failed || []).filter((f) => !FAILED_IMAGES.some((p) => f.localPath && f.localPath.replace(/\\/g, '/') === p));

  const newSuccessful = [];

  for (const relPath of FAILED_IMAGES) {
    const fullPath = path.join(process.cwd(), relPath);
    if (!fs.existsSync(fullPath)) {
      console.log(`Skip (not found): ${relPath}`);
      continue;
    }
    console.log(`Fix: ${relPath}`);
    try {
      const fixedPath = await fixImage(fullPath);
      const result = await uploadToCloudinary(fixedPath, dryRun);
      newSuccessful.push({
        localPath: relPath,
        publicId: result.public_id,
        secureUrl: result.secure_url,
      });
      console.log(`  Uploaded: ${result.public_id}`);
    } catch (err) {
      console.error(`  Error: ${err.message}`);
    }
  }

  if (newSuccessful.length > 0 && !dryRun) {
    const byPath = new Map();
    successful.forEach((s) => byPath.set(s.localPath?.replace(/\\/g, '/'), s));
    newSuccessful.forEach((s) => byPath.set(s.localPath?.replace(/\\/g, '/'), s));
    mapping.successful = Array.from(byPath.values());
    mapping.failed = failed;
    mapping.generatedAt = new Date().toISOString();
    fs.writeFileSync(MAPPING_FILE, JSON.stringify(mapping, null, 2));
    console.log('\nUpdated cloudinary-mapping.json');
  }

  if (fs.existsSync(TMP_DIR)) {
    fs.readdirSync(TMP_DIR).forEach((f) => fs.unlinkSync(path.join(TMP_DIR, f)));
    fs.rmdirSync(TMP_DIR);
  }

  console.log(`\nDone. Fixed and uploaded: ${newSuccessful.length}/${FAILED_IMAGES.length}\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
