import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function Customers() {
  return (
    <>
      <Head>
        <title>Our Customers | Kahana</title>
        <meta
          name="description"
          content="See how organizations are using Kahana to transform their enterprise browsing experience."
        />
      </Head>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Customer Success Stories</h1>
            <p className="mt-4 text-xl text-gray-600">
              Discover how leading organizations are using Kahana to enhance security and productivity.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Customer success stories will be added here */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg text-gray-600">
                  Customer success stories coming soon. Contact us to learn how Kahana can help your organization.
                </p>
                <div className="mt-6">
                  <Link href="/contact">
                    <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 