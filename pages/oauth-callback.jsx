import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getSafeRedirectPath } from '@/utils/redirects';
import { createClient } from '@/utils/supabase';

const ASSISTANT_TRUE_VALUES = new Set([
  '1',
  'true',
  'yes',
  'assistant',
  'oasis-assistant',
  'firefox-assistant',
  'firefox-oasis-assistant',
]);

const ASSISTANT_CONTEXT_VALUES = new Set([
  'assistant',
  'oasis-assistant',
  'firefox-assistant',
  'firefox-oasis-assistant',
]);

function isAssistantCallback(urlParams) {
  const assistantFlag = urlParams.get('assistant') || urlParams.get('assistant_oauth');
  if (assistantFlag && ASSISTANT_TRUE_VALUES.has(assistantFlag.toLowerCase())) {
    return true;
  }

  const contextValue =
    urlParams.get('auth_context') ||
    urlParams.get('handoff') ||
    urlParams.get('flow') ||
    urlParams.get('source') ||
    urlParams.get('origin');

  return Boolean(contextValue && ASSISTANT_CONTEXT_VALUES.has(contextValue.toLowerCase()));
}

function getAssistantMarkerEntries(urlParams) {
  const preservedEntries = [];

  for (const [key, value] of urlParams.entries()) {
    const lowerKey = key.toLowerCase();
    const lowerValue = value.toLowerCase();
    const isAssistantKey =
      lowerKey === 'assistant' ||
      lowerKey === 'assistant_oauth' ||
      lowerKey === 'auth_context' ||
      lowerKey === 'handoff' ||
      lowerKey === 'flow' ||
      lowerKey === 'source' ||
      lowerKey === 'origin';

    const isAssistantValue =
      ASSISTANT_TRUE_VALUES.has(lowerValue) ||
      ASSISTANT_CONTEXT_VALUES.has(lowerValue);

    if (isAssistantKey && isAssistantValue) {
      preservedEntries.push([key, value]);
    }
  }

  return preservedEntries;
}

function scrubAssistantCallbackUrl(urlParams) {
  if (typeof window === 'undefined' || !window.history?.replaceState) {
    return;
  }

  const preservedParams = new URLSearchParams(getAssistantMarkerEntries(urlParams));
  const cleanSearch = preservedParams.toString();
  const cleanUrl = `${window.location.pathname}${cleanSearch ? `?${cleanSearch}` : ''}`;
  window.history.replaceState(null, '', cleanUrl);
}

export default function OAuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState('loading');
  const [statusMessage, setStatusMessage] = useState('Processing authentication...');
  const [details, setDetails] = useState('');
  const [showRetry, setShowRetry] = useState(false);
  const [assistantMode, setAssistantMode] = useState(false);
  const [handoffPayload, setHandoffPayload] = useState('');
  const [copyStatus, setCopyStatus] = useState('');

  const persistAuthError = useCallback((error, description) => {
    if (typeof window === 'undefined') return;

    localStorage.setItem('oasis_auth_error', JSON.stringify({
      error,
      description,
      timestamp: Date.now(),
      source: 'kahana-callback'
    }));
  }, []);

  const processOAuthCallback = useCallback(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const assistantCallback = isAssistantCallback(urlParams);
    const callbackUrl = window.location.href;
    const hash = window.location.hash.substring(1);
    const hashParams = new URLSearchParams(hash);

    setAssistantMode(assistantCallback);

    if (assistantCallback) {
      scrubAssistantCallbackUrl(urlParams);
    }
    
    // Check for error in URL params or hash
    const error = urlParams.get('error') || hashParams.get('error');
    const errorDescription = urlParams.get('error_description') || hashParams.get('error_description');
    
    // Check for success parameters
    const accessToken = urlParams.get('access_token') || hashParams.get('access_token');
    const refreshToken = urlParams.get('refresh_token') || hashParams.get('refresh_token');
    const code = urlParams.get('code') || hashParams.get('code');
    const state = urlParams.get('state') || hashParams.get('state');
    
    console.log('OAuth callback received:', {
      error, errorDescription, accessToken: accessToken ? 'present' : 'missing', refreshToken: refreshToken ? 'present' : 'missing', code, state,
      hashLength: hash.length,
      url: window.location.href
    });
    
    if (error) {
      // Handle OAuth error
      setStatus('error');
      setStatusMessage(assistantCallback ? 'Assistant Sign-In Failed' : 'Authentication Failed');
      setDetails(
        assistantCallback
          ? `OAuth could not be completed for Oasis Assistant.\nStart the sign-in flow again from the assistant.\nError: ${error}${errorDescription ? `\nDescription: ${errorDescription}` : ''}`
          : `Error: ${error}${errorDescription ? `\nDescription: ${errorDescription}` : ''}`
      );
      setShowRetry(!assistantCallback);
      
      // Store error in localStorage for the assistant to pick up
      persistAuthError(error, errorDescription);
      
    } else if (code || accessToken || hash.length === 0) {
      // Success - we have authorization code, tokens, or hash was already processed (empty hash)
      try {
        let supabase;
        try {
          supabase = createClient();
        } catch (clientError) {
          console.error('Failed to create Supabase client:', clientError);
          throw new Error(`Failed to initialize Supabase client. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set correctly in production.`);
        }
        
        let session = null;
        
        // If hash is empty (just #), Supabase has already processed it - just get the session
        if (hash.length === 0 || (!accessToken && !refreshToken)) {
          console.log('Hash is empty or no tokens in hash - Supabase should have already processed it');
          // Wait a moment for Supabase to finish processing
          await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        // If we have tokens in the hash, explicitly set the session
        if (accessToken && refreshToken) {
          try {
            console.log('Setting session explicitly with tokens from hash');
            // Set the session using the tokens from the hash
            const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            });
            
            if (sessionError) {
              console.error('Error setting session:', sessionError);
              if (sessionError.message?.includes('Invalid API key') || sessionError.message?.includes('JWT')) {
                throw new Error(`Supabase API key is invalid or incorrect. Error: ${sessionError.message}. Please verify NEXT_PUBLIC_SUPABASE_ANON_KEY is set correctly in Heroku config vars.`);
              }
              // Don't throw for other errors - fall through to try getSession
            } else if (sessionData?.session) {
              session = sessionData.session;
              console.log('Session set successfully from hash tokens');
            }
          } catch (setSessionError) {
            console.error('Error in setSession:', setSessionError);
            // If it's an API key error, throw it so user sees the real issue
            if (setSessionError.message?.includes('Invalid API key') || setSessionError.message?.includes('API key')) {
              throw setSessionError;
            }
            // Fall through to try getSession/getUser for other errors
          }
        }
        
        // Try getting the session (Supabase might have parsed hash automatically or hash was already processed)
        if (!session) {
          console.log('Getting session from Supabase...');
          const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
          if (sessionError) {
            console.error('Error getting session:', sessionError);
          } else if (sessionData?.session) {
            session = sessionData.session;
            console.log('Session retrieved successfully');
          } else {
            console.log('No session found in getSession');
          }
        }
        
        console.log('Getting user directly...');
        const { data: userData, error: userError } = await supabase.auth.getUser();
        if (userError) {
          console.error('Error getting user:', userError);
          throw new Error(`Auth session missing! ${userError.message || 'Failed to get user'}`);
        }
        const user = userData?.user;
        if (user) {
          console.log('User retrieved successfully');
        }
        
        if (!user) {
          throw new Error('Auth session missing! Failed to get user after OAuth callback');
        }
        
        const email = user.email || user.user_metadata?.email || user.user_metadata?.preferred_email;
        const fullName =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.user_metadata?.preferred_username ||
          '';

        if (!email) {
          const missingEmailMessage = 'Your account provider did not return an email address. Please try another sign-in method or contact support.';
          persistAuthError('missing_email', missingEmailMessage);
          setStatus('error');
          setStatusMessage(assistantCallback ? 'Assistant Sign-In Failed' : 'Authentication Error');
          setDetails(
            assistantCallback
              ? `OAuth could not be completed for Oasis Assistant.\nStart the sign-in flow again from the assistant.\nError: ${missingEmailMessage}`
              : missingEmailMessage
          );
          setShowRetry(!assistantCallback);
          return;
        }

        console.log('User authenticated:', email);

        // Create user profile via API
        try {
          const headers = { 'Content-Type': 'application/json' };
          if (session?.access_token) {
            headers.Authorization = `Bearer ${session.access_token}`;
          }

          const res = await fetch('/api/create-profile', {
            method: 'POST',
            headers,
            body: JSON.stringify({ 
              userId: user.id,
              email,
              fullName,
            }),
          });

          if (!res.ok) {
            const body = await res.json().catch(() => ({}));
            console.error('Failed to create profile:', body);
            // Don't throw - profile might already exist
          } else {
            console.log('Profile created/updated successfully');
          }
        } catch (profileError) {
          console.error('Error calling create-profile API:', profileError);
          // Don't throw - profile creation is not critical for OAuth flow
        }

        setStatus('success');
        setStatusMessage(assistantCallback ? 'Assistant Sign-In Ready' : 'Authentication Successful!');

        if (assistantCallback) {
          sessionStorage.removeItem('postAuthRedirect');
          sessionStorage.removeItem('pendingStripeCheckout');
          setHandoffPayload(callbackUrl);
          setDetails('OAuth succeeded. Copy the callback payload below, then return to Oasis Assistant to finish sign-in.\nThis payload is sensitive and grants access to the signed-in account. Do not share or store it anywhere else.');
          return;
        }

        const postAuthRedirect = getSafeRedirectPath(sessionStorage.getItem('postAuthRedirect'));
        const pendingCheckout = sessionStorage.getItem('pendingStripeCheckout');

        
        if (postAuthRedirect) {
          sessionStorage.removeItem('postAuthRedirect');
          sessionStorage.removeItem('pendingStripeCheckout');
          setDetails('Redirecting...');
          setTimeout(() => {
            window.location.href = postAuthRedirect;
          }, 1000);
          return;
        }

        sessionStorage.removeItem('postAuthRedirect');

        if (pendingCheckout) {
          sessionStorage.removeItem('pendingStripeCheckout');
          setDetails('Redirecting to checkout...');
          setTimeout(() => {
            window.location.href = pendingCheckout;
          }, 1000);
          return;
        }
        
        // No pending checkout - redirect back to the default auth success path
        setDetails('Redirecting...');
        setTimeout(() => {
          router.push('/oasis-auth?mode=login&plan=free');
        }, 1500);
        
      } catch (err) {
        console.error('Error processing OAuth callback:', err);
        persistAuthError('callback_error', err.message);
        setStatus('error');
        setStatusMessage(assistantCallback ? 'Assistant Sign-In Failed' : 'Authentication Error');
        setDetails(
          assistantCallback
            ? `OAuth could not be completed for Oasis Assistant.\nStart the sign-in flow again from the assistant.\nError: ${err.message}`
            : `An error occurred: ${err.message}`
        );
        setShowRetry(!assistantCallback);
      }
      
    } else {
      // No auth parameters found
      setStatus('info');
      setStatusMessage(assistantCallback ? 'Assistant Sign-In Incomplete' : 'No Authentication Data');
      setDetails(
        assistantCallback
          ? 'No OAuth payload was found on this callback.\nStart the sign-in flow again from Oasis Assistant.'
          : 'This page is used for OAuth callbacks.\nIf you reached this page by mistake, please return to the home page.'
      );
      setShowRetry(!assistantCallback);
    }
  }, [persistAuthError, router]);

  useEffect(() => {
    processOAuthCallback();
  }, [processOAuthCallback]);

  const copyPayload = async () => {
    if (!handoffPayload) return;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(handoffPayload);
      } else {
        const input = document.createElement('textarea');
        input.value = handoffPayload;
        input.setAttribute('readonly', 'true');
        input.style.position = 'absolute';
        input.style.left = '-9999px';
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopyStatus('Copied');
    } catch (copyError) {
      console.error('Failed to copy handoff payload:', copyError);
      setCopyStatus('Copy failed');
    }
  };

  const retryAuth = () => {
    // Clear any existing auth data
    if (typeof window !== 'undefined') {
      localStorage.removeItem('oasis_auth_callback');
      localStorage.removeItem('oasis_auth_error');
      
      // Redirect back to auth page
      router.push('/oasis-auth');
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
          {assistantMode && status === 'success' && handoffPayload && (
            <div className="handoff-panel">
              <label className="payload-label" htmlFor="assistant-handoff-payload">
                Callback payload
              </label>
              <textarea
                id="assistant-handoff-payload"
                className="payload"
                value={handoffPayload}
                readOnly
                onFocus={(event) => event.target.select()}
              />
              <button
                type="button"
                className="button"
                onClick={copyPayload}
              >
                Copy Payload
              </button>
              {copyStatus && <div className="copy-status">{copyStatus}</div>}
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

        .handoff-panel {
          margin-top: 1.5rem;
          text-align: left;
        }

        .payload-label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #dbeafe;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .payload {
          width: 100%;
          min-height: 140px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          background: rgba(15, 23, 42, 0.45);
          color: #f8fafc;
          padding: 0.85rem;
          resize: vertical;
          font-size: 0.85rem;
          line-height: 1.5;
        }

        .copy-status {
          margin-top: 0.75rem;
          font-size: 0.85rem;
          color: #d1fae5;
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
