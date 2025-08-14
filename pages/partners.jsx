import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

const conceptCards = [
  {
    title: "Enterprise Solutions",
    description: "Help organizations transform their enterprise browsing experience",
    details: [
      {
        title: "Strategic Partnership",
        explanation: "Work with our team to deliver enterprise solutions",
        technical: "Full support and resources"
      },
      {
        title: "Long-term Relationship",
        explanation: "Build lasting relationships with enterprises",
        technical: "Ongoing collaboration and support"
      }
    ]
  }
];

export default function Partners() {
  return (
    <>
      <Head>
        <title>Partners | Kahana - Enterprise Browser Solutions</title>
        <meta
          name="description"
          content="Partner with Kahana to deliver enterprise-grade browser solutions. Join our partner community and help organizations transform their browsing experience with secure, efficient, and modern enterprise solutions."
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-kahana-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Join the Kahana Partner Community
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with us to help organizations transform their enterprise browsing experience. Together, we can shape the future of secure and productive workplaces.
            </p>
          </div>
        </div>
      </section>

      {/* Evolution Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Partnership Card */}
            <div className="bg-gradient-to-br from-gray-50 to-kahana-primary-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kahana-primary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Traditional Partnerships</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Traditional partnerships often feel transactional and lack the personal touch needed for true collaboration.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Impersonal relationships</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited support and resources</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>One-size-fits-all approach</span>
                </li>
              </ul>
            </div>

            {/* Kahana Partnership Card */}
            <div className="bg-gradient-to-br from-gray-50 to-kahana-secondary-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-kahana-secondary-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-kahana-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Kahana Partnership</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our partnership program focuses on building lasting relationships and providing the support you need to succeed.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Dedicated support team</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Comprehensive resources</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-kahana-secondary mr-2">✓</span>
                  <span>Flexible collaboration</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Partner Benefits Card */}
          <div className="mt-8 bg-gradient-to-r from-kahana-primary-50 to-kahana-secondary-50 rounded-2xl p-8 border border-kahana-primary-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-kahana-primary to-kahana-secondary rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Join Our Community</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Be part of a community that's shaping the future of enterprise browsing. Together, we can help organizations create more secure and productive workplaces.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Dedicated Support</h4>
                <p className="text-gray-600">Personal guidance and resources</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Flexible Partnership</h4>
                <p className="text-gray-600">Tailored to your needs</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Growth Together</h4>
                <p className="text-gray-600">Long-term success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Explore Partnership Opportunities?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We're excited to learn about your vision and discuss how we can work together to create value for enterprises.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-kahana-primary hover:bg-kahana-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-kahana-primary transition-colors duration-200"
            
          >
            <span >
              Get in Touch
            </span>
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
} 