import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

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
            <h1 className="text-4xl font-bold text-gray-900">Support</h1>
            <p className="mt-4 text-xl text-gray-600">
              Access our comprehensive documentation and resources to help you get the most out of your Kahana solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Documentation CTA */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-kahana-primary mr-3"
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
                <h3 className="text-2xl font-bold text-gray-900">Documentation</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Access our comprehensive documentation and user guides to help you get started and master Kahana's features.
              </p>
              <Link href="/docs">
                <button className="bg-kahana-primary text-white font-bold px-6 py-3 rounded-md hover:bg-kahana-primary-dark transition-colors"
                  
                >
                  <span >
                    View Documentation
                  </span>
                </button>
              </Link>
            </div>

            {/* FAQ CTA */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-kahana-primary mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-gray-900">FAQs</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Find quick answers to commonly asked questions about Kahana's enterprise browsing solutions.
              </p>
              <Link href="/faq">
                <button className="bg-kahana-primary text-white font-bold px-6 py-3 rounded-md hover:bg-kahana-primary-dark transition-colors"
                  
                >
                  <span >
                    View FAQs
                  </span>
                </button>
              </Link>
            </div>

            {/* Blog CTA */}
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl p-8">
              <div className="flex items-center mb-4">
                <svg
                  className="w-8 h-8 text-kahana-primary mr-3"
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
                <h3 className="text-2xl font-bold text-gray-900">Blog</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Stay updated with the latest insights, industry trends, and best practices in enterprise browsing security.
              </p>
              <Link href="/blog">
                <button className="bg-kahana-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-kahana-primary-dark transition-colors shadow-lg shadow-kahana-accent-sky/20 hover:shadow-xl hover:shadow-kahana-accent-sky/30"
                  
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

      <SharedCTA
        title="Need Additional Support?"
        description="Our support team is here to help you with any questions or issues."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
} 