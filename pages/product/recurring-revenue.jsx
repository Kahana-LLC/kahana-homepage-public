import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer';
import NavbarDup from '../../components/NavbarDup';
import Image from 'next/image';
import bulkUpload from '../../assets/images/bulkUpload.gif';
import connectStripe from '../../assets/images/connectStripe.gif';

const features = [
  {
    title: 'Bulk Upload',
    description:
      'Add existing materials you\'ve already created or curated (e.g., PDFs, Notion pages, Google Docs, web pages, videos, etc.) and create notes with ease to quickly build repositories of knowledge.',
    image: bulkUpload,
  },
  {
    title: 'Connect to Stripe',
    description:
      'Connect to a new or existing Stripe account so that you can securely and seamlessly accept payments that go straight to your bank account for access to your hubs.',
    image: connectStripe,
  },
  {
    title: 'Choose Your Price Point & Payment Type',
    description:
      'For each hub, choose how much you want to charge and whether it\'s a one-time payment or a recurring subscription to access.',
    image: '/wiki-feature-3.png',
  },
  {
    title: 'Start Earning!',
    description:
      'After you set your payment terms, a paywall will automatically be generated for you that you can begin sharing! Be sure to add a title, cover photo, and description to each hub to improve the experience for potential customers.',
    image: '/wiki-feature-3.png',
  },
];

const RecurringRevenue = () => {
  const [tabOrientation, setTabOrientation] = useState('vertical');

  useEffect(() => {
    const lgMediaQuery = window.matchMedia('(min-width: 1024px)');

    function onMediaQueryChange({ matches }) {
      setTabOrientation(matches ? 'horizontal' : 'vertical');
    }

    onMediaQueryChange(lgMediaQuery);
    lgMediaQuery.addEventListener('change', onMediaQueryChange);

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Turn your knowledge into recurring revenue</title>
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
      <section className="py-16 md:py-18">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 md:px-12 lg:px-24">
            Turn your knowledge into recurring revenue
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24">
            Build dynamic hubs of all your best data, templates, insights, research, methodologies, and best practices. It&apos;s like charging for access to your brain.
          </p>
          <a
            href="https://app.kahana.co/signup"
            className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block"
          >
            Get Kahana free
          </a>
        </div>
      </section>

      {/* Features section */}
      <section className="overflow-hidden py-16 md:py-18">
        {tabOrientation === 'vertical' ? (
          <div className="mt-16 space-y-12 mx-4">
            {features.map((feature, index) => (
              <div key={index} className="space-y-6">
                <div className="max-w-[45rem] mx-auto">
                  <h2 className="text-2xl font-semibold text-black">
                    {feature.title}
                  </h2>
                  <p className="mt-2 text-lg text-black">
                    {feature.description}
                  </p>
                </div>
                <div className="max-w-[45rem] mx-auto">
                  <Image
                    className="w-full"
                    src={feature.image}
                    alt=""
                    priority
                    sizes="(min-width: 1024px) 45rem, (min-width: 640px) 100vw, 90vw"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-16 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="space-y-6 flex flex-col lg:flex-row lg:space-x-6">
                <div className="max-w-[70rem] mx-auto rounded-lg bg-gray-100 p-4">
                  <div className="flex items-center space-x-6">
                    <div className="w-1/3 pl-4">
                      <h2 className="text-2xl font-semibold text-black">
                        {feature.title}
                      </h2>
                      <p className="mt-2 text-lg text-black">
                        {feature.description}
                      </p>
                    </div>
                    <div className="w-2/3">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 70rem, (min-width: 640px) 100vw, 90vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default RecurringRevenue;
