/**
 * Cloudinary Utility Functions
 *
 * This utility helps generate optimized Cloudinary image URLs
 * and provides helper functions for image transformations.
 *
 * Why isn't Cloudinary working?
 * - Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in your environment (.env.local or Heroku config).
 * - Without it, images fall back to local paths and won't use Cloudinary's optimization or CDN.
 * - Copy .env.example to .env.local and set your cloud name from https://cloudinary.com/console
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

// Log configuration status (only in browser console, not server logs)
if (typeof window !== 'undefined') {
  if (CLOUD_NAME) {
    console.log(`[Cloudinary] Configured with cloud name: ${CLOUD_NAME}`);
  } else {
    console.error('[Cloudinary] ⚠️ NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set! Images will fallback to local paths.');
    console.error('[Cloudinary] To fix: Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME in Heroku config vars');
  }
}

/**
 * Generate a Cloudinary image URL with optimizations
 * 
 * @param {string} publicId - The public ID of the image in Cloudinary (without folder path)
 * @param {Object} options - Transformation options
 * @param {number} options.width - Desired width in pixels
 * @param {number} options.height - Desired height in pixels
 * @param {string} options.format - Image format (auto, webp, jpg, png, etc.)
 * @param {string} options.quality - Image quality (auto, auto:good, auto:best, 80, etc.)
 * @param {string} options.crop - Crop mode (fill, fit, scale, etc.)
 * @param {string} options.gravity - Gravity for cropping (auto, face, center, etc.)
 * @param {string} options.folder - Folder path in Cloudinary (optional)
 * @returns {string} Optimized Cloudinary URL
 */
export function getCloudinaryUrl(publicId, options = {}) {
  if (!CLOUD_NAME) {
    if (typeof window !== 'undefined') {
      // Client-side: log warning
      console.warn('[Cloudinary] Cloud name not configured. Set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME environment variable.');
    } else {
      // Server-side: log error
      console.error('[Cloudinary] NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is not set in environment variables.');
    }
    return '';
  }

  const {
    width,
    height,
    format = 'auto', // Auto format (WebP when supported)
    quality = 'auto:good', // Auto quality with good compression
    crop = 'fill', // Fill mode for consistent sizing
    gravity = 'auto', // Auto gravity for smart cropping
    folder = '', // Optional folder path
    resourceType = 'image', // 'image' or 'video'
  } = options;

  // Build the public ID with folder if provided
  const fullPublicId = folder ? `${folder}/${publicId}` : publicId;

  // Build transformation string
  const transformations = [];

  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop && resourceType === 'image') transformations.push(`c_${crop}`);
  if (gravity && resourceType === 'image') transformations.push(`g_${gravity}`);
  if (format) transformations.push(`f_${format}`);
  if (quality && resourceType === 'image') transformations.push(`q_${quality}`);
  // Device pixel ratio — smaller payloads on 1x displays, sharper on retina
  if (resourceType === 'image') transformations.push('dpr_auto');

  const transformationString = transformations.length > 0 
    ? transformations.join(',') + '/' 
    : '';

  // Construct the URL
  const url = `https://res.cloudinary.com/${CLOUD_NAME}/${resourceType}/upload/${transformationString}${fullPublicId}`;

  return url;
}

/**
 * Generate a responsive Cloudinary image URL with srcset
 * 
 * @param {string} publicId - The public ID of the image
 * @param {Object} options - Base options (same as getCloudinaryUrl)
 * @param {Array<number>} options.widths - Array of widths for srcset (default: [640, 750, 828, 1080, 1200, 1920])
 * @returns {Object} Object with src and srcSet properties
 */
export function getCloudinarySrcSet(publicId, options = {}) {
  const { widths = [640, 750, 828, 1080, 1200, 1920], ...baseOptions } = options;

  const src = getCloudinaryUrl(publicId, { ...baseOptions, width: widths[Math.floor(widths.length / 2)] });
  
  const srcSet = widths
    .map((width) => {
      const url = getCloudinaryUrl(publicId, { ...baseOptions, width });
      return `${url} ${width}w`;
    })
    .join(', ');

  return { src, srcSet };
}

/**
 * Get optimized image props for Next.js Image component
 * 
 * @param {string} publicId - The public ID of the image
 * @param {Object} options - Same options as getCloudinaryUrl
 * @returns {Object} Props object for Next.js Image component
 */
export function getCloudinaryImageProps(publicId, options = {}) {
  const { width, height, ...restOptions } = options;
  
  const src = getCloudinaryUrl(publicId, options);
  const { srcSet } = getCloudinarySrcSet(publicId, options);

  return {
    src,
    srcSet,
    width: width || 1200,
    height: height || 800,
    alt: publicId, // You should override this with actual alt text
  };
}

/**
 * Generate a Cloudinary fetch URL for external images.
 *
 * This lets us serve third-party blog images from a single trusted origin
 * and avoids exploding next/image host allowlists.
 *
 * @param {string} sourceUrl - External image URL (http/https)
 * @param {Object} options - Transformation options
 * @returns {string} Cloudinary fetch URL or empty string if not configured/invalid
 */
export function getCloudinaryFetchUrl(sourceUrl, options = {}) {
  if (!CLOUD_NAME || !sourceUrl || typeof sourceUrl !== "string") return "";

  let parsed;
  try {
    parsed = new URL(sourceUrl);
  } catch (_) {
    return "";
  }
  if (!["http:", "https:"].includes(parsed.protocol)) return "";

  const {
    width,
    height,
    format = "auto",
    quality = "auto:good",
    crop = "fill",
    gravity = "auto",
  } = options;

  const transformations = [];
  if (width) transformations.push(`w_${width}`);
  if (height) transformations.push(`h_${height}`);
  if (crop) transformations.push(`c_${crop}`);
  if (gravity) transformations.push(`g_${gravity}`);
  if (format) transformations.push(`f_${format}`);
  if (quality) transformations.push(`q_${quality}`);
  transformations.push("dpr_auto");

  const transformationString = transformations.length > 0 ? `${transformations.join(",")}/` : "";
  const encodedSource = encodeURIComponent(sourceUrl);
  return `https://res.cloudinary.com/${CLOUD_NAME}/image/fetch/${transformationString}${encodedSource}`;
}

/**
 * Diagnostic function to check Cloudinary configuration
 * Call this in browser console to verify setup
 */
export function checkCloudinaryConfig() {
  const config = {
    cloudName: CLOUD_NAME || 'NOT SET',
    isConfigured: !!CLOUD_NAME,
    environment: typeof window !== 'undefined' ? 'client' : 'server',
  };
  
  if (typeof window !== 'undefined') {
    console.log('[Cloudinary] Configuration check:', config);
    if (!CLOUD_NAME) {
      console.error('[Cloudinary] ❌ Configuration issue: NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME is missing');
      console.error('[Cloudinary] Set it in Heroku: heroku config:set NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=dlhpqrucv');
    } else {
      console.log('[Cloudinary] ✅ Configuration looks good!');
    }
  }
  
  return config;
}

// Note: Upload functions have been moved to utils/cloudinary-upload.js
// to avoid bundling Node.js modules in client-side code.
// Import uploadToCloudinary from 'utils/cloudinary-upload' for server-side use only.

