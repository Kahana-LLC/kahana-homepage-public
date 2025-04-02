// Analytics utility functions for tracking user interactions

// Initialize dataLayer if it doesn't exist
if (typeof window !== "undefined" && !window.dataLayer) {
  window.dataLayer = window.dataLayer || [];
}

// Helper function to push events to dataLayer
const pushToDataLayer = (event) => {
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push(event);
  }
};

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  pushToDataLayer({
    event: "page_view",
    page_path: pagePath,
    page_title: pageTitle,
  });
};

// Track button clicks
export const trackButtonClick = (
  buttonName,
  buttonLocation,
  additionalData = {}
) => {
  pushToDataLayer({
    event: "button_click",
    button_name: buttonName,
    button_location: buttonLocation,
    ...additionalData,
  });
};

// Track form interactions
export const trackFormInteraction = (
  formName,
  interactionType,
  additionalData = {}
) => {
  pushToDataLayer({
    event: "form_interaction",
    form_name: formName,
    interaction_type: interactionType,
    ...additionalData,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  pushToDataLayer({
    event: "scroll_depth",
    scroll_depth: depth,
  });
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds) => {
  pushToDataLayer({
    event: "time_on_page",
    time_in_seconds: timeInSeconds,
  });
};

// Track file downloads
export const trackFileDownload = (fileName, fileType, additionalData = {}) => {
  pushToDataLayer({
    event: "file_download",
    file_name: fileName,
    file_type: fileType,
    ...additionalData,
  });
};

// Track video interactions
export const trackVideoInteraction = (
  videoName,
  interactionType,
  additionalData = {}
) => {
  pushToDataLayer({
    event: "video_interaction",
    video_name: videoName,
    interaction_type: interactionType,
    ...additionalData,
  });
};

// Track search interactions
export const trackSearch = (searchTerm, searchResults, additionalData = {}) => {
  pushToDataLayer({
    event: "search",
    search_term: searchTerm,
    search_results: searchResults,
    ...additionalData,
  });
};

// Track user engagement
export const trackUserEngagement = (engagementType, additionalData = {}) => {
  pushToDataLayer({
    event: "user_engagement",
    engagement_type: engagementType,
    ...additionalData,
  });
};

// Track conversion events
export const trackConversion = (conversionType, value, additionalData = {}) => {
  pushToDataLayer({
    event: "conversion",
    conversion_type: conversionType,
    value: value,
    ...additionalData,
  });
};

// Track error events
export const trackError = (errorType, errorMessage, additionalData = {}) => {
  pushToDataLayer({
    event: "error",
    error_type: errorType,
    error_message: errorMessage,
    ...additionalData,
  });
};
