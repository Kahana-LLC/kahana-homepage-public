/**
 * PostHog Analytics Utility
 * Handles PostHog initialization and event tracking with consent management
 */

let posthog = null;

/**
 * Initialize PostHog (only if consent is granted)
 * @param {string} apiKey - PostHog API key
 * @param {string} host - PostHog host (default: https://us.i.posthog.com)
 * @returns {boolean} - True if initialized, false if consent not granted
 */
export function initPostHog(apiKey, host = 'https://us.i.posthog.com') {
  if (typeof window === 'undefined') return false;
  
  // Check if already initialized
  if (posthog || (window.posthog && window.posthog.__loaded)) {
    return true;
  }

  // Check analytics consent
  if (!hasAnalyticsConsent()) {
    console.log('PostHog not initialized: analytics consent not granted');
    return false;
  }

  // Check if API key is provided
  if (!apiKey) {
    console.warn('PostHog API key not provided');
    return false;
  }

  // Dynamically import PostHog
  import('posthog-js')
    .then(({ default: PostHog }) => {
      posthog = PostHog.init(apiKey, {
        api_host: host,
        loaded: (ph) => {
          console.log('PostHog initialized successfully');
          posthog = ph;
        },
        // Person profiles: only create for identified users
        person_profiles: 'identified_only',
        // Disable autocapture for better privacy control
        autocapture: false,
        // Capture pageviews manually
        capture_pageview: false,
        // Respect Do Not Track
        respect_dnt: true,
        // Disable session recording by default (can enable per user)
        disable_session_recording: true,
      });
    })
    .catch((error) => {
      console.error('Error initializing PostHog:', error);
    });

  return true;
}

/**
 * Check if analytics consent is granted
 * @returns {boolean}
 */
function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  
  try {
    const stored = localStorage.getItem('kahana_consent_preferences');
    if (stored) {
      const consent = JSON.parse(stored);
      return consent && consent.analytics === true;
    }
  } catch (error) {
    console.warn('Error checking analytics consent:', error);
  }
  
  return false;
}

/**
 * Get PostHog instance
 * @returns {Object|null}
 */
export function getPostHog() {
  return posthog;
}

/**
 * Check if PostHog is initialized
 * @returns {boolean}
 */
export function isPostHogInitialized() {
  return posthog !== null;
}

/**
 * Track an event in PostHog
 * @param {string} eventName - Name of the event
 * @param {Object} properties - Event properties
 */
export function trackPostHogEvent(eventName, properties = {}) {
  if (!posthog || !hasAnalyticsConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('PostHog event blocked - no consent or not initialized:', eventName, properties);
    }
    return;
  }

  try {
    posthog.capture(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : '',
    });
  } catch (error) {
    console.error('Error tracking PostHog event:', error);
  }
}

/**
 * Identify a user in PostHog
 * @param {string} distinctId - Unique user identifier
 * @param {Object} properties - User properties
 */
export function identifyUser(distinctId, properties = {}) {
  if (!posthog || !hasAnalyticsConsent()) {
    return;
  }

  try {
    posthog.identify(distinctId, properties);
  } catch (error) {
    console.error('Error identifying user in PostHog:', error);
  }
}

/**
 * Set user properties
 * @param {Object} properties - User properties to set
 */
export function setUserProperties(properties) {
  if (!posthog || !hasAnalyticsConsent()) {
    return;
  }

  try {
    posthog.setPersonProperties(properties);
  } catch (error) {
    console.error('Error setting user properties in PostHog:', error);
  }
}

/**
 * Reset PostHog (on logout or consent withdrawal)
 */
export function resetPostHog() {
  if (posthog) {
    try {
      posthog.reset();
      posthog = null;
      console.log('PostHog reset');
    } catch (error) {
      console.error('Error resetting PostHog:', error);
    }
  }
}

/**
 * Track page view
 * @param {string} path - Page path
 * @param {Object} properties - Additional properties
 */
export function trackPageView(path, properties = {}) {
  if (!posthog || !hasAnalyticsConsent()) {
    return;
  }

  try {
    posthog.capture('$pageview', {
      $current_url: typeof window !== 'undefined' ? window.location.href : path,
      ...properties,
    });
  } catch (error) {
    console.error('Error tracking page view in PostHog:', error);
  }
}

