import React from 'react';
import { useConsent } from '../contexts/ConsentContext';

export default function ConsentBanner() {
  const { showBanner, acceptAll, declineAll, openModal, isLoading } = useConsent();

  // Don't show banner while loading or if user has already interacted
  if (isLoading || !showBanner) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-[#728552] shadow-lg"
      role="dialog"
      aria-labelledby="consent-banner-title"
      aria-describedby="consent-banner-description"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 id="consent-banner-title" className="text-lg font-semibold text-[#313A00] mb-2">
              We Value Your Privacy
            </h2>
            <p id="consent-banner-description" className="text-sm text-gray-700 mb-0">
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking "Accept All", you consent to our use of these technologies. You can change your preferences at any time 
              by clicking "Manage Preferences" or visiting our Cookie Settings in the footer.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={acceptAll}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#728552] rounded-md hover:bg-[#5a6b44] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#728552] focus:ring-offset-2"
              aria-label="Accept all cookies"
            >
              Accept All
            </button>
            <button
              onClick={openModal}
              className="px-6 py-2.5 text-sm font-semibold text-[#4A5745] bg-white border-2 border-[#728552] rounded-md hover:bg-[#F3F8E4] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#728552] focus:ring-offset-2"
              aria-label="Manage cookie preferences"
            >
              Manage Preferences
            </button>
            <button
              onClick={declineAll}
              className="px-6 py-2.5 text-sm font-semibold text-[#4A5745] bg-white border-2 border-[#728552] rounded-md hover:bg-[#F3F8E4] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#728552] focus:ring-offset-2"
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

