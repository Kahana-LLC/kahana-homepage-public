import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

export default function Sales() {
  return (
    <>
      <Head>
        <title>Sales | Kahana</title>
        <meta
          name="description"
          content="Connect with Kahana's sales team to learn about our enterprise browsing solutions."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Talk to Sales</h1>
            <p className="mt-4 text-xl text-gray-600">
              Learn how Kahana can transform your enterprise browsing experience.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Choose Kahana?</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="text-kahana-primary mr-2">•</span>
                  <span className="text-gray-600">Enterprise-grade security features</span>
                </li>
                <li className="flex items-center">
                  <span className="text-kahana-primary mr-2">•</span>
                  <span className="text-gray-600">Centralized management and control</span>
                </li>
                <li className="flex items-center">
                  <span className="text-kahana-primary mr-2">•</span>
                  <span className="text-gray-600">Compliance and monitoring tools</span>
                </li>
                <li className="flex items-center">
                  <span className="text-kahana-primary mr-2">•</span>
                  <span className="text-gray-600">Seamless integration capabilities</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Sales</h2>
              <p className="text-gray-600 mb-6">
                Our sales team is ready to help you find the right solution for your organization.
              </p>
              <Link href="/contact">
                <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Get Started?"
        description="Schedule a demo to see Kahana in action."
        buttonText="Schedule Demo"
        buttonLink="/schedule-a-demo"
      />
    </>
  );
}
