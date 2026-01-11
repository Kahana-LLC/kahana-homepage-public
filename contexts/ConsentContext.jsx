import React, { createContext, useContext, useState, useEffect } from 'react';

const CONSENT_STORAGE_KEY = 'kahana_consent_preferences';

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
                setConsentState(parsed);
                
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
                strictlyNecessary: true, // Always true
                analytics: false,
                advertising: false,
                marketing: false,
                timestamp: null,
                region: null,
              });
              setShowBanner(true);
            }
          } catch (storageError) {
            // Handle localStorage errors (quota exceeded, disabled, etc.)
            if (storageError.name === 'QuotaExceededError') {
              console.error('localStorage quota exceeded, clearing old data');
              try {
                // Try to clear and retry
                localStorage.removeItem(CONSENT_STORAGE_KEY);
              } catch (clearError) {
                console.error('Failed to clear localStorage:', clearError);
              }
            }
            throw storageError; // Re-throw to be caught by outer catch
          }
        }
      } catch (error) {
        console.error('Error loading consent preferences:', error);
        // Default to no consent if there's an error - show banner
        setConsentState({
          strictlyNecessary: true,
          analytics: false,
          advertising: false,
          marketing: false,
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

  // Detect user region (California detection)
  useEffect(() => {
    const detectRegion = async () => {
      if (userRegion) return; // Already detected
      
      try {
        // Try to detect region from IP with timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
        
        const response = await fetch('https://ipapi.co/json/', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
          signal: controller.signal,
        });
        
        clearTimeout(timeoutId);
        
        if (response.ok) {
          const data = await response.json();
          
          // Handle rate limiting
          if (response.status === 429) {
            console.warn('IP detection rate limited, using fallback');
            setUserRegion('CA'); // Default to strict
            return;
          }
          
          const region = data.region_code === 'CA' ? 'CA' : data.country_code === 'US' ? 'US' : null;
          setUserRegion(region);
          
          // Update stored consent with region
          if (consent) {
            const updated = { ...consent, region };
            setConsentState(updated);
            if (typeof window !== 'undefined') {
              try {
                localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(updated));
              } catch (storageError) {
                // Handle quota exceeded or other storage errors
                console.warn('Failed to save consent to localStorage:', storageError);
              }
            }
          }
        } else {
          // Non-OK response - use fallback
          console.warn('IP detection returned non-OK status, using fallback');
          setUserRegion('CA'); // Default to strict
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.warn('Region detection timed out, defaulting to strict behavior');
        } else {
          console.warn('Region detection failed, defaulting to strict behavior:', error);
        }
        // Default to strict (assume California) if detection fails
        setUserRegion('CA');
      }
    };

    if (!isLoading && !userRegion) {
      detectRegion();
    }
  }, [isLoading, userRegion, consent]);

  const saveConsent = (newConsent) => {
    const consentData = {
      ...newConsent,
      strictlyNecessary: true, // Always true
      timestamp: new Date().toISOString(),
      region: userRegion || consent?.region || null,
    };
    
    setConsentState(consentData);
    
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consentData));
        
        // Dispatch custom event for script loading
        window.dispatchEvent(new CustomEvent('consentChanged', { detail: consentData }));
      } catch (error) {
        // Handle localStorage quota exceeded or other errors
        console.error('Failed to save consent preferences:', error);
        // Still update state even if localStorage fails
        // User will see banner again on next visit, but functionality continues
      }
    }
    
    setShowBanner(false);
    setShowModal(false);
  };

  const acceptAll = () => {
    saveConsent({
      strictlyNecessary: true,
      analytics: true,
      advertising: true,
      marketing: true,
    });
  };

  const declineAll = () => {
    saveConsent({
      strictlyNecessary: true,
      analytics: false,
      advertising: false,
      marketing: false,
    });
  };

  const updateConsent = (category, value) => {
    if (category === 'strictlyNecessary') return; // Cannot change
    
    const updated = {
      ...consent,
      [category]: value,
    };
    
    saveConsent(updated);
  };

  const hasConsent = (category) => {
    if (!consent) return false;
    if (category === 'strictlyNecessary') return true;
    return consent[category] === true;
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const isCaliforniaUser = () => {
    return userRegion === 'CA' || (!userRegion && consent?.region === 'CA');
  };

  const value = {
    consent,
    isLoading,
    showBanner,
    showModal,
    userRegion,
    hasConsent,
    acceptAll,
    declineAll,
    updateConsent,
    openModal,
    closeModal,
    isCaliforniaUser,
  };

  return (
    <ConsentContext.Provider value={value}>
      {children}
    </ConsentContext.Provider>
  );
};

