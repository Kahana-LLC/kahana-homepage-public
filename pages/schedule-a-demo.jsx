import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ScheduleDemo() {
  return (
    <>
      <Head>
        <title>Schedule a Demo | Kahana</title>
        <meta
          name="description"
          content="Schedule a personalized demo of Kahana's enterprise browsing solutions."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Schedule a Demo</h1>
            <p className="mt-4 text-xl text-gray-600">
              See how Kahana can transform your enterprise browsing experience.
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You'll See</h2>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="text-kahana-primary mr-2">•</span>
                      <span className="text-gray-600">Enterprise-grade security features</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-kahana-primary mr-2">•</span>
                      <span className="text-gray-600">Centralized management tools</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-kahana-primary mr-2">•</span>
                      <span className="text-gray-600">Compliance monitoring capabilities</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-kahana-primary mr-2">•</span>
                      <span className="text-gray-600">Integration options</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Sales</h2>
                  <p className="text-gray-600 mb-6">
                    Our team will reach out to schedule a personalized demo at your convenience.
                  </p>
                  <Link href="/contact">
                    <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                      Contact Sales
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
