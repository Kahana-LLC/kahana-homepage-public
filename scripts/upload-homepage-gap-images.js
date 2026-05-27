/**
 * Upload homepage gap images (testimonials + assistant themes) to Cloudinary
 * and merge results into cloudinary-mapping.json.
 *
 * Usage: node scripts/upload-homepage-gap-images.js
 */

const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

const GAP_IMAGES = [
  'public/assets/testimonials/lokesh_nenavath.png',
  'public/assets/testimonials/agrima_gupta.png',
  'public/assets/testimonials/niraj_patil.png',
  'public/assets/testimonials/pallavi.png',
  'public/assets/testimonials/saksham.png',
  'public/images/oasis/assistant-themes/01-stargazer.png',
  'public/images/oasis/assistant-themes/02-sepia.png',
  'public/images/oasis/assistant-themes/03-workspace.png',
  'public/images/oasis/assistant-themes/04-sky.png',
  'public/images/oasis/assistant-themes/05-forest.png',
  'public/images/oasis/assistant-themes/06-amethyst.png',
  'public/images/oasis/assistant-themes/07-desert.png',
];

function configureCloudinary() {
  const cloudName =
    process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  return { cloudName, apiKey, apiSecret };
}

function publicIdForLocalPath(imagePath) {
  const rel = imagePath.replace(/^public\//, '').replace(/^\.\//, '');
  const withoutExt = rel.replace(/\.[^.]+$/, '');
  return `kahana-homepage/${withoutExt}`;
}

async function uploadGapImages() {
  const { cloudName } = configureCloudinary();
  const results = { uploaded: [], skipped: [], notFound: [], errors: [] };

  for (const imagePath of GAP_IMAGES) {
    const fullPath = path.join(process.cwd(), imagePath);
    if (!fs.existsSync(fullPath)) {
      results.notFound.push(imagePath);
      continue;
    }

    const publicId = publicIdForLocalPath(imagePath);

    try {
      const existing = await cloudinary.api.resource(publicId, { resource_type: 'image' });
      if (existing?.public_id) {
        results.skipped.push({
          localPath: imagePath,
          publicId: existing.public_id,
          secureUrl: existing.secure_url,
        });
        continue;
      }
    } catch (_) {
      // not uploaded yet
    }

    try {
      const result = await cloudinary.uploader.upload(fullPath, {
        public_id: publicId,
        overwrite: false,
        resource_type: 'image',
      });

      results.uploaded.push({
        localPath: imagePath,
        publicId: result.public_id,
        secureUrl: result.secure_url,
        width: result.width,
        height: result.height,
        format: result.format,
        resourceType: result.resource_type,
        bytes: result.bytes,
      });
    } catch (error) {
      results.errors.push({ path: imagePath, error: error.message });
    }
  }

  const merged = [...results.uploaded, ...results.skipped];
  if (merged.length > 0) {
    const mappingFile = path.join(process.cwd(), 'cloudinary-mapping.json');
    const mapping = fs.existsSync(mappingFile)
      ? JSON.parse(fs.readFileSync(mappingFile, 'utf8'))
      : { successful: [], skipped: [], failed: [] };

    const byPath = new Map();
    for (const item of [...(mapping.successful || []), ...(mapping.skipped || [])]) {
      if (item.localPath) byPath.set(item.localPath, item);
    }
    for (const item of merged) {
      byPath.set(item.localPath, item);
    }

    mapping.successful = Array.from(byPath.values());
    mapping.generatedAt = new Date().toISOString();
    mapping.cloudName = cloudName;
    fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
  }

  console.log(JSON.stringify({ ...results, mappingUpdated: merged.length }, null, 2));
}

if (require.main === module) {
  require('dotenv').config({ path: '.env.local' });
  const { cloudName, apiKey, apiSecret } = configureCloudinary();
  if (!cloudName || !apiKey || !apiSecret) {
    console.error('Cloudinary credentials missing in .env.local');
    process.exit(1);
  }
  uploadGapImages().catch((error) => {
    console.error(error);
    process.exit(1);
  });
}

module.exports = { uploadGapImages, GAP_IMAGES };
