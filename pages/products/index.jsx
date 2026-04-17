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
            <h1 className="text-4xl font-bold text-[#4A5745]">Our Products</h1>
            <p className="mt-4 text-xl text-[#4A5745]">
              Enterprise browsing solutions designed for security and productivity.
            </p>
          </div>

          {/* Product Cards */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-[#F3F8E4] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-[#4A5745] mb-4">Enterprise Browser</h3>
              <p className="text-[#4A5745] mb-6">
                A secure, isolated browser environment designed for enterprise needs, protecting your organization's data and users with advanced security features and compliance controls.
              </p>
              <div className="space-y-4">
                <Link href="/products/oasis-enterprise-browser" className="btn-primary w-full inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                    Learn More
                </Link>
              </div>
            </div>

            <div className="bg-[#F3F8E4] p-8 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-[#4A5745] mb-4">Web Application</h3>
              <p className="text-[#4A5745] mb-6">
                A modern web application platform for secure and efficient enterprise browsing, featuring seamless integration and advanced management capabilities.
              </p>
              <div className="space-y-4">
                <Link href="/products/web-application" className="btn-primary w-full inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                    Learn More About Web Application
                </Link>
              </div>
            </div>
          </div>

          {/* Resources Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-[#4A5745] text-center mb-8">Resources</h2>
            <div className="grid gap-8 md:grid-cols-3">
              {/* Documentation Card */}
              <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-[#728552] mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-[#4A5745]">Documentation</h3>
                </div>
                <p className="text-[#4A5745] mb-6">
                  Comprehensive guides and documentation to help you get the most out of Kahana's products.
                </p>
                <Link href="/docs" className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                    <span>View Documentation</span>
                </Link>
              </div>

              {/* Support Card */}
              <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-[#728552] mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-[#4A5745]">Support</h3>
                </div>
                <p className="text-[#4A5745] mb-6">
                  Get help from our support team and access troubleshooting resources.
                </p>
                <Link href="/support" className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                    <span>Contact Support</span>
                </Link>
              </div>

              {/* Blog Card */}
              <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-[#728552] mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-[#4A5745]">Blog</h3>
                </div>
                <p className="text-[#4A5745] mb-6">
                  Stay updated with the latest news, tips, and best practices.
                </p>
                <Link href="/blog" className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                    <span>Read Blog</span>
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