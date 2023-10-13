import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';
import BestLifeEverHub from '../assets/images/bestLifeEverHub.png';
import Link from 'next/link';
import Joanna from '../assets/headshots/joannaRajendranHeadshot.jpeg'

const faqs = [
  {
    question: 'What do I get when I pay for access to this hub?',
    answer: 'You get access to a pre-recorded version of the course I&apos;ve taught to hundreds of professionals, with the exact same design and knowledge, that shows you how to create transformative habits and mindset shifts.'
  },
  {
    question: 'How much does this cost?',
    answer: 'Normally, the live version is $2,997 per person, but you can access the exact same knowledge here for just $497 per person.'
  },
  {
    question: 'How should I use this hub?',
    answer: 'I encourage you to try it out yourself first and then open it up to your team if you think it\s worthwhile! I would recommend watching one episode a week at around the same time each week, and practicing what you learned in the days leading up to the next episode.'
  },
];

export default function JoannaRajendranPage() {
  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Joanna Rajendran: A wellness investment employees actually want</title>
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
              A wellness investment employees actually want
            </h1>
            <p className="text-lg mb-8 md:px-12 lg:px-24">
              Empower your employees with the knowledge to create transformative habits and mindset shifts. Get happy, energized, and more confident people who elevate your company&apos;s culture.
            </p>
            <a
              href="https://app.kahana.co/hub/vUPsUE61LMGemewnDLwD"
              className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
            >
              Create a community of happy employees
            </a>
            <div className="mt-8">
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <a href="https://app.kahana.co/hub/vUPsUE61LMGemewnDLwD" target="_blank" rel="noopener noreferrer">
                  <Image
                    src={BestLifeEverHub}
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
                  I&apos;ve coached hundreds of professionals across dozens of organizations on how to create transformative habits and mindset shifts, and I turned those teachings into a 12-week course. The results have been overwhelmingly positive:
                  <br/>
                  <ul className="list-disc ml-6">
                    <li>Team members who are happier and more confident in both their personal and professional lives</li>
                    <li>Improved communication and a deep sense of community across the team</li>
                  </ul>
                </p>
              </div>
              <div className="text-center">
                <div className="space-y-4">
                  <div className="flex justify-center items-center">
                    <Image
                      src={Joanna}
                      alt="Joanna Rajendran: Mindset Coach, Keynote Speaker & Author"
                      width={400}
                      height={400}
                    />
                  </div>
                  <p className="text-lg font-bold">Joanna Rajendran: Mindset Coach, Keynote Speaker & Author</p>
                  <div className="flex justify-center space-x-5">
                    <a
                      href="https://www.linkedin.com/in/joanna-rajendran-47323314/"
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
                  &quot;Best.Life.Ever has changed my life forever. Joanna&apos;s strategies and practices used to manifest dreams are pure magic and they have enhanced my life in ways I didn&apos;t know here possible.&quot;
                </p>
                <p className="font-semibold">Rebecca S.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg italic mb-4">
                  &quot;Joanna is pure magic. Her love, care, dedication, and strategies have changed me forever and I&apos;m forever grateful for her and the best life ever.&quot;
                </p>
                <p className="font-semibold">Jackie Z.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-lg italic mb-4">
                  &quot;Best.Life.Ever. changed me in ways I thought would take years to heal certain parts of myself. Joanna, you truly are pure magic; you give these simple yet profound analogies that make it easier to see the bigger and brighter picture.&quot;
                </p>
                <p className="font-semibold">Maria A.</p>
              </div>
              {/* Repeat similar blocks for other testimonials */}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className={`text-3xl font-bold text-gray-900`}>
              Make the most of your wellness budget
            </h2>
            <p className="mt-4 text-lg mb-8 md:px-12 lg:px-24">
              Join dozens of businesses who have energized their employees, elevated their culture, and created deep connections among employees who work remotely.
            </p>
            <a
              href="https://app.kahana.co/hub/vUPsUE61LMGemewnDLwD"
              className="bg-[#3B675E] text-white py-2 px-6 rounded-md text-center inline-block mx-auto max-w-md"
            >
              Empower your team
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
