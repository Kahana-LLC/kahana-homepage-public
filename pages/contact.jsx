import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavbarDup from '../components/NavbarDup';
import Script from 'next/script';
import { trackError } from '../utils/analytics';

const supportLinks = [
  {
    name: 'Support',
    description: 'Get help with any technical issues or questions.',
    href: '/support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    name: 'Documentation',
    description: 'Browse our comprehensive guides and documentation.',
    href: '/docs',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [loadError, setLoadError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  const initializeTally = () => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
      setIsFormLoaded(true);
      setLoadError(false);
    }
  };

  const handleTallyLoad = () => {
    setTimeout(() => {
      initializeTally();
    }, 100);
  };

  const handleTallyError = (error) => {
    console.error('Tally form loading error:', error);
    trackError('tally_form_load_error', error.message);
    setLoadError(true);
    
    if (retryCount < MAX_RETRIES) {
      setRetryCount(prev => prev + 1);
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

    if (window.Tally) {
      initializeTally();
    }

    return () => {
      const tallyElements = document.querySelectorAll('[data-tally-loaded]');
      tallyElements.forEach(element => element.remove());
    };
  }, []);

  const formSection = (
    <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl shadow-xl p-8">
      <div className="relative min-h-[600px]">
        {!isFormLoaded && !loadError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#788B59]"></div>
          </div>
        )}

        {loadError && retryCount < MAX_RETRIES && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <p className="text-[#4A5745] mb-4">Having trouble loading the form? We'll try again automatically.</p>
            <p className="text-sm text-[#4A5745]">Attempt {retryCount + 1} of {MAX_RETRIES}</p>
          </div>
        )}

        {loadError && retryCount >= MAX_RETRIES && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <p className="text-[#4A5745] mb-4">We're having trouble loading the form. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="nav-button download inline-flex items-center justify-center rounded-md text-white font-bold shadow-sm px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
              style={{ textDecoration: 'none', backgroundColor: '#788B59' }}
            >
              Refresh Page
            </button>
          </div>
        )}

        <iframe
          data-tally-src="https://tally.so/r/w52BJN"
          width="100%"
          height="600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Get In Touch"
          style={{ 
            border: 'none',
            opacity: isFormLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out'
          }}
        ></iframe>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Let's Connect | Kahana Browser</title>
        <meta name="description" content="We'd love to hear from you and explore how Kahana can enhance your browsing experience." />
      </Head>

      <NavbarDup />

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-base font-semibold leading-7 text-[#728552] mb-3">Let's Connect</h2>
                <h1 className="text-4xl font-bold text-[#4A5745] sm:text-5xl">
                  Contact us
                </h1>
                <p className="mt-6 text-xl text-[#4A5745]">
                  We're excited to learn more about your needs and show you how Kahana can transform your browsing experience. Share your thoughts with us, and we'll get back to you soon!
                </p>
              </div>

              {/* Form Section - Mobile */}
              <div className="lg:hidden mb-12">
                {formSection}
              </div>

              {/* Support Links Section */}
              <div className="mb-12 lg:mb-0">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {supportLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group flex flex-col p-6 bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#788B59] to-[#728552] transition-all duration-300">
                          <div className="text-white">
                            {link.icon}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-[#4A5745] group-hover:text-[#728552] transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="mt-2 text-sm text-[#4A5745]">
                        {link.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Form (Desktop) */}
            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24">
              {formSection}
            </div>
          </div>
        </div>
      </main>

      <Script 
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
        onLoad={handleTallyLoad}
        onError={handleTallyError}
      />
    </>
  );
} 