// Simple in-memory cache for sitemap
let sitemapCache = null;
let lastCacheTime = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

function getCachedSitemap() {
  if (sitemapCache && lastCacheTime) {
    const age = Date.now() - lastCacheTime;
    if (age < CACHE_DURATION) {
      return sitemapCache;
    }
  }
  return null;
}

function setCachedSitemap(sitemap) {
  sitemapCache = sitemap;
  lastCacheTime = Date.now();
}

module.exports = {
  getCachedSitemap,
  setCachedSitemap,
};
