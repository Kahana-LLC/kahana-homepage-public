import { withAppLanguageParam } from './contentLanguage';

/** Canonical product host after Phase 3. Never send new CTAs to app.kahana.io. */
export const PRODUCT_ORIGIN = 'https://kahana.io';

export const APP_URL = PRODUCT_ORIGIN;
/** Library catalog. `/explore` still 301s in kahana-web; new links use `/library`. */
export const EXPLORE_URL = `${PRODUCT_ORIGIN}/library`;
export const APP_CREATE_URL = PRODUCT_ORIGIN;
export const APP_CLUBS_URL = `${PRODUCT_ORIGIN}/clubs`;
export const APP_ANALYTICS_URL = `${PRODUCT_ORIGIN}/analytics`;
export const APP_BILLING_URL = `${PRODUCT_ORIGIN}/billing`;
export const APP_SAVED_URL = `${PRODUCT_ORIGIN}/saved`;
export const APP_NOTES_URL = `${PRODUCT_ORIGIN}/notes`;
export const APP_MESSAGES_URL = `${PRODUCT_ORIGIN}/messages`;
export const APP_FOLLOWING_URL = `${PRODUCT_ORIGIN}/following`;
export const APP_ACTIVITY_URL = `${PRODUCT_ORIGIN}/activity`;
export const APP_FOR_YOU_URL = `${PRODUCT_ORIGIN}/library?tab=for-you`;

/**
 * Stamp Mixpanel-friendly UTMs on product deep links.
 * Does not overwrite params already on the URL.
 */
export function withProductUtm(
  url,
  { source = 'marketing', medium = 'website', campaign = 'site' } = {},
) {
  if (!url || typeof url !== 'string') return url;
  try {
    const parsed = new URL(url, PRODUCT_ORIGIN);
    if (!parsed.searchParams.has('utm_source')) parsed.searchParams.set('utm_source', source);
    if (!parsed.searchParams.has('utm_medium')) parsed.searchParams.set('utm_medium', medium);
    if (!parsed.searchParams.has('utm_campaign')) parsed.searchParams.set('utm_campaign', campaign);
    return parsed.toString();
  } catch {
    return url;
  }
}

function isLibraryPath(url) {
  try {
    const { pathname } = new URL(url, PRODUCT_ORIGIN);
    return pathname === '/library' || pathname.startsWith('/library/');
  } catch {
    return false;
  }
}

export function productHref(pathOrUrl, campaign, preference) {
  const raw =
    pathOrUrl.startsWith('http') ? pathOrUrl : `${PRODUCT_ORIGIN}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`;
  const stamped = isLibraryPath(raw) ? raw : withProductUtm(raw, { campaign });
  return withAppLanguageParam(stamped, preference);
}
