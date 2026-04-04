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
      // Include both successful uploads and skipped (already on Cloudinary)
      const items = [...(mapping.successful || []), ...(mapping.skipped || [])];
      items.forEach((item) => {
        if (!item.localPath || !item.publicId) return;
        // Normalize paths (remove leading ./ or public/)
        const normalizedPath = item.localPath
          .replace(/^\.\//, '')
          .replace(/^public\//, '');
        
        // Map both with and without /public prefix; blog paths use /blog/filename
        pathMapping[normalizedPath] = item.publicId;
        pathMapping[`/${normalizedPath}`] = item.publicId;
        pathMapping[`public/${normalizedPath}`] = item.publicId;
      });
      
      if (typeof window !== 'undefined') {
        console.log(`[Cloudinary] Loaded ${Object.keys(pathMapping).length} image mappings`);
      }
    } catch (error) {
      console.warn('[Cloudinary] Could not load cloudinary-mapping.json:', error.message);
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
  if (!localPath) {
    if (typeof window !== 'undefined') {
      console.warn('[Cloudinary] getCloudinaryImageUrl called with empty path');
    }
    return localPath;
  }
  
  // If it's already a Cloudinary URL or external URL, return as-is
  if (localPath.startsWith('http://') || 
      localPath.startsWith('https://') ||
      localPath.startsWith('data:')) {
    return localPath;
  }
  
  const mapping = getPathMapping();
  
  // Normalize the path
  const normalizedPath = localPath.replace(/^\.\//, '').replace(/^\/+/, '');
  
  // Try to find the public ID (exact match first)
  let publicId = mapping[normalizedPath] || mapping[`/${normalizedPath}`] || mapping[`public/${normalizedPath}`];
  
  // If not found, try case-insensitive and extension-flexible matching
  if (!publicId) {
    const pathLower = normalizedPath.toLowerCase();
    const pathWithoutExt = pathLower.replace(/\.[^.]+$/, '');
    
    // Find matching entry (case-insensitive, extension-flexible)
    for (const [mappedPath, mappedPublicId] of Object.entries(mapping)) {
      const mappedPathLower = mappedPath.toLowerCase();
      const mappedPathWithoutExt = mappedPathLower.replace(/\.[^.]+$/, '');
      
      // Match if base path (without extension) matches
      if (mappedPathWithoutExt === pathWithoutExt || 
          mappedPathLower === pathLower ||
          mappedPathLower === `/${pathLower}` ||
          mappedPathLower === `public/${pathLower}`) {
        publicId = mappedPublicId;
        break;
      }
    }
  }
  
  if (publicId) {
    // Return Cloudinary URL with optimizations
    const cloudinaryUrl = getCloudinaryUrl(publicId, {
      format: 'auto',
      quality: 'auto:good',
      ...options,
    });
    
    // If Cloudinary is not configured (returns empty string), fallback to local path
    if (!cloudinaryUrl) {
      if (typeof window !== 'undefined') {
        console.warn(`[Cloudinary] Cloud name not configured, falling back to local path: ${localPath}`);
      }
      return localPath;
    }
    
    return cloudinaryUrl;
  }
  
  // If not found in mapping, return original path (fallback)
  if (typeof window !== 'undefined') {
    console.warn(`[Cloudinary] Mapping not found for: ${localPath}, using local path`);
  }
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

    if (widths?.length) {
      const { src, srcSet } = getCloudinarySrcSet(publicId, {
        format: 'auto',
        quality: 'auto:good',
        widths,
        ...restOptions,
      });
      if (!src) {
        return { src: localPath.startsWith('/') ? localPath : `/${localPath}` };
      }
      return { src, srcSet };
    }

    const src = getCloudinaryUrl(publicId, {
      format: 'auto',
      quality: 'auto:good',
      ...restOptions,
    });

    if (!src) {
      return { src: localPath.startsWith('/') ? localPath : `/${localPath}` };
    }

    return { src };
  }
  
  return { src: localPath.startsWith('/') ? localPath : `/${localPath}` };
}

