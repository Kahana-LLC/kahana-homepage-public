import React from 'react';
import Head from 'next/head';

/* eslint-disable react/no-unescaped-entities */

export default function TermsAndConditions() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Kahana</title>
        <meta
          name="description"
          content="Read Kahana's terms and conditions for using our enterprise browsing solutions."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Terms and Conditions</h1>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-600">
                These terms and conditions govern your use of Kahana's enterprise browsing solutions. By using our services, you agree to these terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Service Usage</h2>
              <p className="text-gray-600">
                Our services are designed for enterprise use and must be used in compliance with all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Privacy and Security</h2>
              <p className="text-gray-600">
                We are committed to protecting your privacy and maintaining the security of your data. Please review our Privacy Policy for more information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p className="text-gray-600">
                All intellectual property rights in our services belong to Kahana. You may not use our intellectual property without our prior written consent.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Liability</h2>
              <p className="text-gray-600">
                We provide our services "as is" and make no warranties about their reliability or suitability for your specific needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of any changes.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
