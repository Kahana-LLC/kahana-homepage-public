/**
 * Cloudinary Utility Functions
 * 
 * This utility helps generate optimized Cloudinary image URLs
 * and provides helper functions for image transformations.
 */

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

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
    console.warn('Cloudinary cloud name not configured');
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

// Note: Upload functions have been moved to utils/cloudinary-upload.js
// to avoid bundling Node.js modules in client-side code.
// Import uploadToCloudinary from 'utils/cloudinary-upload' for server-side use only.

