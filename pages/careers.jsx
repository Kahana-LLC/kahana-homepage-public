import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Careers() {
  return (
    <>
      <Head>
        <title>Careers at Kahana</title>
        <meta
          name="description"
          content="Join our team at Kahana and help make the future of work more ergonomic and productive."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Join Our Team</h1>
            <p className="mt-4 text-xl text-gray-600">
              Help us make the future of work more ergonomic and productive.
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 p-8 rounded-lg text-center border border-kahana-primary/30">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-gray-600 mb-8">
                We currently have no open positions, but we're always looking for talented individuals 
                who are passionate about creating more ergonomic and productive work environments. 
                If you're excited about transforming how people work and making technology work better for humans, 
                we'd love to hear from you.
              </p>
              <Link href="/contact">
                <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors"
                  style={{
                    backgroundColor: '#0d9488 !important',
                    color: 'white !important',
                    borderColor: '#0d9488 !important',
                    fontWeight: 'bold'
                  }}
                >
                  <span style={{ color: 'white !important', fontWeight: 'bold' }}>
                    Contact Us
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 