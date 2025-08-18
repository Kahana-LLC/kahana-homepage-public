import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function GlobalBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  // Hide banner on the Oasis Waitlist page
  if (router.pathname === '/oasis-waitlist' || !isVisible) return null;

  return (
    <div className="GlobalBanner bg-gradient-to-r from-kahana-primary to-kahana-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">
                <span className="md:hidden">
                  Join the Oasis waitlist for early access!
                </span>
                <span className="hidden md:inline">
                  Your story is unique—Oasis is here to help you organize, explore, and create it. Join the waitlist and let's begin.
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/oasis-waitlist">
              <button className="bg-transparent border border-white text-white font-bold px-6 py-3 rounded-md hover:bg-white hover:text-kahana-primary transition-colors">
                Join Waitlist
              </button>
            </Link>
            <button
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-white/80 transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 