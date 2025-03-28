import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Consultants() {
  return (
    <>
      <Head>
        <title>Consultants | Kahana</title>
        <meta
          name="description"
          content="Join Kahana as a consultant and share your expertise with our community."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Why Partner with Kahana?</h1>
            <p className="mt-4 text-xl text-gray-600">
              Join our network of consultants and help organizations transform their enterprise browsing experience.
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benefits of Joining</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-kahana-primary mr-2">•</span>
                  <span className="text-gray-600">Expand your consulting business with enterprise-grade solutions</span>
                </li>
                <li className="flex items-center">
                  <span className="text-kahana-primary mr-2">•</span>
                  <span className="text-gray-600">Connect with organizations seeking browsing expertise</span>
                </li>
                <li className="flex items-center">
                  <span className="text-kahana-primary mr-2">•</span>
                  <span className="text-gray-600">Access enterprise-grade tools and resources</span>
                </li>
                <li className="flex items-center">
                  <span className="text-kahana-primary mr-2">•</span>
                  <span className="text-gray-600">Receive comprehensive training and support</span>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Link href="/contact">
                  <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}