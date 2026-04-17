import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function GlobalBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  // Only show on main landing page for now
  if (router.pathname !== '/' || !isVisible) return null;

  return (
    <div className="GlobalBanner fixed top-16 left-0 right-0 shadow-md w-full z-40" style={{ background: 'linear-gradient(90deg, #d6e3f4 0%, #e5efd8 100%)' }}>
      <style jsx>{`
        .banner-container {
          max-width: 1280px;
          margin: 0 auto;
          padding-left: calc(var(--container-padding-mobile) + 1.45rem);
          padding-right: var(--container-padding-mobile);
          width: 100%;
        }
        @media (min-width: 640px) {
          .banner-container {
            padding-left: calc(var(--container-padding-tablet) + 1.45rem);
            padding-right: var(--container-padding-tablet);
          }
        }
        @media (min-width: 1024px) {
          .banner-container {
            padding-left: calc(var(--container-padding-desktop) + 1.75rem);
            padding-right: var(--container-padding-desktop);
          }
        }
        .banner-close-button {
          background: transparent !important;
          border: none !important;
          color: #7A9200 !important;
          border-radius: 32px !important;
          font-weight: bold !important;
        }
        .GlobalBanner a {
          text-decoration: none !important;
        }
        .GlobalBanner a:hover {
          text-decoration: none !important;
        }
        .GlobalBanner .banner-discord-link {
          color: #617500 !important;
          font-weight: 700 !important;
        }
        .GlobalBanner .banner-discord-link:hover {
          color: #4A5F00 !important;
          font-weight: 700 !important;
        }
      `}</style>
      <div className="banner-container">
        <div className="flex items-center justify-between py-3 gap-4 md:gap-8">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-[#4A5745]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a3 3 0 100 6 3 3 0 000-6zM12 16a3 3 0 100 6 3 3 0 000-6zM2 12a3 3 0 106 0 3 3 0 00-6 0zM16 12a3 3 0 106 0 3 3 0 00-6 0zM5 5l14 14M5 19l14-14" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-[#4A5745]">
                <span className="md:hidden">
                  Oasis is now available!{' '}
                  <Link href="/oasis-pricing" className="no-underline hover:no-underline hover:!text-[#7A9200] transition-colors text-[#4A5745] font-bold">
                    Download →
                  </Link>
                </span>
                <span className="hidden md:inline">
                  🎉 Oasis is now available!{' '}
                  <Link href="/oasis-pricing" className="banner-discord-link no-underline hover:no-underline transition-colors font-bold" style={{ textDecoration: 'none', color: 'rgba(97, 117, 0, 1)', fontWeight: 700 }}>
                    Download →
                  </Link>
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/oasis-pricing"
              className="btn-primary btn-sm hidden md:inline-flex whitespace-nowrap no-underline hover:no-underline focus:no-underline gap-2"
            >
              Download
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="banner-close-button inline-flex items-center justify-center px-2.5 py-2.5 text-sm no-underline hover:no-underline focus:no-underline min-w-[2.5rem]"
              aria-label="Close banner"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A9200' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 