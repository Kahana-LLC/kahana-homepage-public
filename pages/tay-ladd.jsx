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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
                Why access my hub?
              </h2>
              <p className="text-lg mb-8 md:px-12 lg:px-24">
                As both a corporate lawyer at a large firm and a TikTok creator, I&apos;ve negotiated dozens of brand deals and turned down thousands of campaigns. I have the unique perspective and expertise to help you attract the influencers you want to work with and protect yourself in the process. Simply put, you can&apos;t get this information anywhere else.
              </p>
            </div>
            <div className="text-center mt-8">
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
                      width="512px"
                      height="512px"
                      viewBox="0 0 24 24"
                      id="icons"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05,.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c-21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" 
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
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
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
