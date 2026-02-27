/**
 * Direct Mixpanel tracking for key page views (GTM backup).
 * Charter property names: page_path, page_type, page_url, initial_referrer; blog adds post_slug, post_title.
 * Simplified: Direct Mixpanel tracking only (no GTM/dataLayer).
 */

import { getMixpanelInstance } from './mixpanel';

function getMixpanel() {
  const instance = getMixpanelInstance();
  if (instance && typeof instance.track === 'function') return instance;
  if (typeof window !== 'undefined' && window.mixpanel && typeof window.mixpanel.track === 'function') {
    return window.mixpanel;
  }
  return null;
}

/**
 * Direct Mixpanel call - GTM backup. Track marketing homepage view.
 * Charter: page_path, page_type, page_url, initial_referrer.
 */
export function trackHomepageView() {
  if (typeof window === 'undefined') return;
  const mp = getMixpanel();
  if (!mp) return;
  try {
    mp.track('Homepage View', {
      page_path: '/',
      page_type: 'homepage',
      page_url: window.location.href,
      initial_referrer: document.referrer || '',
    });
  } catch (e) {
    console.warn('[directMixpanel] trackHomepageView:', e);
  }
}

/**
 * Direct Mixpanel call - GTM backup. Track pricing page view.
 * Charter: page_path, page_type, page_url, initial_referrer.
 */
export function trackPricingPageView() {
  if (typeof window === 'undefined') return;
  const mp = getMixpanel();
  if (!mp) return;
  try {
    mp.track('Pricing Page View', {
      page_path: '/pricing',
      page_type: 'pricing',
      page_url: window.location.href,
      initial_referrer: document.referrer || '',
    });
  } catch (e) {
    console.warn('[directMixpanel] trackPricingPageView:', e);
  }
}

/**
 * Direct Mixpanel call - GTM backup. Track blog post page view.
 * Charter: page_path, page_type: 'blog_post', post_slug, post_title, page_url, initial_referrer.
 * Client-side only. No-op if post_slug is missing.
 * @param {Object} opts
 * @param {string} [opts.post_slug] - Blog post slug.
 * @param {string} [opts.post_title] - Page title (e.g. document.title).
 */
export function trackBlogPageViewDirect(opts = {}) {
  if (typeof window === 'undefined') return;
  const { post_slug, post_title } = opts;
  if (!post_slug) return;
  const mp = getMixpanel();
  if (!mp) return;
  try {
    mp.track('Blog Page View', {
      page_path: `/blog/${post_slug}`,
      page_type: 'blog_post',
      post_slug,
      post_title: typeof post_title === 'string' ? post_title : (document.title || ''),
      page_url: window.location.href,
      initial_referrer: document.referrer || '',
    });
  } catch (e) {
    console.warn('[directMixpanel] trackBlogPageViewDirect:', e);
  }
}
