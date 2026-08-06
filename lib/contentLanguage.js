/**
 * App + marketing language preference.
 * Same option list as kahana-web.
 *
 * Bridge to app.kahana.io:
 * - Cookie `kahana.contentLanguage` on `.kahana.io`
 * - Query `?lang=` on Log in / Explore / Create links
 *
 * Marketing UI copy switches via MarketingI18n + lib/i18n catalogs.
 */

export const CONTENT_LANGUAGE_COOKIE = 'kahana.contentLanguage';
export const CONTENT_LANGUAGE_STORAGE_KEY = 'kahana.explore.contentLanguage';
export const CONTENT_LANGUAGE_QUERY = 'lang';

export const CONTENT_LANGUAGE_OPTIONS = [
  { value: 'auto', label: 'Auto (browser)', short: 'Auto' },
  { value: 'en', label: 'English', short: 'EN' },
  { value: 'es', label: 'Español', short: 'ES' },
  { value: 'fr', label: 'Français', short: 'FR' },
  { value: 'de', label: 'Deutsch', short: 'DE' },
  { value: 'pt', label: 'Português', short: 'PT' },
  { value: 'ar', label: 'العربية', short: 'AR' },
  { value: 'he', label: 'עברית', short: 'HE' },
  { value: 'ru', label: 'Русский', short: 'RU' },
  { value: 'zh', label: '中文', short: 'ZH' },
  { value: 'ja', label: '日本語', short: 'JA' },
  { value: 'ko', label: '한국어', short: 'KO' },
  { value: 'hi', label: 'हिन्दी', short: 'HI' },
  { value: 'th', label: 'ไทย', short: 'TH' },
];

const ALLOWED = new Set(
  CONTENT_LANGUAGE_OPTIONS.map((o) => o.value).filter((v) => v !== 'auto'),
);

export const RTL_LANGUAGES = new Set(['ar', 'he']);

export function normalizeLanguageCode(language) {
  if (!language || typeof language !== 'string') return 'en';
  const base = language.trim().toLowerCase().split(/[-_]/)[0];
  return base || 'en';
}

export function normalizePreference(value) {
  if (!value || value === 'auto') return 'auto';
  const normalized = normalizeLanguageCode(value);
  return ALLOWED.has(normalized) ? normalized : 'auto';
}

function cookieDomain() {
  if (typeof window === 'undefined') return '';
  const host = window.location.hostname;
  if (host === 'kahana.io' || host.endsWith('.kahana.io')) {
    return '; Domain=.kahana.io';
  }
  if (host === 'auralibrary.org' || host.endsWith('.auralibrary.org')) {
    return '; Domain=.auralibrary.org';
  }
  return '';
}

export function readLanguageCookie() {
  if (typeof document === 'undefined') return null;
  const match = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${CONTENT_LANGUAGE_COOKIE}=`));
  if (!match) return null;
  return normalizePreference(decodeURIComponent(match.split('=').slice(1).join('=')));
}

export function writeLanguageCookie(preference) {
  if (typeof document === 'undefined') return;
  const next = normalizePreference(preference);
  const maxAge = 60 * 60 * 24 * 365;
  if (next === 'auto') {
    document.cookie = `${CONTENT_LANGUAGE_COOKIE}=; Path=/; Max-Age=0; SameSite=Lax${cookieDomain()}`;
    return;
  }
  document.cookie = `${CONTENT_LANGUAGE_COOKIE}=${encodeURIComponent(next)}; Path=/; Max-Age=${maxAge}; SameSite=Lax${cookieDomain()}`;
}

export function readLanguagePreference() {
  if (typeof window === 'undefined') return 'auto';
  // Cookie is shared with app.kahana.io — prefer it over apex localStorage.
  const fromCookie = readLanguageCookie();
  if (fromCookie) return fromCookie;
  try {
    const fromStorage = localStorage.getItem(CONTENT_LANGUAGE_STORAGE_KEY);
    if (fromStorage) return normalizePreference(fromStorage);
  } catch {
    // ignore
  }
  return 'auto';
}

export function writeLanguagePreference(value) {
  const next = normalizePreference(value);
  try {
    if (typeof localStorage !== 'undefined') {
      if (next === 'auto') {
        localStorage.removeItem(CONTENT_LANGUAGE_STORAGE_KEY);
      } else {
        localStorage.setItem(CONTENT_LANGUAGE_STORAGE_KEY, next);
      }
    }
  } catch {
    // ignore
  }
  writeLanguageCookie(next);
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('kahana:content-language-changed', { detail: next }));
  }
  return next;
}

/** Append ?lang= for app deep links when preference is fixed (not auto). */
export function withAppLanguageParam(url, preference = readLanguagePreference()) {
  if (!url || typeof url !== 'string') return url;
  const next = normalizePreference(preference);
  if (next === 'auto') return url;
  try {
    const parsed = new URL(url, typeof window !== 'undefined' ? window.location.origin : 'https://kahana.io');
    parsed.searchParams.set(CONTENT_LANGUAGE_QUERY, next);
    return parsed.toString();
  } catch {
    const join = url.includes('?') ? '&' : '?';
    return `${url}${join}${CONTENT_LANGUAGE_QUERY}=${encodeURIComponent(next)}`;
  }
}

export function getShortLanguageLabel(preference) {
  const next = normalizePreference(preference);
  const option = CONTENT_LANGUAGE_OPTIONS.find((o) => o.value === next);
  return option?.short || 'Auto';
}
