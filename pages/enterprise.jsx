import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

export default function Enterprise() {
  return (
    <>
      <Head>
        <title>Enterprise Solutions | Kahana</title>
        <meta
          name="description"
          content="Kahana's enterprise solutions provide secure, scalable, and compliant browsing for your organization."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Enterprise Solutions</h1>
            <p className="mt-4 text-xl text-gray-600">
              Secure, scalable, and compliant browsing solutions for your organization.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enhanced Security</h3>
              <p className="text-gray-600">
                Enterprise-grade security features to protect your organization's sensitive data.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Scalability</h3>
              <p className="text-gray-600">
                Easily scale your browsing solution as your organization grows.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance</h3>
              <p className="text-gray-600">
                Meet industry regulations with our compliant browsing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Transform Your Enterprise Browsing?"
        description="Contact us to learn how Kahana can help your organization."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />
    </>
  );
}