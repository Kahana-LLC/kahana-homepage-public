import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Support() {
  return (
    <>
      <Head>
        <title>Support | Kahana</title>
        <meta
          name="description"
          content="Access documentation and resources for Kahana's enterprise browsing solutions."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-[#4A5745]">Support</h1>
            <p className="mt-4 text-xl text-[#4A5745]">
              Access our comprehensive documentation and resources to help you get the most out of your Kahana solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Documentation CTA */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-[#728552] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-[#4A5745]">Documentation</h3>
              </div>
              <p className="text-[#4A5745] mb-6">
                Access our comprehensive documentation and user guides to help you get started and master Kahana's features.
              </p>
              <Link href="/docs">
                <button className="bg-[#788B59] text-white font-bold px-6 py-3 rounded-md hover:bg-[#728552] transition-colors"
                  
                >
                  <span >
                    View Documentation
                  </span>
                </button>
              </Link>
            </div>

            {/* FAQ CTA */}

            {/* Blog CTA */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-[#728552] mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-[#4A5745]">Blog</h3>
              </div>
              <p className="text-[#4A5745] mb-6">
                Stay updated with the latest insights, industry trends, and best practices in enterprise browsing security.
              </p>
              <Link href="/blog">
                <button className="bg-[#788B59] text-white font-bold px-6 py-3 rounded-md hover:bg-[#728552] transition-colors"
                  
                >
                  <span >
                    Read Our Blog
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Need Additional Support?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
            Our support team is here to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
              Schedule a Demo
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 