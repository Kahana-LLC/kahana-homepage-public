#!/usr/bin/env node

/**
 * Simple OAuth Callback Test
 * Tests the essential functionality of the OAuth callback page
 */

const http = require('http');

async function testOAuthCallback() {
  console.log('🧪 Testing OAuth Callback Page\n');
  
  const testCases = [
    {
      name: 'Basic OAuth Callback',
      url: '/oauth-callback',
      shouldContain: ['Kahana', 'OAuth Callback', 'Processing authentication']
    },
    {
      name: 'OAuth with Access Token',
      url: '/oauth-callback?access_token=test123&token_type=Bearer',
      shouldContain: ['Kahana', 'OAuth Callback', 'Processing authentication']
    },
    {
      name: 'OAuth with Error',
      url: '/oauth-callback?error=access_denied&error_description=User%20denied%20access',
      shouldContain: ['Kahana', 'OAuth Callback', 'Processing authentication']
    }
  ];

  let passed = 0;
  let total = testCases.length;

  for (const testCase of testCases) {
    console.log(`📋 Testing: ${testCase.name}`);
    console.log(`   URL: ${testCase.url}`);
    
    try {
      const response = await makeRequest(testCase.url);
      
      if (response.statusCode !== 200) {
        console.log(`   ❌ HTTP Status: ${response.statusCode} (expected 200)`);
        continue;
      }
      
      console.log(`   ✅ HTTP Status: ${response.statusCode}`);
      
      // Check if all required content is present
      const contentChecks = testCase.shouldContain.map(item => ({
        item,
        found: response.body.includes(item)
      }));
      
      const allFound = contentChecks.every(check => check.found);
      
      if (allFound) {
        console.log(`   ✅ Content: All required elements found`);
        console.log(`   🎉 Test PASSED`);
        passed++;
      } else {
        console.log(`   ⚠️  Content: Some elements missing`);
        contentChecks.forEach(check => {
          if (!check.found) {
            console.log(`      - Missing: ${check.item}`);
          }
        });
        console.log(`   ❌ Test FAILED`);
      }
      
    } catch (error) {
      console.log(`   ❌ Request failed: ${error.message}`);
    }
    
    console.log('');
  }

  console.log('=' .repeat(50));
  console.log(`📊 Results: ${passed}/${total} tests passed`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! OAuth callback is working correctly.');
    console.log('\n🌐 You can now visit: http://localhost:3000/oauth-callback');
    console.log('   Try these URLs to see different states:');
    console.log('   • http://localhost:3000/oauth-callback?access_token=test123');
    console.log('   • http://localhost:3000/oauth-callback?error=access_denied');
  } else {
    console.log('⚠️  Some tests failed. Please check the implementation.');
  }
}

function makeRequest(path) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: path,
      method: 'GET'
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

// Run the test
testOAuthCallback().catch(console.error);
