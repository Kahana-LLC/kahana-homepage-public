/**
 * Upload Assets to Cloudinary (e.g. enterprise buyer guide display pic)
 *
 * Uploads images from public/assets/ (excluding headshots) that are not yet in
 * cloudinary-mapping.json. Merges results into the existing mapping.
 *
 * Usage: node scripts/upload-assets-to-cloudinary.js [--dry-run]
 *
 * Requires .env.local: CLOUDINARY credentials
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets');
const MAPPING_FILE = path.join(process.cwd(), 'cloudinary-mapping.json');

function configureCloudinary() {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;
  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });
  return { cloudName, apiKey, apiSecret };
}

function loadExistingMapping() {
  try {
    return JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));
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

async function findAssetImages(dir, baseDir, files = []) {
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name === 'headshots') continue;
        await findAssetImages(fullPath, baseDir || process.cwd(), files);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (IMAGE_EXTENSIONS.includes(ext)) {
          const relativePath = path.relative(baseDir || process.cwd(), fullPath);
          files.push({ fullPath, relativePath, name: entry.name, ext });
        }
      }
    }
  } catch (e) {
    if (e.code !== 'ENOENT') console.error('Error:', e.message);
  }
  return files;
}

async function uploadFile(file, uploadResults, dryRun) {
  const { fullPath, relativePath, name, ext } = file;
  const folderPath = path.dirname(relativePath).replace(/^public\//, '');
  const publicId = path.join(folderPath, path.basename(name, ext)).replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/+/g, '/').trim();

  if (dryRun) {
    console.log(`[DRY RUN] Would upload: ${relativePath}`);
    uploadResults.successful.push({ localPath: relativePath, publicId: `kahana-homepage/${publicId}` });
    return;
  }

  try {
    console.log(`Uploading: ${relativePath}...`);
    const result = await cloudinary.uploader.upload(fullPath, {
      folder: 'kahana-homepage',
      public_id: publicId,
      resource_type: 'image',
      overwrite: false,
      invalidate: true,
    });
    uploadResults.successful.push({
      localPath: relativePath,
      publicId: result.public_id,
      secureUrl: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
    });
    console.log(`Done: ${result.public_id}`);
  } catch (error) {
    if (error.http_code === 409 || error.message?.includes('already exists')) {
      console.log(`Skipped (exists): kahana-homepage/${publicId}`);
      uploadResults.skipped.push({ localPath: relativePath, publicId: `kahana-homepage/${publicId}`, reason: 'already_exists' });
    } else {
      console.error(`Failed: ${relativePath} - ${error.message}`);
      uploadResults.failed.push({ localPath: relativePath, error: error.message });
    }
  }
}

function mergeMappings(existing, newResults) {
  return {
    ...existing,
    generatedAt: new Date().toISOString(),
    successful: [...(existing.successful || []), ...(newResults.successful || [])],
    skipped: [...(existing.skipped || []), ...(newResults.skipped || [])],
    failed: [...(existing.failed || []).filter(f => !(newResults.failed || []).some(n => n.localPath === f.localPath)), ...(newResults.failed || [])],
  };
}

async function main() {
  require('dotenv').config({ path: path.join(process.cwd(), '.env.local') });
  const dryRun = process.argv.includes('--dry-run');
  const { cloudName, apiKey, apiSecret } = configureCloudinary();

  if (!dryRun && (!cloudName || !apiKey || !apiSecret)) {
    console.error('Cloudinary credentials required in .env.local');
    process.exit(1);
  }

  console.log('Upload assets (enterprise buyer guide, etc.) to Cloudinary\n');
  if (dryRun) console.log('[DRY RUN]\n');

  const existing = loadExistingMapping();
  const mapped = getMappedPaths(existing);
  const files = await findAssetImages(ASSETS_DIR);

  const toUpload = files.filter(f => !mapped.has(f.relativePath.replace(/^public\//, '')) && !mapped.has(f.relativePath));

  console.log(`Assets: ${files.length} total, ${toUpload.length} to upload\n`);

  const uploadResults = { successful: [], skipped: [], failed: [] };
  for (const file of toUpload) await uploadFile(file, uploadResults, dryRun);

  if (toUpload.length === 0) {
    console.log('All assets already in Cloudinary.');
  } else if (!dryRun && (uploadResults.successful.length > 0 || uploadResults.skipped.length > 0)) {
    const merged = mergeMappings(existing, uploadResults);
    fs.writeFileSync(MAPPING_FILE, JSON.stringify(merged, null, 2));
    console.log('\nUpdated cloudinary-mapping.json');
  }

  console.log('\nDone.\n');
}

main().catch(e => { console.error(e); process.exit(1); });
