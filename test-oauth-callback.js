#!/usr/bin/env node

/**
 * Test script for OAuth callback functionality
 * This script tests various OAuth scenarios to ensure the callback page works correctly
 */

const http = require('http');
const https = require('https');

// Test configurations
const TEST_CONFIG = {
  host: 'localhost',
  port: 3000,
  path: '/oauth-callback'
};

// Test scenarios
const TEST_SCENARIOS = [
  {
    name: 'Successful OAuth with access token',
    params: '?access_token=test123&token_type=Bearer&expires_in=3600',
    expectedStatus: 'loading' // Should show loading initially, then success
  },
  {
    name: 'OAuth with authorization code',
    params: '?code=abc123&state=xyz789',
    expectedStatus: 'loading' // Should show loading initially, then success
  },
  {
    name: 'OAuth error - access denied',
    params: '?error=access_denied&error_description=User%20denied%20access',
    expectedStatus: 'error' // Should show error state
  },
  {
    name: 'OAuth error - invalid request',
    params: '?error=invalid_request&error_description=Invalid%20request',
    expectedStatus: 'error' // Should show error state
  },
  {
    name: 'OAuth with hash parameters',
    params: '#access_token=hash123&token_type=Bearer',
    expectedStatus: 'loading' // Should show loading initially, then success
  },
  {
    name: 'No OAuth parameters',
    params: '',
    expectedStatus: 'error' // Should show error for missing parameters
  }
];

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: TEST_CONFIG.host,
      port: TEST_CONFIG.port,
      path: path,
      method: 'GET',
      headers: {
        'User-Agent': 'OAuth-Callback-Test/1.0'
      }
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        });
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.setTimeout(5000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });

    req.end();
  });
}

function checkHeaders(headers) {
  const requiredHeaders = [
    'cache-control',
    'pragma',
    'expires',
    'x-frame-options',
    'x-content-type-options',
    'referrer-policy',
    'x-robots-tag'
  ];

  const results = {};
  
  requiredHeaders.forEach(header => {
    results[header] = headers[header.toLowerCase()] !== undefined;
  });

  return results;
}

function checkContent(content, expectedStatus) {
  const checks = {
    hasKahanaLogo: content.includes('Kahana'),
    hasOasisBranding: content.includes('Oasis Browser Assistant'),
    hasLoadingState: content.includes('Authenticating...'),
    hasErrorState: content.includes('Authentication Failed') || content.includes('error-state'),
    hasSuccessState: content.includes('Authentication Successful') || content.includes('success-state'),
    hasProperTitle: content.includes('OAuth Authentication - Kahana'),
    hasNoIndexMeta: content.includes('noindex, nofollow'),
    hasNoCacheMeta: content.includes('no-cache, no-store, must-revalidate'),
    hasOAuthHandler: content.includes('OAuthCallbackHandler'),
    hasPostMessage: content.includes('postMessage'),
    hasSecurityChecks: content.includes('chrome://browser/content/assistant/assistant.xhtml')
  };

  return checks;
}

async function runTests() {
  console.log('🧪 Starting OAuth Callback Tests\n');
  console.log('=' .repeat(60));

  let passedTests = 0;
  let totalTests = TEST_SCENARIOS.length;

  for (const scenario of TEST_SCENARIOS) {
    console.log(`\n📋 Testing: ${scenario.name}`);
    console.log(`   URL: ${TEST_CONFIG.path}${scenario.params}`);
    
    try {
      const response = await makeRequest(`${TEST_CONFIG.path}${scenario.params}`);
      
      // Check HTTP status
      if (response.statusCode !== 200) {
        console.log(`   ❌ HTTP Status: ${response.statusCode} (expected 200)`);
        continue;
      }
      console.log(`   ✅ HTTP Status: ${response.statusCode}`);

      // Check headers
      const headerResults = checkHeaders(response.headers);
      const headerPassed = Object.values(headerResults).every(Boolean);
      
      if (headerPassed) {
        console.log(`   ✅ Security Headers: All present`);
      } else {
        console.log(`   ⚠️  Security Headers: Some missing`);
        Object.entries(headerResults).forEach(([header, present]) => {
          if (!present) {
            console.log(`      - Missing: ${header}`);
          }
        });
      }

      // Check content
      const contentResults = checkContent(response.body, scenario.expectedStatus);
      const contentPassed = Object.values(contentResults).every(Boolean);
      
      if (contentPassed) {
        console.log(`   ✅ Content: All checks passed`);
      } else {
        console.log(`   ⚠️  Content: Some checks failed`);
        Object.entries(contentResults).forEach(([check, passed]) => {
          if (!passed) {
            console.log(`      - Failed: ${check}`);
          }
        });
      }

      // Overall test result
      if (response.statusCode === 200 && headerPassed && contentPassed) {
        console.log(`   🎉 Test PASSED`);
        passedTests++;
      } else {
        console.log(`   ❌ Test FAILED`);
      }

    } catch (error) {
      console.log(`   ❌ Request failed: ${error.message}`);
    }
  }

  console.log('\n' + '=' .repeat(60));
  console.log(`\n📊 Test Results: ${passedTests}/${totalTests} tests passed`);
  
  if (passedTests === totalTests) {
    console.log('🎉 All tests passed! OAuth callback is working correctly.');
    process.exit(0);
  } else {
    console.log('⚠️  Some tests failed. Please check the implementation.');
    process.exit(1);
  }
}

// Check if server is running
async function checkServer() {
  try {
    await makeRequest('/');
    return true;
  } catch (error) {
    return false;
  }
}

async function main() {
  console.log('🔍 Checking if development server is running...');
  
  const serverRunning = await checkServer();
  
  if (!serverRunning) {
    console.log('❌ Development server is not running.');
    console.log('   Please start it with: npm run dev');
    process.exit(1);
  }
  
  console.log('✅ Development server is running.');
  await runTests();
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { runTests, checkServer };
