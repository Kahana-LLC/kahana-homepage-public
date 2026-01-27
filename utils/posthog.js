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

  // Dynamically import PostHog - config matches PostHog dashboard snippet
  import('posthog-js')
    .then(({ default: PostHog }) => {
      posthog = PostHog.init(apiKey, {
        api_host: host,
        defaults: '2025-11-30',
        person_profiles: 'identified_only',
        loaded: (ph) => {
          console.log('PostHog initialized successfully');
          posthog = ph;
        },
        // Disable autocapture for better privacy control
        autocapture: false,
        // Capture pageviews manually (we call trackPageView on route change)
        capture_pageview: false,
        // Respect Do Not Track
        respect_dnt: true,
        // Disable session recording by default
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
 * Get PostHog instance (from snippet window.posthog or npm-init'd instance)
 * @returns {Object|null}
 */
export function getPostHog() {
  if (typeof window !== 'undefined' && window.posthog) {
    return window.posthog;
  }
  return posthog;
}

/**
 * Check if PostHog is initialized
 * @returns {boolean}
 */
export function isPostHogInitialized() {
  return getPostHog() != null;
}

/**
 * Track an event in PostHog
 * @param {string} eventName - Name of the event
 * @param {Object} properties - Event properties
 */
export function trackPostHogEvent(eventName, properties = {}) {
  const ph = getPostHog();
  if (!ph || !hasAnalyticsConsent()) {
    if (process.env.NODE_ENV === 'development') {
      console.log('PostHog event blocked - no consent or not initialized:', eventName, properties);
    }
    return;
  }

  try {
    ph.capture(eventName, {
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
  const ph = getPostHog();
  if (!ph || !hasAnalyticsConsent()) {
    return;
  }

  try {
    ph.identify(distinctId, properties);
  } catch (error) {
    console.error('Error identifying user in PostHog:', error);
  }
}

/**
 * Set user properties
 * @param {Object} properties - User properties to set
 */
export function setUserProperties(properties) {
  const ph = getPostHog();
  if (!ph || !hasAnalyticsConsent()) {
    return;
  }

  try {
    ph.setPersonProperties(properties);
  } catch (error) {
    console.error('Error setting user properties in PostHog:', error);
  }
}

/**
 * Reset PostHog (on logout or consent withdrawal)
 */
export function resetPostHog() {
  const ph = getPostHog();
  if (ph) {
    try {
      ph.reset();
      posthog = null;
      if (typeof window !== 'undefined' && window.posthog) {
        window.posthog = undefined;
      }
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
  const ph = getPostHog();
  if (!ph || !hasAnalyticsConsent()) {
    return;
  }

  try {
    const isClient = typeof window !== 'undefined';
    ph.capture('$pageview', {
      $current_url: isClient ? window.location.href : path,
      $host: isClient ? window.location.hostname : undefined,
      ...properties,
    });
  } catch (error) {
    console.error('Error tracking page view in PostHog:', error);
  }
}

