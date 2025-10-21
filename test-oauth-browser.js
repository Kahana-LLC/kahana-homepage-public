#!/usr/bin/env node

const puppeteer = require('puppeteer');

async function testOAuthCallback() {
    console.log('🧪 Testing OAuth Callback with Puppeteer\n');
    
    const browser = await puppeteer.launch({ 
        headless: false, // Set to true for headless mode
        devtools: true   // Open devtools for debugging
    });
    
    try {
        const page = await browser.newPage();
        
        // Monitor console logs
        page.on('console', msg => {
            if (msg.text().includes('OAuth') || msg.text().includes('localStorage') || msg.text().includes('postMessage')) {
                console.log('📝 Console:', msg.text());
            }
        });
        
        // Test different OAuth scenarios
        const testCases = [
            {
                name: 'Basic OAuth Callback',
                url: 'https://kahana-apple-pitch-100f3852f92e.herokuapp.com/oauth-callback'
            },
            {
                name: 'OAuth Success with Access Token',
                url: 'https://kahana-apple-pitch-100f3852f92e.herokuapp.com/oauth-callback?access_token=test123&token_type=Bearer&expires_in=3600&refresh_token=refresh456'
            },
            {
                name: 'OAuth Success with Authorization Code',
                url: 'https://kahana-apple-pitch-100f3852f92e.herokuapp.com/oauth-callback?code=abc123&state=xyz789'
            },
            {
                name: 'OAuth Error',
                url: 'https://kahana-apple-pitch-100f3852f92e.herokuapp.com/oauth-callback?error=access_denied&error_description=User%20denied%20access'
            },
            {
                name: 'OAuth Success with Hash Parameters',
                url: 'https://kahana-apple-pitch-100f3852f92e.herokuapp.com/oauth-callback#access_token=hash123&token_type=Bearer&expires_in=3600'
            }
        ];
        
        for (const testCase of testCases) {
            console.log(`\n📋 Testing: ${testCase.name}`);
            console.log(`   URL: ${testCase.url}`);
            
            // Navigate to the OAuth callback page
            await page.goto(testCase.url, { waitUntil: 'networkidle0' });
            
            // Wait for the page to load and process OAuth parameters
            await page.waitForTimeout(2000);
            
            // Check localStorage for OAuth data
            const localStorageData = await page.evaluate(() => {
                const authKeys = Object.keys(localStorage).filter(key => 
                    key.includes('oasis_auth') || key.includes('oauth')
                );
                
                const result = {};
                authKeys.forEach(key => {
                    try {
                        result[key] = JSON.parse(localStorage.getItem(key));
                    } catch (e) {
                        result[key] = localStorage.getItem(key);
                    }
                });
                return result;
            });
            
            if (Object.keys(localStorageData).length > 0) {
                console.log('   ✅ localStorage data found:');
                Object.entries(localStorageData).forEach(([key, value]) => {
                    console.log(`      ${key}:`, JSON.stringify(value, null, 2));
                });
            } else {
                console.log('   ❌ No OAuth localStorage data found');
            }
            
            // Check for PostMessage events (we can't easily capture these in Puppeteer)
            // But we can check if the page is trying to send them
            const postMessageCode = await page.evaluate(() => {
                const scripts = Array.from(document.scripts);
                return scripts.some(script => 
                    script.textContent && script.textContent.includes('postMessage')
                );
            });
            
            if (postMessageCode) {
                console.log('   ✅ PostMessage code detected in page');
            } else {
                console.log('   ❌ No PostMessage code detected');
            }
            
            // Check page content
            const pageContent = await page.content();
            const hasOAuthHandler = pageContent.includes('processOAuthCallback') || 
                                  pageContent.includes('localStorage.setItem');
            
            if (hasOAuthHandler) {
                console.log('   ✅ OAuth handler code detected');
            } else {
                console.log('   ❌ No OAuth handler code detected');
            }
            
            // Wait a bit before next test
            await page.waitForTimeout(1000);
        }
        
        console.log('\n🎉 Testing complete!');
        console.log('\n💡 To test PostMessage functionality:');
        console.log('   1. Open the OAuth callback page in a popup window');
        console.log('   2. Use the parent window to listen for PostMessage events');
        console.log('   3. Check browser console for OAuth processing logs');
        
    } catch (error) {
        console.error('❌ Test failed:', error);
    } finally {
        // Keep browser open for manual inspection
        console.log('\n🔍 Browser will remain open for manual inspection...');
        console.log('   Close the browser window when done testing.');
        // await browser.close();
    }
}

// Check if puppeteer is available
try {
    require.resolve('puppeteer');
    testOAuthCallback();
} catch (e) {
    console.log('❌ Puppeteer not installed. Install it with:');
    console.log('   npm install puppeteer');
    console.log('\n📋 Alternative testing methods:');
    console.log('   1. Open test-oauth-functionality.html in your browser');
    console.log('   2. Use browser-console-test.js in developer console');
    console.log('   3. Manually test the OAuth callback URLs');
}
