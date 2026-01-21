/**
 * PostHog Event Tracking Utilities
 * Specific events for ICP signal collection and conversion tracking
 */

import { trackPostHogEvent } from './posthog';

/**
 * Track when user views a comparison page
 * @param {string} comparisonType - Type of comparison (e.g., 'browser', 'ar-glasses')
 * @param {Object} additionalData - Additional event data
 */
export function trackComparisonPageView(comparisonType, additionalData = {}) {
  trackPostHogEvent('comparison_page_viewed', {
    comparison_type: comparisonType,
    ...additionalData,
  });
}

/**
 * Track when user selects a category
 * @param {string} category - Category selected
 * @param {Object} additionalData - Additional event data
 */
export function trackCategorySelected(category, additionalData = {}) {
  trackPostHogEvent('category_selected', {
    category: category,
    ...additionalData,
  });
}

/**
 * Track when user selects a role (from ICP survey)
 * @param {string} role - Role selected (Founder, Developer, etc.)
 * @param {Object} additionalData - Additional event data
 */
export function trackRoleSelected(role, additionalData = {}) {
  trackPostHogEvent('role_selected', {
    role: role,
    source: 'icp_survey',
    ...additionalData,
  });
}

/**
 * Track demo request (conversion event)
 * @param {string} source - Source of demo request
 * @param {Object} additionalData - Additional event data
 */
export function trackDemoRequest(source, additionalData = {}) {
  trackPostHogEvent('demo_requested', {
    source: source,
    conversion: true,
    ...additionalData,
  });
}

/**
 * Track quote request
 * @param {string} source - Source of quote request
 * @param {Object} additionalData - Additional event data
 */
export function trackQuoteRequest(source, additionalData = {}) {
  trackPostHogEvent('quote_requested', {
    source: source,
    conversion: true,
    ...additionalData,
  });
}

/**
 * Track enterprise inquiry
 * @param {string} source - Source of inquiry
 * @param {Object} additionalData - Additional event data
 */
export function trackEnterpriseInquiry(source, additionalData = {}) {
  trackPostHogEvent('enterprise_inquiry', {
    source: source,
    conversion: true,
    ...additionalData,
  });
}

/**
 * Track contact form submission
 * @param {string} formType - Type of form
 * @param {Object} additionalData - Additional event data
 */
export function trackContactSubmission(formType, additionalData = {}) {
  trackPostHogEvent('contact_submission', {
    form_type: formType,
    conversion: true,
    ...additionalData,
  });
}

/**
 * Track button click with context
 * @param {string} buttonName - Name of button
 * @param {string} buttonLocation - Location of button
 * @param {Object} additionalData - Additional event data
 */
export function trackButtonClick(buttonName, buttonLocation, additionalData = {}) {
  trackPostHogEvent('button_click', {
    button_name: buttonName,
    button_location: buttonLocation,
    ...additionalData,
  });
}

/**
 * Track download event
 * @param {string} fileName - Name of file downloaded
 * @param {string} fileType - Type of file
 * @param {Object} additionalData - Additional event data
 */
export function trackDownload(fileName, fileType, additionalData = {}) {
  trackPostHogEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    ...additionalData,
  });
}

