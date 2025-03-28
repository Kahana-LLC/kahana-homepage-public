import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../../components/SharedCTA';

export default function Products() {
  return (
    <>
      <Head>
        <title>Products | Kahana</title>
        <meta
          name="description"
          content="Discover Kahana's suite of enterprise browsing solutions designed to enhance security and productivity."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
            <p className="mt-4 text-xl text-gray-600">
              Enterprise browsing solutions designed for security and productivity.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Browser</h3>
              <p className="text-gray-600">
                Enterprise-grade secure browsing with advanced threat protection.
              </p>
              <div className="mt-6">
                <Link href="/products/secure-browser">
                  <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Management</h3>
              <p className="text-gray-600">
                Centralized control and monitoring of enterprise browsing activities.
              </p>
              <div className="mt-6">
                <Link href="/products/browser-management">
                  <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Browser Extensions</h3>
              <p className="text-gray-600">
                Custom extensions to enhance productivity and security.
              </p>
              <div className="mt-6">
                <Link href="/products/extensions">
                  <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Transform Your Enterprise Browsing?"
        description="Contact us to learn how our products can help your organization."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />
    </>
  );
} 