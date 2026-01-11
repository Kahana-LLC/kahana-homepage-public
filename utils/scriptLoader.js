/**
 * Utility functions for loading scripts based on consent
 */

/**
 * Load a script if consent is granted for the specified category
 * @param {string} scriptId - Unique identifier for the script
 * @param {string} src - Script source URL
 * @param {string} category - Consent category required ('analytics', 'advertising', 'marketing')
 * @param {Object} options - Additional script options (defer, async, etc.)
 * @param {Function} hasConsent - Function to check if consent is granted
 * @returns {boolean} - True if script was loaded, false if consent not granted
 */
export function loadScriptIfConsented(scriptId, src, category, options = {}, hasConsent) {
  if (typeof window === 'undefined') return false;
  
  // Check if script already exists (by ID or by src)
  if (document.getElementById(scriptId)) {
    return true;
  }
  
  // Also check if script with same src already exists to avoid duplicates
  const existingScript = Array.from(document.querySelectorAll('script[src]')).find(
    script => script.src === src || script.src.includes(src.split('?')[0])
  );
  if (existingScript) {
    console.log(`Script with src ${src} already exists, skipping duplicate`);
    return true;
  }

  // Check consent
  if (!hasConsent || !hasConsent(category)) {
    console.log(`Script ${scriptId} not loaded: ${category} consent not granted`);
    return false;
  }

  // Create and load script
  const script = document.createElement('script');
  script.id = scriptId;
  script.src = src;
  
  if (options.defer) script.defer = true;
  if (options.async) script.async = true;
  if (options.crossOrigin) script.crossOrigin = options.crossOrigin;
  
  if (options.onLoad) {
    script.onload = options.onLoad;
  }
  
  if (options.onError) {
    script.onerror = options.onError;
  }

  document.head.appendChild(script);
  console.log(`Script ${scriptId} loaded with ${category} consent`);
  return true;
}

/**
 * Load inline script if consent is granted
 * @param {string} scriptId - Unique identifier for the script
 * @param {string} content - Inline script content
 * @param {string} category - Consent category required
 * @param {Object} options - Additional options
 * @param {Function} hasConsent - Function to check if consent is granted
 * @returns {boolean} - True if script was loaded, false if consent not granted
 */
export function loadInlineScriptIfConsented(scriptId, content, category, options = {}, hasConsent) {
  if (typeof window === 'undefined') return false;
  
  // Check if script already exists
  if (document.getElementById(scriptId)) {
    return true;
  }

  // Check consent
  if (!hasConsent || !hasConsent(category)) {
    console.log(`Inline script ${scriptId} not loaded: ${category} consent not granted`);
    return false;
  }

  // Create and load inline script
  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'text/javascript';
  
  if (options.strategy === 'afterInteractive') {
    // For Next.js afterInteractive strategy, we'll execute immediately
    script.textContent = content;
  } else {
    script.textContent = content;
  }

  document.head.appendChild(script);
  console.log(`Inline script ${scriptId} loaded with ${category} consent`);
  return true;
}

/**
 * Remove a script from the DOM
 * @param {string} scriptId - Unique identifier for the script
 */
export function removeScript(scriptId) {
  if (typeof window === 'undefined') return;
  
  const script = document.getElementById(scriptId);
  if (script && script.parentNode) {
    script.parentNode.removeChild(script);
    console.log(`Script ${scriptId} removed`);
  }
}

/**
 * Remove scripts by source pattern
 * @param {string} srcPattern - Pattern to match in script src
 */
export function removeScriptsBySrc(srcPattern) {
  if (typeof window === 'undefined') return;
  
  const scripts = document.querySelectorAll(`script[src*="${srcPattern}"]`);
  scripts.forEach(script => {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
      console.log(`Script with src containing "${srcPattern}" removed`);
    }
  });
}

/**
 * Disable analytics tracking by clearing dataLayer
 */
export function disableAnalytics() {
  if (typeof window === 'undefined') return;
  
  // Clear dataLayer
  if (window.dataLayer) {
    window.dataLayer = [];
  }
  
  // Disable gtag if it exists
  if (window.gtag) {
    window.gtag = function() {
      // No-op: do nothing
    };
  }
}

/**
 * Initialize consent-based scripts
 * This should be called when consent changes
 * @param {Object} consent - Consent object with category booleans
 * @param {Function} hasConsent - Function to check consent
 */
export function initializeConsentBasedScripts(consent, hasConsent) {
  if (typeof window === 'undefined') return;

  // Dispatch event for other parts of the app to react to consent changes
  window.dispatchEvent(new CustomEvent('consentScriptsInitialized', { 
    detail: { consent, hasConsent } 
  }));
}

