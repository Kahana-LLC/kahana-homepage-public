/**
 * Consent-aware GA4 helpers for the marketing site.
 *
 * Source of truth: gtag + NEXT_PUBLIC_GA_MEASUREMENT_ID.
 * Do not also fire a GA4 Configuration tag from GTM — that double-counts pageviews.
 * Load GTM only when NEXT_PUBLIC_GTM_ID is set (non-GA tags / Ads tools).
 */

import { logger } from './logger';

export const DEFAULT_GA_MEASUREMENT_ID = 'G-KQHFL9605P';

export function getGaMeasurementId() {
  return (
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ||
    DEFAULT_GA_MEASUREMENT_ID
  ).trim();
}

/** Empty / unset = do not load GTM (avoids double-count with inline gtag). */
export function getGtmId() {
  const id = (process.env.NEXT_PUBLIC_GTM_ID || '').trim();
  return id || null;
}

function hasAnalyticsConsent() {
  if (typeof window === 'undefined') return false;
  try {
    const stored = localStorage.getItem('kahana_consent_preferences');
    if (!stored) return false;
    const consent = JSON.parse(stored);
    return consent?.analytics === true;
  } catch {
    return false;
  }
}

export function ensureGtag() {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
  }
}

/**
 * GA4 config snippet for idle / consent loaders.
 * send_page_view false — we send SPA page_view on route changes.
 * No cross-domain linker / url_passthrough: those stamp `_gl` (and nested
 * `_ga` / `_gcl_au`) onto Explore → kahana.io/library. about.* and apex
 * already share cookies via cookie_domain kahana.io.
 */
export function buildGtagConfigSnippet(measurementId = getGaMeasurementId()) {
  return `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('set', 'url_passthrough', false);
    gtag('config', '${measurementId}', {
      send_page_view: false,
      cookie_domain: 'kahana.io'
    });
  `;
}

export function buildGtmSnippet(gtmId) {
  return `
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),
      dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
}

/** SPA / route page_view via gtag (requires prior config). */
export function trackGaPageView(pagePath, pageTitle) {
  if (typeof window === 'undefined') return;
  if (!hasAnalyticsConsent()) {
    logger.debug('GA page_view blocked — no analytics consent');
    return;
  }
  ensureGtag();
  const measurementId = getGaMeasurementId();
  if (!measurementId || typeof window.gtag !== 'function') return;

  const path =
    pagePath ||
    `${window.location.pathname}${window.location.search}` ||
    '/';
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: pageTitle || document.title,
    send_to: measurementId,
  });
}
