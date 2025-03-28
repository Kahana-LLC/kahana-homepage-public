import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../../components/SharedCTA';

export default function RecurringRevenue() {
  return (
    <>
      <Head>
        <title>Recurring Revenue | Kahana</title>
        <meta
          name="description"
          content="Generate recurring revenue with Kahana's enterprise browsing solutions."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Recurring Revenue Solutions</h1>
            <p className="mt-4 text-xl text-gray-600">
              Transform your enterprise browsing into a sustainable revenue stream.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Subscription Management</h3>
              <p className="text-gray-600">
                Easily manage and track enterprise browsing subscriptions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Analytics</h3>
              <p className="text-gray-600">
                Monitor and optimize browsing usage across your organization.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Flexible Billing</h3>
              <p className="text-gray-600">
                Customize billing options to match your organization's needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Generate Recurring Revenue?"
        description="Contact us to learn how Kahana can help your organization."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />
    </>
  );
}
