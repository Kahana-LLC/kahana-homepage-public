const fs = require("fs");
const path = require("path");

const CACHE_DIR = path.join(process.cwd(), ".next", "cache");
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Ensure cache directory exists
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

function getCacheFilePath(filename) {
  return path.join(CACHE_DIR, filename);
}

function getCachedSitemap(filename = "sitemap.xml") {
  try {
    const cacheFile = getCacheFilePath(filename);
    if (fs.existsSync(cacheFile)) {
      const stats = fs.statSync(cacheFile);
      const age = Date.now() - stats.mtime.getTime();

      if (age < CACHE_DURATION) {
        return fs.readFileSync(cacheFile, "utf8");
      }
    }
    return null;
  } catch (error) {
    console.error(`Error reading sitemap cache (${filename}):`, error);
    return null;
  }
}

function setCachedSitemap(sitemap, filename = "sitemap.xml") {
  try {
    const cacheFile = getCacheFilePath(filename);
    fs.writeFileSync(cacheFile, sitemap);
  } catch (error) {
    console.error(`Error writing sitemap cache (${filename}):`, error);
  }
}

module.exports = {
  getCachedSitemap,
  setCachedSitemap,
};
