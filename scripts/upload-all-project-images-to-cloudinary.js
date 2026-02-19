/**
 * Upload ALL project images to Cloudinary (merge mode)
 *
 * Scans public/, assets/, figma-imports/, Videos/ for images and videos.
 * Uploads only files NOT already in cloudinary-mapping.json.
 * Merges new uploads into the existing mapping (does not overwrite).
 *
 * Usage: node scripts/upload-all-project-images-to-cloudinary.js [--dry-run]
 *
 * Requires .env.local: CLOUDINARY credentials
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
const VIDEO_EXTENSIONS = ['.mp4', '.mov', '.avi', '.webm', '.mkv', '.flv'];
const ALL_EXTENSIONS = [...IMAGE_EXTENSIONS, ...VIDEO_EXTENSIONS];

const SCAN_DIRECTORIES = [
  'public',
  'public/images',
  'public/blog',
  'public/assets',
  'public/figma-imports',
  'assets',
  'figma-imports',
  'Videos',
];

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
      const p = item.localPath.replace(/^\.\//, '').replace(/\\/g, '/');
      set.add(p);
      set.add(p.replace(/^public\//, ''));
      if (!p.startsWith('public/')) set.add(`public/${p}`);
    }
  });
  return set;
}

function isAlreadyMapped(relativePath, mapped) {
  const p = relativePath.replace(/^\.\//, '').replace(/\\/g, '/');
  return mapped.has(p) || mapped.has(p.replace(/^public\//, '')) || mapped.has(`public/${p.replace(/^public\//, '')}`);
}

async function findMediaFiles(dir, baseDir = '') {
  const files = [];
  try {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(baseDir || process.cwd(), fullPath);
      if (entry.isDirectory()) {
        const subFiles = await findMediaFiles(fullPath, baseDir || process.cwd());
        files.push(...subFiles);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name).toLowerCase();
        if (ALL_EXTENSIONS.includes(ext)) {
          files.push({
            fullPath,
            relativePath,
            name: entry.name,
            ext,
            isVideo: VIDEO_EXTENSIONS.includes(ext),
          });
        }
      }
    }
  } catch (e) {
    if (e.code !== 'ENOENT') console.error('Error:', e.message);
  }
  return files;
}

async function uploadFile(file, uploadResults, dryRun) {
  const { fullPath, relativePath, name, ext, isVideo } = file;
  const folderPath = path.dirname(relativePath).replace(/^public\//, '');
  const publicId = path.join(folderPath, path.basename(name, ext)).replace(/\\/g, '/').replace(/^\/+/, '').replace(/\/+/g, '/').trim();
  const resourceType = isVideo ? 'video' : 'image';

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
      resource_type: resourceType,
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
      resourceType: result.resource_type,
      bytes: result.bytes,
    });
    console.log(`  Done: ${result.public_id}`);
  } catch (error) {
    if (error.http_code === 409 || (error.message && error.message.includes('already exists'))) {
      console.log(`  Skipped (exists): kahana-homepage/${publicId}`);
      uploadResults.skipped.push({
        localPath: relativePath,
        publicId: `kahana-homepage/${publicId}`,
        reason: 'already_exists',
      });
    } else {
      console.error(`  Failed: ${error.message}`);
      uploadResults.failed.push({ localPath: relativePath, publicId: `kahana-homepage/${publicId}`, error: error.message });
    }
  }
}

function mergeMappings(existing, newResults) {
  const byPath = (arr) => {
    const m = new Map();
    (arr || []).forEach((item) => {
      if (item && item.localPath) m.set(item.localPath.replace(/\\/g, '/'), item);
    });
    return m;
  };
  const succ = byPath(existing.successful);
  const skip = byPath(existing.skipped);
  (newResults.successful || []).forEach((s) => succ.set(s.localPath.replace(/\\/g, '/'), s));
  (newResults.skipped || []).forEach((s) => skip.set(s.localPath.replace(/\\/g, '/'), s));
  const failedByPath = new Map();
  (existing.failed || []).forEach((f) => failedByPath.set(f.localPath, f));
  (newResults.failed || []).forEach((f) => failedByPath.set(f.localPath, f));
  return {
    ...existing,
    cloudName: existing.cloudName || process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    generatedAt: new Date().toISOString(),
    successful: Array.from(succ.values()),
    skipped: Array.from(skip.values()),
    failed: Array.from(failedByPath.values()),
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

  console.log('Upload ALL project images to Cloudinary (merge mode)\n');
  if (dryRun) console.log('[DRY RUN]\n');

  const existing = loadExistingMapping();
  const mapped = getMappedPaths(existing);

  const allFiles = [];
  const seen = new Set();
  for (const dir of SCAN_DIRECTORIES) {
    const dirPath = path.join(process.cwd(), dir);
    try {
      const st = await stat(dirPath);
      if (st.isDirectory()) {
        const files = await findMediaFiles(dirPath);
        for (const f of files) {
          const key = f.relativePath;
          if (seen.has(key)) continue;
          seen.add(key);
          allFiles.push(f);
        }
      }
    } catch (e) {
      if (e.code !== 'ENOENT') console.warn(`Warning: ${dir}: ${e.message}`);
    }
  }

  const toUpload = allFiles.filter((f) => !isAlreadyMapped(f.relativePath, mapped));

  console.log(`Total files: ${allFiles.length}`);
  console.log(`Already in mapping: ${allFiles.length - toUpload.length}`);
  console.log(`To upload: ${toUpload.length}\n`);

  const uploadResults = { successful: [], skipped: [], failed: [] };
  for (const file of toUpload) {
    await uploadFile(file, uploadResults, dryRun);
  }

  if (toUpload.length === 0) {
    console.log('All project images are already on Cloudinary.');
  } else if (!dryRun && (uploadResults.successful.length > 0 || uploadResults.skipped.length > 0)) {
    const merged = mergeMappings(existing, uploadResults);
    fs.writeFileSync(MAPPING_FILE, JSON.stringify(merged, null, 2));
    console.log('\nUpdated cloudinary-mapping.json');
  }

  console.log(`\nSuccessful: ${uploadResults.successful.length}`);
  console.log(`Skipped: ${uploadResults.skipped.length}`);
  console.log(`Failed: ${uploadResults.failed.length}`);
  if (uploadResults.failed.length > 0) {
    uploadResults.failed.forEach((f) => console.log(`  - ${f.localPath}: ${f.error}`));
  }
  console.log('\nDone.\n');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
