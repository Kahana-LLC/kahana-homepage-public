import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function OAuthCallback() {
  const [status, setStatus] = useState('loading');
  const [statusMessage, setStatusMessage] = useState('Processing authentication...');
  const [details, setDetails] = useState('');
  const [showRetry, setShowRetry] = useState(false);

  useEffect(() => {
    processOAuthCallback();
  }, []);

  const processOAuthCallback = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    
    // Check for error in URL params or hash
    const error = urlParams.get('error') || hashParams.get('error');
    const errorDescription = urlParams.get('error_description') || hashParams.get('error_description');
    
    // Check for success parameters
    const accessToken = urlParams.get('access_token') || hashParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token') || hashParams.get('refresh_token');
    const code = urlParams.get('code') || hashParams.get('code');
    const state = urlParams.get('state') || hashParams.get('state');
    
    console.log('OAuth callback received:', {
      error, errorDescription, accessToken, refreshToken, code, state,
      url: window.location.href
    });
    
    if (error) {
      // Handle OAuth error
      setStatus('error');
      setStatusMessage('Authentication Failed');
      setDetails(`Error: ${error}${errorDescription ? `\nDescription: ${errorDescription}` : ''}`);
      setShowRetry(true);
      
      // Store error in localStorage for the assistant to pick up
      if (typeof window !== 'undefined') {
        localStorage.setItem('oasis_auth_error', JSON.stringify({
          error: error,
          description: errorDescription,
          timestamp: Date.now(),
          source: 'kahana-callback'
        }));
        
        // Also try to send error message to parent window
        try {
          if (window.opener) {
            window.opener.postMessage({
              type: 'oasis_auth_error',
              data: { error, description: errorDescription }
            }, '*');
          }
        } catch (e) {
          console.log('Could not send error message to parent:', e);
        }
      }
      
    } else if (code || accessToken) {
      // Success - we have authorization code or tokens
      setStatus('success');
      setStatusMessage('Authentication Successful!');
      
      // Check if there's a pending Stripe checkout URL
      const pendingCheckout = sessionStorage.getItem('pendingStripeCheckout');
      
      if (pendingCheckout) {
        // Clear the stored checkout URL
        sessionStorage.removeItem('pendingStripeCheckout');
        // Redirect to Stripe checkout
        setDetails('Redirecting to checkout...');
        setTimeout(() => {
          window.location.href = pendingCheckout;
        }, 1000);
        return;
      }
      
      setDetails('Redirecting to Oasis Browser...');
      
      // Store auth data in localStorage for the assistant to pick up
      const authData = {
        code: code,
        access_token: accessToken,
        refresh_token: refreshToken,
        state: state,
        timestamp: Date.now(),
        source: 'kahana-callback',
        url: window.location.href
      };
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('oasis_auth_callback', JSON.stringify(authData));
        
        // Also try to send success message to parent window
        try {
          if (window.opener) {
            window.opener.postMessage({
              type: 'oasis_auth_success',
              data: authData
            }, '*');
          }
        } catch (e) {
          console.log('Could not send success message to parent:', e);
        }
        
        // Redirect to your browser after a short delay
        setTimeout(() => {
          try {
            window.location.href = 'chrome://browser/content/assistant/assistant.xhtml';
          } catch (e) {
            setDetails('Please return to the Oasis Browser assistant manually.');
          }
        }, 2000);
      }
      
    } else {
      // No auth parameters found
      setStatus('info');
      setStatusMessage('No Authentication Data');
      setDetails('This page is used for OAuth callbacks from Google.\nIf you reached this page by mistake, please return to the Oasis Browser.');
      setShowRetry(true);
    }
  };

  const retryAuth = () => {
    // Clear any existing auth data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('oasis_auth_callback');
      localStorage.removeItem('oasis_auth_error');
      
      // Redirect back to the assistant
      try {
        window.location.href = 'chrome://browser/content/assistant/assistant.xhtml';
      } catch (e) {
        alert('Please return to the Oasis Browser assistant manually.');
      }
    }
  };

  return (
    <>
      <Head>
        <title>OAuth Callback - Kahana</title>
        <meta name="description" content="OAuth callback for Kahana Oasis Browser" />
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>

      <div className="oauth-container">
        <div className="container">
          <div className="logo">K</div>
          <div id="status" className={`status ${status}`}>
            {statusMessage}
          </div>
          {details && (
            <div id="details" className="details">
              {details.split('\n').map((line, index) => (
                <div key={index}>
                  {line}
                  {index < details.split('\n').length - 1 && <br />}
                </div>
              ))}
            </div>
          )}
          {showRetry && (
            <button 
              id="retryBtn" 
              className="button" 
              onClick={retryAuth}
            >
              Try Again
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .oauth-container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          color: white;
        }
        
        .container {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 2rem;
          border-radius: 1rem;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          max-width: 500px;
          width: 90%;
        }
        
        .logo {
          width: 60px;
          height: 60px;
          background: #10b981;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 24px;
          font-weight: bold;
          color: white;
        }
        
        .status {
          font-size: 1.1rem;
          margin-bottom: 1rem;
        }
        
        .status.loading {
          color: #74c0fc;
          font-weight: 500;
        }
        
        .status.success {
          color: #51cf66;
          font-weight: 600;
        }
        
        .status.error {
          color: #ff6b6b;
          font-weight: 600;
        }
        
        .status.info {
          color: #74c0fc;
          font-weight: 500;
        }
        
        .details {
          margin-top: 1rem;
          font-size: 0.9rem;
          opacity: 0.8;
          word-break: break-all;
          line-height: 1.4;
        }
        
        .button {
          background: #10b981;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          margin-top: 1rem;
          transition: background-color 0.2s;
        }
        
        .button:hover {
          background: #059669;
        }
        
        .button:disabled {
          background: #6b7280;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}

// Configure headers for this page
export async function getServerSideProps(context) {
  // Set headers to prevent caching and ensure proper CORS
  context.res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  context.res.setHeader('Pragma', 'no-cache');
  context.res.setHeader('Expires', '0');
  context.res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  context.res.setHeader('X-Content-Type-Options', 'nosniff');
  context.res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  return {
    props: {},
  };
}
