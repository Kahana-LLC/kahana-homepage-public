/**
 * Cloudinary Upload Utility (Server-Side Only)
 * 
 * This file contains server-side only functions for uploading to Cloudinary.
 * Do not import this in client-side code.
 * 
 * For client-side URL generation, use utils/cloudinary.js instead.
 */

/**
 * Upload image to Cloudinary (server-side only)
 * Note: This requires CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET
 * 
 * @param {string} imagePath - Local file path or base64 string
 * @param {Object} options - Upload options
 * @returns {Promise<Object>} Upload result with public_id and secure_url
 */
export async function uploadToCloudinary(imagePath, options = {}) {
  // This function should only be called server-side
  if (typeof window !== 'undefined') {
    throw new Error('uploadToCloudinary can only be called server-side');
  }

  // Dynamic import to ensure this only loads server-side
  const cloudinary = (await import('cloudinary')).v2;
  const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;

  cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    const result = await cloudinary.uploader.upload(imagePath, {
      folder: options.folder || 'kahana-homepage',
      ...options,
    });

    return {
      public_id: result.public_id,
      secure_url: result.secure_url,
      width: result.width,
      height: result.height,
      format: result.format,
    };
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    throw error;
  }
}

