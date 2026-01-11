# Testing Instructions for CIPA Consent System

## Quick Start Testing

### Method 1: Browser Console (Recommended)

1. **Open your website** in a browser (localhost or production)

2. **Open browser console:**
   - Chrome/Edge: `F12` or `Ctrl+Shift+J` (Windows) / `Cmd+Option+J` (Mac)
   - Firefox: `F12` or `Ctrl+Shift+K` (Windows) / `Cmd+Option+K` (Mac)
   - Safari: `Cmd+Option+C` (Mac, requires Developer menu enabled)

3. **Load the test script:**
   ```javascript
   // Copy and paste the entire contents of scripts/test-consent-system.js
   // Or load it dynamically:
   fetch('/scripts/test-consent-system.js')
     .then(r => r.text())
     .then(eval);
   ```

4. **Run tests:**
   ```javascript
   // Run all tests
   testConsentSystem.runAll();
   
   // Or run individual tests
   testConsentSystem.testBanner();
   testConsentSystem.testScripts();
   testConsentSystem.testModal();
   testConsentSystem.testFooter();
   testConsentSystem.testPersistence();
   ```

5. **Clear consent for testing:**
   ```javascript
   testConsentSystem.clearConsent();
   location.reload(); // Reload to see banner again
   ```

### Method 2: Test HTML Page

1. **Start your development server** (if not already running)

2. **Navigate to:** `http://localhost:3000/test-consent.html`

3. **Follow the on-screen instructions** to load and run tests

### Method 3: Manual Testing Checklist

#### Test 1: Consent Banner Appearance
- [ ] Clear localStorage: `localStorage.removeItem('kahana_consent_preferences')`
- [ ] Reload page
- [ ] Banner appears at bottom of page
- [ ] Banner has "Accept All", "Decline All", and "Manage Preferences" buttons
- [ ] Buttons are equally visible and styled

#### Test 2: Accept All
- [ ] Click "Accept All"
- [ ] Banner disappears
- [ ] Check Network tab - tracking scripts should load
- [ ] Check localStorage - should have consent with all categories true

#### Test 3: Decline All
- [ ] Clear consent and reload
- [ ] Click "Decline All"
- [ ] Banner disappears
- [ ] Check Network tab - no tracking scripts should load
- [ ] Check localStorage - should have consent with all categories false (except strictlyNecessary)

#### Test 4: Manage Preferences
- [ ] Clear consent and reload
- [ ] Click "Manage Preferences"
- [ ] Modal opens
- [ ] All category toggles visible
- [ ] Strictly necessary toggle is disabled/locked
- [ ] Can toggle analytics, advertising, marketing
- [ ] Click "Save Preferences"
- [ ] Modal closes
- [ ] Scripts load based on selected categories

#### Test 5: Footer Links
- [ ] Scroll to footer
- [ ] "Cookie Settings" link exists
- [ ] "Do Not Sell or Share My Personal Information" link exists
- [ ] Click "Cookie Settings" - modal opens
- [ ] Click "Do Not Sell" - declines all and opens modal

#### Test 6: Script Loading
- [ ] Clear consent and reload
- [ ] Open Network tab in DevTools
- [ ] Filter by "JS" or search for tracking domains
- [ ] No scripts from google-analytics.com, hotjar.com, getwarmly.com should load
- [ ] Accept analytics consent
- [ ] Google Analytics and Hotjar scripts should load
- [ ] Accept marketing consent
- [ ] Warmly script should load

#### Test 7: Consent Persistence
- [ ] Accept all categories
- [ ] Reload page
- [ ] Banner should NOT appear
- [ ] Scripts should load automatically
- [ ] Check localStorage - consent should still be there

#### Test 8: California Detection
- [ ] Use VPN or proxy to appear as California user
- [ ] Clear consent and reload
- [ ] Banner should appear
- [ ] All categories should default to declined
- [ ] Must explicitly accept each category

#### Test 9: Privacy Policy
- [ ] Navigate to /privacy-policy
- [ ] Check for "Cookies, Pixels, and Similar Technologies" section
- [ ] Check for "Your Choices About Cookies and Tracking" section
- [ ] Check for "California Residents' Rights" section
- [ ] All tracking tools should be disclosed

#### Test 10: Analytics Consent Checks
- [ ] Decline analytics consent
- [ ] Try to trigger analytics event (if you have test buttons)
- [ ] Check console - should see "Analytics event blocked - no consent"
- [ ] Accept analytics consent
- [ ] Analytics events should fire normally

## Automated Test Script Usage

### Available Test Functions

```javascript
// Main test runner
testConsentSystem.runAll()

// Individual tests
testConsentSystem.testBanner()        // Test consent banner
testConsentSystem.testScripts()       // Test script loading
testConsentSystem.testModal()         // Test cookie modal
testConsentSystem.testFooter()        // Test footer links
testConsentSystem.testPersistence()   // Test consent persistence
testConsentSystem.testPrivacy()       // Test privacy policy
testConsentSystem.testAnalytics()     // Test analytics consent checks

// Utility functions
testConsentSystem.clearConsent()      // Clear consent from localStorage
testConsentSystem.getConsent()        // Get current consent state
testConsentSystem.results()           // Get test results object
```

### Test Results

The test script provides results in three categories:
- **Passed:** Tests that succeeded
- **Failed:** Tests that failed
- **Warnings:** Tests that couldn't complete or have issues

Results are logged to console with color coding:
- 🟢 Green = Pass
- 🔴 Red = Fail
- 🟡 Yellow = Warning

## Common Issues & Solutions

### Issue: Banner doesn't appear
**Solution:**
```javascript
// Clear consent
localStorage.removeItem('kahana_consent_preferences');
location.reload();
```

### Issue: Scripts load even without consent
**Solution:**
- Check that scripts in `_document.js` are removed
- Verify scripts in `_app.js` are gated by consent checks
- Check browser cache - hard refresh (Ctrl+Shift+R)

### Issue: Modal doesn't open
**Solution:**
- Check browser console for errors
- Verify ConsentProvider is wrapping the app
- Check that Footer is using consent context correctly

### Issue: Tests show warnings
**Solution:**
- Some tests require specific page states
- Run tests after accepting/declining consent
- Check that all components are loaded

## Browser Compatibility Testing

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Chrome
- [ ] Mobile Safari

## Performance Testing

- [ ] Page load time with consent system
- [ ] Script loading time after consent
- [ ] Modal open/close performance
- [ ] Banner animation smoothness

## Accessibility Testing

- [ ] Keyboard navigation works
- [ ] Screen reader announces banner
- [ ] Focus management in modal
- [ ] Color contrast meets WCAG AA
- [ ] ARIA labels present

## Next Steps After Testing

1. **Fix any issues** found during testing
2. **Document test results** for legal review
3. **Get stakeholder approval** before production
4. **Deploy to staging** for final validation
5. **Monitor** after production deployment

## Test Report Template

```
Date: [Date]
Tester: [Name]
Environment: [Local/Staging/Production]
Browser: [Browser + Version]

Results:
- Banner: ✅ Pass / ❌ Fail
- Script Loading: ✅ Pass / ❌ Fail
- Modal: ✅ Pass / ❌ Fail
- Footer Links: ✅ Pass / ❌ Fail
- Persistence: ✅ Pass / ❌ Fail
- California Detection: ✅ Pass / ❌ Fail

Issues Found:
1. [Issue description]
2. [Issue description]

Notes:
[Any additional observations]
```

