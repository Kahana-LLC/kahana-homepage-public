import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';
import OnDemandHub from '../assets/images/expertsHub.png';
import Link from 'next/link';

const features = [
  {
    title: '1. Choose how many hubs you want',
    description: (
      <span>
        Tell us how many hubs you want to have (e.g., how many topics you&apos;d like to create digital products about). Choose from the options below, and check out securely through Stripe. Within 24 hours, a member of our team will reach out to you to schedule your kickoff call.
      </span>
    ),
  },
  {
    title: '2. Set up your kickoff call & interview(s)',
    description: (
      <span>
        This is where we&apos;ll learn more about the hubs you&apos;d like to create, create your Kahana account to host your hubs, schedule any interviews so that you can share all the knowledge you want your hubs to have with us, and gather necessary information (e.g., your brand colors) so we can build your hubs for you.
      </span>
    ),
  },
  {
    title: '3. Receive your hub(s) within 5-10 business days',
    description: (
      <span>
        From there, we&apos;ll take care of the rest! Our team will handle all the asset creation, graphic design, and formatting you don&apos;t want to touch, and we won&apos;t stop making revisions until you are fully satisfied. The end result is that you receive delightful, easily digestible hubs with all of your knowledge that you can charge for access to and use to start generating revenue.
      </span>
    ),
  },
];

const faqs = [
  {
    question: 'What does the time commitment look like from my end?',
    answer: 'No more than 1-5 hours, depending on how many hubs you order. Our process is designed to limit the amount of time you have to spend as much as possible: the only time commitment from your end is the kickoff call to outline the plan for your hub(s) and create your Kahana account, interviews where you share all of the knowledge you want to include in your hub(s), and reviewing your hub(s) once they\'re completed.',
  },
  {
    question: 'How much does this cost?',
    answer: (
      <span>
        We have a volume-based pricing model, where the price per hub decreases the more you order:
        <br />
        <br />
        - 1 Hub: $4,000
        <br />
        - 2 Hubs: $7,000 ($3,500 per hub)
        <br />
        - 3 Hubs: $9,000 ($3,000 per hub)
        <br />
        - 4 Hubs: $10,000 ($2,500 per hub)
      </span>
    ),
  },
  {
    question: 'Can I see some examples of hubs that have been created?',
    answer: (
      <span>
        Certainly! These hubs below will provide you with an idea of what you can expect to be created for you:
        <br />
        <br />
        -{' '}<a href="https://app.kahana.co/hub/TEdBTfY10Dd9H7QIBgQc" target="_blank" rel="noopener noreferrer" className="text-[#038270] font-medium">
          How to Work with Influencers 101
        </a>
        <br />
        -{' '}<a href="https://app.kahana.co/hub/elQ1iO0Nbb1wMu6u3dDj" target="_blank" rel="noopener noreferrer" className="text-[#038270] font-medium">
         Vision Story: Build the Life and Business You Deserve
        </a>
      </span>
    ),
  },
  {
    question: 'What happens after I receive my hubs?',
    answer: (
      <span>
        Once you are fully satisfied with your hubs and they have been delivered to you, the project is complete and the hubs are yours to keep. You can market them, share the link with colleagues, etc. so that you can begin making revenue.
        <br />
        <br />
        <i>Note</i>: If need help getting your hubs in front of more potential customers, feel free to check out our{' '}
        <a href="https://blog.kahana.co/boost-program/" target="_blank" rel="noopener noreferrer" className="text-[#038270] font-medium">
          Boost Program
        </a>
        ,{' '}an email marketing service we provide for individuals and organizations who are interested in expanding the reach of their hubs.
      </span>
    ),
  },
  {
    question: 'What if I want to make updates after the project is complete?',
    answer: 'After your hubs are delivered to you, you will be responsible for making future updates to the hubs that were created (e.g., adding information based on feedback from customers). Our team will show you how to do this when we hand the hubs off to you so that you are comfortable making updates on your own.',
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
        <title>Hubs On-Demand</title>
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
        <script async
          src="https://js.stripe.com/v3/buy-button.js">
        </script>
      </Head>
      
      <div>
        <style jsx>{`
        /* CSS for limiting button width */
        .button-container {
          display: flex;
          justify-content: center;
        }

        .stripe-button {
          width: 100%;
          max-width: 150px;
        }
        `}</style>
        
        <div className="sticky top-0 z-50">
          <NavbarDup />
        </div>
       {showImage && (
          <section className="relative py-0 px-0 sm:px-0 lg:px-0 bg-white">
            <div className="flex justify-center">
              <Image
                src={OnDemandHub}
                alt="Example of a Finished Hub"
                layout="fixed"
                height={500}
                className="hidden md:block"
              />
            </div>
          </section>
        )}
        {/* Hero section */}
        <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white ${showImage ? 'mt-0' : 'mt-4'}`}>
          <div className="max-w-7xl mx-auto text-center" style={{ padding: showImage ? '0' : '2rem 0' }}>
            <h2 className={`text-3xl font-bold ${showImage ? 'mb-2' : 'mb-4'} text-gray-900`}>
              Want to turn your knowledge into digital assets but don&apos;t have the time or energy?
            </h2>
            <p className="text-gray-700">
              We&apos;ve got you covered. We&apos;ll build Kahana hubs for you so that you can start earning passive income: It&apos;s like ordering Domino&apos;s for recurring revenue. 
            </p>
          </div>
        </section> 
        {/* How it works section */}
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
        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              Most frequently asked questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    className="w-full flex justify-between items-center p-4 focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-lg font-medium text-gray-900 text-left flex-1">
                      {faq.question}
                    </span>
                    <svg
                      className={`${
                        activeIndex === index ? 'transform rotate-180' : ''
                      } w-5 h-5 text-gray-500 flex-shrink-0`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.293a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L10 12.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {activeIndex === index && (
                    <div className="p-4 bg-gray-50">
                      <p className="text-gray-500">{faq.answer}</p>
                    </div>
                  )}
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
                  &quot;This is incredible! You took my brain and turned it into a phenomenal asset. I could not do this at all without Kahana - I wouldn&apos;t even know where to start.&quot;
                </p>
                <p className="font-semibold">Tay L., Corporate Lawyer & Brand Deal Consultant</p>
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
        {/* CTA section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Turn your knowledge into revenue
            </h2>
            <p className="text-gray-700">
              Choose how many hubs you&apos;d like to have, and we&apos;ll take care of the rest. 
            </p>
            <div className="mt-4 space-y-4 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
              {/* Start adding different pricing plans from here  */}
              <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6 text-[#038270]">
                    1 Hub
                  </h2>
                  <p className="mt-8">
                    <span className="text-4xl font-bold tracking-tight text-[#038270]">
                      $4,000
                    </span>{' '}
                    <span className="text-base font-medium text-gray-500">
                      /hub
                    </span>
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8 button-container">
                  <stripe-buy-button
                    buy-button-id="buy_btn_1NjYOPGAiwY6zSuoV2cONxWL"
                    publishable-key="pk_live_51H51RhGAiwY6zSuoffxrMvDE6GqlWDlPPFSM6ZkJznQY32CTgnMTxDZyysGekts6ttGIqpUHKenu0MdUVyvgKza900ezNceUSp"
                  ></stripe-buy-button>
                </div>
              </div>
              <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6 text-[#038270]">
                    2 Hubs
                  </h2>
                  <p className="mt-8">
                    <span className="text-4xl font-bold tracking-tight text-[#038270]">
                      $3,500
                    </span>{' '}
                    <span className="text-base font-medium text-gray-500">
                      /hub
                    </span>
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8 button-container">
                  <stripe-buy-button
                    buy-button-id="buy_btn_1NjYWeGAiwY6zSuoJeliMzWI"
                    publishable-key="pk_live_51H51RhGAiwY6zSuoffxrMvDE6GqlWDlPPFSM6ZkJznQY32CTgnMTxDZyysGekts6ttGIqpUHKenu0MdUVyvgKza900ezNceUSp"
                  ></stripe-buy-button>
                </div>
              </div>
              <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6 text-[#038270]">
                    3 Hubs
                  </h2>
                  <p className="mt-8">
                    <span className="text-4xl font-bold tracking-tight text-[#038270]">
                      $3,000
                    </span>{' '}
                    <span className="text-base font-medium text-gray-500">
                      /hub
                    </span>
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8 button-container">
                   <stripe-buy-button
                    buy-button-id="buy_btn_1NjYXRGAiwY6zSuojH6QtbY7"
                    publishable-key="pk_live_51H51RhGAiwY6zSuoffxrMvDE6GqlWDlPPFSM6ZkJznQY32CTgnMTxDZyysGekts6ttGIqpUHKenu0MdUVyvgKza900ezNceUSp"
                  ></stripe-buy-button>
                </div>
              </div>
              <div className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
                <div className="p-6">
                  <h2 className="text-lg font-medium leading-6 text-[#038270]">
                    4 Hubs (Best Value)
                  </h2>
                  <p className="mt-8">
                    <span className="text-4xl font-bold tracking-tight text-[#038270]">
                      $2,500
                    </span>{' '}
                    <span className="text-base font-medium text-gray-500">
                      /hub
                    </span>
                  </p>
                </div>
                <div className="px-6 pt-6 pb-8 button-container">
                  <stripe-buy-button
                    buy-button-id="buy_btn_1NjYXtGAiwY6zSuou9GIordG"
                    publishable-key="pk_live_51H51RhGAiwY6zSuoffxrMvDE6GqlWDlPPFSM6ZkJznQY32CTgnMTxDZyysGekts6ttGIqpUHKenu0MdUVyvgKza900ezNceUSp"
                  ></stripe-buy-button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Become an affiliate section */}
        <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white`}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`text-3xl font-bold text-gray-900`}>
              Become an affiliate
            </h2>
            <p className="mt-4 text-gray-700">
              Refer people to Kahana and earn up to a 30% commission.
            </p>
            <Link href="/affiliates">
              <a className="block mt-8">
                <button className="px-6 py-2 bg-[#3B675E] text-white rounded-md shadow-md">
                  Learn more
                </button>
              </a>
            </Link>
          </div>
        </section> 
        <Footer />
      </div>
    </>
  );
}
