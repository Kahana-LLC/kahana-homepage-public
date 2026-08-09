import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

export default function Customers() {
  return (
    <>
      <Head>
        <title>Our Customers | Aura Library</title>
        <meta
          name="description"
          content="See how organizations are using Aura Library to transform their enterprise browsing experience."
        />
      </Head>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-oasis-green-800">Customer Success Stories</h1>
            <p className="mt-4 text-xl text-oasis-green-800">
              Discover how leading organizations are using Aura Library to enhance security and productivity.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Customer success stories will be added here */}
              <div className="bg-[#F3F8E4] p-6 rounded-lg">
                <p className="text-lg text-oasis-green-800">
                  Customer success stories coming soon. Contact us to learn how Aura Library can help your organization.
                </p>
                <div className="mt-6">
                  <Link href="https://kahana.io/contact">
                    <button className="bg-oasis-green-500 text-white font-bold px-6 py-3 rounded-md hover:bg-oasis-green-700 transition-colors">
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