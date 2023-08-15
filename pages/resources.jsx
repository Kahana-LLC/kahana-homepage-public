import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';

const ResourcesPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const clickableTiles = [
    {
      title: 'Resource Category 1',
      description: 'Explore our selection of articles and guides.',
    },
    {
      title: 'Resource Category 2',
      description: 'Unlock insights with our video tutorials.',
    },
    {
      title: 'Resource Category 3',
      description: 'Stay informed with our latest industry reports.',
    },
  ];

  const links = [
    {
      title: 'Useful Link 1',
      description: 'Check out this valuable resource.',
    },
    {
      title: 'Helpful Link 2',
      description: 'Learn more with this insightful article.',
    },
    {
      title: 'Informative Link 3',
      description: 'Stay updated with the latest news.',
    },
  ];

  const faqs = [
    {
      question: 'Question 1?',
      answer: 'Answer 1.',
    },
    {
      question: 'Question 2?',
      answer: 'Answer 2.',
    },
    {
      question: 'Question 3?',
      answer: 'Answer 3.',
    },
    // ... add more FAQ items as needed
  ];

  return (
    <div>
      <Head>
        <title>Best Monetization Resources</title>
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

      <section className="header-section">
        <div className="header-text">
          <h1 className="text-3xl font-bold mb-4">
            Top Resources to Monetize Your Knowledge
          </h1>
          <p className="text-gray-600">
            A collection of actionable resources to help you monetize your best knowledge assets.
          </p>
        </div>
      </section>

      <section className="clickable-tiles-section bg-gray-100 py-12">
        <h2 className="text-2xl font-semibold mb-2">📍 Guides</h2>
        <p className="text-gray-600">
          Step-by-step roadmaps to help you monetize.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {clickableTiles.map((tile, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{tile.title}</h3>
              <p className="text-gray-600">{tile.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section bg-gray-100 py-12">
        <h2 className="text-2xl font-semibold mb-2">
          Want to start monetizing your knowledge?
        </h2>
        <p className="text-gray-600">
          Start charging for access to your best assets in minutes with Kahana.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-md mt-4">
          <a href="https://app.kahana.co/signup">Get Started</a>
        </button>
      </section>

      <section className="links-section bg-gray-100 py-12">
        <h2 className="text-2xl font-semibold mb-2">More Collections</h2>
        <p className="text-gray-600">
          Discover additional resources for your success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          {links.map((link, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{link.title}</h3>
              <p className="text-gray-600">{link.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Most frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg"
              >
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
  );
};

export default ResourcesPage;
