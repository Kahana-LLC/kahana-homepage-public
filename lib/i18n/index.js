import en from './messages/en';
import es from './messages/es';
import fr from './messages/fr';
import de from './messages/de';
import pt from './messages/pt';
import ar from './messages/ar';
import he from './messages/he';
import ru from './messages/ru';
import zh from './messages/zh';
import ja from './messages/ja';
import ko from './messages/ko';
import hi from './messages/hi';
import th from './messages/th';
import {
  normalizeLanguageCode,
  normalizePreference,
  readLanguagePreference,
  RTL_LANGUAGES,
} from '../contentLanguage';

const CATALOGS = {
  en,
  es,
  fr,
  de,
  pt,
  ar,
  he,
  ru,
  zh,
  ja,
  ko,
  hi,
  th,
};

function getCatalog(locale) {
  const code = normalizeLanguageCode(locale);
  return CATALOGS[code] || en;
}

function getByPath(obj, path) {
  if (!obj || !path) return undefined;
  return path.split('.').reduce((acc, key) => {
    if (acc == null) return undefined;
    return acc[key];
  }, obj);
}

/** Resolve preference (`auto` → browser) to a concrete locale code. */
export function resolveMarketingLocale(preference = readLanguagePreference()) {
  const pref = normalizePreference(preference);
  if (pref !== 'auto') return pref;

  if (typeof navigator !== 'undefined') {
    const candidates = [...(navigator.languages || []), navigator.language].filter(Boolean);
    for (const candidate of candidates) {
      const code = normalizeLanguageCode(candidate);
      if (CATALOGS[code]) return code;
    }
  }
  return 'en';
}

export function translate(locale, key, vars = {}) {
  const primary = getByPath(getCatalog(locale), key);
  const fallback = getByPath(en, key);
  let text = primary ?? fallback ?? key;
  if (typeof text !== 'string') return key;
  return text.replace(/\{(\w+)\}/g, (_, name) =>
    vars[name] != null ? String(vars[name]) : `{${name}}`,
  );
}

export function applyDocumentLanguage(locale) {
  if (typeof document === 'undefined') return;
  const code = resolveMarketingLocale(locale);
  document.documentElement.lang = code;
  document.documentElement.dir = RTL_LANGUAGES.has(code) ? 'rtl' : 'ltr';
}

export function createTranslator(locale) {
  return (key, vars) => translate(locale, key, vars);
}
