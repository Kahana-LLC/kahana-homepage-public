#!/usr/bin/env node

/**
 * Validation script for CIPA Consent Implementation
 * Checks that all required files exist and have correct structure
 */

const fs = require('fs');
const path = require('path');

const results = {
  passed: [],
  failed: [],
  warnings: []
};

function log(message, type = 'info') {
  const colors = {
    pass: '\x1b[32m✓\x1b[0m',
    fail: '\x1b[31m✗\x1b[0m',
    warn: '\x1b[33m⚠\x1b[0m',
    info: '\x1b[34mℹ\x1b[0m'
  };
  console.log(`${colors[type] || colors.info} ${message}`);
}

function assert(condition, message) {
  if (condition) {
    results.passed.push(message);
    log(message, 'pass');
    return true;
  } else {
    results.failed.push(message);
    log(message, 'fail');
    return false;
  }
}

function warn(message) {
  results.warnings.push(message);
  log(message, 'warn');
}

// Required files
const requiredFiles = [
  'contexts/ConsentContext.jsx',
  'components/ConsentBanner.jsx',
  'components/CookiePreferencesModal.jsx',
  'components/ConsentErrorBoundary.jsx',
  'utils/scriptLoader.js',
  'pages/_app.js',
  'pages/_document.js',
  'components/Footer.jsx',
  'utils/analytics.js',
  'pages/privacy-policy.jsx'
];

// Files that should contain specific strings
const fileChecks = {
  'contexts/ConsentContext.jsx': [
    'ConsentProvider',
    'useConsent',
    'localStorage',
    'kahana_consent_preferences',
    'strictlyNecessary',
    'analytics',
    'advertising',
    'marketing'
  ],
  'components/ConsentBanner.jsx': [
    'Accept All',
    'Decline All',
    'Manage Preferences',
    'useConsent'
  ],
  'components/CookiePreferencesModal.jsx': [
    'Cookie Preferences',
    'analytics',
    'advertising',
    'marketing',
    'Save Preferences'
  ],
  'pages/_app.js': [
    'ConsentProvider',
    'ConsentBanner',
    'CookiePreferencesModal',
    'hasConsent'
  ],
  'pages/_document.js': [
    // Should NOT have unconditional script loading
  ],
  'components/Footer.jsx': [
    'Cookie Settings',
    'Do Not Sell'
  ],
  'utils/analytics.js': [
    'hasAnalyticsConsent',
    'kahana_consent_preferences'
  ],
  'pages/privacy-policy.jsx': [
    'Cookies, Pixels, and Similar Technologies',
    'California',
    'Cookie Settings'
  ]
};

console.log('\n🔍 Validating CIPA Consent Implementation...\n');

// Check if files exist
console.log('📁 Checking required files...\n');
requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    assert(true, `File exists: ${file}`);
  } else {
    assert(false, `File missing: ${file}`);
  }
});

// Check file contents
console.log('\n📄 Checking file contents...\n');
Object.keys(fileChecks).forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const requiredStrings = fileChecks[file];
    
    if (requiredStrings.length === 0) {
      // Check for things that should NOT be present
      if (file === 'pages/_document.js') {
        const hasUnconditionalScripts = 
          content.includes('gtag/js?id=G-KQHFL9605P') && 
          !content.includes('Note: Analytics scripts');
        if (hasUnconditionalScripts) {
          warn(`${file}: May still have unconditional script loading`);
        } else {
          assert(true, `${file}: No unconditional script loading found`);
        }
      }
    } else {
      requiredStrings.forEach(str => {
        if (content.includes(str)) {
          assert(true, `${file}: Contains "${str}"`);
        } else {
          assert(false, `${file}: Missing "${str}"`);
        }
      });
    }
  }
});

// Check for common issues
console.log('\n🔧 Checking for common issues...\n');

// Check _app.js has ConsentProvider wrapping
const appPath = path.join(process.cwd(), 'pages/_app.js');
if (fs.existsSync(appPath)) {
  const appContent = fs.readFileSync(appPath, 'utf8');
  if (appContent.includes('<ConsentProvider>') && appContent.includes('</ConsentProvider>')) {
    assert(true, '_app.js: ConsentProvider wraps the app');
  } else {
    assert(false, '_app.js: ConsentProvider may not be wrapping the app correctly');
  }
}

// Check analytics.js has consent checks
const analyticsPath = path.join(process.cwd(), 'utils/analytics.js');
if (fs.existsSync(analyticsPath)) {
  const analyticsContent = fs.readFileSync(analyticsPath, 'utf8');
  if (analyticsContent.includes('hasAnalyticsConsent') && analyticsContent.includes('if (!hasAnalyticsConsent')) {
    assert(true, 'analytics.js: Has consent checks before tracking');
  } else {
    warn('analytics.js: May not have proper consent checks');
  }
}

// Summary
console.log('\n📊 Validation Summary\n');
console.log(`✅ Passed: ${results.passed.length}`);
console.log(`❌ Failed: ${results.failed.length}`);
console.log(`⚠️  Warnings: ${results.warnings.length}\n`);

if (results.failed.length > 0) {
  console.log('❌ Failed Checks:');
  results.failed.forEach(msg => console.log(`   - ${msg}`));
  console.log('');
}

if (results.warnings.length > 0) {
  console.log('⚠️  Warnings:');
  results.warnings.forEach(msg => console.log(`   - ${msg}`));
  console.log('');
}

if (results.failed.length === 0) {
  console.log('✅ All critical checks passed!\n');
  console.log('Next steps:');
  console.log('1. Start your development server');
  console.log('2. Open http://localhost:3000 in a browser');
  console.log('3. Open browser console (F12)');
  console.log('4. Load and run the test script (see TESTING_INSTRUCTIONS.md)');
  process.exit(0);
} else {
  console.log('❌ Some checks failed. Please review and fix the issues above.\n');
  process.exit(1);
}

