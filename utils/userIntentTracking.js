// User Intent Tracking - Track which types of users care most about Oasis
// This helps the company understand user segments and their interests

// Initialize dataLayer if it doesn't exist
if (typeof window !== "undefined" && !window.dataLayer) {
  window.dataLayer = window.dataLayer || [];
}

// Helper function to check if analytics consent is granted
const hasAnalyticsConsent = () => {
  if (typeof window === "undefined") return false;
  
  try {
    const stored = localStorage.getItem('kahana_consent_preferences');
    if (stored) {
      const consent = JSON.parse(stored);
      return consent && consent.analytics === true;
    }
  } catch (error) {
    return false;
  }
  
  return false;
};

// Push to dataLayer with consent check
const pushToDataLayer = (event) => {
  if (typeof window === "undefined" || !hasAnalyticsConsent()) return;
  
  if (window.dataLayer) {
    window.dataLayer.push(event);
  }
};

/**
 * Track category filter selection - helps understand which user segments care about what
 */
export const trackCategoryFilter = (category, source = 'blog_index') => {
  pushToDataLayer({
    event: 'category_filter',
    category: category,
    source: source,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track blog category click from blog post - tracks user intent
 */
export const trackCategoryClick = (category, blogSlug) => {
  pushToDataLayer({
    event: 'category_click',
    category: category,
    blog_slug: blogSlug,
    user_intent: 'explore_category',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track "Related Blogs" engagement - shows which content resonates
 */
export const trackRelatedBlogClick = (fromSlug, toSlug, category) => {
  pushToDataLayer({
    event: 'related_blog_click',
    from_blog: fromSlug,
    to_blog: toSlug,
    category: category,
    user_intent: 'read_more_similar',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track blog post engagement - helps identify which topics users care about
 */
export const trackBlogEngagement = (blogSlug, category, engagementType, value = null) => {
  pushToDataLayer({
    event: 'blog_engagement',
    blog_slug: blogSlug,
    category: category,
    engagement_type: engagementType, // 'view', 'scroll_50', 'scroll_100', 'time_30s', 'time_2min', 'share'
    value: value,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track "top browser" search intent - tracks when users are looking for browser comparisons
 */
export const trackBrowserSearchIntent = (searchTerm, resultsCount, clickedResult = null) => {
  pushToDataLayer({
    event: 'browser_search_intent',
    search_term: searchTerm,
    results_count: resultsCount,
    clicked_result: clickedResult,
    user_intent: 'find_top_browser',
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track user segment based on pages visited - helps identify user types
 */
export const trackUserSegment = (segmentType, segmentValue, pagePath) => {
  pushToDataLayer({
    event: 'user_segment',
    segment_type: segmentType, // 'industry', 'use_case', 'role', 'interest'
    segment_value: segmentValue,
    page_path: pagePath,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track Oasis relevance understanding - tracks when users understand why Oasis is relevant
 */
export const trackOasisRelevance = (relevanceType, source, additionalData = {}) => {
  pushToDataLayer({
    event: 'oasis_relevance',
    relevance_type: relevanceType, // 'security', 'productivity', 'compliance', 'comparison'
    source: source, // 'blog_post', 'product_page', 'comparison_table'
    ...additionalData,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track comparison table interactions - shows which comparisons matter most
 */
export const trackComparisonInteraction = (comparisonType, action, additionalData = {}) => {
  pushToDataLayer({
    event: 'comparison_interaction',
    comparison_type: comparisonType, // 'browser_comparison', 'feature_comparison'
    action: action, // 'view', 'expand', 'click_feature'
    ...additionalData,
    timestamp: new Date().toISOString(),
  });
};
