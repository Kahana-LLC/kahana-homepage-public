import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';
import OnDemandHub from '../assets/images/expertsHub.webp';
import Link from 'next/link';

const features = [
  {
    title: '1. Choose how many hubs you want',
    description: (
      <span>
        Tell us how many hubs you want to have (e.g., how many topics you'd like to create digital products about). Choose from the options below, and check out securely through Stripe.
      </span>
    ),
  },
  {
    title: '2. Set up your kickoff call & interview(s)',
    description: (
      <span>
        Within 24 hours, a member of our team will reach out to you to schedule your kickoff call. This is where we&apos;ll learn more about the hubs you&apos;d like to create, create your Kahana account to host your hubs, schedule any interviews so that you can share all the knowledge you want your hubs to have with us, and gather necessary information (e.g., your brand colors) so we can build your hubs for you.
      </span>
    ),
  },
  {
    title: '3. Receive your hub(s) within 5-10 business days',
    description: (
      <span>
        From there, we&apos;ll take care of the rest! Our team will handle all the asset creation, graphic design, and formatting you don&apos;t want to touch, and we won&apos;t stop making revisions until you are fully satisfied. The end result is that you receive delightful, easily digestible hubs with all of your knowledge that you can charge for access to and use to start generating revenue. 
        <br />
        <br />
        <i>Note:</i> After your hubs are delivered to you, you will be responsible for making future updates to the hubs that were created (e.g., adding information based on feedback from customers).
      </span>
    ),
  },
];

export default function AffiliateProgramPage() {
  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      setShowImage(viewportWidth > 1150);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Kahana Affiliate Program</title>
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
      <div>
        <div className="sticky top-0 z-50">
          <NavbarDup />
        </div>
       {showImage && (
          <section className="relative py-0 px-0 sm:px-0 lg:px-0 bg-white">
            <Image
              src={OnDemandHub}
              alt="Example of a Created Hub"
              layout="responsive"
              objectFit="cover"
              className="hidden md:block"
            />
          </section>
        )}
        {/* It pays to be a partner section */}
        <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white ${showImage ? 'mt-0' : 'mt-4'}`}>
          <div className="max-w-7xl mx-auto text-center" style={{ padding: showImage ? '0' : '2rem 0' }}>
            <h2 className={`text-3xl font-bold ${showImage ? 'mb-2' : 'mb-4'} text-gray-900`}>
              Want to turn your knowledge into digital assets but don&apos;t have the time or energy?
            </h2>
            <p className="text-gray-700">
              We&apos;ve got you covered. We&apos;ll build Kahana hubs for you so that you can start earning passive income: It&apos;s like ordering Domino&apos;s for recurring revenue. 
            </p>
            {/* <a href="https://app.getreditus.com/marketplace/kahana" className="block mt-8" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-[#038270] text-white rounded-md shadow-md hover:bg-[#046856]">
                Sign Up Now
              </button>
            </a> /*}
          </div>
        </section> 
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              How it works:
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Your feature section */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4"
                >
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonial */}
        <section className="py-16 md:py-18">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What our clients say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
              {/* Add "px-4 md:px-0" to the grid container */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg italic mb-4">
                  This is incredible! &quot;You took my brain and turned it into a phenomenal asset. I could not do this at all without Kahana - I wouldn&apos;t even know where to start.&quot;
                </p>
                <p className="font-semibold">Tay L., Corporate Lawyer, Creator & Brand Deal Expert</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg italic mb-4">
                  &quot;It&apos;s finally out of my head! I&apos;ve been wanting to build digital products for months and couldn&apos;t make any progress; Kahana streamlined it and made it so much easier.&quot;
                </p>
                <p className="font-semibold">Gregory G., Executive Coach & Business Consultant</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg italic mb-4">
                  &quot;I can honestly say that I&apos;ve never worked with a team that was as helpful and dedicated as the team at Kahana. If you&apos;re looking for a platform that helps you achieve your goals, then Kahana is the answer.&quot;
                </p>
                <p className="font-semibold">Olivia M., Brand Consultant & Manifestation Coach</p>
              </div>
              {/* Repeat similar blocks for other testimonials */}
            </div>
          </div>
        </section>
        {/* New "Sign up below" Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Turn your knowledge into revenue
            </h2>
            <p className="text-gray-700">
              Choose how many hubs you&pos;d like to have, and we&apos;ll take care of the rest. 
            </p>
            <div className="mt-8 space-y-4">
              <a href="https://js.stripe.com/v3/buy-button.js">
                <!-- First button -->
                <stripe-buy-button
                  buy-button-id="buy_btn_1NjYOPGAiwY6zSuoV2cONxWL"
                  publishable-key="pk_live_51H51RhGAiwY6zSuoffxrMvDE6GqlWDlPPFSM6ZkJznQY32CTgnMTxDZyysGekts6ttGIqpUHKenu0MdUVyvgKza900ezNceUSp"
                >
                </stripe-buy-button>
              </a>
        
              <a href="https://js.stripe.com/v3/buy-button.js">
                <!-- Second button -->
                <stripe-buy-button
                  buy-button-id="buy_btn_1NjYWeGAiwY6zSuoJeliMzWI"
                  publishable-key="pk_live_51H51RhGAiwY6zSuoffxrMvDE6GqlWDlPPFSM6ZkJznQY32CTgnMTxDZyysGekts6ttGIqpUHKenu0MdUVyvgKza900ezNceUSp"
                >
                </stripe-buy-button>
              </a>
        
              <a href="https://js.stripe.com/v3/buy-button.js">
                <!-- Third button -->
                <stripe-buy-button
                  buy-button-id="buy_btn_1NjYXRGAiwY6zSuojH6QtbY7"
                  publishable-key="pk_live_51H51RhGAiwY6zSuoffxrMvDE6GqlWDlPPFSM6ZkJznQY32CTgnMTxDZyysGekts6ttGIqpUHKenu0MdUVyvgKza900ezNceUSp"
                >
                </stripe-buy-button>
              </a>
        
              <a href="https://js.stripe.com/v3/buy-button.js">
                <!-- Fourth button -->
                <stripe-buy-button
                  buy-button-id="buy_btn_1NjYXtGAiwY6zSuou9GIordG"
                  publishable-key="pk_live_51H51RhGAiwY6zSuoffxrMvDE6GqlWDlPPFSM6ZkJznQY32CTgnMTxDZyysGekts6ttGIqpUHKenu0MdUVyvgKza900ezNceUSp"
                >
                </stripe-buy-button>
              </a>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
