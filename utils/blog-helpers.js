// Map of categories to nature-themed image queries
const categoryImageMap = {
  Privacy: [
    "misty forest path sunrise",
    "hidden mountain valley",
    "secluded forest clearing",
    "peaceful sanctuary nature",
  ],
  Security: [
    "mountain fortress nature",
    "ancient stone walls forest",
    "protective rock formation",
    "natural barrier landscape",
  ],
  Engineering: [
    "zen garden stones balance",
    "geometric patterns in nature",
    "natural architecture forest",
    "structured rock formation",
  ],
  "Cloud Computing": [
    "peaceful clouds mountain landscape",
    "misty mountain peaks",
    "floating clouds nature",
    "ethereal sky landscape",
  ],
  Development: [
    "growing forest saplings",
    "natural progression landscape",
    "evolving nature patterns",
    "organic growth forest",
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
