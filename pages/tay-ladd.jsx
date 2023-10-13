import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';
import OnDemandHub from '../assets/images/expertsHub.png';
import Link from 'next/link';
import Tay from '../assets/headshots/tayLaddHeadshot.png'

const faqs = [
  {
    question: 'What do I get when I pay for access to this hub?',
    answer: 'This includes a customizable brand deal contract that protects you, outreach best practices, a checklist of legal do\'s and don\'ts, coaching on what creators look for, and more, and it\'s updated on an ongoing basis.',
  },
  {
    question: 'How much does this cost?',
    answer: 'Normally, my billing rate is over $1,000/hour, but you can have lifetime access to this hub of all my knowledge for $897.'
  },
  {
    question: 'What if I outsource my influencer campaigns to an agency?',
    answer: 'This is information that you still need to know - and you need to make sure the agency you\'re working with knows it, too. The agency you\'re working with is a reflection of your brand, and any campaign they construct should follow the best practices I share.'
  },
  {
    question: 'What if I want to work with a law firm instead?',
    answer: 'Big law firms rarely, if ever, get involved with this type of work, and even when they do, they\'re not creators themselves, so they don\'t understand important nuances you have to keep in mind to make contracts mutually beneficial.',
  },
];

export default function TayLaddPage() {
  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Tay Ladd: How to Work with Influencers 101</title>
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
        {/* Reditus affiliate tracking script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, p, t) {
                w.gr = w.gr || function() {
                  w.gr.q = w.gr.q || [];
                  w.gr.q.push(arguments);
                };
                p = d.getElementsByTagName(s)[0];
                t = d.createElement(s);
                t.async = true;
                t.src = "https://app.getreditus.com/gr.js?_ce=90";
                p.parentNode.insertBefore(t, p);
              })(window, document, "script");
              gr("track", "pageview");
            `,
          }}
        />
        {/* Stripe button script */}
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
        `}</style>
        
        <div className="sticky top-0 z-50">
          <NavbarDup />
        </div>

        {/* Hero section */}
        <section className="py-16 md:py-18">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4 md:px-12 lg:px-24">
              Run influencer campaigns that actually work
            </h1>
            <p className="text-lg mb-8 md:px-12 lg:px-24">
              All the knowledge and tools you need to attract influencers for your brand and avoid serious legal mistakes along the way
            </p>
            <a
              href="https://app.kahana.co/hub/TEdBTfY10Dd9H7QIBgQc"
              className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
            >
              Start closing brand deals
            </a>
            <div className="mt-8">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href="https://app.kahana.co/hub/TEdBTfY10Dd9H7QIBgQc" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={OnDemandHub}
                    alt="Kahana Hub"
                    width={750}
                    height={750}
                    layout="responsive"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-18">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
                  Why access my hub?
                </h2>
                <p className="text-lg mb-8 md:px-12 lg:px-24">
                  As both a corporate lawyer at a large firm and a TikTok creator, I&apos;ve negotiated dozens of brand deals and turned down thousands of campaigns. I have the unique perspective and expertise to help you attract the influencers you want to work with and protect yourself in the process. Simply put, you can&apos;t get this information anywhere else.
                </p>
              </div>
              <div className="text-center">
                <div className="space-y-4">
                  <div className="flex justify-center items-center">
                    <Image
                      src={Tay}
                      alt="Tay Ladd: Corporate Lawyer & TikTok Creator"
                      width={400}
                      height={400}
                    />
                  </div>
                  <p className="text-lg font-bold">Tay Ladd: Corporate Lawyer & TikTok Creator</p>
                  <div className="flex justify-center space-x-5">
                    <a
                      href="https://www.tiktok.com/@thecorporatedogmom"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">TikTok</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-8 w-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 10a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 14a9 9 0 019-9M12 14a9 9 0 01-9-9"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 20a2 2 0 002 2 2 2 0 002-2"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/themaladd/"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-8 w-8"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2h12z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M17 10l-5 5m0 0l-5-5m5 5V10"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white`}>
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`text-3xl font-bold text-gray-900`}>
              Become the top 1% of brands that influencers want to work with
            </h2>
            <p className="mt-4 text-lg mb-8 md:px-12 lg:px-24">
              Nearly all businesses fail to attract influencers for 2 reasons: 
              <br />
              <br />
              1. They don&apos;t understand what influencers actually want
              <br />
              2. They lack the proper legal knowledge to put good deals together
              <br />
              <br />
              Don&apos;t be like 99% of businesses. Access my knowledge - a unique blend of big law expertise and the perspective of a creator - to create campaigns influencers want to be a part of.
            </p>
            <a
              href="https://app.kahana.co/hub/TEdBTfY10Dd9H7QIBgQc"
              className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
            >
              Start closing brand deals
            </a>
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

        <Footer />
      </div>
    </>
  );
}
