import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useConsent } from '../contexts/ConsentContext';

/** Max wait before showing banner if the browser never goes idle (Safari falls back to timer). */
const DEFER_BANNER_IDLE_TIMEOUT_MS = 650;
export const CONSENT_BANNER_OFFSET_VAR = '--consent-banner-offset';

export default function ConsentBanner() {
  const { showBanner, acceptAll, declineAll, openModal, isLoading } = useConsent();
  const [deferPaint, setDeferPaint] = useState(false);
  const bannerRef = useRef(null);

  // Yield first paint to above-the-fold hero (LCP): two animation frames, then idle (or timeout).
  useEffect(() => {
    if (isLoading || !showBanner) {
      setDeferPaint(false);
      return;
    }
    let cancelled = false;
    let idleId = null;
    let raf2 = null;
    const ric = window.requestIdleCallback || ((cb, opts) => window.setTimeout(cb, opts?.timeout ?? 200));
    const cancelRic = window.cancelIdleCallback || window.clearTimeout;
    const run = () => {
      if (cancelled) return;
      setDeferPaint(true);
    };
    const raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (cancelled) return;
        idleId = ric(run, { timeout: DEFER_BANNER_IDLE_TIMEOUT_MS });
      });
    });
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf1);
      if (raf2 != null) cancelAnimationFrame(raf2);
      if (idleId != null) cancelRic(idleId);
    };
  }, [isLoading, showBanner]);

  const isVisible = !isLoading && showBanner && deferPaint;

  useEffect(() => {
    const root = document.documentElement;
    if (!isVisible || !bannerRef.current) {
      root.style.setProperty(CONSENT_BANNER_OFFSET_VAR, '0px');
      return;
    }
    const updateOffset = () => {
      root.style.setProperty(CONSENT_BANNER_OFFSET_VAR, `${bannerRef.current?.offsetHeight ?? 0}px`);
    };
    updateOffset();
    const observer = new ResizeObserver(updateOffset);
    observer.observe(bannerRef.current);
    return () => {
      observer.disconnect();
      root.style.setProperty(CONSENT_BANNER_OFFSET_VAR, '0px');
    };
  }, [isVisible]);

  if (isLoading) return null;

  return (
    <div
      ref={bannerRef}
      className={`consent-banner fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-oasis-green-600 shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ contain: 'layout paint' }}
      role="dialog"
      aria-labelledby="consent-banner-title"
      aria-describedby="consent-banner-description"
      aria-hidden={!isVisible}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 id="consent-banner-title" className="text-lg font-semibold mb-2">
              <Link
                href="/privacy-policy"
                prefetch={false}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oasis-green-600"
              >
                We Value Your Privacy
              </Link>
            </h2>
            <p id="consent-banner-description" className="text-sm text-gray-800 mb-0 max-w-prose">
              We use cookies for essential site features, analytics, and optional personalization. Use the buttons below to accept or decline non-essential cookies, or open Manage Preferences for category details.
            </p>
            <p className="text-xs text-gray-800 mt-2 mb-0 flex flex-wrap items-baseline gap-x-1 gap-y-1">
              <button
                type="button"
                onClick={openModal}
                className="consent-banner-inline-link"
              >
                Full cookie notice
              </button>
              <span className="text-gray-500 select-none" aria-hidden>
                ·
              </span>
              <Link
                href="/privacy-policy"
                prefetch={false}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oasis-green-600"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              type="button"
              onClick={acceptAll}
              className="btn-primary btn-sm"
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
            <button
              type="button"
              onClick={openModal}
              className="btn-primary btn-sm"
              aria-label="Manage cookie preferences"
            >
              Manage Preferences
            </button>
            <button
              type="button"
              onClick={declineAll}
              className="btn-primary btn-sm"
              aria-label="Decline all non-essential cookies"
            >
              Decline All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

