import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

export default function RightToWork() {
  return (
    <>
      <Head>
        <title>E-Verify & Right to Work | Kahana</title>
        <meta
          name="description"
          content="Kahana participates in E-Verify and follows federal employment eligibility verification requirements for all new hires."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">E-Verify & Right to Work</h1>
            <p className="mt-4 text-xl text-gray-600">
              Kahana participates in E-Verify and follows federal employment eligibility verification requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 p-6 rounded-lg border border-kahana-primary/30">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">E-Verify Participation</h3>
              <p className="text-gray-600">
                Kahana is enrolled in the federal E-Verify program and verifies employment eligibility for all new hires.
              </p>
            </div>

            <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 p-6 rounded-lg border border-kahana-primary/30">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">I-9 Form Requirements</h3>
              <p className="text-gray-600">
                All new employees must complete Form I-9 and provide appropriate documentation to verify identity and work authorization.
              </p>
            </div>

            <div className="bg-gradient-to-br from-desert-yellow-100/20 to-oasis-blue-300/10 p-6 rounded-lg border border-kahana-primary/30">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Documentation Needed</h3>
              <p className="text-gray-600">
                You'll need to provide original documents such as a passport, driver's license, or Social Security card during the hiring process.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Questions About Our Hiring Process?"
        description="If you have questions about our employment verification process or need assistance, please contact us."
        buttonText="Contact Us"
        buttonLink="https://kahana.io/contact"
      />
    </>
  );
} 