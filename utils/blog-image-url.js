/**
 * Resolves blog featured image URLs - uses Cloudinary when available
 * for local /blog/ paths, otherwise returns the URL as-is.
 */
import { getCloudinaryImageUrl } from './cloudinary-mapper';

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

/**
 * Get the resolved URL for a blog featured image.
 * - Full URLs (http/https): returned as-is
 * - Local /blog/ paths: resolved via Cloudinary mapping when available
 * - Returns original path as fallback if Cloudinary not configured or no mapping
 *
 * @param {string} featuredImage - From blog post (e.g. "/blog/xxx.jpg" or "https://...")
 * @returns {string} Resolved image URL
 */
export function getBlogImageUrl(featuredImage) {
  if (!featuredImage || typeof featuredImage !== 'string') return '';

  const trimmed = featuredImage.trim();
  if (!trimmed) return '';

  // Full URLs - use as-is
  if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
    return trimmed;
  }

  // Local blog paths - ensure leading slash for same-origin, then try Cloudinary
  const localPath = trimmed.startsWith('/') ? trimmed : `/${trimmed}`;
  if (localPath.startsWith('/blog/') && CLOUD_NAME) {
    const cloudinaryUrl = getCloudinaryImageUrl(localPath, {
      width: 1200,
      crop: 'fill',
      gravity: 'auto',
    });
    return cloudinaryUrl || localPath;
  }

  return localPath.startsWith('/blog/') ? localPath : trimmed;
}
