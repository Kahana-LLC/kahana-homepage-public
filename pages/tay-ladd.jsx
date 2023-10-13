import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';
import OnDemandHub from '../assets/images/expertsHub.png';
import Link from 'next/link';

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

const people = [
  {
    name: 'Tay Ladd',
    role: 'Corporate Lawyer & TikTok Creator',
    imageUrl: 'https://kahana-website-images.s3.us-east-2.amazonaws.com/tayLadd.png',
    tikTokUrl: 'https://www.tiktok.com/@thecorporatedogmom',
    linkedinUrl: 'https://www.linkedin.com/in/themaladd/',
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

        <div className="bg-white">
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
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-1 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-1 lg:gap-x-8"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <Image
                          src={person.imageUrl}
                          alt=""
                          style={{ maxWidth: '250px', maxHeight: '250px' }}
                        />
                      </div>
    
                      <div className="space-y-2">
                        <div className="space-y-1 text-lg font-medium leading-6">
                          <h3>{person.name}</h3>
                          <p className="text-green-700">{person.role}</p>
                        </div>
                        <ul role="list" className="flex space-x-5">
                          <li>
                            <a
                              href={person.tikTokUrl}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">TikTok</span>
                              <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 2.682c2.076 0 4.044.331 5.877.939.52.152.97.405 1.336.722.366.318.646.69.84 1.105.192.418.296.86.408 1.314.065.226.127.453.23.663.103.209.236.396.435.587.198.191.46.333.76.421.3.089.635.124.954.15.542.033 1.038.045 1.436.148.405.106.686.292.978.49.292.2.552.41.795.614.43.345.775.795 1.055 1.295.24.45.376.968.648 1.45.27.483.67.94 1.158 1.336.487.395 1.088.733 1.73.988.24.11.5.198.784.24.037.005.08.01.12.02.16.02.346.08.595.16.352.12.79.28 1.163.476.084.054.19.13.32.23.34.226.745.497 1.194.802.22.152.48.296.73.404.51.196 1.08.247 1.65.118.22-.062.46-.166.66-.297.21-.132.375-.298.525-.486.06-.09.128-.174.208-.256.06-.07.14-.134.238-.2.6-.427 1.34-.688 2.13-.742.69-.056 1.33.226 1.848.648.22.2.42.45.526.72.125.27.205.594.27.91.06.41.09.787.18 1.144.06.24.12.504.24.728.13.236.33.474.6.703.26.232.63.408 1.03.537.4.13.853.186 1.323.173.17-.007.34-.02.51-.038.12-.01.235-.03.347-.05.43-.07.85-.2 1.22-.393.33-.176.62-.41.805-.666.08-.126.16-.25.23-.374.22-.366.326-.8.326-1.225v-.06c0-.452-.125-.896-.326-1.262-.066-.117-.143-.23-.23-.355a2.45 2.45 0 00-.806-.666c-.37-.194-.79-.33-1.22-.4-.11-.02-.23-.04-.348-.05a10.42 10.42 0 00-.512-.042c-.46-.013-.916.038-1.37.15-.35.09-.68.21-.985.36-.06.03-.123.06-.182.1-.18.115-.3.26-.384.41-.088.15-.162.314-.222.49-.1.325-.153.68-.18 1.052-.03.368-.012.747-.15 1.115-.01.06-.03.12-.05.178-.068.2-.188.39-.35.54-.02.02-.05.05-.08.07-.336.277-.67.6-.998.95-.275.278-.53.58-.742.916-.17.267-.29.554-.384.852-.075.262-.13.514-.09.787.04.266.1.5.18.726.098.29.226.56.395.8.077.085.158.165.24.244.26.245.6.43.94.588.188.092.397.165.613.214.07.02.15.04.23.06.53.15 1.1.205 1.67.173.253-.02.505-.06.755-.104.44-.07.85-.28 1.19-.586.22-.228.42-.48.572-.74.214-.4.357-.84.428-1.307.054-.3.053-.6.054-.94 0-.88-.207-1.74-.562-2.464-.214-.372-.5-.702-.837-.98-.15-.146-.313-.28-.482-.396-.244-.16-.49-.285-.755-.374-.25-.075-.52-.108-.785-.108a2.61 2.61 0 00-.89.15 2.62 2.62 0 00-.787.395c-.17.112-.32.245-.464.39-.328.287-.59.65-.785 1.058-.096.2-.176.416-.27.623-.06.126-.117.252-.183.37-.214.41-.49.77-.824 1.08-.29.256-.64.45-1.03.57-.31.08-.64.14-.96.16-.157.02-.314.02-.472.02-2.086.02-3.793-1.693-3.815-3.78v-.03c.023-2.09 1.73-3.784 3.815-3.804z"/>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href={person.linkedinUrl}
                              className="text-gray-400 hover:text-gray-500"
                            >
                              <span className="sr-only">LinkedIn</span>
                              <svg
                                className="h-5 w-5"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

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
