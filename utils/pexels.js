import { createClient } from "pexels";
import fs from "fs";
import path from "path";

const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY);

// Cache configuration
const CACHE_FILE = path.join(process.cwd(), ".image-cache.json");
const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

// Rate limiting configuration - more conservative
const RATE_LIMIT_REQUESTS = 3; // Reduced from 5 to 3
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute window
const MIN_DELAY_BETWEEN_REQUESTS = 2000; // 2 seconds minimum between requests

// Global request tracking
let requestCount = 0;
let windowStart = Date.now();
let lastRequestTime = 0;

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
        per_page: options.per_page || 2, // Reduced from 3 to 2
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
        await delay(10000 * Math.pow(2, retries));
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
  if (
    queryCache[cacheKey] &&
    Date.now() - queryCache[cacheKey].timestamp < CACHE_DURATION
  ) {
    // Filter cached photos for safety
    return queryCache[cacheKey].photos.filter(isImageSafe);
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
