/**
 * Mixpanel utility functions for tracking user interactions
 * Respects consent preferences and only tracks when analytics consent is granted
 */

let mixpanelInstance = null;
let isInitialized = false;

/**
 * Initialize Mixpanel
 * @param {string} token - Mixpanel project token
 * @returns {boolean} - True if initialized successfully
 */
export function initMixpanel(token) {
  if (typeof window === 'undefined') return false;
  if (isInitialized && mixpanelInstance) return true;
  
  if (!token) {
    console.warn('Mixpanel token not provided');
    return false;
  }

  try {
    // Check if mixpanel is already loaded
    if (window.mixpanel) {
      mixpanelInstance = window.mixpanel;
      mixpanelInstance.init(token, {
        debug: process.env.NODE_ENV === 'development',
        track_pageview: false, // We'll track pageviews manually
        persistence: 'localStorage',
        api_host: 'https://api.mixpanel.com',
        loaded: function(mixpanel) {
          mixpanelInstance = mixpanel;
          isInitialized = true;
          console.log('Mixpanel initialized successfully');
        }
      });
      return true;
    } else {
      console.warn('Mixpanel library not loaded. Make sure the script is loaded before initialization.');
      return false;
    }
  } catch (error) {
    console.error('Error initializing Mixpanel:', error);
    return false;
  }
}

/**
 * Check if analytics consent is granted (or localhost for dev reporting)
 */
function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  if (['localhost', '127.0.0.1'].includes(window.location.hostname)) return true;
  try {
    const stored = localStorage.getItem('kahana_consent_preferences');
    if (stored) {
      const consent = JSON.parse(stored);
      if (consent && typeof consent === 'object') {
        return consent.analytics === true;
      }
    }
  } catch (error) {
    console.warn('Error checking analytics consent:', error);
  }
  return false;
}

/**
 * Track an event with Mixpanel
 * @param {string} eventName - Name of the event
 * @param {Object} properties - Event properties
 */
export function trackMixpanelEvent(eventName, properties = {}) {
  if (typeof window === 'undefined') return;
  
  // Check consent before tracking
  if (!hasAnalyticsConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('Mixpanel event blocked - no analytics consent:', eventName, properties);
    }
    return;
  }

  if (!mixpanelInstance || !isInitialized) {
    console.warn('Mixpanel not initialized. Event not tracked:', eventName);
    return;
  }

  try {
    mixpanelInstance.track(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
      url: window.location.href,
      path: window.location.pathname,
    });
  } catch (error) {
    console.error('Error tracking Mixpanel event:', error);
  }
}

/**
 * Track page view
 * @param {string} pagePath - Path of the page
 * @param {string} pageTitle - Title of the page
 */
export function trackMixpanelPageView(pagePath, pageTitle) {
  if (typeof window === 'undefined') return;
  
  // Check consent before tracking
  if (!hasAnalyticsConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('[Mixpanel] Page view blocked - no analytics consent:', pagePath);
    }
    return;
  }

  // Try to track with Mixpanel if available
  if (window.mixpanel && typeof window.mixpanel.track === 'function') {
    try {
      window.mixpanel.track('Page View', {
        page_path: pagePath,
        page_title: pageTitle,
        url: window.location.href,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      console.error('[Mixpanel] Error tracking page view:', error);
    }
  } else {
    // Mixpanel not initialized yet - this is okay, it will track on next page load
    if (process.env.NODE_ENV === 'development') {
      console.log('[Mixpanel] Not initialized yet, page view will be tracked on next load');
    }
  }
}

/**
 * Identify a user
 * @param {string} userId - User identifier
 * @param {Object} userProperties - User properties
 */
export function identifyMixpanelUser(userId, userProperties = {}) {
  if (typeof window === 'undefined') return;
  
  if (!hasAnalyticsConsent()) {
    return;
  }

  if (!mixpanelInstance || !isInitialized) {
    console.warn('Mixpanel not initialized. User not identified.');
    return;
  }

  try {
    mixpanelInstance.identify(userId);
    if (Object.keys(userProperties).length > 0) {
      mixpanelInstance.people.set(userProperties);
    }
  } catch (error) {
    console.error('Error identifying Mixpanel user:', error);
  }
}

/**
 * Set user properties
 * @param {Object} properties - User properties to set
 */
export function setMixpanelUserProperties(properties) {
  if (typeof window === 'undefined') return;
  
  if (!hasAnalyticsConsent()) {
    return;
  }

  if (!mixpanelInstance || !isInitialized) {
    console.warn('Mixpanel not initialized. Properties not set.');
    return;
  }

  try {
    mixpanelInstance.people.set(properties);
  } catch (error) {
    console.error('Error setting Mixpanel user properties:', error);
  }
}

/**
 * Reset Mixpanel (for logout)
 */
export function resetMixpanel() {
  if (typeof window === 'undefined') return;
  
  if (!mixpanelInstance || !isInitialized) {
    return;
  }

  try {
    mixpanelInstance.reset();
  } catch (error) {
    console.error('Error resetting Mixpanel:', error);
  }
}

/**
 * Get Mixpanel instance (for advanced usage)
 */
export function getMixpanelInstance() {
  return mixpanelInstance;
}
