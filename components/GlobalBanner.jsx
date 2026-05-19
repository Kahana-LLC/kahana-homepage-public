import React, { useEffect, useState } from 'react';
import {
  isProductHuntLaunchActive,
  isProductHuntPreLaunchActive,
  isProductHuntFeaturedBadgeActive,
  PRODUCT_HUNT_BADGE_URL,
  PRODUCT_HUNT_BADGE_IMAGE,
  PRODUCT_HUNT_BADGE_ALT,
  PRODUCT_HUNT_PRODUCT_URL,
} from '../data/product-hunt-launch';
import { CONSENT_BANNER_OFFSET_VAR } from './ConsentBanner';

const STORAGE_KEY = 'kahana_producthunt_banner_dismissed';

export default function GlobalBanner() {
  const [shouldShow, setShouldShow] = useState(false);
  const [isPreLaunch, setIsPreLaunch] = useState(false);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    if (!isProductHuntLaunchActive()) {
      setShouldShow(false);
      return;
    }
    setIsPreLaunch(isProductHuntPreLaunchActive());
    setIsLive(isProductHuntFeaturedBadgeActive());
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY) === 'true';
      setShouldShow(!dismissed);
    } catch {
      setShouldShow(true);
    }
  }, []);

  const dismiss = () => {
    setShouldShow(false);
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // ignore
    }
  };

  if (!shouldShow) return null;

  const ctaUrl = isLive ? PRODUCT_HUNT_BADGE_URL : PRODUCT_HUNT_PRODUCT_URL;

  return (
    <div
      className="GlobalBanner fixed left-0 right-0 z-[55] w-full border-t border-[#c5d4b8] shadow-[0_-4px_24px_rgba(48,64,13,0.12)]"
      style={{
        background: 'linear-gradient(90deg, #d6e3f4 0%, #e5efd8 100%)',
        bottom: `var(${CONSENT_BANNER_OFFSET_VAR}, 0px)`,
      }}
      role="region"
      aria-label={isLive ? 'Product Hunt launch' : 'Product Hunt launch announcement'}
    >
      <style jsx>{`
        .banner-container {
          max-width: 1280px;
          margin: 0 auto;
          padding-left: var(--container-padding-mobile);
          padding-right: var(--container-padding-mobile);
          width: 100%;
        }
        @media (min-width: 640px) {
          .banner-container {
            padding-left: var(--container-padding-tablet);
            padding-right: var(--container-padding-tablet);
          }
        }
        @media (min-width: 1024px) {
          .banner-container {
            padding-left: var(--container-padding-desktop);
            padding-right: var(--container-padding-desktop);
          }
        }
        .banner-close-button {
          background: transparent !important;
          border: none !important;
          color: #7a9200 !important;
          border-radius: 32px !important;
          font-weight: bold !important;
          cursor: pointer;
        }
        .GlobalBanner a {
          text-decoration: none !important;
        }
        .GlobalBanner a:hover {
          text-decoration: none !important;
        }
        .GlobalBanner .banner-cta-link {
          color: #617500 !important;
          font-weight: 700 !important;
        }
        .GlobalBanner .banner-cta-link:hover {
          color: var(--oasis-green-800) !important;
          font-weight: 700 !important;
        }
      `}</style>
      <div className="banner-container">
        <div className="flex flex-col gap-3 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-3.5 md:gap-6">
          <div className="flex min-w-0 flex-1 flex-col items-center gap-3 sm:flex-row sm:items-center sm:gap-4">
            {isLive ? (
              <a
                href={PRODUCT_HUNT_BADGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 no-underline hover:no-underline focus:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oasis-green-600"
                aria-label={PRODUCT_HUNT_BADGE_ALT}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PRODUCT_HUNT_BADGE_IMAGE}
                  alt=""
                  width={250}
                  height={54}
                  className="h-10 w-auto sm:h-11 md:h-[54px] md:w-[250px]"
                />
              </a>
            ) : (
              <div className="flex shrink-0 items-center justify-center sm:justify-start">
                <svg className="h-5 w-5 text-oasis-green-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            )}

            <p className="text-center text-sm font-medium leading-snug text-oasis-green-800 sm:text-left">
              {isPreLaunch ? (
                <>
                  <span className="sm:hidden">
                    Launching on Product Hunt May 27 —{' '}
                    <a
                      href={ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="banner-cta-link whitespace-nowrap font-bold"
                    >
                      Follow the launch
                    </a>
                  </span>
                  <span className="hidden sm:inline">
                    Oasis launches on Product Hunt May 27 —{' '}
                    <a
                      href={ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="banner-cta-link font-bold"
                    >
                      Follow the launch and get notified
                    </a>
                  </span>
                </>
              ) : (
                <>
                  <span className="sm:hidden">
                    We&apos;re live on Product Hunt —{' '}
                    <a
                      href={ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="banner-cta-link whitespace-nowrap font-bold"
                    >
                      Check it out
                    </a>
                  </span>
                  <span className="hidden sm:inline">
                    Oasis is live on Product Hunt — check us out, try Oasis, and leave an upvote if you love what we&apos;re building.{' '}
                    <a
                      href={ctaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="banner-cta-link font-bold"
                    >
                      Visit our Product Hunt page
                    </a>
                  </span>
                </>
              )}
            </p>
          </div>

          <div className="flex shrink-0 items-center justify-center gap-2 sm:justify-end">
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary btn-sm whitespace-nowrap no-underline hover:no-underline focus:no-underline"
            >
              {isLive ? 'Check it out on Product Hunt' : 'Follow on Product Hunt'}
            </a>
            <button
              type="button"
              onClick={dismiss}
              className="banner-close-button inline-flex min-w-[2.5rem] items-center justify-center px-2.5 py-2.5 text-sm no-underline hover:no-underline focus:no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-oasis-green-600"
              aria-label="Close banner"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: '#7A9200' }} aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
