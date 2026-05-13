'use client';

import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import { trackError } from '../utils/analytics';

const TALLY_EMBED_SRC = 'https://tally.so/r/ODdMZa';

export default function PressInquiriesTally({ iframeTitle = 'Press inquiries', minHeight = 560 }) {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const initializeTally = () => {
    if (typeof window !== 'undefined' && window.Tally) {
      window.Tally.loadEmbeds();
      setIsFormLoaded(true);
      setLoadError(false);
    }
  };

  const handleTallyLoad = () => {
    window.setTimeout(() => {
      initializeTally();
    }, 100);
  };

  const handleTallyError = (error) => {
    console.error('Tally form loading error:', error);
    trackError('tally_form_load_error', error.message);
    setLoadError(true);

    if (retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = handleTallyLoad;
      script.onerror = () => handleTallyError(new Error('Failed to load Tally script'));
      document.body.appendChild(script);
    }
  };

  useEffect(() => {
    setIsFormLoaded(false);
    setLoadError(false);
    setRetryCount(0);

    if (typeof window !== 'undefined' && window.Tally) {
      initializeTally();
    }

    return () => {
      const tallyElements = document.querySelectorAll('[data-tally-loaded]');
      tallyElements.forEach((element) => element.remove());
    };
  }, []);

  return (
    <>
      <div className="rounded-xl border border-oasis-green-100 bg-gradient-to-br from-desert-yellow-100/15 to-oasis-blue-100/20 p-6 shadow-inner sm:p-8">
        <div className="relative" style={{ minHeight }}>
          {!isFormLoaded && !loadError && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-oasis-green-500" />
            </div>
          )}

          {loadError && retryCount < MAX_RETRIES && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <p className="mb-4 text-oasis-green-800">Having trouble loading the form? We&apos;ll try again automatically.</p>
              <p className="text-sm text-oasis-green-800">
                Attempt {retryCount + 1} of {MAX_RETRIES}
              </p>
            </div>
          )}

          {loadError && retryCount >= MAX_RETRIES && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
              <p className="mb-4 text-oasis-green-800">We&apos;re having trouble loading the form. Please try refreshing the page.</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="nav-button download inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-bold text-white shadow-sm no-underline hover:no-underline focus:no-underline"
                style={{ textDecoration: 'none', backgroundColor: '#94A833' }}
              >
                Refresh page
              </button>
            </div>
          )}

          <iframe
            data-tally-src={TALLY_EMBED_SRC}
            width="100%"
            height={String(minHeight)}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title={iframeTitle}
            style={{
              border: 'none',
              opacity: isFormLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out',
            }}
          />
        </div>
      </div>

      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" onLoad={handleTallyLoad} onError={handleTallyError} />
    </>
  );
}
