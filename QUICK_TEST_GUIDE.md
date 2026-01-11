# Quick Test Guide - CIPA Consent System

## ✅ Automated Tests: PASSED

All 41 automated validation checks have passed!

## 🚀 Browser Testing (Required)

The dev server should be starting. Once it's ready:

### Option 1: Browser Console Test (Fastest)

1. **Open:** http://localhost:3000
2. **Open Console:** Press `F12` or `Cmd+Option+J` (Mac) / `Ctrl+Shift+J` (Windows)
3. **Load Test Script:**
   ```javascript
   fetch('/scripts/test-consent-system.js')
     .then(r => r.text())
     .then(eval);
   ```
4. **Clear Consent & Test:**
   ```javascript
   // Clear consent
   testConsentSystem.clearConsent();
   location.reload();
   
   // After page reloads, wait 2 seconds then run:
   setTimeout(() => {
     testConsentSystem.runAll();
   }, 2000);
   ```

### Option 2: Test Page (Easiest)

1. **Navigate to:** http://localhost:3000/test-consent.html
2. **Click:** "Load Test Script"
3. **Click:** "Run All Tests" or individual test buttons
4. **View results** in the page and console

### Option 3: Manual Quick Test

1. **Open:** http://localhost:3000
2. **Open Console:** `F12`
3. **Clear consent:**
   ```javascript
   localStorage.removeItem('kahana_consent_preferences');
   location.reload();
   ```
4. **Verify:**
   - ✅ Banner appears at bottom
   - ✅ Has "Accept All", "Decline All", "Manage Preferences" buttons
   - ✅ Click "Accept All" → Banner disappears
   - ✅ Check Network tab → Scripts should load
   - ✅ Reload page → Banner should NOT appear
   - ✅ Scroll to footer → "Cookie Settings" link exists
   - ✅ Click "Cookie Settings" → Modal opens

## 📊 Expected Test Results

When you run `testConsentSystem.runAll()`, you should see:

- ✅ Consent banner appears on first visit
- ✅ Accept/Decline buttons exist and are visible
- ✅ Footer links exist
- ✅ Consent persists in localStorage
- ✅ Privacy policy has required sections

## 🔍 What to Check

### Network Tab (DevTools)
- **Before consent:** No requests to:
  - `googletagmanager.com`
  - `hotjar.com`
  - `getwarmly.com`
  - `adsbygoogle`
  
- **After accepting analytics:** Should see:
  - `googletagmanager.com/gtag/js`
  - `hotjar.com` requests

- **After accepting marketing:** Should see:
  - `getwarmly.com` requests

### Console
- Should see: `Script [name] loaded with [category] consent`
- Should NOT see errors related to consent

### localStorage
```javascript
// Check consent state
JSON.parse(localStorage.getItem('kahana_consent_preferences'))
```

Should show:
```json
{
  "strictlyNecessary": true,
  "analytics": true/false,
  "advertising": true/false,
  "marketing": true/false,
  "timestamp": "...",
  "region": "CA" or null
}
```

## 🐛 Troubleshooting

**Banner doesn't appear:**
```javascript
localStorage.removeItem('kahana_consent_preferences');
location.reload();
```

**Scripts load without consent:**
- Check Network tab - should be empty before consent
- Verify `_document.js` doesn't have unconditional scripts
- Hard refresh: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)

**Modal doesn't open:**
- Check console for errors
- Verify ConsentProvider is wrapping app
- Try clicking footer link directly

## ✅ Test Checklist

- [ ] Banner appears on first visit
- [ ] Accept All works
- [ ] Decline All works
- [ ] Manage Preferences opens modal
- [ ] Modal toggles work
- [ ] Save Preferences works
- [ ] Footer links work
- [ ] Consent persists after reload
- [ ] Scripts only load with consent
- [ ] Privacy policy has new sections

## 📝 Test Results Template

```
Date: ___________
Browser: ___________
Version: ___________

Results:
✅ Banner: Pass / ❌ Fail
✅ Script Loading: Pass / ❌ Fail  
✅ Modal: Pass / ❌ Fail
✅ Footer: Pass / ❌ Fail
✅ Persistence: Pass / ❌ Fail

Issues:
1. ___________
2. ___________

Notes:
___________
```

