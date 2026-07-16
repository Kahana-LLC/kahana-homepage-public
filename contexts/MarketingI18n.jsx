import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
  readLanguagePreference,
  writeLanguagePreference,
  normalizePreference,
} from '../lib/contentLanguage';
import {
  applyDocumentLanguage,
  createTranslator,
  resolveMarketingLocale,
} from '../lib/i18n';

const MarketingI18nContext = createContext({
  preference: 'auto',
  locale: 'en',
  t: (key) => key,
  setPreference: () => {},
});

export function MarketingI18nProvider({ children }) {
  const [preference, setPreferenceState] = useState('auto');
  const [locale, setLocale] = useState('en');

  const syncFromStore = useCallback(() => {
    const nextPref = readLanguagePreference();
    const nextLocale = resolveMarketingLocale(nextPref);
    setPreferenceState(nextPref);
    setLocale(nextLocale);
    applyDocumentLanguage(nextLocale);
  }, []);

  useEffect(() => {
    syncFromStore();
    const onChange = (event) => {
      const nextPref = normalizePreference(event?.detail ?? readLanguagePreference());
      const nextLocale = resolveMarketingLocale(nextPref);
      setPreferenceState(nextPref);
      setLocale(nextLocale);
      applyDocumentLanguage(nextLocale);
    };
    window.addEventListener('kahana:content-language-changed', onChange);
    return () => window.removeEventListener('kahana:content-language-changed', onChange);
  }, [syncFromStore]);

  const setPreference = useCallback((value) => {
    const next = writeLanguagePreference(value);
    const nextLocale = resolveMarketingLocale(next);
    setPreferenceState(next);
    setLocale(nextLocale);
    applyDocumentLanguage(nextLocale);
    return next;
  }, []);

  const t = useMemo(() => createTranslator(locale), [locale]);

  const value = useMemo(
    () => ({ preference, locale, t, setPreference }),
    [preference, locale, t, setPreference],
  );

  return (
    <MarketingI18nContext.Provider value={value}>{children}</MarketingI18nContext.Provider>
  );
}

export function useMarketingI18n() {
  return useContext(MarketingI18nContext);
}

export function useT() {
  return useMarketingI18n().t;
}
