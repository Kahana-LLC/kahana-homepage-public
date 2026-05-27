import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { logger } from '../utils/logger';

const CONSENT_STORAGE_KEY = 'kahana_consent_preferences';
/** Session cache for ipapi.co — avoids repeat requests and reduces 429s (Best Practices / INP noise) */
const REGION_SESSION_KEY = 'kahana_ipapi_region_v1';
const REGION_CACHE_TTL_MS = 7 * 24 * 60 * 60 * 1000;
/** After a 429, skip further ipapi network calls this session (reduces failed-request noise in lab tools). */
const IPAPI_SKIP_NETWORK_KEY = 'kahana_ipapi_skip_network_v1';

function normalizeConsent(parsed) {
  if (!parsed || typeof parsed !== 'object') return null;
  const { marketing: _removed, ...rest } = parsed;
  return {
    strictlyNecessary: true,
    analytics: rest.analytics === true,
    advertising: rest.advertising === true,
    timestamp: rest.timestamp ?? null,
    region: rest.region ?? null,
  };
}

export const ConsentContext = createContext(null);

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error('useConsent must be used within ConsentProvider');
  }
  return context;
};

export const ConsentProvider = ({ children }) => {
  const [consent, setConsentState] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showBanner, setShowBanner] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userRegion, setUserRegion] = useState(null);

  // Load consent from localStorage on mount
  useEffect(() => {
    const loadConsent = () => {
      try {
        if (typeof window !== 'undefined') {
          try {
            const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
            if (stored) {
              const parsed = JSON.parse(stored);
              
              // Validate consent structure
              if (parsed && typeof parsed === 'object') {
                setConsentState(normalizeConsent(parsed));
                
                // Only hide banner if user has explicitly interacted (has timestamp)
                // This ensures banner persists until user takes action
                const hasInteracted = parsed.timestamp !== null && parsed.timestamp !== undefined;
                setShowBanner(!hasInteracted);
                
                // Load user region if stored
                if (parsed.region) {
                  setUserRegion(parsed.region);
                }
              } else {
                throw new Error('Invalid consent data structure');
              }
            } else {
              // No consent record exists - show banner
              setConsentState({
                strictlyNecessary: true,
                analytics: false,
                advertising: false,
                timestamp: null,
                region: null,
              });
              setShowBanner(true);
            }
          } catch (storageError) {
            // Handle localStorage errors (quota exceeded, disabled, etc.)
            if (storageError.name === 'QuotaExceededError') {
              logger.error('localStorage quota exceeded, clearing old data');
              try {
                // Try to clear and retry
                localStorage.removeItem(CONSENT_STORAGE_KEY);
              } catch (clearError) {
                logger.error('Failed to clear localStorage:', clearError);
              }
            }
            throw storageError; // Re-throw to be caught by outer catch
          }
        }
      } catch (error) {
        logger.error('Error loading consent preferences:', error);
        // Default to no consent if there's an error - show banner
        setConsentState({
          strictlyNecessary: true,
          analytics: false,
          advertising: false,
          timestamp: null,
          region: null,
        });
        setShowBanner(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadConsent();
  }, []);

  // Detect user region (California detection) — cached in sessionStorage to limit ipapi.co calls
  useEffect(() => {
    const persistRegionToConsent = (region) => {
      setUserRegion(region);
      if (consent) {
        const updated = { ...consent, region };
        setConsentState(updated);
        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(updated));
          } catch (storageError) {
            logger.warn('Failed to save consent to localStorage:', storageError);
          }
        }
      }
    };

    /** @returns {{ hit: true, region: string | null } | { hit: false }} */
    const readCachedRegion = () => {
      if (typeof window === 'undefined') return { hit: false };
      try {
        const raw = sessionStorage.getItem(REGION_SESSION_KEY);
        if (!raw) return { hit: false };
        const parsed = JSON.parse(raw);
        if (
          parsed &&
          typeof parsed.t === 'number' &&
          Date.now() - parsed.t < REGION_CACHE_TTL_MS
        ) {
          return { hit: true, region: parsed.region ?? null };
        }
      } catch (_) {
        /* ignore */
      }
      return { hit: false };
    };

    const writeCachedRegion = (region) => {
      if (typeof window === 'undefined') return;
      try {
        sessionStorage.setItem(
          REGION_SESSION_KEY,
          JSON.stringify({ region, t: Date.now() })
        );
      } catch (_) {
        /* ignore */
      }
    };

    const detectRegion = async () => {
      if (userRegion) return;

      const cached = readCachedRegion();
      if (cached.hit) {
        persistRegionToConsent(cached.region);
        return;
      }

      if (typeof window !== 'undefined') {
        try {
          if (sessionStorage.getItem(IPAPI_SKIP_NETWORK_KEY) === '1') {
            const fallback = 'CA';
            writeCachedRegion(fallback);
            persistRegionToConsent(fallback);
            return;
          }
        } catch (_) {
          /* ignore */
        }
      }

      // Defer geo fetch until idle so LCP / first paint are not competing with ipapi on the network stack.
      await new Promise((resolve) => {
        const ric = window.requestIdleCallback || ((cb, opts) => window.setTimeout(cb, opts?.timeout ?? 2000));
        ric(resolve, { timeout: 5000 });
      });

      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);

        const response = await fetch('https://ipapi.co/json/', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
          },
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (response.status === 429) {
          const fallback = 'CA';
          try {
            if (typeof window !== 'undefined') {
              sessionStorage.setItem(IPAPI_SKIP_NETWORK_KEY, '1');
            }
          } catch (_) {
            /* ignore */
          }
          writeCachedRegion(fallback);
          setUserRegion(fallback);
          return;
        }

        if (response.ok) {
          const data = await response.json();
          const region =
            data.region_code === 'CA'
              ? 'CA'
              : data.country_code === 'US'
                ? 'US'
                : null;
          writeCachedRegion(region);
          persistRegionToConsent(region);
        } else {
          logger.debug('IP detection returned non-OK status, using fallback');
          const fallback = 'CA';
          writeCachedRegion(fallback);
          setUserRegion(fallback);
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          logger.debug('Region detection timed out, defaulting to strict behavior');
        } else {
          logger.debug('Region detection failed, defaulting to strict behavior:', error);
        }
        const fallback = 'CA';
        writeCachedRegion(fallback);
        setUserRegion(fallback);
      }
    };

    if (!isLoading && !userRegion) {
      detectRegion();
    }
  }, [isLoading, userRegion, consent]);

  const saveConsent = useCallback((newConsent) => {
    const { marketing: _removed, ...rest } = newConsent || {};
    const consentData = {
      ...rest,
      strictlyNecessary: true,
      timestamp: new Date().toISOString(),
      region: userRegion || consent?.region || null,
    };

    setConsentState(consentData);

    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
        window.dispatchEvent(new CustomEvent('consentChanged', { detail: consentData }));
      } catch (error) {
        logger.error('Failed to save consent preferences:', error);
      }
    }

    setShowBanner(false);
    setShowModal(false);
  }, [userRegion, consent?.region]);

  const acceptAll = useCallback(() => {
    saveConsent({
      strictlyNecessary: true,
      analytics: true,
      advertising: true,
    });
  }, [saveConsent]);

  const declineAll = useCallback(() => {
    saveConsent({
      strictlyNecessary: true,
      analytics: false,
      advertising: false,
    });
  }, [saveConsent]);

  const updateConsent = useCallback((category, value) => {
    if (category === 'strictlyNecessary') return;

    saveConsent({
      ...consent,
      [category]: value,
    });
  }, [consent, saveConsent]);

  const hasConsent = useCallback((category) => {
    if (!consent) return false;
    if (category === 'strictlyNecessary') return true;
    return consent[category] === true;
  }, [consent]);

  const openModal = useCallback(() => {
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const isCaliforniaUser = useCallback(() => {
    return userRegion === 'CA' || (!userRegion && consent?.region === 'CA');
  }, [userRegion, consent?.region]);

  const value = useMemo(
    () => ({
      consent,
      isLoading,
      showBanner,
      showModal,
      userRegion,
      hasConsent,
      acceptAll,
      declineAll,
      updateConsent,
      saveConsent,
      openModal,
      closeModal,
      isCaliforniaUser,
    }),
    [
      consent,
      isLoading,
      showBanner,
      showModal,
      userRegion,
      hasConsent,
      acceptAll,
      declineAll,
      updateConsent,
      saveConsent,
      openModal,
      closeModal,
      isCaliforniaUser,
    ]
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
    </ConsentContext.Provider>
  );
};

