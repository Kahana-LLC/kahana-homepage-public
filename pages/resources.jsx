import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';
import DigitalProductsResources from '../components/DigitalProductsResources';
import GoogleDriveResources from '../components/GoogleDriveResources';
import NotionResources from '../components/NotionResources';
import ResourcesCalltoAction from '../components/ResourcesCalltoAction';

const ResourcesPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const clickableTiles = [
    {
      title: 'I want to learn more about selling knowledge-based digital products in general',
      link: '#digital-products',
    },
    {
      title: 'I want to learn how I can monetize my knowledge and assets in Google Drive',
      link: '#google-drive',
    },
    {
      title: 'I want to learn how I can monetize my knowledge, information, and templates in Notion',
      link: '#notion',
    },
  ];
  
  {/* const faqs = [
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
  ]; */}

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

      {/* Header Section */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            Top Resources to Monetize Your Knowledge
          </h1>
          <p className="text-gray-600">
            A collection of actionable resources to help you monetize your best knowledge assets.
          </p>
        </div>
      </section>

      {/* Clickable Tiles Section */}
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-2">Which of the following best describes you?</h2>
          {/* <p className="text-gray-600">
            Explore all of our Learning and material to help you monetize.
          </p> */}
          <div className="flex flex-wrap justify-center mt-6 space-y-4 sm:space-y-0 sm:gap-4">
            {clickableTiles.map((tile, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/4 p-2">
                <a
                  href={tile.link}
                  onClick={(e) => {
                    e.preventDefault();
                    const targetId = tile.link.substring(1); // Remove the '#'
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      window.scrollTo({
                        behavior: 'smooth',
                        top: targetElement.offsetTop,
                      });
                    }
                  }}
                  className="block bg-green-800 p-6 rounded-lg shadow-md text-center"
                >
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {tile.title}
                  </h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <ResourcesCalltoAction />

      {/* Links Section */}
      <DigitalProductsResources id="digital-products" />
      <GoogleDriveResources id="google-drive" />
      <NotionResources id="notion" />

      {/* FAQ Section */}
      {/*
      <section className="bg-gray-100 py-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-8">
            Questions?
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-transparent rounded-lg mx-2 sm:mx-0">
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
      </section> */}

      <Footer />
    </div>
  );
};

export default ResourcesPage;
