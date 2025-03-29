import React from 'react';
import Head from 'next/head';
import NavBar from '../components/NavbarDup';

export default function Download() {
  return (
    <>
      <Head>
        <title>Download Oasis Browser | Kahana</title>
        <meta name="description" content="Download Oasis Browser - the secure enterprise browser by Kahana" />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-semibold text-gray-900">
              Download Oasis Browser
            </h1>
            <p className="mt-3 text-gray-600">
              We'll send you a secure download link via email
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <iframe
              src="https://tally.so/embed/3xzNKv?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Download Form"
              style={{ minWidth: '100%' }}
            ></iframe>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            By submitting this form, you agree to our{' '}
            <a href="/terms" className="text-kahana-primary hover:text-kahana-primary-dark">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="text-kahana-primary hover:text-kahana-primary-dark">
              Privacy Policy
            </a>
          </div>
        </div>
      </main>
    </>
  );
} 