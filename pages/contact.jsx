import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Kahana</title>
        <meta
          name="description"
          content="Get in touch with Kahana. We're here to help you transform your enterprise browsing experience."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-4 text-xl text-gray-600">
              We're here to help you transform your enterprise browsing experience.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Sales Inquiries</h2>
              <p className="text-gray-600 mb-6">
                Interested in Kahana for your organization? Our sales team is ready to help you get started.
              </p>
              <Link href="mailto:sales@kahana.com">
                <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                  Contact Sales
                </button>
              </Link>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Support</h2>
              <p className="text-gray-600 mb-6">
                Need technical assistance? Our support team is available to help you.
              </p>
              <Link href="mailto:support@kahana.com">
                <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                  Contact Support
                </button>
              </Link>
            </div>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Office Location</h2>
            <p className="text-gray-600">
              Kahana, Inc.<br />
              123 Enterprise Street<br />
              San Francisco, CA 94105<br />
              United States
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 