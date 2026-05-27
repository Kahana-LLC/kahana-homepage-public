/**
 * Cloudinary Path Mapper
 *
 * Maps local image paths to Cloudinary public IDs for easy migration.
 */

import { getCloudinaryUrl } from './cloudinary';

let pathMapping = null;

const isCloudinaryDebug =
  process.env.NODE_ENV === 'development' ||
  process.env.NEXT_PUBLIC_CLOUDINARY_DEBUG === 'true';

const warnedMessages = new Set();

/** Served from /public until uploaded to Cloudinary (see scripts/upload-homepage-gap-images.js). */
const LOCAL_ONLY_PREFIXES = [
  'assets/testimonials/',
  'images/oasis/assistant-themes/',
];

function isLocalOnlyPath(normalizedPath) {
  return LOCAL_ONLY_PREFIXES.some((prefix) => normalizedPath.startsWith(prefix));
}

function warnOnce(message) {
  if (!isCloudinaryDebug || warnedMessages.has(message)) return;
  warnedMessages.add(message);
  console.warn(message);
}

function getPathMapping() {
  if (pathMapping === null) {
    try {
      const mapping = require('../cloudinary-mapping.json');
      pathMapping = {};

      const items = [...(mapping.successful || []), ...(mapping.skipped || [])];
      items.forEach((item) => {
        if (!item.localPath || !item.publicId) return;
        const normalizedPath = item.localPath
          .replace(/^\.\//, '')
          .replace(/^public\//, '');

        pathMapping[normalizedPath] = item.publicId;
        pathMapping[`/${normalizedPath}`] = item.publicId;
        pathMapping[`public/${normalizedPath}`] = item.publicId;
      });

      if (typeof window !== 'undefined' && isCloudinaryDebug) {
        console.log(`[Cloudinary] Loaded ${Object.keys(pathMapping).length} image mappings`);
      }
    } catch (error) {
      warnOnce(`[Cloudinary] Could not load cloudinary-mapping.json: ${error.message}`);
      pathMapping = {};
    }
  }

  return pathMapping;
}

function resolvePublicId(localPath) {
  const mapping = getPathMapping();
  const normalizedPath = localPath.replace(/^\.\//, '').replace(/^\/+/, '');

  let publicId =
    mapping[normalizedPath] ||
    mapping[`/${normalizedPath}`] ||
    mapping[`public/${normalizedPath}`];

  if (publicId) return publicId;

  const pathLower = normalizedPath.toLowerCase();
  const pathWithoutExt = pathLower.replace(/\.[^.]+$/, '');

  for (const [mappedPath, mappedPublicId] of Object.entries(mapping)) {
    const mappedPathLower = mappedPath.toLowerCase();
    const mappedPathWithoutExt = mappedPathLower.replace(/\.[^.]+$/, '');

    if (
      mappedPathWithoutExt === pathWithoutExt ||
      mappedPathLower === pathLower ||
      mappedPathLower === `/${pathLower}` ||
      mappedPathLower === `public/${pathLower}`
    ) {
      return mappedPublicId;
    }
  }

  return null;
}

function localPathWithSlash(localPath) {
  return localPath.startsWith('/') ? localPath : `/${localPath}`;
}

export function getCloudinaryImageUrl(localPath, options = {}) {
  if (!localPath) {
    warnOnce('[Cloudinary] getCloudinaryImageUrl called with empty path');
    return localPath;
  }

  if (
    localPath.startsWith('http://') ||
    localPath.startsWith('https://') ||
    localPath.startsWith('data:')
  ) {
    return localPath;
  }

  const normalizedPath = localPath.replace(/^\.\//, '').replace(/^\/+/, '');
  if (isLocalOnlyPath(normalizedPath)) {
    return localPathWithSlash(localPath);
  }

  const publicId = resolvePublicId(localPath);

  if (publicId) {
    const cloudinaryUrl = getCloudinaryUrl(publicId, {
      format: 'auto',
      quality: 'auto:good',
      ...options,
    });

    if (!cloudinaryUrl) {
      warnOnce(
        `[Cloudinary] Cloud name not configured, falling back to local path: ${localPath}`
      );
      return localPath;
    }

    return cloudinaryUrl;
  }

  warnOnce(`[Cloudinary] Mapping not found for: ${localPath}, using local path`);
  return localPath;
}

export function getCloudinaryImageProps(localPath, options = {}) {
  if (!localPath) return { src: localPath };

  if (
    localPath.startsWith('http://') ||
    localPath.startsWith('https://') ||
    localPath.startsWith('data:')
  ) {
    return { src: localPath };
  }

  const normalizedPath = localPath.replace(/^\.\//, '').replace(/^\/+/, '');
  if (isLocalOnlyPath(normalizedPath)) {
    return { src: localPathWithSlash(localPath) };
  }

  const publicId = resolvePublicId(localPath);

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
        return { src: localPathWithSlash(localPath) };
      }
      return { src, srcSet };
    }

    const src = getCloudinaryUrl(publicId, {
      format: 'auto',
      quality: 'auto:good',
      ...restOptions,
    });

    if (!src) {
      return { src: localPathWithSlash(localPath) };
    }

    return { src };
  }

  return { src: localPathWithSlash(localPath) };
}
