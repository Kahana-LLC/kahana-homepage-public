/**
 * Automated Test Script for CIPA Consent System
 * 
 * Run this in the browser console after the page loads to test the consent system.
 * 
 * Usage:
 * 1. Open browser console (F12)
 * 2. Copy and paste this entire script
 * 3. Run: testConsentSystem()
 * 
 * Or run individual tests:
 * - testConsentBanner()
 * - testScriptLoading()
 * - testCookieModal()
 * - testFooterLinks()
 * - testConsentPersistence()
 */

(function() {
  'use strict';

  const TEST_RESULTS = {
    passed: [],
    failed: [],
    warnings: []
  };

  function log(message, type = 'info') {
    const styles = {
      pass: 'color: green; font-weight: bold',
      fail: 'color: red; font-weight: bold',
      warn: 'color: orange; font-weight: bold',
      info: 'color: blue'
    };
    console.log(`%c[${type.toUpperCase()}] ${message}`, styles[type] || styles.info);
  }

  function assert(condition, message) {
    if (condition) {
      TEST_RESULTS.passed.push(message);
      log(`✓ ${message}`, 'pass');
      return true;
    } else {
      TEST_RESULTS.failed.push(message);
      log(`✗ ${message}`, 'fail');
      return false;
    }
  }

  function warn(message) {
    TEST_RESULTS.warnings.push(message);
    log(`⚠ ${message}`, 'warn');
  }

  // Helper to clear consent
  function clearConsent() {
    localStorage.removeItem('kahana_consent_preferences');
    log('Consent cleared from localStorage', 'info');
  }

  // Helper to get consent state
  function getConsent() {
    try {
      const stored = localStorage.getItem('kahana_consent_preferences');
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  }

  // Helper to check if script is loaded
  function isScriptLoaded(scriptId) {
    return !!document.getElementById(scriptId);
  }

  // Helper to check if script exists in DOM by src
  function isScriptLoadedBySrc(srcPattern) {
    const scripts = document.querySelectorAll('script[src]');
    return Array.from(scripts).some(script => 
      script.src && script.src.includes(srcPattern)
    );
  }

  // Test 1: Consent Banner
  function testConsentBanner() {
    log('\n=== Testing Consent Banner ===', 'info');
    
    // Clear consent first
    clearConsent();
    location.reload();
    
    // Wait for page to load
    setTimeout(() => {
      const banner = document.querySelector('[role="dialog"][aria-labelledby="consent-banner-title"]');
      assert(banner !== null, 'Consent banner appears on first visit');
      
      const acceptButton = banner?.querySelector('button[aria-label*="Accept"]');
      const declineButton = banner?.querySelector('button[aria-label*="Decline"]');
      const manageButton = banner?.querySelector('button[aria-label*="Manage"]');
      
      assert(acceptButton !== null, 'Accept All button exists');
      assert(declineButton !== null, 'Decline All button exists');
      assert(manageButton !== null, 'Manage Preferences button exists');
      
      // Test button styles (equal prominence)
      const acceptStyles = window.getComputedStyle(acceptButton);
      const declineStyles = window.getComputedStyle(declineButton);
      
      // Check if buttons have similar visual weight
      const acceptVisible = acceptStyles.display !== 'none' && acceptStyles.visibility !== 'hidden';
      const declineVisible = declineStyles.display !== 'none' && declineStyles.visibility !== 'hidden';
      
      assert(acceptVisible && declineVisible, 'Accept and Decline buttons are equally visible');
      
      log('Consent banner tests completed', 'info');
    }, 1000);
  }

  // Test 2: Script Loading
  function testScriptLoading() {
    log('\n=== Testing Script Loading ===', 'info');
    
    // Test 1: No scripts should load without consent
    clearConsent();
    location.reload();
    
    setTimeout(() => {
      const consent = getConsent();
      
      if (!consent || (!consent.analytics && !consent.advertising && !consent.marketing)) {
        // No consent granted - scripts should not be loaded
        assert(
          !isScriptLoadedBySrc('googletagmanager.com/gtag/js'),
          'Google Analytics script not loaded without consent'
        );
        assert(
          !isScriptLoadedBySrc('hotjar.com'),
          'Hotjar script not loaded without consent'
        );
        assert(
          !isScriptLoadedBySrc('getwarmly.com'),
          'Warmly script not loaded without consent'
        );
        assert(
          !isScriptLoadedBySrc('adsbygoogle'),
          'Google Ads script not loaded without consent'
        );
      }
      
      // Test 2: Scripts should load with consent
      // This would require simulating consent acceptance
      // For now, we'll check if scripts can be found when consent exists
      const hasAnalyticsConsent = consent?.analytics === true;
      const hasAdvertisingConsent = consent?.advertising === true;
      const hasMarketingConsent = consent?.marketing === true;
      
      if (hasAnalyticsConsent) {
        // Check if analytics scripts are loaded (they might be loaded dynamically)
        const gtagLoaded = isScriptLoadedBySrc('googletagmanager.com/gtag/js') || 
                          window.dataLayer !== undefined;
        if (gtagLoaded) {
          log('Google Analytics appears to be loaded (with consent)', 'pass');
        } else {
          warn('Google Analytics not found but consent granted - may be loading asynchronously');
        }
      }
      
      if (hasMarketingConsent) {
        const warmlyLoaded = isScriptLoadedBySrc('getwarmly.com');
        if (warmlyLoaded) {
          log('Warmly appears to be loaded (with consent)', 'pass');
        } else {
          warn('Warmly not found but consent granted - may be loading asynchronously');
        }
      }
      
      log('Script loading tests completed', 'info');
    }, 2000);
  }

  // Test 3: Cookie Modal
  function testCookieModal() {
    log('\n=== Testing Cookie Preferences Modal ===', 'info');
    
    // Try to open modal (if consent context is available)
    try {
      // Dispatch event to open modal if possible
      const manageButton = document.querySelector('button[aria-label*="Manage"], button[aria-label*="Cookie"]');
      if (manageButton) {
        manageButton.click();
        
        setTimeout(() => {
          const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
          assert(modal !== null, 'Cookie preferences modal opens');
          
          const toggles = modal.querySelectorAll('button[role="switch"]');
          assert(toggles.length >= 3, 'Modal has category toggles (analytics, advertising, marketing)');
          
          const saveButton = Array.from(modal.querySelectorAll('button')).find(
            btn => btn.textContent.includes('Save')
          );
          assert(saveButton !== null, 'Save Preferences button exists');
          
          log('Cookie modal tests completed', 'info');
        }, 500);
      } else {
        warn('Could not find button to open modal - may need to accept/decline first');
      }
    } catch (e) {
      warn(`Error testing modal: ${e.message}`);
    }
  }

  // Test 4: Footer Links
  function testFooterLinks() {
    log('\n=== Testing Footer Links ===', 'info');
    
    const footer = document.querySelector('footer');
    assert(footer !== null, 'Footer exists');
    
    const cookieSettingsLink = Array.from(footer.querySelectorAll('a, button')).find(
      el => el.textContent.includes('Cookie Settings')
    );
    assert(cookieSettingsLink !== null, 'Cookie Settings link exists in footer');
    
    const doNotSellLink = Array.from(footer.querySelectorAll('a, button')).find(
      el => el.textContent.includes('Do Not Sell') || el.textContent.includes('Do Not Sell or Share')
    );
    assert(doNotSellLink !== null, 'Do Not Sell or Share link exists in footer');
    
    // Test clicking cookie settings
    if (cookieSettingsLink) {
      cookieSettingsLink.click();
      setTimeout(() => {
        const modal = document.querySelector('[role="dialog"][aria-modal="true"]');
        assert(modal !== null, 'Cookie Settings link opens modal');
      }, 500);
    }
    
    log('Footer links tests completed', 'info');
  }

  // Test 5: Consent Persistence
  function testConsentPersistence() {
    log('\n=== Testing Consent Persistence ===', 'info');
    
    const consent = getConsent();
    
    if (consent) {
      assert(consent.strictlyNecessary === true, 'Strictly necessary is always true');
      assert(typeof consent.analytics === 'boolean', 'Analytics consent is boolean');
      assert(typeof consent.advertising === 'boolean', 'Advertising consent is boolean');
      assert(typeof consent.marketing === 'boolean', 'Marketing consent is boolean');
      assert(consent.timestamp !== undefined, 'Consent has timestamp');
      
      log(`Consent state: ${JSON.stringify(consent, null, 2)}`, 'info');
    } else {
      warn('No consent found in localStorage - this is expected on first visit');
    }
    
    log('Consent persistence tests completed', 'info');
  }

  // Test 6: Privacy Policy
  function testPrivacyPolicy() {
    log('\n=== Testing Privacy Policy ===', 'info');
    
    // Check if privacy policy page has required sections
    if (window.location.pathname.includes('privacy-policy')) {
      const pageText = document.body.textContent;
      
      assert(
        pageText.includes('Cookies, Pixels, and Similar Technologies') ||
        pageText.includes('Cookies and Similar Technologies'),
        'Privacy policy has tracking technologies section'
      );
      
      assert(
        pageText.includes('California') || pageText.includes('CCPA') || pageText.includes('CPRA'),
        'Privacy policy mentions California rights'
      );
      
      assert(
        pageText.includes('Cookie Settings') || pageText.includes('cookie settings'),
        'Privacy policy mentions cookie settings'
      );
    } else {
      warn('Not on privacy policy page - navigate to /privacy-policy to test');
    }
    
    log('Privacy policy tests completed', 'info');
  }

  // Test 7: Analytics Consent Checks
  function testAnalyticsConsentChecks() {
    log('\n=== Testing Analytics Consent Checks ===', 'info');
    
    // Check if dataLayer exists
    const hasDataLayer = typeof window.dataLayer !== 'undefined';
    
    if (hasDataLayer) {
      const consent = getConsent();
      const hasAnalyticsConsent = consent?.analytics === true;
      
      if (hasAnalyticsConsent) {
        log('dataLayer exists and analytics consent is granted', 'pass');
      } else {
        warn('dataLayer exists but analytics consent not granted - may be legacy');
      }
    } else {
      const consent = getConsent();
      if (!consent || !consent.analytics) {
        log('dataLayer not initialized (expected without analytics consent)', 'pass');
      }
    }
    
    log('Analytics consent checks completed', 'info');
  }

  // Main test runner
  function runAllTests() {
    log('\n🧪 Starting CIPA Consent System Tests\n', 'info');
    log('Note: Some tests require page reloads. Run individual tests for better control.', 'warn');
    
    TEST_RESULTS.passed = [];
    TEST_RESULTS.failed = [];
    TEST_RESULTS.warnings = [];
    
    // Run tests that don't require page reload
    testFooterLinks();
    testConsentPersistence();
    testPrivacyPolicy();
    testAnalyticsConsentChecks();
    
    // Tests that might need page state
    setTimeout(() => {
      testCookieModal();
      
      // Print summary
      setTimeout(() => {
        log('\n=== Test Summary ===', 'info');
        log(`Passed: ${TEST_RESULTS.passed.length}`, 'pass');
        log(`Failed: ${TEST_RESULTS.failed.length}`, TEST_RESULTS.failed.length > 0 ? 'fail' : 'pass');
        log(`Warnings: ${TEST_RESULTS.warnings.length}`, TEST_RESULTS.warnings.length > 0 ? 'warn' : 'info');
        
        if (TEST_RESULTS.failed.length > 0) {
          log('\nFailed Tests:', 'fail');
          TEST_RESULTS.failed.forEach(test => log(`  - ${test}`, 'fail'));
        }
        
        if (TEST_RESULTS.warnings.length > 0) {
          log('\nWarnings:', 'warn');
          TEST_RESULTS.warnings.forEach(warning => log(`  - ${warning}`, 'warn'));
        }
      }, 2000);
    }, 1000);
  }

  // Export test functions
  window.testConsentSystem = {
    runAll: runAllTests,
    testBanner: testConsentBanner,
    testScripts: testScriptLoading,
    testModal: testCookieModal,
    testFooter: testFooterLinks,
    testPersistence: testConsentPersistence,
    testPrivacy: testPrivacyPolicy,
    testAnalytics: testAnalyticsConsentChecks,
    clearConsent: clearConsent,
    getConsent: getConsent,
    results: () => TEST_RESULTS
  };

  log('✅ Test script loaded!', 'pass');
  log('Run: testConsentSystem.runAll() to run all tests', 'info');
  log('Or run individual tests: testConsentSystem.testBanner(), etc.', 'info');
})();

