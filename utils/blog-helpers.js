/**
 * Normalize blog post category to an array of strings.
 * `data/blog-index.js` uses both `category: "Security"` and `category: ["AI & Browser Technology"]`.
 */
export function normalizeBlogCategories(category) {
  if (category == null || category === "") return [];
  return Array.isArray(category) ? category : [category];
}

/**
 * Format post date for display in a way that matches server and client (avoids hydration errors).
 * Uses UTC so ISO midnight dates don't shift to a different calendar day per timezone.
 */
export function formatBlogPostDate(isoString) {
  if (!isoString) return "";
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Map of categories to nature-themed image queries
const categoryImageMap = {
  Security: [
    "mountain fortress nature",
    "ancient stone walls forest",
    "protective rock formation",
    "natural barrier landscape",
  ],
  Enterprise: [
    "majestic mountain range",
    "towering forest canopy",
    "strong oak tree",
    "enduring natural structure",
  ],
  "Browser & Technology": [
    "flowing river technology",
    "interconnected forest network",
    "digital nature patterns",
    "tech-inspired landscape",
  ],
  "AI & Emerging Tech": [
    "futuristic nature scene",
    "evolving landscape patterns",
    "innovative natural forms",
    "cutting-edge wilderness",
  ],
  Industry: [
    "industrial nature harmony",
    "urban forest integration",
    "modern natural landscape",
    "structured wilderness",
  ],
  Engineering: [
    "zen garden stones balance",
    "geometric patterns in nature",
    "natural architecture forest",
    "structured rock formation",
  ],
  // Default themes for any category
  default: [
    "serene nature landscape",
    "tranquil wilderness scene",
    "peaceful natural setting",
    "calming outdoor vista",
  ],
};

/**
 * Suggests a nature-themed image query based on the post category
 * @param {string} category - The blog post category
 * @returns {string} A nature-themed image query
 */
export function suggestNatureImageQuery(category) {
  const themes = categoryImageMap[category] || categoryImageMap.default;
  return themes[Math.floor(Math.random() * themes.length)];
}

/**
 * Creates a new blog post with suggested nature imagery
 * @param {Object} postData - The blog post data
 * @returns {Object} The complete blog post object with suggested image query
 */
export function createBlogPost(postData) {
  return {
    ...postData,
    defaultImageQuery:
      postData.defaultImageQuery || suggestNatureImageQuery(postData.category),
  };
}

/**
 * Validates that an image query is nature-themed
 * @param {string} query - The image query to validate
 * @returns {boolean} Whether the query appears to be nature-themed
 */
export function isNatureThemed(query) {
  const natureKeywords = [
    "nature",
    "forest",
    "mountain",
    "lake",
    "ocean",
    "wilderness",
    "landscape",
    "natural",
    "organic",
    "serene",
    "peaceful",
    "tranquil",
    "calm",
  ];

  return natureKeywords.some((keyword) =>
    query.toLowerCase().includes(keyword.toLowerCase())
  );
}

/**
 * Calculates reading time from HTML content
 * @param {string} htmlContent - The HTML content to calculate reading time for
 * @returns {number} - Estimated reading time in minutes
 */
export function calculateReadingTime(htmlContent) {
  // Strip HTML tags and count words
  const textContent = htmlContent.replace(/<[^>]*>/g, "");
  const wordCount = textContent.split(/\s+/).length;

  // Calculate reading time (200 words per minute is standard)
  return Math.ceil(wordCount / 200);
}
