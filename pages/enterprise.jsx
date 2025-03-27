import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const EnterprisePage = () => {
  return (
    <div>
      <Head>
        <title>Kahana for Enterprise</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>

      {/* Hero section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 md:px-12 lg:px-24">
            Enterprise Knowledge Management with Kahana
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24 px-4">
            Transform your organization&apos;s knowledge into valuable digital products and training materials.
          </p>
          <Link
            href="/sales"
            className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored Kahana environments designed specifically for your organization&apos;s needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Enterprise Security</h3>
              <p className="text-gray-600">
                Advanced security features and compliance measures to protect your organization&apos;s knowledge.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Scalable Platform</h3>
              <p className="text-gray-600">
                Grow your knowledge management system as your organization evolves.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterprisePage;