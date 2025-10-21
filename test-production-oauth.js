#!/usr/bin/env node

const https = require('https');
const http = require('http');

// Test configuration
const BASE_URL = 'https://kahana.co';
const DEV_URL = 'https://kahana-apple-pitch-100f3852f92e.herokuapp.com';
const LOCAL_URL = 'http://localhost:3000';

// Test cases for OAuth callback
const testCases = [
  {
    name: 'Basic OAuth Callback',
    path: '/oauth-callback',
    expectedStatus: 200,
    expectedContent: ['Kahana', 'OAuth Callback', 'Processing authentication']
  },
  {
    name: 'OAuth with Access Token (URL params)',
    path: '/oauth-callback?access_token=test123&token_type=Bearer&expires_in=3600',
    expectedStatus: 200,
    expectedContent: ['Kahana', 'OAuth Callback', 'Processing authentication']
  },
  {
    name: 'OAuth with Authorization Code',
    path: '/oauth-callback?code=abc123&state=xyz789',
    expectedStatus: 200,
    expectedContent: ['Kahana', 'OAuth Callback', 'Processing authentication']
  },
  {
    name: 'OAuth with Error (Access Denied)',
    path: '/oauth-callback?error=access_denied&error_description=User%20denied%20access',
    expectedStatus: 200,
    expectedContent: ['Kahana', 'OAuth Callback', 'Processing authentication']
  },
  {
    name: 'OAuth with Error (Invalid Request)',
    path: '/oauth-callback?error=invalid_request&error_description=Invalid%20request',
    expectedStatus: 200,
    expectedContent: ['Kahana', 'OAuth Callback', 'Processing authentication']
  },
  {
    name: 'OAuth with Hash Parameters',
    path: '/oauth-callback#access_token=hash123&token_type=Bearer&expires_in=3600',
    expectedStatus: 200,
    expectedContent: ['Kahana', 'OAuth Callback', 'Processing authentication']
  }
];

// Function to make HTTP request
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    
    const req = client.get(url, (res) => {
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
    
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

// Function to check content
function checkContent(content, expectedContent) {
  const missing = [];
  const found = [];
  
  expectedContent.forEach(item => {
    if (content.includes(item)) {
      found.push(item);
    } else {
      missing.push(item);
    }
  });
  
  return { found, missing };
}

// Function to test a single URL
async function testUrl(baseUrl, testCase) {
  const url = baseUrl + testCase.path;
  
  try {
    console.log(`\n📋 Testing: ${testCase.name}`);
    console.log(`   URL: ${url}`);
    
    const response = await makeRequest(url);
    
    // Check status code
    const statusOk = response.statusCode === testCase.expectedStatus;
    console.log(`   ${statusOk ? '✅' : '❌'} HTTP Status: ${response.statusCode} (expected: ${testCase.expectedStatus})`);
    
    // Check security headers
    const securityHeaders = {
      'cache-control': response.headers['cache-control'],
      'x-frame-options': response.headers['x-frame-options'],
      'x-content-type-options': response.headers['x-content-type-options'],
      'x-robots-tag': response.headers['x-robots-tag']
    };
    
    console.log(`   🔒 Security Headers:`);
    Object.entries(securityHeaders).forEach(([key, value]) => {
      const hasValue = value && value.length > 0;
      console.log(`      ${hasValue ? '✅' : '❌'} ${key}: ${value || 'missing'}`);
    });
    
    // Check content
    const contentCheck = checkContent(response.body, testCase.expectedContent);
    const contentOk = contentCheck.missing.length === 0;
    
    console.log(`   ${contentOk ? '✅' : '⚠️'} Content: ${contentOk ? 'All required elements found' : 'Some elements missing'}`);
    if (contentCheck.missing.length > 0) {
      console.log(`      - Missing: ${contentCheck.missing.join(', ')}`);
    }
    if (contentCheck.found.length > 0) {
      console.log(`      - Found: ${contentCheck.found.join(', ')}`);
    }
    
    // Check for JavaScript functionality
    const hasOAuthHandler = response.body.includes('processOAuthCallback') || 
                           response.body.includes('localStorage.setItem') ||
                           response.body.includes('postMessage');
    console.log(`   ${hasOAuthHandler ? '✅' : '❌'} JavaScript: ${hasOAuthHandler ? 'OAuth handler present' : 'OAuth handler missing'}`);
    
    const result = {
      name: testCase.name,
      url: url,
      statusOk: statusOk,
      contentOk: contentOk,
      hasOAuthHandler: hasOAuthHandler,
      statusCode: response.statusCode,
      contentLength: response.body.length
    };
    
    if (statusOk && contentOk && hasOAuthHandler) {
      console.log(`   🎉 Test PASSED`);
    } else {
      console.log(`   ❌ Test FAILED`);
    }
    
    return result;
    
  } catch (error) {
    console.log(`   ❌ Test FAILED - Error: ${error.message}`);
    return {
      name: testCase.name,
      url: url,
      statusOk: false,
      contentOk: false,
      hasOAuthHandler: false,
      error: error.message
    };
  }
}

// Main test function
async function runTests() {
  console.log('🧪 Testing OAuth Callback Page - Production vs Local\n');
  
  const environments = [
    { name: 'Production', url: BASE_URL },
    { name: 'Development', url: DEV_URL },
    { name: 'Local', url: LOCAL_URL }
  ];
  
  for (const env of environments) {
    console.log(`\n🌐 Testing ${env.name} Environment (${env.url})`);
    console.log('='.repeat(60));
    
    let passed = 0;
    let total = testCases.length;
    
    for (const testCase of testCases) {
      const result = await testUrl(env.url, testCase);
      if (result.statusOk && result.contentOk && result.hasOAuthHandler) {
        passed++;
      }
    }
    
    console.log(`\n📊 ${env.name} Results: ${passed}/${total} tests passed`);
    if (passed === total) {
      console.log(`🎉 All tests passed! OAuth callback is working correctly.`);
    } else {
      console.log(`⚠️ Some tests failed. Please check the implementation.`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('🌐 URLs to test manually:');
  console.log('\n📋 Production:');
  testCases.forEach(testCase => {
    console.log(`   • ${BASE_URL}${testCase.path}`);
  });
  console.log('\n📋 Development:');
  testCases.forEach(testCase => {
    console.log(`   • ${DEV_URL}${testCase.path}`);
  });
  
  console.log('\n💡 Manual Testing Tips:');
  console.log('   1. Open each URL in a browser to see the visual design');
  console.log('   2. Check browser console for JavaScript errors');
  console.log('   3. Test with real OAuth parameters from Google');
  console.log('   4. Verify localStorage data is stored correctly');
  console.log('   5. Test postMessage communication with parent window');
}

// Run the tests
runTests().catch(console.error);
