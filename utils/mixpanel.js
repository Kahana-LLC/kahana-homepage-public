/**
 * Mixpanel utility functions for tracking user interactions
 * Respects consent preferences and only tracks when analytics consent is granted
 */

import { logger } from './logger';

let mixpanelInstance = null;
let isInitialized = false;

export function initMixpanel(token) {
  if (typeof window === 'undefined') return false;
  if (isInitialized && mixpanelInstance) return true;

  if (!token) {
    logger.warn('Mixpanel token not provided');
    return false;
  }

  try {
    if (window.mixpanel) {
      mixpanelInstance = window.mixpanel;
      mixpanelInstance.init(token, {
        debug: process.env.NODE_ENV === 'development',
        track_pageview: false,
        persistence: 'localStorage',
        api_host: 'https://api.mixpanel.com',
        loaded: function (mixpanel) {
          mixpanelInstance = mixpanel;
          isInitialized = true;
          logger.debug('Mixpanel initialized successfully');
        },
      });
      return true;
    }
    logger.warn(
      'Mixpanel library not loaded. Make sure the script is loaded before initialization.'
    );
    return false;
  } catch (error) {
    logger.error('Error initializing Mixpanel:', error);
    return false;
  }
}

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
    logger.warn('Error checking analytics consent:', error);
  }
  return false;
}

export function trackMixpanelEvent(eventName, properties = {}) {
  if (typeof window === 'undefined') return;

  if (!hasAnalyticsConsent()) {
    logger.debug('Mixpanel event blocked - no analytics consent:', eventName, properties);
    return;
  }

  if (!mixpanelInstance || !isInitialized) {
    logger.debug('Mixpanel not initialized. Event not tracked:', eventName);
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
    logger.error('Error tracking Mixpanel event:', error);
  }
}

export function trackMixpanelPageView(pagePath, pageTitle) {
  if (typeof window === 'undefined') return;

  if (!hasAnalyticsConsent()) {
    logger.debug('[Mixpanel] Page view blocked - no analytics consent:', pagePath);
    return;
  }

  if (window.mixpanel && typeof window.mixpanel.track === 'function') {
    try {
      window.mixpanel.track('Page View', {
        page_path: pagePath,
        page_title: pageTitle,
        url: window.location.href,
        timestamp: new Date().toISOString(),
      });
    } catch (error) {
      logger.error('[Mixpanel] Error tracking page view:', error);
    }
  } else {
    logger.debug('[Mixpanel] Not initialized yet, page view will be tracked on next load');
  }
}

export function identifyMixpanelUser(userId, userProperties = {}) {
  if (typeof window === 'undefined') return;

  if (!hasAnalyticsConsent()) {
    return;
  }

  if (!mixpanelInstance || !isInitialized) {
    logger.debug('Mixpanel not initialized. User not identified.');
    return;
  }

  try {
    mixpanelInstance.identify(userId);
    if (Object.keys(userProperties).length > 0) {
      mixpanelInstance.people.set(userProperties);
    }
  } catch (error) {
    logger.error('Error identifying Mixpanel user:', error);
  }
}

export function setMixpanelUserProperties(properties) {
  if (typeof window === 'undefined') return;

  if (!hasAnalyticsConsent()) {
    return;
  }

  if (!mixpanelInstance || !isInitialized) {
    logger.debug('Mixpanel not initialized. Properties not set.');
    return;
  }

  try {
    mixpanelInstance.people.set(properties);
  } catch (error) {
    logger.error('Error setting Mixpanel user properties:', error);
  }
}

export function resetMixpanel() {
  if (typeof window === 'undefined') return;

  if (!mixpanelInstance || !isInitialized) {
    return;
  }

  try {
    mixpanelInstance.reset();
  } catch (error) {
    logger.error('Error resetting Mixpanel:', error);
  }
}

export function getMixpanelInstance() {
  return mixpanelInstance;
}
