import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

export default function RightToWork() {
  return (
    <>
      <Head>
        <title>Right to Work | Kahana</title>
        <meta
          name="description"
          content="Kahana's Right to Work solution helps organizations maintain compliance and streamline the verification process."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Right to Work Verification</h1>
            <p className="mt-4 text-xl text-gray-600">
              Streamline your Right to Work verification process with Kahana's secure and compliant solution.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Automated Verification</h3>
              <p className="text-gray-600">
                Our automated system handles document verification, reducing manual effort and human error.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Compliance Assurance</h3>
              <p className="text-gray-600">
                Stay compliant with the latest regulations and maintain accurate records of all verifications.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Storage</h3>
              <p className="text-gray-600">
                All sensitive documents are stored securely with enterprise-grade encryption.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Streamline Your Right to Work Process?"
        description="Contact us to learn how Kahana can help your organization maintain compliance."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />
    </>
  );
} 