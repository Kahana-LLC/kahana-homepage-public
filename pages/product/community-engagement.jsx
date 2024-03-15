import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Footer from '../../components/Footer';
import NavbarDup from '../../components/NavbarDup';
import Image from 'next/image';
import commentThread from '../../assets/images/commentThread.gif';
import commentNotification from '../../assets/images/commentNotification.gif';
import keepCustomersInformed from '../../assets/images/keepCustomersInformed.gif';

const features = [
  {
    title: 'Connect with Your Customers',
    description:
      'Each hub has a comment thread associated with it, where you can allow customers to ask questions, interact with one another, and share feedback/suggestions.',
    image: commentThread,
    alt: 'Comment thread in Kahana hubs where customers can connect',
  },
  {
    title: 'Stay in the Loop',
    description:
      'Receive regular email notifications (limited to one per hour to spare your inbox) when new comments are left in your hub or a hub you\'re a part of so that you can stay informed and keep the conversation going.',
    image: commentNotification,
    alt: 'Email notification when your Kahana hub has a new comment',
  },
  {
    title: 'Keep Customers Informed & Happy',
    description:
      'Leave comments to notify customers of any updates you make to the hub, answer questions, and respond to requests.',
    image: keepCustomersInformed,
    alt: 'Leave comments in your hub when you make an update',
  },
];

const CommunityEngagement = () => {
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
        <title>Build communities through hubs of knowledge</title>
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
            Build communities through hubs of knowledge
          </h1>
          <p className="text-lg mb-8 md:px-12 lg:px-24">
            Collaborate with customers to gather feedback and create an engaging environment where customers can connect with one another, all in one place.
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
      <section className="overflow-hidden">
        {tabOrientation === 'vertical' ? (
          <div className="mt-8 space-y-12 mx-4">
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
                    alt={feature.alt}
                    priority
                    sizes="(min-width: 1024px) 45rem, (min-width: 640px) 100vw, 90vw"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-8 space-y-6">
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

export default CommunityEngagement;
