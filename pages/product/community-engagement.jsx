import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../../components/SharedCTA';

export default function CommunityEngagement() {
  return (
    <>
      <Head>
        <title>Community Engagement | Kahana</title>
        <meta
          name="description"
          content="Enhance your organization's community engagement with Kahana's enterprise browsing solutions."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Community Engagement</h1>
            <p className="mt-4 text-xl text-gray-600">
              Build stronger connections within your organization through secure and efficient browsing.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Collaboration</h3>
              <p className="text-gray-600">
                Enable secure collaboration between teams while maintaining compliance.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Knowledge Sharing</h3>
              <p className="text-gray-600">
                Facilitate knowledge sharing through controlled and monitored browsing.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Connectivity</h3>
              <p className="text-gray-600">
                Keep teams connected with integrated communication tools.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Enhance Your Community Engagement?"
        description="Contact us to learn how Kahana can help your organization."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />
    </>
  );
}
