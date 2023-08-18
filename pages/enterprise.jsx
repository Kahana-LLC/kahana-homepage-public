import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';

const EnterprisePage = () => {
  return (
    <div>
      <Head>
        <title>Kahana - How enterprises generate recurring revenue</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KQHFL9605P');
            `,
          }}
        />
      </Head>

      <div className="sticky top-0 z-50">
        <NavbarDup />
      </div>

      {/* Hero section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">
            Transform Your Business with Kahana Enterprise
          </h1>
          <p className="text-lg mb-8">
            Monetize your content and research like never before.
          </p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full">
            Get Started
          </button>
        </div>
      </section>

      {/* Feature section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Why Choose Kahana Enterprise?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Image
                src="/feature-1.png"
                alt="Feature 1"
                width={64}
                height={64}
              />
              <h3 className="text-xl font-semibold mt-4">Subscription Revenue</h3>
              <p className="mt-2">
                Generate recurring revenue by monetizing your knowledge and expertise through subscriptions.
              </p>
            </div>
            {/* Repeat similar blocks for other features */}
          </div>
        </div>
      </section>

      {/* Testimonial section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic mb-4">
                "Kahana has revolutionized the way we do business. Our subscription revenue has skyrocketed!"
              </p>
              <p className="font-semibold">John Doe, CEO at TechCorp</p>
            </div>
            {/* Repeat similar blocks for other testimonials */}
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="mb-4">Have questions? Reach out to our team.</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full">
            Contact Us
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterprisePage;
