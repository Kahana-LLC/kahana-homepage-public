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
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Our Products</h1>
            <p className="mt-4 text-xl text-gray-600">
              Enterprise browsing solutions designed for security and productivity.
            </p>
          </div>

          {/* Product Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Enterprise Browser</h3>
              <p className="text-gray-600 mb-6">
                A secure, isolated browser environment designed for enterprise needs, protecting your organization's data and users with advanced security features and compliance controls.
              </p>
              <div className="space-y-4">
                <Link href="/products/enterprise-browser">
                  <button className="w-full bg-kahana-primary text-white px-6 py-3 rounded-md hover:bg-kahana-primary-dark transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Web Application</h3>
              <p className="text-gray-600 mb-6">
                A modern web application platform for secure and efficient enterprise browsing, featuring seamless integration and advanced management capabilities.
              </p>
              <div className="space-y-4">
                <Link href="/products/web-application">
                  <button className="w-full bg-kahana-primary text-white px-6 py-3 rounded-md hover:bg-kahana-primary-dark transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Resources</h2>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Documentation</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive guides and documentation to help you get the most out of Kahana's products.
                </p>
                <Link href="/docs" className="text-kahana-primary hover:text-kahana-primary-dark">
                  View Documentation →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Support</h3>
                <p className="text-gray-600 mb-4">
                  Get help from our support team and access troubleshooting resources.
                </p>
                <Link href="/support" className="text-kahana-primary hover:text-kahana-primary-dark">
                  Contact Support →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Blog</h3>
                <p className="text-gray-600 mb-4">
                  Stay updated with the latest news, tips, and best practices.
                </p>
                <Link href="/blog" className="text-kahana-primary hover:text-kahana-primary-dark">
                  Read Blog →
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