/**
 * Upload Blog Images to Cloudinary
 *
 * Uploads only images from public/blog/ and merges results into the existing
 * cloudinary-mapping.json without overwriting other asset mappings.
 *
 * Usage: node scripts/upload-blog-images-to-cloudinary.js [--remove-local]
 *
 * --remove-local  Delete local images after successful upload (saves website space;
 *                 images are served from Cloudinary via cloudinary-mapping.json)
 *
 * Requires .env.local:
 *   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
 *   CLOUDINARY_API_KEY
 *   CLOUDINARY_API_SECRET
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
const BLOG_DIR = path.join(process.cwd(), 'public', 'blog');
const MAPPING_FILE = path.join(process.cwd(), 'cloudinary-mapping.json');

const REMOVE_LOCAL = process.argv.includes('--remove-local');

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

function loadExistingMapping() {
  try {
    const raw = fs.readFileSync(MAPPING_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return { successful: [], skipped: [], failed: [] };
  }
}

function getMappedPaths(mapping) {
  const set = new Set();
  [...(mapping.successful || []), ...(mapping.skipped || [])].forEach((item) => {
    if (item.localPath) {
      const n = item.localPath.replace(/^\.\//, '').replace(/^public\//, '');
      set.add(n);
      set.add(`public/${n}`);
    }
  });
  return set;
}

async function findBlogImages() {
  const files = [];
  try {
    const entries = await readdir(BLOG_DIR, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (!IMAGE_EXTENSIONS.includes(ext)) continue;
      const fullPath = path.join(BLOG_DIR, entry.name);
      const relativePath = path.relative(process.cwd(), fullPath);
      files.push({
        fullPath,
        relativePath,
        name: entry.name,
        ext,
      });
    }
  } catch (e) {
    if (e.code !== 'ENOENT') console.error('Error reading blog dir:', e.message);
  }
  return files;
}

async function uploadFile(file, uploadResults) {
  const { fullPath, relativePath, name, ext } = file;
  const folderPath = path.dirname(relativePath).replace(/^public\//, '');
  const publicId = path.join(folderPath, path.basename(name, ext)).replace(/\\/g, '/');
  const cleanPublicId = publicId.replace(/^\/+/, '').replace(/\/+/g, '/').trim();

  try {
    console.log(`📤 Uploading: ${relativePath}...`);

    const result = await cloudinary.uploader.upload(fullPath, {
      folder: 'kahana-homepage',
      public_id: cleanPublicId,
      resource_type: 'image',
      overwrite: false,
      invalidate: true,
    });

    uploadResults.successful.push({
      localPath: relativePath,
      publicId: result.public_id,
      secureUrl: result.secure_url,
      width: result.width || null,
      height: result.height || null,
      format: result.format,
      resourceType: result.resource_type,
      bytes: result.bytes,
    });

    console.log(`✅ Uploaded: ${result.public_id}`);
    return result;
  } catch (error) {
    if (error.http_code === 409 || error.message?.includes('already exists')) {
      const fullPublicId = `kahana-homepage/${cleanPublicId}`;
      console.log(`⏭️  Skipped (already exists): ${fullPublicId}`);
      uploadResults.skipped.push({
        localPath: relativePath,
        publicId: fullPublicId,
        reason: 'already_exists',
      });
      return null;
    }

    console.error(`❌ Failed: ${relativePath} - ${error.message}`);
    uploadResults.failed.push({
      localPath: relativePath,
      publicId: `kahana-homepage/${cleanPublicId}`,
      error: error.message,
    });
    return null;
  }
}

function mergeMappings(existing, newResults) {
  const successful = [...(existing.successful || []), ...(newResults.successful || [])];
  const skipped = [...(existing.skipped || []), ...(newResults.skipped || [])];
  const failed = [
    ...(existing.failed || []).filter((f) => !newResults.failed?.some((n) => n.localPath === f.localPath)),
    ...(newResults.failed || []),
  ];

  return {
    ...existing,
    generatedAt: new Date().toISOString(),
    successful,
    skipped,
    failed,
  };
}

async function main() {
  require('dotenv').config({ path: '.env.local' });
  const { cloudName, apiKey, apiSecret } = configureCloudinary();

  if (!cloudName || !apiKey || !apiSecret) {
    console.error('❌ Cloudinary credentials not found. Add to .env.local:');
    console.error('   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME');
    console.error('   CLOUDINARY_API_KEY');
    console.error('   CLOUDINARY_API_SECRET');
    process.exit(1);
  }

  console.log('🚀 Blog images upload to Cloudinary\n');
  console.log(`Cloud: ${cloudName}\n`);

  const existing = loadExistingMapping();
  const mapped = getMappedPaths(existing);
  const blogFiles = await findBlogImages();

  const toUpload = blogFiles.filter((f) => {
    const key = f.relativePath.replace(/^public\//, '');
    return !mapped.has(key) && !mapped.has(f.relativePath);
  });

  console.log(`📁 Blog images: ${blogFiles.length} total, ${toUpload.length} to upload\n`);

  const uploadResults = { successful: [], skipped: [], failed: [] };
  if (toUpload.length > 0) {
    for (const file of toUpload) {
      await uploadFile(file, uploadResults);
    }
  } else {
    console.log('✅ All blog images already in Cloudinary mapping.');
  }

  const merged = mergeMappings(existing, uploadResults);
  fs.writeFileSync(MAPPING_FILE, JSON.stringify(merged, null, 2));

  console.log('\n' + '='.repeat(50));
  console.log('📊 Summary');
  console.log('='.repeat(50));
  console.log(`✅ New successful: ${uploadResults.successful.length}`);
  console.log(`⏭️  New skipped: ${uploadResults.skipped.length}`);
  console.log(`❌ New failed: ${uploadResults.failed.length}`);
  console.log(`💾 Merged mapping saved to cloudinary-mapping.json`);

  if (uploadResults.failed.length) {
    console.log('\n❌ Failed:');
    uploadResults.failed.forEach((f) => console.log(`   - ${f.localPath}: ${f.error}`));
  }

  if (REMOVE_LOCAL && blogFiles.length) {
    const mappedAfter = getMappedPaths(merged);
    let removed = 0;
    for (const file of blogFiles) {
      const key = file.relativePath.replace(/^public\//, '');
      if (mappedAfter.has(key) || mappedAfter.has(file.relativePath)) {
        try {
          fs.unlinkSync(file.fullPath);
          removed++;
          console.log(`🗑️  Removed local: ${file.relativePath}`);
        } catch (e) {
          console.warn(`⚠️  Could not remove ${file.relativePath}: ${e.message}`);
        }
      }
    }
    if (removed) {
      console.log(`\n💾 Removed ${removed} local image(s) to save website space.`);
    }
  }

  console.log('\n✨ Done.\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
