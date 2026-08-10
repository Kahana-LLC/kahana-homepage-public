import { absoluteUrl } from './site';

/**
 * Documentation Configuration
 * 
 * This file contains configuration for documentation pages including:
 * - Universal components that appear on all doc pages
 * - Default settings
 * - Component configurations
 */

export const docsConfig = {
  // Universal components that appear on all documentation pages
  universalComponents: {
    feedback: {
      enabled: false, // Set to true to enable feedback component
      title: "Was this documentation helpful?",
      positiveText: "Yes, it helped",
      negativeText: "No, I need more help",
      className: "mt-8"
    }
  },

  // Default settings for documentation pages
  defaults: {
    readingTimeWordsPerMinute: 200,
    relatedDocsCount: 3,
    authorFallback: "Adam Kershner"
  },

  // Categories and their display names (Help index filters)
  categories: {
    discovery: "Discovery",
    knowledge: "Knowledge",
    presence: "Presence",
    quality: "Quality",
    monetization: "Monetization",
    trust: "Trust",
    guides: "Guides",
    security: "Security",
    privacy: "Privacy",
    api: "API",
    troubleshooting: "Troubleshooting",
  },

  // SEO defaults
  seo: {
    titleTemplate: "%s | Help",
    description:
      "Guides and answers for the Kahana platform—hubs, Explore, Aura, and more. New articles are added as product help ships.",
    baseUrl: absoluteUrl('/help')
  }
};

/**
 * Get universal component configuration
 * @param {string} componentName - Name of the component
 * @returns {Object} Component configuration
 */
export function getUniversalComponent(componentName) {
  return docsConfig.universalComponents[componentName] || null;
}

/**
 * Check if a universal component is enabled
 * @param {string} componentName - Name of the component
 * @returns {boolean} Whether the component is enabled
 */
export function isUniversalComponentEnabled(componentName) {
  const component = getUniversalComponent(componentName);
  return component ? component.enabled : false;
}

/**
 * Get category display name
 * @param {string} category - Category slug
 * @returns {string} Display name
 */
export function getCategoryDisplayName(category) {
  return docsConfig.categories[category] || category;
}
