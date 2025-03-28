import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Kahana</title>
        <meta
          name="description"
          content="Learn about Kahana's mission to transform enterprise browsing with secure, compliant, and efficient solutions."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">About Kahana</h1>
            <p className="mt-4 text-xl text-gray-600">
              Transforming enterprise browsing with secure, compliant, and efficient solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide organizations with secure and efficient enterprise browsing solutions that enhance productivity while maintaining compliance.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading provider of enterprise browsing solutions, setting the standard for security and efficiency.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Security, innovation, customer success, and continuous improvement drive everything we do.
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
