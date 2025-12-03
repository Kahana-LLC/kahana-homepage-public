// Tiered fallback image system with variety
const UNSPLASH_IMAGES = {
  // Technology/Business images from Unsplash - multiple options per category
  'technology business': [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  ],
  'cyber security': [
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  ],
  'digital transformation': [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  ],
  'enterprise security': [
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  ],
  'browser security': [
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop'
  ],
  'AI browser': [
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop'
  ],
  'privacy security': [
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  ],
  'content creation': [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  ],
  'marketing': [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  ],
  'finance': [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop'
  ],
  'healthcare': [
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
  ],
  'education': [
    'https://images.unsplash.com/photo-1523240795132-9a0523bf846d?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop'
  ],
  'government': [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop'
  ],
  'energy utilities': [
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
  ],
  'manufacturing': [
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop'
  ],
  'default': [
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop'
  ]
};

// Custom Kahana blog image as final fallback
const KAHANA_BLOG_IMAGE = '/assets/kahana_blog_image.jpg';

// Simple hash function to get consistent but varied images based on unique identifier
function getImageIndex(uniqueId) {
  if (!uniqueId) return 0;
  let hash = 0;
  for (let i = 0; i < uniqueId.length; i++) {
    const char = uniqueId.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash) % 3; // Return 0, 1, or 2
}

// Get an image with tiered fallback: Unsplash first, then Kahana image
// Now accepts a uniqueId parameter to ensure each post gets a different image
export function getStaticImage(query, uniqueId = null) {
  if (!query) {
    const defaultImages = UNSPLASH_IMAGES.default;
    const index = getImageIndex(uniqueId || 'default');
    return defaultImages[index];
  }
  
  const lowerQuery = query.toLowerCase();
  
  // First, try to find a matching Unsplash image category
  for (const [key, images] of Object.entries(UNSPLASH_IMAGES)) {
    if (lowerQuery.includes(key)) {
      const index = getImageIndex(uniqueId || query);
      return images[index];
    }
  }
  
  // If no Unsplash match found, use the Kahana blog image
  return KAHANA_BLOG_IMAGE;
}

// Legacy functions for compatibility - now use tiered fallback
export async function getRandomPhoto(query, uniqueId = null) {
  return {
    src: getStaticImage(query, uniqueId),
    photographer: 'Unsplash',
    photographer_url: 'https://unsplash.com'
  };
}

export function getOptimizedPhotoUrl(photo) {
  return photo?.src || KAHANA_BLOG_IMAGE;
}

export function getPlaceholderImageUrl(query, uniqueId = null) {
  return getStaticImage(query, uniqueId);
}

// Keep the old searchPhotos function for compatibility but make it use tiered fallback
export async function searchPhotos(query, options = {}, uniqueId = null) {
  return [{
    src: getStaticImage(query, uniqueId),
    photographer: 'Unsplash',
    photographer_url: 'https://unsplash.com'
  }];
}
