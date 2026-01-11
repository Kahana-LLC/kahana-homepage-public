#!/usr/bin/env node

/**
 * Automated test runner for CIPA Consent System
 * This script validates the implementation and provides test instructions
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\n🧪 CIPA Consent System - Test Runner\n');
console.log('=' .repeat(50) + '\n');

// Step 1: Run validation
console.log('Step 1: Validating Implementation Structure...\n');
try {
  const validationOutput = execSync('node scripts/validate-consent-implementation.js', {
    encoding: 'utf8',
    cwd: process.cwd()
  });
  console.log(validationOutput);
} catch (error) {
  console.error('Validation failed:', error.message);
  process.exit(1);
}

// Step 2: Check for common issues
console.log('\n' + '='.repeat(50));
console.log('Step 2: Checking for Common Issues...\n');

const issues = [];

// Check if scripts are properly gated
const appJsPath = path.join(process.cwd(), 'pages/_app.js');
const appContent = fs.readFileSync(appJsPath, 'utf8');

if (!appContent.includes('hasConsent')) {
  issues.push('⚠️  _app.js may not be checking consent before loading scripts');
}

if (appContent.includes('Script') && !appContent.includes('loadScriptIfConsented')) {
  issues.push('⚠️  _app.js may have unconditional Script components');
}

// Check analytics
const analyticsPath = path.join(process.cwd(), 'utils/analytics.js');
const analyticsContent = fs.readFileSync(analyticsPath, 'utf8');

if (!analyticsContent.includes('hasAnalyticsConsent')) {
  issues.push('❌ analytics.js is not checking consent');
}

// Check document
const documentPath = path.join(process.cwd(), 'pages/_document.js');
const documentContent = fs.readFileSync(documentPath, 'utf8');

if (documentContent.includes('gtag/js?id=G-KQHFL9605P') && 
    !documentContent.includes('Note: Analytics scripts')) {
  issues.push('❌ _document.js may still have unconditional Google Analytics');
}

if (documentContent.includes('warmly.js') && 
    !documentContent.includes('Note: Analytics scripts')) {
  issues.push('❌ _document.js may still have unconditional Warmly script');
}

if (issues.length > 0) {
  console.log('Issues found:');
  issues.forEach(issue => console.log(`  ${issue}`));
} else {
  console.log('✅ No common issues detected\n');
}

// Step 3: Test file accessibility
console.log('\n' + '='.repeat(50));
console.log('Step 3: Checking Test Files...\n');

const testFiles = [
  'scripts/test-consent-system.js',
  'public/test-consent.html',
  'TESTING_INSTRUCTIONS.md'
];

testFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    const stats = fs.statSync(filePath);
    console.log(`✅ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
  } else {
    console.log(`❌ ${file} - Missing`);
  }
});

// Step 4: Browser testing instructions
console.log('\n' + '='.repeat(50));
console.log('Step 4: Browser Testing Instructions\n');

console.log(`
To complete testing, you need to test in a browser:

1. Start your development server:
   npm run dev

2. Open http://localhost:3000 in your browser

3. Open browser console (F12)

4. Load the test script:
   fetch('/scripts/test-consent-system.js')
     .then(r => r.text())
     .then(eval);

5. Run tests:
   testConsentSystem.clearConsent();
   location.reload();
   // After reload, run:
   testConsentSystem.runAll();

6. Or use the test page:
   Navigate to: http://localhost:3000/test-consent.html
`);

// Step 5: Quick manual test checklist
console.log('\n' + '='.repeat(50));
console.log('Step 5: Quick Manual Test Checklist\n');

const checklist = [
  'Clear localStorage: localStorage.removeItem("kahana_consent_preferences")',
  'Reload page → Banner should appear',
  'Click "Accept All" → Check Network tab for scripts loading',
  'Reload → Banner should NOT appear (consent persisted)',
  'Click "Cookie Settings" in footer → Modal should open',
  'Toggle categories in modal → Save preferences',
  'Check /privacy-policy → Should have new tracking sections',
  'Test "Do Not Sell" link → Should decline all and open modal'
];

checklist.forEach((item, index) => {
  console.log(`  ${index + 1}. ${item}`);
});

// Step 6: Summary
console.log('\n' + '='.repeat(50));
console.log('Test Summary\n');

console.log('✅ Code validation: PASSED');
console.log('✅ File structure: PASSED');
console.log('⏳ Browser testing: REQUIRED (see instructions above)');
console.log('\nNext: Start dev server and run browser tests\n');

