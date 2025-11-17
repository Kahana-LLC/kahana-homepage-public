import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function GlobalBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  // Hide banner on specific pages
  if (router.pathname === '/oasis-waitlist' || router.pathname === '/white-paper-future-of-ergonomic-work' || !isVisible) return null;

  return (
    <div className="GlobalBanner relative shadow-md" style={{ background: 'linear-gradient(90deg, #d6e3f4 0%, #e5efd8 100%)' }}>
      <style jsx>{`
        .banner-container {
          max-width: 1280px;
          margin: 0 auto;
          padding-left: calc(var(--container-padding-mobile) + 1.45rem);
          padding-right: var(--container-padding-mobile);
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
          background-color: #FFFFFF !important;
          border: 2px solid #7A9200 !important;
          color: #7A9200 !important;
          border-radius: 32px !important;
          font-weight: bold !important;
        }
        .banner-close-button svg {
          color: #7A9200 !important;
        }
        .banner-discord-button {
          background-color: #FFFFFF !important;
          border: 2px solid #7A9200 !important;
          color: #7A9200 !important;
          border-radius: 32px !important;
          font-weight: bold !important;
        }
        .banner-discord-button svg,
        .banner-discord-button span {
          color: #7A9200 !important;
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
                  AI browser that melds with your mind naturally
                </span>
                <span className="hidden md:inline">
                  Meet Oasis: The first AI browser designed to meld with the way your mind works naturally. Built for ergonomic work, focus, and spatial ease. Join our <a href="/community" className="underline hover:!text-[#7A9200] transition-colors text-[#4A5745]">Discord community</a> to stay updated!
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/oasis-waitlist"
              className="btn-primary inline-flex items-center justify-center px-4 py-2.5 text-sm no-underline hover:no-underline focus:no-underline whitespace-nowrap"
            >
              <span>Get Early Access</span>
            </Link>
            <Link
              href="/community"
              className="banner-discord-button hidden md:inline-flex items-center justify-center px-4 py-2.5 text-sm no-underline hover:no-underline focus:no-underline gap-2 whitespace-nowrap"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #7A9200',
                color: '#7A9200',
                borderRadius: '32px',
                fontWeight: 'bold'
              }}
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#7A9200' }}>
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
              </svg>
              <span style={{ color: '#7A9200' }}>Discord</span>
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="banner-close-button inline-flex items-center justify-center px-2.5 py-2.5 text-sm no-underline hover:no-underline focus:no-underline min-w-[2.5rem]"
              aria-label="Close banner"
              style={{
                backgroundColor: '#FFFFFF',
                border: '2px solid #7A9200',
                color: '#7A9200',
                borderRadius: '32px',
                fontWeight: 'bold'
              }}
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