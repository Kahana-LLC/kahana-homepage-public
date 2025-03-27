import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const SitemapPage = () => {
  return (
    <div>
      <Head>
        <title>Sitemap - Kahana</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>

      {/* Hero section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 md:px-12 lg:px-24">
            Sitemap
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24 px-4">
            Find all the pages and resources available on Kahana.
          </p>
        </div>
      </section>

      {/* Sitemap section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Main Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-600 hover:text-[#3B675E]">Home</Link></li>
                <li><Link href="/about" className="text-gray-600 hover:text-[#3B675E]">About</Link></li>
                <li><Link href="/pricing" className="text-gray-600 hover:text-[#3B675E]">Pricing</Link></li>
                <li><Link href="/explore" className="text-gray-600 hover:text-[#3B675E]">Explore</Link></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Product Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/product/community-engagement" className="text-gray-600 hover:text-[#3B675E]">Community Engagement</Link></li>
                <li><Link href="/product/recurring-revenue" className="text-gray-600 hover:text-[#3B675E]">Recurring Revenue</Link></li>
                <li><Link href="/product/collaboration-tools" className="text-gray-600 hover:text-[#3B675E]">Collaboration Tools</Link></li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/resources" className="text-gray-600 hover:text-[#3B675E]">All Resources</Link></li>
                <li><Link href="/blog" className="text-gray-600 hover:text-[#3B675E]">Blog</Link></li>
                <li><Link href="/faq" className="text-gray-600 hover:text-[#3B675E]">FAQ</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SitemapPage;
