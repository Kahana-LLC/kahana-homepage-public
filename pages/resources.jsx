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

      <style jsx>{`
        /* Add your global styles and other styles here */

        /* Specific styles for the resources page */
        .header-section {
          text-align: center;
          padding: 80px 0;
        }

        .header-text {
          max-width: 600px;
          margin: 0 auto;
        }

        .resources-section {
          text-align: center;
          padding: 60px 0;
        }

        .clickable-tiles-section {
          background-color: #f5f5f5;
          padding: 80px 0;
        }

        .tile-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .tile {
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          flex: 1;
          text-align: center;
        }

        .cta-section {
          text-align: center;
          padding: 60px 0;
        }

        .cta-section button {
          background-color: #007bff;
          color: #ffffff;
          padding: 10px 20px;
          border: none;
          border-radius: 4px;
          font-size: 18px;
          cursor: pointer;
        }

        .links-section {
          text-align: center;
          padding: 80px 0;
        }

        .link-row {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .link {
          flex: 1;
          background-color: #ffffff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
      `}</style>

      {/* Header Section */}
      <section className="header-section">
        <div className="header-text">
          <h1>Top Resources to Monetize Your Knowledge</h1>
          <p>A collection of actionable resources to help you monetize your best knowledge assets.</p>
        </div>
      </section>
      
      {/* Clickable Tiles Section */}
      <section className="clickable-tiles-section">
        <h2>📍 Guides</h2>
        <p>Learning and material to help you monetize.</p>
        <div className="tile-row">
          {clickableTiles.map((tile, index) => (
            <div key={index} className="tile">
              <h3>{tile.title}</h3>
              <p>{tile.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Want to start monetizing your knowledge?</h2>
        <p>Start charging for acccess to your best assets in minutes with Kahana.</p>
        <button>
          <a href="https://app.kahana.co/signup">Get Started</a>
        </button>
      </section>

      {/* Links Section */}
      <section className="links-section">
        <div className="link-row">
          {links.map((link, index) => (
            <div key={index} className="link">
              <h3>{link.title}</h3>
              <p>{link.description}</p>
            </div>
          ))}
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
  );
};

export default ResourcesPage;
