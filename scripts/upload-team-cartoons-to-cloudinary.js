/**
 * Upload Team Cartoon Images to Cloudinary
 *
 * Uploads cartoon portraits from public/assets/team-cartoons/ that are not yet in
 * cloudinary-mapping.json. Merges results into the existing mapping without
 * overwriting other assets.
 *
 * Usage: node scripts/upload-team-cartoons-to-cloudinary.js [--dry-run]
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

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
const CARTOONS_DIR = path.join(process.cwd(), 'public', 'assets', 'team-cartoons');
const MAPPING_FILE = path.join(process.cwd(), 'cloudinary-mapping.json');

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
      set.add(path.relative(process.cwd(), path.join(process.cwd(), 'public', n)));
    }
  });
  return set;
}

async function findCartoonImages() {
  const files = [];
  try {
    const entries = await readdir(CARTOONS_DIR, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      const ext = path.extname(entry.name).toLowerCase();
      if (!IMAGE_EXTENSIONS.includes(ext)) continue;
      const fullPath = path.join(CARTOONS_DIR, entry.name);
      const relativePath = path.relative(process.cwd(), fullPath);
      files.push({
        fullPath,
        relativePath,
        name: entry.name,
        ext,
      });
    }
  } catch (e) {
    if (e.code !== 'ENOENT') {
      console.error('Error reading team-cartoons dir:', e.message);
    } else {
      console.error('Directory not found:', CARTOONS_DIR);
    }
  }
  return files;
}

async function uploadFile(file, uploadResults, dryRun) {
  const { fullPath, relativePath, name, ext } = file;
  const folderPath = path.dirname(relativePath).replace(/^public\//, '');
  const publicId = path.join(folderPath, path.basename(name, ext)).replace(/\\/g, '/');
  const cleanPublicId = publicId.replace(/^\/+/, '').replace(/\/+/g, '/').trim();

  if (dryRun) {
    console.log(`[DRY RUN] Would upload: ${relativePath} -> kahana-homepage/${cleanPublicId}`);
    uploadResults.successful.push({
      localPath: relativePath,
      publicId: `kahana-homepage/${cleanPublicId}`,
      secureUrl: `https://res.cloudinary.com/PLACEHOLDER/image/upload/kahana-homepage/${cleanPublicId}`,
    });
    return;
  }

  try {
    console.log(`Uploading: ${relativePath}...`);

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

    console.log(`Uploaded: ${result.public_id}`);
  } catch (error) {
    if (error.http_code === 409 || error.message?.includes('already exists')) {
      const fullPublicId = `kahana-homepage/${cleanPublicId}`;
      console.log(`Skipped (already exists): ${fullPublicId}`);
      uploadResults.skipped.push({
        localPath: relativePath,
        publicId: fullPublicId,
        reason: 'already_exists',
      });
    } else {
      console.error(`Failed: ${relativePath} - ${error.message}`);
      uploadResults.failed.push({
        localPath: relativePath,
        publicId: `kahana-homepage/${cleanPublicId}`,
        error: error.message,
      });
    }
  }
}

function mergeMappings(existing, newResults) {
  const successful = [...(existing.successful || []), ...(newResults.successful || [])];
  const skipped = [...(existing.skipped || []), ...(newResults.skipped || [])];
  const failed = [
    ...(existing.failed || []).filter((f) => !(newResults.failed || []).some((n) => n.localPath === f.localPath)),
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
  require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');

  const { cloudName, apiKey, apiSecret } = configureCloudinary();

  if (!dryRun && (!cloudName || !apiKey || !apiSecret)) {
    console.error('Cloudinary credentials not found. Add to .env.local:');
    console.error('   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME');
    console.error('   CLOUDINARY_API_KEY');
    console.error('   CLOUDINARY_API_SECRET');
    process.exit(1);
  }

  console.log('Upload team cartoons to Cloudinary\n');
  if (dryRun) console.log('DRY RUN — no uploads or file changes\n');

  const existing = loadExistingMapping();
  const mapped = getMappedPaths(existing);
  const cartoonFiles = await findCartoonImages();

  const toUpload = cartoonFiles.filter((f) => {
    const key = f.relativePath.replace(/^public\//, '');
    return !mapped.has(key) && !mapped.has(f.relativePath);
  });

  console.log(`Team cartoons: ${cartoonFiles.length} total, ${toUpload.length} to upload\n`);

  const uploadResults = { successful: [], skipped: [], failed: [] };

  for (const file of toUpload) {
    await uploadFile(file, uploadResults, dryRun);
  }

  if (toUpload.length === 0) {
    console.log('All team cartoons are already in Cloudinary.');
  } else if (!dryRun && (uploadResults.successful.length > 0 || uploadResults.skipped.length > 0)) {
    const merged = mergeMappings(existing, uploadResults);
    fs.writeFileSync(MAPPING_FILE, JSON.stringify(merged, null, 2));
    console.log('\nUpdated cloudinary-mapping.json');
  }

  console.log('\nDone.\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
