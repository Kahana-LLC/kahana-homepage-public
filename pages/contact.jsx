import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../components/Footer';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us | Kahana</title>
        <meta
          name="description"
          content="Get in touch with Kahana. Contact us at info@kahana.co for any inquiries."
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions? We'd love to hear from you. Reach out to us at info@kahana.co
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-6">
                For general inquiries, partnership opportunities, or any other questions, please email us at:
              </p>
              <a 
                href="mailto:info@kahana.co" 
                className="text-[#3B675E] text-xl font-semibold hover:text-[#2A4A3F] transition-colors"
              >
                info@kahana.co
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sales Inquiries
              </h3>
              <p className="text-gray-600 mb-4">
                For sales-related questions or to schedule a demo, please visit our sales page.
              </p>
              <Link href="/sales">
                <button className="bg-[#3B675E] text-white px-6 py-2 rounded-md hover:bg-[#2A4A3F] transition-colors">
                  Contact Sales
                </button>
              </Link>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Support
              </h3>
              <p className="text-gray-600 mb-4">
                For technical support or product-related questions, please visit our support page.
              </p>
              <Link href="/support">
                <button className="bg-[#3B675E] text-white px-6 py-2 rounded-md hover:bg-[#2A4A3F] transition-colors">
                  Get Support
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact; 