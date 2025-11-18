import React from 'react';
import Link from 'next/link';

const browserFeatures = {
    name: 'Oasis Enterprise Browser',
    description: 'Transform your browsing experience with a cutting-edge web browser that combines enterprise-grade security with innovative collaboration features. Built for the modern web user who values both privacy and productivity.',
  keyFeatures: [
    {
      title: 'Enterprise Security',
      description: 'Advanced security controls with enhanced CSP and SSL/TLS',
      icon: (
        <svg className="h-6 w-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Smart Organization',
      description: 'Customizable hubs and collections for efficient workflow',
      icon: (
        <svg className="h-6 w-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'AI Assistant',
      description: 'Built-in AI assistant for natural language commands',
      icon: (
        <svg className="h-6 w-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: 'Modern Interface',
      description: 'Clean, minimalist design with seamless updates',
      icon: (
        <svg className="h-6 w-6 text-[#4A5745]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      )
    }
  ],
  link: '/enterprise-browser'
};

export default function ProductSection() {

  return (
    <div className="bg-white py-16 sm:py-24 relative">
      {/* Subtle decorative background accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#30400D]/5 rounded-full blur-3xl opacity-30 -z-10"></div>
      
      <style jsx>{`
        .product-container {
          max-width: 1280px;
          margin: 0 auto;
          padding-left: var(--container-padding-mobile);
          padding-right: var(--container-padding-mobile);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 80vh;
        }
        @media (min-width: 640px) {
          .product-container {
            padding-left: var(--container-padding-tablet);
            padding-right: var(--container-padding-tablet);
          }
        }
        @media (min-width: 1024px) {
          .product-container {
            padding-left: var(--container-padding-desktop);
            padding-right: var(--container-padding-desktop);
          }
        }
        .product-schedule-demo-button {
          background-color: #7A9200 !important;
          border: 1px solid #AFBE66 !important;
          color: #FFFFFF !important;
          border-radius: 32px !important;
          font-weight: bold !important;
        }
        .product-schedule-demo-button,
        .product-schedule-demo-button *,
        .product-schedule-demo-button span {
          color: #FFFFFF !important;
        }
        .product-container h2 {
          color: #978455 !important;
        }
      `}</style>
      <div className="product-container relative">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Main Content - Centered */}
          <div className="w-full max-w-4xl mx-auto px-4 mb-12">
            <h2 className="text-xl font-semibold leading-8 text-[#617500] mb-4">Fall into Oasis</h2>
            <p className="text-2xl font-semibold tracking-tight text-[#333333] sm:text-3xl mb-8">
              Meet Oasis, the Most Elegant browser
            </p>
            
            {/* Buttons */}
            <div className="flex gap-4 items-center justify-center">
              <Link
                href="/oasis-waitlist"
                className="btn-secondary inline-flex items-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
              >
                <span>Join Waitlist</span>
              </Link>
              <Link
                href="/schedule-demo"
                className="product-schedule-demo-button inline-flex items-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline"
                style={{
                  backgroundColor: '#7A9200',
                  border: '1px solid #AFBE66',
                  color: '#FFFFFF',
                  borderRadius: '32px',
                  fontWeight: 'bold'
                }}
              >
                <span style={{ color: '#FFFFFF' }}>Schedule Demo</span>
              </Link>
            </div>
          </div>

          {/* Browser Preview - Below buttons */}
          <div className="w-full max-w-6xl mx-auto px-4 relative mt-12">
            <div className="w-full mx-auto overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/Welcome to Oasis.svg"
                alt="Welcome to Oasis"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 