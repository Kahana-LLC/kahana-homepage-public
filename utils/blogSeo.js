/**
 * Blog SEO helpers: CTR-friendly title/meta length, canonical URLs, optional overrides.
 * Use solid keyword research and target long-tail keywords in post content;
 * use seoTitle and metaDescription in blog JSON for CTR-optimized snippets when needed.
 */

const DEFAULT_BASE_URL = 'https://kahana.co';
const META_DESCRIPTION_MAX = 155; // Google typically shows ~155–160 chars
const TITLE_TAG_MAX = 60;         // Title tag ~50–60 chars for full display in SERPs

/**
 * Truncate text at word boundary for meta description or title.
 * @param {string} text - Raw text
 * @param {number} maxLen - Max length (default 155 for description, 60 for title)
 * @returns {string}
 */
function truncateForMeta(text, maxLen = META_DESCRIPTION_MAX) {
  if (!text || typeof text !== 'string') return '';
  const trimmed = text.trim();
  if (trimmed.length <= maxLen) return trimmed;
  const cut = trimmed.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(' ');
  return lastSpace > maxLen * 0.7 ? cut.slice(0, lastSpace) : cut;
}

/**
 * Get SEO values for a blog post. Supports optional CTR overrides in post JSON.
 * @param {object} post - Blog post (title, excerpt, slug; optional: seoTitle, metaDescription, focusKeyword)
 * @param {string} baseUrl - Site base URL (default https://kahana.co)
 * @returns {{ titleTag: string, metaDescription: string, canonicalUrl: string, focusKeyword: string }}
 */
function getBlogPostSeo(post, baseUrl = DEFAULT_BASE_URL) {
  if (!post) {
    return {
      titleTag: 'Blog | Kahana',
      metaDescription: '',
      canonicalUrl: `${baseUrl}/blog`,
      focusKeyword: '',
    };
  }

  const base = baseUrl.replace(/\/$/, '');
  const canonicalUrl = `${base}/blog/${post.slug || ''}`;

  // Title: optional seoTitle (e.g. "7 Ways to Make Your Browser Faster in 2026"), else "Post Title | Kahana Blog"
  const rawTitle = post.seoTitle || post.title || '';
  const fullTitle = rawTitle.includes('|') || rawTitle.includes('Kahana')
    ? rawTitle
    : `${rawTitle} | Kahana Blog`;
  const titleTag = truncateForMeta(fullTitle, TITLE_TAG_MAX);

  // Meta description: optional metaDescription, else excerpt; always truncate for SERP
  const rawDescription = post.metaDescription || post.excerpt || '';
  const metaDescription = truncateForMeta(rawDescription, META_DESCRIPTION_MAX);

  const focusKeyword = post.focusKeyword || '';

  return { titleTag, metaDescription, canonicalUrl, focusKeyword };
}

/**
 * Build keywords meta content for a post (category + focus keyword + common long-tail terms).
 * @param {object} post - Blog post (category, title, optional focusKeyword)
 * @returns {string}
 */
function getBlogKeywords(post) {
  if (!post) return '';
  const category = Array.isArray(post.category) ? post.category[0] : post.category;
  const focus = post.focusKeyword || '';
  const titleTerms = (post.title || '').split(/\s+/).slice(0, 5).join(', ');
  const base = [
    'enterprise browser',
    'browser security',
    'Oasis browser',
    'AI browser',
    'AI browsers',
    'best AI browser',
    'enterprise AI browser',
  ];
  const combined = [category, focus, titleTerms, ...base].filter(Boolean);
  return [...new Set(combined)].join(', ');
}

module.exports = {
  truncateForMeta,
  getBlogPostSeo,
  getBlogKeywords,
  META_DESCRIPTION_MAX,
  TITLE_TAG_MAX,
  DEFAULT_BASE_URL,
};
