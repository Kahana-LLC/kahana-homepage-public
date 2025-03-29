import React from 'react';
import Head from 'next/head';
import NavbarDup from '../components/NavbarDup';
import Script from 'next/script';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Let's Connect | Kahana Browser</title>
        <meta name="description" content="We'd love to hear from you and explore how Kahana can enhance your browsing experience." />
      </Head>

      <NavbarDup />

      <main className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h1>
            <p className="mt-2 text-lg text-gray-600 max-w-xl mx-auto">
              We're excited to learn more about your needs and show you how Kahana can transform your browsing experience. Share your thoughts below, and we'll get back to you soon!
            </p>
          </div>

          <iframe
            data-tally-src="https://tally.so/r/wMVd0l"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Get In Touch"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </main>

      <Script 
        src="https://tally.so/widgets/embed.js"
        strategy="afterInteractive"
      />
    </>
  );
} 