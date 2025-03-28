import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../../components/SharedCTA';

export default function ContentMonetization() {
  return (
    <>
      <Head>
        <title>Content Monetization | Kahana</title>
        <meta
          name="description"
          content="Monetize your enterprise content with Kahana's secure browsing and sharing platform."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Content Monetization Solutions</h1>
            <p className="mt-4 text-xl text-gray-600">
              Transform your enterprise content into valuable revenue streams.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscription Models</h3>
              <p className="text-gray-600">
                Create flexible subscription tiers for your content access.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Access Control</h3>
              <p className="text-gray-600">
                Manage content access with granular permissions and security.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Analytics Dashboard</h3>
              <p className="text-gray-600">
                Track content performance and revenue metrics in real-time.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Monetize Your Content?"
        description="Contact us to learn how Kahana can help you generate revenue from your enterprise content."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />
    </>
  );
} 