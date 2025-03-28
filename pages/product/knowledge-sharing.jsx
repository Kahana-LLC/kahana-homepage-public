import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../../components/SharedCTA';

export default function KnowledgeSharing() {
  return (
    <>
      <Head>
        <title>Knowledge Sharing | Kahana</title>
        <meta
          name="description"
          content="Enhance knowledge sharing across your organization with Kahana's secure enterprise browsing platform."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Knowledge Sharing Solutions</h1>
            <p className="mt-4 text-xl text-gray-600">
              Share and manage knowledge securely across your organization.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure Sharing</h3>
              <p className="text-gray-600">
                Share knowledge and resources with controlled access and permissions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Knowledge Base</h3>
              <p className="text-gray-600">
                Build and maintain a centralized repository of organizational knowledge.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Team Learning</h3>
              <p className="text-gray-600">
                Foster a culture of continuous learning and knowledge exchange.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Transform Knowledge Sharing?"
        description="Contact us to learn how Kahana can enhance your organization's knowledge management."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />
    </>
  );
}