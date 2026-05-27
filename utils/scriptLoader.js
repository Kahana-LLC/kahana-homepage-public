/**
 * Utility functions for loading scripts based on consent
 */

const isScriptLoaderDebug = process.env.NODE_ENV === 'development';

function debugLog(...args) {
  if (isScriptLoaderDebug) {
    console.log(...args);
  }
}

export function loadScriptIfConsented(scriptId, src, category, options = {}, hasConsent) {
  if (typeof window === 'undefined') return false;

  if (document.getElementById(scriptId)) {
    return true;
  }

  const existingScript = Array.from(document.querySelectorAll('script[src]')).find(
    (script) => script.src === src || script.src.includes(src.split('?')[0])
  );
  if (existingScript) {
    debugLog(`Script with src ${src} already exists, skipping duplicate`);
    return true;
  }

  if (!hasConsent || !hasConsent(category)) {
    debugLog(`Script ${scriptId} not loaded: ${category} consent not granted`);
    return false;
  }

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
  debugLog(`Script ${scriptId} loaded with ${category} consent`);
  return true;
}

export function loadInlineScriptIfConsented(scriptId, content, category, options = {}, hasConsent) {
  if (typeof window === 'undefined') return false;

  if (document.getElementById(scriptId)) {
    return true;
  }

  if (!hasConsent || !hasConsent(category)) {
    debugLog(`Inline script ${scriptId} not loaded: ${category} consent not granted`);
    return false;
  }

  const script = document.createElement('script');
  script.id = scriptId;
  script.type = 'text/javascript';
  script.textContent = content;

  document.head.appendChild(script);
  debugLog(`Inline script ${scriptId} loaded with ${category} consent`);
  return true;
}

export function removeScript(scriptId) {
  if (typeof window === 'undefined') return;

  const script = document.getElementById(scriptId);
  if (script && script.parentNode) {
    script.parentNode.removeChild(script);
    debugLog(`Script ${scriptId} removed`);
  }
}

export function removeScriptsBySrc(srcPattern) {
  if (typeof window === 'undefined') return;

  const scripts = document.querySelectorAll(`script[src*="${srcPattern}"]`);
  scripts.forEach((script) => {
    if (script.parentNode) {
      script.parentNode.removeChild(script);
      debugLog(`Script with src containing "${srcPattern}" removed`);
    }
  });
}

export function disableAnalytics() {
  if (typeof window === 'undefined') return;

  if (window.dataLayer) {
    window.dataLayer = [];
  }

  if (window.gtag) {
    window.gtag = function () {};
  }
}

export function initializeConsentBasedScripts(consent, hasConsent) {
  if (typeof window === 'undefined') return;

  window.dispatchEvent(
    new CustomEvent('consentScriptsInitialized', {
      detail: { consent, hasConsent },
    })
  );
}
