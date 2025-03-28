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
          content="Get support for Kahana's enterprise browsing solutions."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Support</h1>
            <p className="mt-4 text-xl text-gray-600">
              We're here to help you get the most out of your Kahana solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Technical Support</h3>
              <p className="text-gray-600 mb-6">
                Get help with technical issues and product-related questions.
              </p>
              <Link href="/contact">
                <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                  Contact Support
                </button>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation</h3>
              <p className="text-gray-600 mb-6">
                Access our comprehensive documentation and user guides.
              </p>
              <Link href="/docs">
                <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                  View Docs
                </button>
              </Link>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">FAQs</h3>
              <p className="text-gray-600 mb-6">
                Find answers to commonly asked questions about our solutions.
              </p>
              <Link href="/faq">
                <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                  View FAQs
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Need Additional Help?"
        description="Our support team is ready to assist you."
        buttonText="Contact Support"
        buttonLink="/contact"
      />
    </>
  );
} 