import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function OAuthCallback() {
  const [status, setStatus] = useState('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Parse OAuth parameters from URL hash
    const params = {};
    if (window.location.hash) {
        window.location.hash.substring(1).split('&').forEach(part => {
            const [key, value] = part.split('=');
            if (key && value) {
                params[key] = decodeURIComponent(value);
            }
        });
    }

    // If we have an access token, send it back to the assistant
    if (params.access_token) {
        const authData = {
            success: true,
            timestamp: Date.now(),
            access_token: params.access_token,
            refresh_token: params.refresh_token,
            expires_in: params.expires_in,
            token_type: params.token_type,
            url: window.location.href
        };
        
        // Send to the assistant
        if (window.opener) {
            window.opener.postMessage({
                type: 'oauth-success',
                data: authData
            }, 'chrome://browser/content/assistant/assistant.xhtml');
            console.log('Sent OAuth success message to assistant');
        }
        
        // Show success state
        setStatus('success');
        
        // Close the window
        setTimeout(() => {
            window.close();
        }, 1000);
    } else {
        // Check for error parameters
        const urlParams = new URLSearchParams(window.location.search);
        const error = urlParams.get('error');
        const errorDescription = urlParams.get('error_description');
        
        if (error) {
            setStatus('error');
            setErrorMessage(errorDescription || error);
        } else {
            setStatus('error');
            setErrorMessage('No authentication data found in URL');
        }
    }
  }, []);

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <>
      <Head>
        <title>OAuth Authentication - Kahana</title>
        <meta name="description" content="Completing OAuth authentication for Kahana Oasis Browser" />
        <meta name="robots" content="noindex, nofollow" />
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>

      <div className="gradient-bg min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          {/* Main Card */}
          <div className="glass-effect rounded-2xl shadow-2xl p-8 text-center fade-in">
            {/* Kahana Logo */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold kahana-logo mb-2">Kahana</h1>
              <p className="text-gray-600 text-sm">Oasis Browser Assistant</p>
            </div>
            
            {/* Status Container */}
            <div>
              {/* Loading State */}
              {status === 'loading' && (
                <div className="flex flex-col items-center">
                  <div className="loading-spinner mb-4"></div>
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">Authenticating...</h2>
                  <p className="text-gray-600 text-sm">Please wait while we complete your authentication.</p>
                </div>
              )}
              
              {/* Success State */}
              {status === 'success' && (
                <div className="flex flex-col items-center">
                  <div className="success-checkmark mb-4"></div>
                  <h2 className="text-xl font-semibold text-green-600 mb-2">Authentication Successful!</h2>
                  <p className="text-gray-600 text-sm mb-4">Your account has been connected successfully.</p>
                  <p className="text-xs text-gray-500">This window will close automatically...</p>
                </div>
              )}
              
              {/* Error State */}
              {status === 'error' && (
                <div className="flex flex-col items-center">
                  <div className="error-icon mb-4"></div>
                  <h2 className="text-xl font-semibold text-red-600 mb-2">Authentication Failed</h2>
                  <p className="text-gray-600 text-sm mb-4">{errorMessage}</p>
                  <button 
                    onClick={handleRetry}
                    className="bg-kahana-primary hover:bg-kahana-primary-dark text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              © 2025 Kahana Group Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .gradient-bg {
          background: linear-gradient(135deg, #f0fdfa 0%, #e0f2fe 50%, #f0f9ff 100%);
        }
        
        .kahana-logo {
          background: linear-gradient(135deg, #0d9488 0%, #0ea5e9 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .loading-spinner {
          border: 3px solid #f3f4f6;
          border-top: 3px solid #0d9488;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          animation: spin 1s linear infinite;
        }
        
        .success-checkmark {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #10b981;
          position: relative;
          animation: scaleIn 0.3s ease-out;
        }
        
        .success-checkmark::after {
          content: '';
          position: absolute;
          left: 18px;
          top: 28px;
          width: 12px;
          height: 6px;
          border: solid white;
          border-width: 0 0 3px 3px;
          transform: rotate(-45deg);
        }
        
        .error-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #ef4444;
          position: relative;
          animation: scaleIn 0.3s ease-out;
        }
        
        .error-icon::after {
          content: '×';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: white;
          font-size: 30px;
          font-weight: bold;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.18);
        }
        
        .fade-in {
          animation: fadeIn 0.5s ease-out;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes scaleIn {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }
        
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
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
