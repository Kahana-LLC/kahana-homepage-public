import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const RequestInvoicePage = () => {
  return (
    <div>
      <Head>
        <title>Request an Invoice - Kahana</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>

      {/* Hero section */}
      <section className="py-16 md:py-18">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 md:px-12 lg:px-24">
            Request an Invoice
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24 px-4">
            Need an invoice for your Kahana subscription? Fill out the form below and we&apos;ll get back to you shortly.
          </p>
        </div>
      </section>

      {/* Contact form section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Send us your request</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3B675E] focus:ring-[#3B675E]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3B675E] focus:ring-[#3B675E]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#3B675E] focus:ring-[#3B675E]"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-[#3B675E] text-white py-2 px-4 rounded-md hover:bg-[#024324] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#3B675E]"
                >
                  Send Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RequestInvoicePage;
