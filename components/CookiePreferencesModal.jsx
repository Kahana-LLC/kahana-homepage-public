import React, { useState, useEffect } from 'react';
import { useConsent } from '../contexts/ConsentContext';

export default function CookiePreferencesModal() {
  const { showModal, closeModal, consent, updateConsent, acceptAll, declineAll } = useConsent();
  const [localConsent, setLocalConsent] = useState({
    strictlyNecessary: true,
    analytics: false,
    advertising: false,
    marketing: false,
  });

  useEffect(() => {
    if (showModal && consent) {
      setLocalConsent({
        strictlyNecessary: true,
        analytics: consent.analytics || false,
        advertising: consent.advertising || false,
        marketing: consent.marketing || false,
      });
    }
  }, [showModal, consent]);

  if (!showModal) return null;

  const handleToggle = (category) => {
    if (category === 'strictlyNecessary') return; // Cannot toggle
    setLocalConsent(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSave = () => {
    updateConsent('analytics', localConsent.analytics);
    updateConsent('advertising', localConsent.advertising);
    updateConsent('marketing', localConsent.marketing);
    // Save all at once
    const consentData = {
      strictlyNecessary: true,
      analytics: localConsent.analytics,
      advertising: localConsent.advertising,
      marketing: localConsent.marketing,
      timestamp: new Date().toISOString(),
      region: consent?.region || null,
    };
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('kahana_consent_preferences', JSON.stringify(consentData));
      window.dispatchEvent(new CustomEvent('consentChanged', { detail: consentData }));
    }
    closeModal();
  };

  const handleAcceptAll = () => {
    acceptAll();
  };

  const handleDeclineAll = () => {
    declineAll();
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={closeModal}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <h2 id="modal-title" className="text-2xl font-bold text-[#313A00]">
              Cookie Preferences
            </h2>
            <button
              onClick={closeModal}
              className="text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-[#728552] rounded-full p-1"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <p className="text-gray-700 mb-6">
              We use cookies and similar technologies to enhance your browsing experience. You can choose which categories 
              you want to allow. Note that blocking some types of cookies may impact your experience on our website.
            </p>

            {/* Strictly Necessary */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-[#313A00]">Strictly Necessary</h3>
                    <span className="px-2 py-1 text-xs font-semibold text-[#4A5745] bg-[#F3F8E4] rounded">
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
                  <div className="relative inline-block w-14 h-8 bg-[#728552] rounded-full opacity-50 cursor-not-allowed">
                    <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#313A00] mb-2">Analytics</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    These cookies help us understand how visitors interact with our website by collecting and reporting 
                    information anonymously. This helps us improve our website and user experience.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Tools:</strong> Google Analytics, Hotjar
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handleToggle('analytics')}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#728552] focus:ring-offset-2 ${
                      localConsent.analytics ? 'bg-[#728552]' : 'bg-gray-300'
                    }`}
                    role="switch"
                    aria-checked={localConsent.analytics}
                    aria-label="Toggle analytics cookies"
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        localConsent.analytics ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Advertising */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#313A00] mb-2">Advertising</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    These cookies are used to deliver advertisements that are more relevant to you and your interests. 
                    They may also be used to limit the number of times you see an advertisement.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Tools:</strong> Google Ads, retargeting pixels
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handleToggle('advertising')}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#728552] focus:ring-offset-2 ${
                      localConsent.advertising ? 'bg-[#728552]' : 'bg-gray-300'
                    }`}
                    role="switch"
                    aria-checked={localConsent.advertising}
                    aria-label="Toggle advertising cookies"
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        localConsent.advertising ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>

            {/* Marketing/Personalization */}
            <div className="mb-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#313A00] mb-2">Marketing / Personalization</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    These cookies are used to deliver personalized content and identify potential leads. They help us 
                    understand visitor behavior and improve our marketing efforts.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>Tools:</strong> Warmly, lead identification tools
                  </p>
                </div>
                <div className="ml-4">
                  <button
                    onClick={() => handleToggle('marketing')}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#728552] focus:ring-offset-2 ${
                      localConsent.marketing ? 'bg-[#728552]' : 'bg-gray-300'
                    }`}
                    role="switch"
                    aria-checked={localConsent.marketing}
                    aria-label="Toggle marketing cookies"
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        localConsent.marketing ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 px-6 py-4 flex flex-col sm:flex-row gap-3 justify-end">
            <button
              onClick={handleDeclineAll}
              className="px-6 py-2.5 text-sm font-semibold text-[#4A5745] bg-white border-2 border-[#728552] rounded-md hover:bg-[#F3F8E4] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#728552] focus:ring-offset-2"
            >
              Decline All
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#728552] rounded-md hover:bg-[#5a6b44] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#728552] focus:ring-offset-2"
            >
              Accept All
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-[#4A5745] rounded-md hover:bg-[#3a4535] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#728552] focus:ring-offset-2"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

