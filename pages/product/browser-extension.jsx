import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../../components/SharedCTA';

export default function BrowserExtension() {
  return (
    <>
      <Head>
        <title>Browser Extension | Kahana</title>
        <meta
          name="description"
          content="Enhance your browsing experience with Kahana's secure enterprise browser extension."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Browser Extension</h1>
            <p className="mt-4 text-xl text-gray-600">
              Seamlessly integrate Kahana's secure browsing features into your workflow.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Easy Installation</h3>
              <p className="text-gray-600">
                Quick setup process with automatic updates and maintenance.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Browsing</h3>
              <p className="text-gray-600">
                Enterprise-grade security features integrated into your browser.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Productivity Tools</h3>
              <p className="text-gray-600">
                Enhanced features for efficient knowledge sharing and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Enhance Your Browser?"
        description="Contact us to learn how Kahana's browser extension can improve your organization's productivity."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />
    </>
  );
} 