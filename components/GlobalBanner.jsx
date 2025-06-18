import React, { useState } from 'react';
import Link from 'next/link';

export default function GlobalBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-[#66C2BE] to-[#8CB7D0] relative">
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
                  Be among the first to experience omnipotent work! Join the waitlist for early access to our free agentic browser when it launches.
                </span>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Link href="/oasis-waitlist">
              <button className="bg-white text-[#66C2BE] px-4 py-1.5 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
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