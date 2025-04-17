import { createClient } from "pexels";
import fs from "fs";
import path from "path";

const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY);

// Cache configuration
const CACHE_FILE = path.join(process.cwd(), ".image-cache.json");
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

// Rate limiting configuration
const RATE_LIMIT_REQUESTS = 30; // Much more conservative limit
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window
let requestCount = 0;
let windowStart = Date.now();

// Request queue implementation
const requestQueue = [];
let isProcessingQueue = false;

// Load cache from file
let queryCache = {};
try {
  if (fs.existsSync(CACHE_FILE)) {
    const cacheData = JSON.parse(fs.readFileSync(CACHE_FILE, "utf8"));
    // Filter out expired entries
    const now = Date.now();
    queryCache = Object.fromEntries(
      Object.entries(cacheData).filter(([_, data]) => {
        return now - data.timestamp < CACHE_DURATION;
      })
    );
  }
} catch (error) {
  console.warn("Error loading image cache:", error);
}

// Save cache to file
function saveCache() {
  try {
    fs.writeFileSync(CACHE_FILE, JSON.stringify(queryCache));
  } catch (error) {
    console.warn("Error saving image cache:", error);
  }
}

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

// Helper function to delay execution
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// Process the request queue
async function processQueue() {
  if (isProcessingQueue || requestQueue.length === 0) return;

  isProcessingQueue = true;

  while (requestQueue.length > 0) {
    const { resolve, reject, query, options } = requestQueue[0];

    try {
      // Check rate limit
      const now = Date.now();
      if (now - windowStart >= RATE_LIMIT_WINDOW) {
        requestCount = 0;
        windowStart = now;
      }

      if (requestCount >= RATE_LIMIT_REQUESTS) {
        const waitTime = RATE_LIMIT_WINDOW - (now - windowStart) + 1000; // Add 1s buffer
        await delay(waitTime);
        continue; // Retry this request
      }

      // Make the request
      requestCount++;
      const response = await client.photos.search({
        query,
        per_page: options.per_page || 1,
        orientation: options.orientation || "landscape",
      });

      requestQueue.shift(); // Remove this request from queue
      resolve(response.photos);
    } catch (error) {
      if (error.message === "Too Many Requests") {
        // If rate limited, wait and retry
        await delay(RATE_LIMIT_WINDOW);
        continue;
      }
      requestQueue.shift();
      reject(error);
    }

    // Add small delay between requests
    await delay(1000);
  }

  isProcessingQueue = false;
}

// Queued version of searchPhotos
export async function searchPhotos(query, options = {}) {
  const cacheKey = `${query}-${options.per_page}-${options.orientation}`;

  // Check cache first
  if (
    queryCache[cacheKey] &&
    Date.now() - queryCache[cacheKey].timestamp < CACHE_DURATION
  ) {
    return queryCache[cacheKey].photos;
  }

  // Queue the request
  const promise = new Promise((resolve, reject) => {
    requestQueue.push({ resolve, reject, query, options });
  });

  // Start processing queue if not already running
  processQueue();

  try {
    const photos = await promise;

    if (photos && photos.length > 0) {
      queryCache[cacheKey] = {
        photos,
        timestamp: Date.now(),
      };
      saveCache();
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
    // Try primary query first
    let photos = await searchPhotos(query, { per_page: 15 });

    // Filter out previously used photos
    photos = photos.filter((photo) => !usedPhotos.has(photo.id));

    // If no unused photos, try fallback queries
    if (!photos || photos.length === 0) {
      for (const fallbackQuery of FALLBACK_QUERIES) {
        photos = await searchPhotos(fallbackQuery, { per_page: 15 });
        photos = photos.filter((photo) => !usedPhotos.has(photo.id));
        if (photos && photos.length > 0) {
          console.log(`Using fallback query: ${fallbackQuery}`);
          break;
        }
      }
    }

    if (!photos || photos.length === 0) {
      console.warn("No unused photos found with any query");
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

export function getOptimizedPhotoUrl(photo, width = 800) {
  if (!photo || !photo.src) return null;

  // Prefer the highest quality available
  return photo.src.large2x || photo.src.large || photo.src.original;
}

// Clear cache periodically to prevent memory issues
if (typeof window !== "undefined") {
  setInterval(() => {
    // Only clear old entries
    const now = Date.now();
    queryCache = Object.fromEntries(
      Object.entries(queryCache).filter(([_, data]) => {
        return now - data.timestamp < CACHE_DURATION;
      })
    );
    saveCache();
  }, CACHE_DURATION);
}
