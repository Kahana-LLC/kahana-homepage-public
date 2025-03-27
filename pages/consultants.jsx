import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const ConsultantsPage = () => {
  return (
    <div>
      <Head>
        <title>Kahana for Consultants</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>

      {/* Hero section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 md:px-12 lg:px-24">
            Turn Your Consulting Knowledge Into Recurring Revenue
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24 px-4">
            Package your expertise into digital products that clients can access anytime, anywhere.
          </p>
          <Link
            href="https://app.kahana.co/signup"
            className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Create Digital Products</h3>
              <p className="text-gray-600">
                Package your consulting frameworks, methodologies, and best practices into easily accessible digital products.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Automated Delivery</h3>
              <p className="text-gray-600">
                Let Kahana handle the delivery and access management of your digital products automatically.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Recurring Revenue</h3>
              <p className="text-gray-600">
                Generate passive income from your consulting knowledge through subscription-based access.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultantsPage;