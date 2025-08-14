import { createClient } from "pexels";

const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY);

// Rate limiting configuration - more conservative
const RATE_LIMIT_REQUESTS = 2; // Reduced from 3 to 2
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window
const MIN_DELAY_BETWEEN_REQUESTS = 3000; // Increased from 2s to 3s

// Global request tracking
let requestCount = 0;
let windowStart = Date.now();
let lastRequestTime = 0;

// Request queue implementation
const requestQueue = [];
let isProcessingQueue = false;

// In-memory cache (no file system dependency)
const queryCache = new Map();
const CACHE_DURATION = 30 * 24 * 60 * 60 * 1000; // 30 days

// List of fallback queries to try if primary query fails
const FALLBACK_QUERIES = [
  "technology business",
  "cyber security",
  "digital transformation",
  "enterprise software",
  "cloud computing",
  "data security",
  "business technology",
];

// List of banned words to filter out inappropriate images
const BANNED_WORDS = [
  "gun",
  "weapon",
  "war",
  "military",
  "violence",
  "army",
  "soldier",
  "fight",
  "battle",
  "blood",
  "explosion",
  "tank",
  "missile",
  "rifle",
  "pistol",
  "shoot",
  "combat",
  "hostage",
  "terror",
  "bomb",
  "grenade",
  "sniper",
  "airstrike",
  "artillery",
  "nuclear",
  "rocket",
  "murder",
  "death",
  "dead",
  "corpse",
  "injury",
  "wound",
  "bloodshed",
];

function isImageSafe(photo) {
  const text = [
    photo.alt || "",
    photo.photographer || "",
    ...(photo.tags || []).map((tag) => tag.title || tag),
  ]
    .join(" ")
    .toLowerCase();
  return !BANNED_WORDS.some((banned) => text.includes(banned));
}

// Helper function to delay execution
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Ensure minimum time between requests
async function waitForRateLimit() {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  if (timeSinceLastRequest < MIN_DELAY_BETWEEN_REQUESTS) {
    await delay(MIN_DELAY_BETWEEN_REQUESTS - timeSinceLastRequest);
  }
  lastRequestTime = Date.now();
}

// Process queue with rate limiting and retries
async function processQueue() {
  if (isProcessingQueue || requestQueue.length === 0) return;

  isProcessingQueue = true;

  while (requestQueue.length > 0) {
    // Check rate limit
    const now = Date.now();
    if (now - windowStart >= RATE_LIMIT_WINDOW) {
      requestCount = 0;
      windowStart = now;
    }

    if (requestCount >= RATE_LIMIT_REQUESTS) {
      // Wait for rate limit window to reset
      await delay(RATE_LIMIT_WINDOW);
      continue;
    }

    const {
      resolve,
      reject,
      query,
      options,
      retries = 0,
    } = requestQueue.shift();

    // Wait for minimum time between requests
    await waitForRateLimit();
    requestCount++;

    try {
      const response = await client.photos.search({
        query,
        per_page: options.per_page || 1, // Reduced from 2 to 1
        orientation: options.orientation || "landscape",
      });

      if (response && response.photos) {
        resolve(response.photos);
      } else {
        resolve([]);
      }
    } catch (error) {
      console.error(`Error searching photos for "${query}":`, error);

      // If we hit rate limit and haven't retried too many times, requeue
      if (error.message === "Too Many Requests" && retries < 3) {
        requestQueue.unshift({
          resolve,
          reject,
          query,
          options,
          retries: retries + 1,
        });
        // Wait longer between retries with exponential backoff
        await delay(15000 * Math.pow(2, retries)); // Increased from 10s to 15s
      } else {
        // If we've retried too many times or it's a different error, resolve with empty array
        resolve([]);
      }
    }

    // Add a delay between requests
    await delay(MIN_DELAY_BETWEEN_REQUESTS);
  }

  isProcessingQueue = false;
}

// Queued version of searchPhotos with timeout and retries
export async function searchPhotos(query, options = {}) {
  const cacheKey = `${query}-${options.per_page}-${options.orientation}`;

  // Check cache first
  const cached = queryCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    // Filter cached photos for safety
    return cached.photos.filter(isImageSafe);
  }

  // Queue the request with timeout
  const promise = new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      resolve([]); // Resolve with empty array on timeout
    }, 4000); // Reduced timeout from 5s to 4s

    requestQueue.push({
      resolve: (photos) => {
        clearTimeout(timeout);
        // Filter for safe images before resolving
        resolve(photos.filter(isImageSafe));
      },
      reject: (error) => {
        clearTimeout(timeout);
        resolve([]); // Resolve with empty array on error
      },
      query,
      options,
    });
  });

  // Start processing queue if not already running
  processQueue();

  try {
    const photos = await promise;

    if (photos && photos.length > 0) {
      queryCache.set(cacheKey, {
        photos,
        timestamp: Date.now(),
      });
    }

    return photos;
  } catch (error) {
    console.error("Error in searchPhotos:", error);
    return [];
  }
}

// Keep track of used photos to avoid duplicates
const usedPhotos = new Set();

export async function getRandomPhoto(query) {
  try {
    // Check if Pexels API key is available
    if (!process.env.NEXT_PUBLIC_PEXELS_API_KEY) {
      console.warn("Pexels API key not found, returning null");
      return null;
    }

    // Try primary query first
    let photos = await searchPhotos(query, { per_page: 2 }); // Reduced from 3 to 2

    // Filter out previously used photos
    photos = photos.filter((photo) => !usedPhotos.has(photo.id));

    // If no unused safe photos, try fallback queries
    if (!photos || photos.length === 0) {
      for (const fallbackQuery of FALLBACK_QUERIES) {
        photos = await searchPhotos(fallbackQuery, { per_page: 2 }); // Reduced from 3 to 2
        photos = photos.filter((photo) => !usedPhotos.has(photo.id));
        if (photos && photos.length > 0) {
          break;
        }
      }
    }

    if (!photos || photos.length === 0) {
      // Clear used photos if we can't find any unused ones
      usedPhotos.clear();
      return null;
    }

    const randomIndex = Math.floor(Math.random() * photos.length);
    const selectedPhoto = photos[randomIndex];
    usedPhotos.add(selectedPhoto.id);
    return selectedPhoto;
  } catch (error) {
    console.error("Error getting random photo:", error);
    return null;
  }
}

export function getOptimizedPhotoUrl(photo) {
  if (!photo) return null;
  return photo.src.large2x || photo.src.large || photo.src.original;
}

// Generate a placeholder image URL for when Pexels API is not available
export function getPlaceholderImageUrl(query = "technology") {
  // Use a simple placeholder service
  const colors = ['66C2BE', '8CB7D0', 'E3DFF1', 'A5DAD8', '55B3AF'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const width = 800;
  const height = 600;
  
  return `https://via.placeholder.com/${width}x${height}/${randomColor}/ffffff?text=${encodeURIComponent(query)}`;
}

// Clear cache periodically to prevent memory issues
if (typeof window !== "undefined") {
  setInterval(() => {
    // Only clear old entries
    const now = Date.now();
    for (const [key, data] of queryCache.entries()) {
      if (now - data.timestamp >= CACHE_DURATION) {
        queryCache.delete(key);
      }
    }
  }, CACHE_DURATION);
}
