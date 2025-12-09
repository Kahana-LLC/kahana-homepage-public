/**
 * Cloudinary Path Mapper
 * 
 * Maps local image paths to Cloudinary public IDs for easy migration.
 * This allows us to convert /images/file.png to Cloudinary URLs automatically.
 */

import { getCloudinaryUrl } from './cloudinary';

// Load the mapping from the uploaded files
let pathMapping = null;

/**
 * Initialize the path mapping from cloudinary-mapping.json
 * This is done lazily to avoid loading on every import
 */
function getPathMapping() {
  if (pathMapping === null) {
    try {
      // In Next.js, we can import JSON directly
      const mapping = require('../cloudinary-mapping.json');
      pathMapping = {};
      
      // Create a reverse mapping: localPath -> publicId
      mapping.successful.forEach((item) => {
        // Normalize paths (remove leading ./ or public/)
        const normalizedPath = item.localPath
          .replace(/^\.\//, '')
          .replace(/^public\//, '');
        
        // Map both with and without /public prefix
        pathMapping[normalizedPath] = item.publicId;
        pathMapping[`/${normalizedPath}`] = item.publicId;
        pathMapping[`public/${normalizedPath}`] = item.publicId;
      });
    } catch (error) {
      console.warn('Could not load Cloudinary mapping:', error);
      pathMapping = {};
    }
  }
  
  return pathMapping;
}

/**
 * Convert a local image path to Cloudinary URL
 * 
 * @param {string} localPath - Local path like "/images/file.png" or "images/file.png"
 * @param {Object} options - Cloudinary transformation options (same as getCloudinaryUrl)
 * @returns {string} Cloudinary URL or original path if not found
 */
export function getCloudinaryImageUrl(localPath, options = {}) {
  if (!localPath) return localPath;
  
  // If it's already a Cloudinary URL or external URL, return as-is
  if (localPath.startsWith('http://') || 
      localPath.startsWith('https://') ||
      localPath.startsWith('data:')) {
    return localPath;
  }
  
  const mapping = getPathMapping();
  
  // Normalize the path
  const normalizedPath = localPath.replace(/^\.\//, '').replace(/^\/+/, '');
  
  // Try to find the public ID
  const publicId = mapping[normalizedPath] || mapping[`/${normalizedPath}`] || mapping[`public/${normalizedPath}`];
  
  if (publicId) {
    // Return Cloudinary URL with optimizations
    return getCloudinaryUrl(publicId, {
      format: 'auto',
      quality: 'auto:good',
      ...options,
    });
  }
  
  // If not found in mapping, return original path (fallback)
  console.warn(`Cloudinary mapping not found for: ${localPath}`);
  return localPath;
}

/**
 * Get Cloudinary URL for an image with responsive srcset
 * 
 * @param {string} localPath - Local path
 * @param {Object} options - Options including widths array for srcset
 * @returns {Object} { src, srcSet } for Next.js Image component
 */
export function getCloudinaryImageProps(localPath, options = {}) {
  if (!localPath) return { src: localPath };
  
  // If it's already a Cloudinary URL or external URL, return as-is
  if (localPath.startsWith('http://') || 
      localPath.startsWith('https://') ||
      localPath.startsWith('data:')) {
    return { src: localPath };
  }
  
  const mapping = getPathMapping();
  const normalizedPath = localPath.replace(/^\.\//, '').replace(/^\/+/, '');
  const publicId = mapping[normalizedPath] || mapping[`/${normalizedPath}`] || mapping[`public/${normalizedPath}`];
  
  if (publicId) {
    const { getCloudinarySrcSet } = require('./cloudinary');
    const { widths, ...restOptions } = options;
    
    const src = getCloudinaryUrl(publicId, {
      format: 'auto',
      quality: 'auto:good',
      ...restOptions,
    });
    
    if (widths) {
      const { srcSet } = getCloudinarySrcSet(publicId, {
        format: 'auto',
        quality: 'auto:good',
        widths,
        ...restOptions,
      });
      return { src, srcSet };
    }
    
    return { src };
  }
  
  return { src: localPath };
}

