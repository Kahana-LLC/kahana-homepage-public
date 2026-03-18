import React, { useCallback, useEffect, useRef, useState } from 'react';
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

const ASSISTANT_HANDOFF_TARGETS = new Set(['assistant', 'onboarding']);
const ASSISTANT_HANDOFF_COOKIE_NAME = 'oasis_assistant_handoff';
const ASSISTANT_HANDOFF_COOKIE_MAX_AGE_SECONDS = 180;
const FIREFOX_OAUTH_MARKER_COOKIE_NAME = 'oasis_firefox_oauth_target';

function readOasisOAuthMarker() {
  if (typeof document === 'undefined') {
    return null;
  }

  const marker = document.cookie
    .split('; ')
    .find((entry) => entry.startsWith(`${FIREFOX_OAUTH_MARKER_COOKIE_NAME}=`));

  if (!marker) {
    return null;
  }

  try {
    return JSON.parse(decodeURIComponent(marker.split('=').slice(1).join('=')));
  } catch (error) {
    console.error('Failed to parse Oasis OAuth marker cookie:', error);
  }

  return null;
}

function clearOasisOAuthMarker() {
  if (typeof document === 'undefined') {
    return
  }

  document.cookie = `${FIREFOX_OAUTH_MARKER_COOKIE_NAME}=; Max-Age=0; Path=/; SameSite=Lax`
}

function getOAuthFlowId(urlParams, hashParams, markerPayload) {
  return (
    urlParams.get('flow_id') ||
    hashParams.get('flow_id') ||
    markerPayload?.flowId ||
    urlParams.get('state') ||
    hashParams.get('state') ||
    'unknown'
  );
}

function logAssistantOAuth(flowId, message, details) {
  const prefix = flowId ? `[Oasis OAuth][${flowId}]` : '[Oasis OAuth]';
  if (details !== undefined) {
    console.log(`${prefix} ${message}`, details);
    return;
  }
  console.log(`${prefix} ${message}`);
}

function isAssistantCallback(urlParams, markerPayload) {
  if (markerPayload?.target && ASSISTANT_HANDOFF_TARGETS.has(markerPayload.target)) {
    return true;
  }

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

function getAssistantHandoffTarget(urlParams, markerPayload) {
  const handoffTarget = urlParams.get('handoff_target')?.toLowerCase();
  if (handoffTarget && ASSISTANT_HANDOFF_TARGETS.has(handoffTarget)) {
    return handoffTarget;
  }

  if (markerPayload?.target && ASSISTANT_HANDOFF_TARGETS.has(markerPayload.target)) {
    return markerPayload.target;
  }

  return 'assistant';
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
      lowerKey === 'handoff_target' ||
      lowerKey === 'flow' ||
      lowerKey === 'flow_id' ||
      lowerKey === 'source' ||
      lowerKey === 'origin';

    const isAssistantValue =
      ASSISTANT_TRUE_VALUES.has(lowerValue) ||
      ASSISTANT_CONTEXT_VALUES.has(lowerValue) ||
      ASSISTANT_HANDOFF_TARGETS.has(lowerValue);

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
  const hasProcessedRef = useRef(false);

  const persistAuthError = useCallback((error, description, flowId = null) => {
    if (typeof window === 'undefined') return;

    localStorage.setItem('oasis_auth_error', JSON.stringify({
      error,
      description,
      flowId,
      timestamp: Date.now(),
      source: 'kahana-callback'
    }));
  }, []);

  const persistAssistantHandoffCookie = useCallback((payload) => {
    if (typeof document === 'undefined') {
      return false;
    }

    try {
      const value = encodeURIComponent(JSON.stringify(payload));
      const secureAttr = window.location.protocol === 'https:' ? '; Secure' : '';
      document.cookie =
        `${ASSISTANT_HANDOFF_COOKIE_NAME}=${value}; ` +
        `Max-Age=${ASSISTANT_HANDOFF_COOKIE_MAX_AGE_SECONDS}; ` +
        `Path=/; SameSite=Lax${secureAttr}`;
      return true;
    } catch (error) {
      console.error('Failed to persist assistant handoff cookie:', error);
    }

    return false;
  }, []);

  const startAssistantHandoff = useCallback(({
    target,
    callbackUrl,
    code,
    accessToken,
    refreshToken,
    state,
    flowId,
    error,
    errorDescription,
    success,
  }) => {
    let sanitizedUrl
    try {
      if (callbackUrl) {
        const parsed = new URL(
          callbackUrl,
          typeof window !== 'undefined' ? window.location.origin : undefined
        )
        sanitizedUrl = `${parsed.origin}${parsed.pathname}`
      }
    } catch (error) {}

    const handoffPayload = {
      timestamp: Date.now(),
      target,
      flow_id: flowId,
      ...(sanitizedUrl ? { url: sanitizedUrl } : {}),
    };

    if (code) handoffPayload.code = code;
    if (accessToken) handoffPayload.access_token = accessToken;
    if (refreshToken) handoffPayload.refresh_token = refreshToken;
    if (state) handoffPayload.state = state;
    if (error) handoffPayload.error = error;
    if (errorDescription) handoffPayload.description = errorDescription;

    const handoffStored = persistAssistantHandoffCookie(handoffPayload);
    logAssistantOAuth(flowId, 'Prepared Oasis handoff payload', {
      target,
      success,
      stored: handoffStored,
      hasCode: !!code,
      hasAccessToken: !!accessToken,
      hasRefreshToken: !!refreshToken,
      error: error || null,
    });

    setAssistantMode(true);
    setShowRetry(false);
    setStatus(success ? 'success' : 'error');
    setStatusMessage(
      success
        ? target === 'onboarding'
          ? 'Onboarding Sign-In Complete'
          : 'Assistant Sign-In Complete'
        : 'Assistant Sign-In Failed'
    );
    setDetails(
      success
        ? handoffStored
          ? 'OAuth succeeded. Oasis should finish sign-in automatically.\nYou can return to Oasis now.'
          : 'OAuth succeeded, but Oasis handoff storage could not be prepared.\nPlease return to Oasis and retry sign-in.'
        : handoffStored
          ? 'OAuth could not be completed.\nReturn to Oasis to see the error and retry.'
          : 'OAuth could not be completed and Oasis handoff storage failed.\nPlease return to Oasis and retry sign-in.'
    );
  }, [persistAssistantHandoffCookie]);

  const processOAuthCallback = useCallback(async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const markerPayload = readOasisOAuthMarker();
    const assistantCallback = isAssistantCallback(urlParams, markerPayload);
    const handoffTarget = getAssistantHandoffTarget(urlParams, markerPayload);
    clearOasisOAuthMarker();
    const callbackUrl = window.location.href;
    const hash = window.location.hash.substring(1);
    const hashParams = new URLSearchParams(hash);
    const flowId = getOAuthFlowId(urlParams, hashParams, markerPayload);

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
    
    logAssistantOAuth(flowId, 'OAuth callback received', {
      assistantCallback,
      handoffTarget,
      markerPayload,
      error, errorDescription, accessToken: accessToken ? 'present' : 'missing', refreshToken: refreshToken ? 'present' : 'missing', code, state,
      hashLength: hash.length,
      url: window.location.href
    });
    
    if (error) {
      // Handle OAuth error
      // Store error in localStorage for the assistant to pick up
      persistAuthError(error, errorDescription, flowId);

      if (assistantCallback) {
        startAssistantHandoff({
          target: handoffTarget,
          callbackUrl,
          code,
          accessToken,
          refreshToken,
          state,
          flowId,
          error,
          errorDescription,
          success: false,
        });
        return;
      }

      setStatus('error');
      setStatusMessage('Authentication Failed');
      setDetails(`Error: ${error}${errorDescription ? `\nDescription: ${errorDescription}` : ''}`);
      setShowRetry(true);
    } else if (code || accessToken || hash.length === 0) {
      // Success - we have authorization code, tokens, or hash was already processed (empty hash)
      try {
        let supabase;
        try {
          supabase = createClient();
        } catch (clientError) {
          console.error(`[Oasis OAuth][${flowId}] Failed to create Supabase client:`, clientError);
          throw new Error(`Failed to initialize Supabase client. Please check NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set correctly in production.`);
        }
        
        let session = null;
        
        // If hash is empty (just #), Supabase has already processed it - just get the session
        if (hash.length === 0 || (!accessToken && !refreshToken)) {
          logAssistantOAuth(flowId, 'Waiting for Supabase to finish processing callback state');
          // Wait a moment for Supabase to finish processing
          await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        // If we have tokens in the hash, explicitly set the session
        if (accessToken && refreshToken) {
          try {
            logAssistantOAuth(flowId, 'Setting session explicitly from hash tokens');
            // Set the session using the tokens from the hash
            const { data: sessionData, error: sessionError } = await supabase.auth.setSession({
              access_token: accessToken,
              refresh_token: refreshToken,
            });
            
            if (sessionError) {
              console.error(`[Oasis OAuth][${flowId}] Error setting session:`, sessionError);
              if (sessionError.message?.includes('Invalid API key') || sessionError.message?.includes('JWT')) {
                throw new Error(`Supabase API key is invalid or incorrect. Error: ${sessionError.message}. Please verify NEXT_PUBLIC_SUPABASE_ANON_KEY is set correctly in Heroku config vars.`);
              }
              // Don't throw for other errors - fall through to try getSession
            } else if (sessionData?.session) {
              session = sessionData.session;
              logAssistantOAuth(flowId, 'Session set successfully from hash tokens');
            }
          } catch (setSessionError) {
            console.error(`[Oasis OAuth][${flowId}] Error in setSession:`, setSessionError);
            // If it's an API key error, throw it so user sees the real issue
            if (setSessionError.message?.includes('Invalid API key') || setSessionError.message?.includes('API key')) {
              throw setSessionError;
            }
            // Fall through to try getSession/getUser for other errors
          }
        }
        
        // Try getting the session (Supabase might have parsed hash automatically or hash was already processed)
        if (!session) {
          logAssistantOAuth(flowId, 'Reading session from Supabase after callback');
          const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
          if (sessionError) {
            console.error(`[Oasis OAuth][${flowId}] Error getting session:`, sessionError);
          } else if (sessionData?.session) {
            session = sessionData.session;
            logAssistantOAuth(flowId, 'Session retrieved successfully');
          } else {
            logAssistantOAuth(flowId, 'No session found in getSession');
          }
        }
        
        logAssistantOAuth(flowId, 'Loading authenticated user from Supabase');
        const { data: userData, error: userError } = await supabase.auth.getUser();
        if (userError) {
          console.error(`[Oasis OAuth][${flowId}] Error getting user:`, userError);
          throw new Error(`Auth session missing! ${userError.message || 'Failed to get user'}`);
        }
        const user = userData?.user;
        if (user) {
          logAssistantOAuth(flowId, 'User retrieved successfully', { userId: user.id });
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
          persistAuthError('missing_email', missingEmailMessage, flowId);
          if (assistantCallback) {
            startAssistantHandoff({
              target: handoffTarget,
              callbackUrl,
              code,
              accessToken,
              refreshToken,
              state,
              flowId,
              error: 'missing_email',
              errorDescription: missingEmailMessage,
              success: false,
            });
            return;
          }
          setStatus('error');
          setStatusMessage('Authentication Error');
          setDetails(missingEmailMessage);
          setShowRetry(true);
          return;
        }

        logAssistantOAuth(flowId, 'User authenticated', { email, userId: user.id });

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
            console.error(`[Oasis OAuth][${flowId}] Failed to create profile:`, body);
            // Don't throw - profile might already exist
          } else {
            logAssistantOAuth(flowId, 'Profile created or updated successfully');
          }
        } catch (profileError) {
          console.error(`[Oasis OAuth][${flowId}] Error calling create-profile API:`, profileError);
          // Don't throw - profile creation is not critical for OAuth flow
        }

        setStatus('success');
        setStatusMessage(assistantCallback ? 'Assistant Sign-In Ready' : 'Authentication Successful!');

        if (assistantCallback) {
          sessionStorage.removeItem('postAuthRedirect');
          sessionStorage.removeItem('pendingStripeCheckout');
          startAssistantHandoff({
            target: handoffTarget,
            callbackUrl,
            code,
            accessToken,
            refreshToken,
            state,
            flowId,
            success: true,
          });
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
        setDetails('Redirecting to installations...');
        setTimeout(() => {
          window.location.href = '/installations';
        }, 1500);
        
      } catch (err) {
        console.error(`[Oasis OAuth][${flowId}] Error processing OAuth callback:`, err);
        persistAuthError('callback_error', err.message, flowId);
        if (assistantCallback) {
          startAssistantHandoff({
            target: handoffTarget,
            callbackUrl,
            code,
            accessToken,
            refreshToken,
            state,
            flowId,
            error: 'callback_error',
            errorDescription: err.message,
            success: false,
          });
          return;
        }
        setStatus('error');
        setStatusMessage('Authentication Error');
        setDetails(`An error occurred: ${err.message}`);
        setShowRetry(true);
      }
      
    } else {
      // No auth parameters found
      if (assistantCallback) {
        startAssistantHandoff({
          target: handoffTarget,
          callbackUrl,
          flowId,
          error: 'missing_oauth_payload',
          errorDescription: 'No OAuth payload was found on this callback.',
          success: false,
        });
        return;
      }
      setStatus('info');
      setStatusMessage('No Authentication Data');
      setDetails('This page is used for OAuth callbacks.\nIf you reached this page by mistake, please return to the home page.');
      setShowRetry(true);
    }
  }, [persistAuthError, startAssistantHandoff]);

  useEffect(() => {
    if (hasProcessedRef.current) {
      return;
    }

    hasProcessedRef.current = true;
    processOAuthCallback();
  }, [processOAuthCallback]);

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

        .fallback-title {
          margin-bottom: 0.85rem;
          font-size: 0.95rem;
          font-weight: 600;
          color: #f8fafc;
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

        .secondary-button {
          background: rgba(255, 255, 255, 0.14);
          margin-top: 0.85rem;
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
