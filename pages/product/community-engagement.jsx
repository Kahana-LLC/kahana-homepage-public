import React from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const CommunityEngagementPage = () => {
  return (
    <div>
      <Head>
        <title>Community Engagement with Kahana</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>

      {/* Hero section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 md:px-12 lg:px-24">
            Build and Engage Your Community
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24 px-4">
            Create a thriving community around your knowledge and expertise with Kahana&apos;s community engagement tools.
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
              <h3 className="text-xl font-semibold mb-4">Member Access</h3>
              <p className="text-gray-600">
                Control access to your community content with flexible membership tiers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Engagement Tools</h3>
              <p className="text-gray-600">
                Foster interaction and collaboration among community members.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Analytics</h3>
              <p className="text-gray-600">
                Track community growth and engagement metrics to optimize your strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunityEngagementPage;
