import React, { useState, useEffect } from 'react';
import { useConsent } from '../contexts/ConsentContext';

export default function CookiePreferencesModal() {
  const { showModal, closeModal, consent, acceptAll, declineAll, saveConsent } = useConsent();
  const [localConsent, setLocalConsent] = useState({
    strictlyNecessary: true,
    analytics: false,
  });

  useEffect(() => {
    if (showModal) {
      const defaultState = {
        strictlyNecessary: true,
        analytics: false,
      };

      if (consent && typeof consent === 'object') {
        setLocalConsent({
          strictlyNecessary: true,
          analytics: consent.analytics === true,
        });
      } else {
        setLocalConsent(defaultState);
      }
    }
  }, [showModal, consent]);

  if (!showModal) return null;

  const handleToggle = (category) => {
    if (category === 'strictlyNecessary') return;
    setLocalConsent((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    saveConsent({
      strictlyNecessary: true,
      analytics: localConsent.analytics,
      advertising: false,
    });
  };

  const handleAcceptAll = () => {
    setLocalConsent({
      strictlyNecessary: true,
      analytics: true,
    });
    acceptAll();
  };

  const handleDeclineAll = () => {
    setLocalConsent({
      strictlyNecessary: true,
      analytics: false,
    });
    declineAll();
  };

  return (
    <div
      className="fixed inset-0 z-[1100] overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="fixed inset-0 z-[1100] bg-black bg-opacity-50 transition-opacity"
        aria-hidden="true"
      />

      <div
        className="relative z-[1101] flex min-h-full items-center justify-center p-4"
        onClick={closeModal}
      >
        <div
          className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 id="modal-title" className="text-2xl font-bold text-[#313A00]">
              Cookie Preferences
            </h2>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-oasis-green-600 rounded-full p-1"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-6">
            <p className="text-gray-700 mb-4">
              We use cookies and similar technologies to operate the site and analyze traffic with Google Analytics, Mixpanel, and Firebase.
              We do not use advertising cookies or retargeting pixels. You can change analytics preferences anytime via Cookie Settings in the footer.
              See our{' '}
              <a href="/privacy-policy" className="text-[#4A6200] font-semibold no-underline hover:underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms-and-conditions" className="text-[#4A6200] font-semibold no-underline hover:underline">
                Terms
              </a>{' '}
              for details.
            </p>
            <p className="text-gray-700 mb-6 text-sm">
              Below you can choose whether to allow analytics. Blocking analytics may limit how we improve the site, but core features still work.
            </p>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[#313A00]">Strictly Necessary</h3>
                    <span className="px-2 py-1 text-xs font-semibold text-oasis-green-800 bg-[#F3F8E4] rounded">
                      Always Active
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    These cookies are essential for the website to function properly. They enable core functionality such as
                    security, network management, and accessibility.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Tools:</strong> Session management, security features
                  </p>
                </div>
                <div className="ml-4">
                  <div className="relative inline-block w-14 h-8 bg-oasis-green-600 rounded-full opacity-50 cursor-not-allowed">
                    <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#313A00] mb-2">Analytics</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously. This helps us improve our website and user experience.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Tools:</strong> Google Analytics, Mixpanel, Firebase
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handleToggle('analytics')}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-oasis-green-600 focus:ring-offset-2 ${
                      localConsent.analytics ? 'bg-oasis-green-600' : 'bg-gray-200 border-2 border-gray-300'
                    }`}
                    role="switch"
                    aria-checked={localConsent.analytics}
                    aria-label="Toggle analytics cookies"
                  >
                    <span
                      className={`inline-block h-5 w-5 transform rounded-full transition-transform shadow-sm ${
                        localConsent.analytics
                          ? 'translate-x-7 bg-white'
                          : 'translate-x-1 bg-gray-400'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={handleDeclineAll}
              className="px-6 py-2.5 text-sm font-semibold text-oasis-green-800 bg-white border-2 border-oasis-green-600 rounded-md hover:bg-oasis-green-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-oasis-green-600 focus:ring-offset-2"
            >
              Decline All
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-oasis-green-600 rounded-md hover:bg-oasis-green-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-oasis-green-600 focus:ring-offset-2"
            >
              Accept All
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-oasis-green-800 rounded-md hover:bg-oasis-green-900 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-oasis-green-600 focus:ring-offset-2"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
