// Browser Console Test Script for OAuth Callback
// Copy and paste this into your browser's developer console

console.log('🧪 OAuth Callback Functionality Test');
console.log('=====================================');

// 1. Test localStorage monitoring
console.log('\n1. Testing localStorage monitoring...');

// Override localStorage.setItem to log OAuth-related changes
const originalSetItem = localStorage.setItem;
localStorage.setItem = function(key, value) {
    originalSetItem.call(this, key, value);
    if (key.includes('oasis_auth') || key.includes('oauth')) {
        console.log('✅ localStorage SET:', key, JSON.parse(value));
    }
};

// Override localStorage.removeItem
const originalRemoveItem = localStorage.removeItem;
localStorage.removeItem = function(key) {
    originalRemoveItem.call(this, key);
    if (key.includes('oasis_auth') || key.includes('oauth')) {
        console.log('🗑️ localStorage REMOVE:', key);
    }
};

// 2. Test PostMessage monitoring
console.log('\n2. Testing PostMessage monitoring...');

window.addEventListener('message', function(event) {
    if (event.data && (
        event.data.type === 'oasis_auth_success' || 
        event.data.type === 'oasis_auth_error' ||
        event.data.type === 'oauth-success' ||
        event.data.type === 'oauth_callback'
    )) {
        console.log('📨 PostMessage received:', {
            origin: event.origin,
            data: event.data
        });
    }
});

// 3. Check current localStorage
console.log('\n3. Current localStorage contents:');
const authKeys = Object.keys(localStorage).filter(key => 
    key.includes('oasis_auth') || key.includes('oauth')
);

if (authKeys.length === 0) {
    console.log('❌ No OAuth-related localStorage items found');
} else {
    authKeys.forEach(key => {
        try {
            const value = JSON.parse(localStorage.getItem(key));
            console.log(`✅ ${key}:`, value);
        } catch (e) {
            console.log(`✅ ${key}:`, localStorage.getItem(key));
        }
    });
}

// 4. Test functions
console.log('\n4. Test functions available:');
console.log('- testOAuthCallback(type) - Test different OAuth scenarios');
console.log('- clearOAuthStorage() - Clear OAuth localStorage');
console.log('- simulateOAuthSuccess() - Simulate successful OAuth');
console.log('- simulateOAuthError() - Simulate OAuth error');

// Test function definitions
window.testOAuthCallback = function(type) {
    const baseUrl = 'https://kahana-apple-pitch-100f3852f92e.herokuapp.com';
    let url;
    
    switch(type) {
        case 'success':
            url = `${baseUrl}/oauth-callback?access_token=test123&token_type=Bearer&expires_in=3600`;
            break;
        case 'error':
            url = `${baseUrl}/oauth-callback?error=access_denied&error_description=User%20denied%20access`;
            break;
        case 'hash':
            url = `${baseUrl}/oauth-callback#access_token=hash123&token_type=Bearer`;
            break;
        default:
            url = `${baseUrl}/oauth-callback`;
    }
    
    console.log(`🌐 Opening: ${url}`);
    window.open(url, '_blank', 'width=600,height=400');
};

window.clearOAuthStorage = function() {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
        if (key.includes('oasis_auth') || key.includes('oauth')) {
            localStorage.removeItem(key);
            console.log(`🗑️ Removed: ${key}`);
        }
    });
    console.log('✅ OAuth localStorage cleared');
};

window.simulateOAuthSuccess = function() {
    const authData = {
        code: 'test_code_123',
        access_token: 'test_access_token',
        refresh_token: 'test_refresh_token',
        state: 'test_state',
        timestamp: Date.now(),
        source: 'test-simulation',
        url: window.location.href
    };
    
    localStorage.setItem('oasis_auth_callback', JSON.stringify(authData));
    console.log('✅ Simulated OAuth success data stored');
};

window.simulateOAuthError = function() {
    const errorData = {
        error: 'access_denied',
        description: 'User denied access',
        timestamp: Date.now(),
        source: 'test-simulation'
    };
    
    localStorage.setItem('oasis_auth_error', JSON.stringify(errorData));
    console.log('✅ Simulated OAuth error data stored');
};

console.log('\n🎯 Ready for testing! Try:');
console.log('- testOAuthCallback("success")');
console.log('- testOAuthCallback("error")');
console.log('- simulateOAuthSuccess()');
console.log('- simulateOAuthError()');
