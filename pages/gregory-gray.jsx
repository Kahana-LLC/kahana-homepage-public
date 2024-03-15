import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';
import VisionStoryHub from '../assets/images/visionStoryHub.png';
import Link from 'next/link';
import Greg from '../assets/headshots/gregGrayHeadshot.jpeg'

const faqs = [
  {
    question: 'What do I get when I pay for access to this hub?',
    answer: 'You get access to an in-depth, step-by-step breakdown of the exact same Vision Story process I share with my clients. This process will help give you a clear direction and goal for the future that sets the foundation for all other strategic decisions and actions.'
  },
  {
    question: 'How much does this cost?',
    answer: 'Normally, my coaching rate is thousands of dollars a month, but you can have lifetime access to this hub of the same knowledge I share with my clients for $197.'
  },
  {
    question: 'How should I use this hub?',
    answer: 'As you go through this hub, you should grab a pen and some paper and use the steps I share to create your vision.'
  },
];

export default function GregoryGrayPage() {
  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Gregory Gray: Build the Life and Business You Deserve</title>
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
        <section className="pt-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-5xl font-bold mb-4 md:px-12 lg:px-24">
              Liberate your business from chaos
            </h1>
            <p className="text-lg mb-8 md:px-12 lg:px-24">
              Nothing is more frustrating than pouring your heart and soul into your business and not getting the results you&apos;re looking for. It&apos;s time to build the business - and life - you deserve.  
            </p>
            <a
              href="https://app.kahana.co/hub/elQ1iO0Nbb1wMu6u3dDj"
              className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
            >
              Unlock your business&apos; potential
            </a>
            <div className="mt-8">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href="https://app.kahana.co/hub/elQ1iO0Nbb1wMu6u3dDj" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={VisionStoryHub}
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

        <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
              <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl">
                  Why access my hub?
                </h2>
                <p className="text-lg mb-8 md:px-12 lg:px-24">
                  I&apos;ve coached hundreds of businesses who have been in your shoes, and nearly all of them struggled because of the same problem: they lacked a clear vision. After using the exact same Vision Story process I&apos;m sharing in this hub, my clients were able to thrive, many of them 10xing their revenue. My goal is simple: help you unlock your business and give yourself the life you deserve. 
                </p>
              </div>
              <div className="text-center">
                <div className="space-y-4">
                  <div className="flex justify-center items-center">
                    <Image
                      src={Greg}
                      alt="Gregory Gray: Executive Coach & Business Consultant"
                      width={400}
                      height={400}
                    />
                  </div>
                  <p className="text-lg font-bold">Gregory Gray: Executive Coach & Business Consultant</p>
                  <div className="flex justify-center space-x-5">
                    <a
                      href="https://www.linkedin.com/in/gregorygray00/"
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
          </div>
        </section>

        {/* Testimonial section */}
        <section className="py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">What my clients say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0">
              {/* Add "px-4 md:px-0" to the grid container */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg italic mb-4">
                  &quot;Greg is a great leader who has extensive business knowledge with a proven track record who can take your business to a level you haven&apos;t envisioned, no matter the industry. Greg has the perfect leadership insights on how to establish the foundation for your vision.&quot;
                </p>
                <p className="font-semibold">Davy Clay, Owner of Dental Claim Support</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg italic mb-4">
                  &quot;Greg is driven by purpose, and his purpose is to help the business owners that he works with to grow and to really live! You matter to Greg.&quot;
                </p>
                <p className="font-semibold">Wayne Herring, Owner of Herring Coach and Business Builder Camp</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg italic mb-4">
                  &quot;I&apos;ve been working with Greg for over four years, and he is by far the best coach I&apos;ve had. His business and life wisdom are at a depth you rarely see, but even rarer is his ability to communicate that wisdom in ways I can easily understand.&quot;
                </p>
                <p className="font-semibold">Aaron Wyssman, Ozarks Remodeling and Design</p>
              </div>
              {/* Repeat similar blocks for other testimonials */}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`text-3xl font-bold text-gray-900`}>
              Take your business to the next level
            </h2>
            <p className="mt-4 text-lg mb-8 md:px-12 lg:px-24">
              Join hundreds of business owners who have used this Vision Story process to fulfill their purpose and build both the business and lifestyle they desire. 
            </p>
            <a
              href="https://app.kahana.co/hub/elQ1iO0Nbb1wMu6u3dDj"
              className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
            >
              Create your vision story
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
