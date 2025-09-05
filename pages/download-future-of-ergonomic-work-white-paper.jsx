import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import NavbarDup from '../components/NavbarDup';
import Script from 'next/script';
import { trackError } from '../utils/analytics';

const resourceLinks = [
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
  {
    name: 'Blog',
    description: 'Read our latest insights on browser technology and productivity.',
    href: '/blog',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
  {
    name: 'Resources',
    description: 'Explore our collection of guides, tools, and resources.',
    href: '/resources',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function DownloadWhitePaperPage() {
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
    <div className="bg-white rounded-xl shadow-xl border border-[#A5DAD8]/30 p-8">
      <div className="relative min-h-[400px]">
        {!isFormLoaded && !loadError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#66C2BE]"></div>
          </div>
        )}

        {loadError && retryCount < MAX_RETRIES && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <p className="text-gray-600 mb-4">Having trouble loading the form? We'll try again automatically.</p>
            <p className="text-sm text-gray-500">Attempt {retryCount + 1} of {MAX_RETRIES}</p>
          </div>
        )}

        {loadError && retryCount >= MAX_RETRIES && (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
            <p className="text-gray-600 mb-4">We're having trouble loading the form. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-[#66C2BE] text-white rounded-md hover:bg-[#4A9E9A] transition-colors"
            >
              Refresh Page
            </button>
          </div>
        )}

        <iframe
          data-tally-src="https://tally.so/r/31LPOL"
          width="100%"
          height="400"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Download White Paper"
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
        <title>Download: The Future of Ergonomic Work | Kahana Browser</title>
        <meta name="description" content="Download our comprehensive white paper on the future of ergonomic work and how modern browsers are reshaping productivity in the workplace." />
      </Head>

      <NavbarDup />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Free White Paper</h2>
                <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                  The Future of Ergonomic Work
                </h1>
                <p className="mt-6 text-xl text-gray-600">
                  Discover how modern browser technology is revolutionizing workplace productivity and creating more ergonomic, efficient work environments. This comprehensive white paper explores the latest trends, challenges, and solutions in browser-based work.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What You'll Learn</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#66C2BE] text-white text-sm font-medium">
                        ✓
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">The evolution of browser-based work environments</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#66C2BE] text-white text-sm font-medium">
                        ✓
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">Ergonomic design principles for digital workspaces</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#66C2BE] text-white text-sm font-medium">
                        ✓
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">Productivity optimization strategies</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#66C2BE] text-white text-sm font-medium">
                        ✓
                      </div>
                    </div>
                    <p className="ml-3 text-gray-700">Future trends in workplace technology</p>
                  </div>
                </div>
              </div>

              {/* Form Section - Mobile */}
              <div className="lg:hidden mb-12">
                {formSection}
              </div>

              {/* Resource Links Section */}
              <div className="mb-12 lg:mb-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Explore More Resources</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {resourceLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="group flex flex-col p-6 bg-white rounded-xl border border-[#A5DAD8]/30 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex-shrink-0 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#66C2BE]/10 via-[#8CB7D0]/10 to-[#E3DFF1]/10 group-hover:from-[#66C2BE]/20 group-hover:via-[#8CB7D0]/20 group-hover:to-[#E3DFF1]/20 transition-all duration-300">
                          <div className="text-[#66C2BE]">
                            {link.icon}
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#66C2BE] transition-colors duration-300">
                        {link.name}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
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
