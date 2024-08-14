import React, { useState } from 'react';
import Head from 'next/head';
import Script from 'next/script';
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
    question: 'How do I order my hubs?',
    answer: 'You can order 1, 2, 3, or 4 hubs. Simply navigate to either one of the "Turn your knowledge into revenue" sections of this page, enter your email under 1, 2, 3, or 4 hubs, and then click the "Proceed to checkout" button. From there, you will be taken to a secure payment portal through Stripe where you can complete your order.',
  },
  {
    question: 'What happens after I receive my hubs?',
    answer: (
      <span>
        Once you are fully satisfied with your hubs and they have been delivered to you, the project is complete and the hubs are yours to keep. You can market them, share the link with colleagues, etc. so that you can begin making revenue.
        <br />
        <br />
        <i>Note</i>: If you need help getting your hubs in front of more potential customers, feel free to check out our{' '}
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

function BuyButton({ buttonLabel, emailPlaceholder, stripeLink }) {
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleButtonClick = () => {
    if (!email || !isValidEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    // Track the conversion with the captured email value
    if (typeof gr === 'function') {
      gr('track', 'conversion', { email });
    }

    // Redirect to the Stripe link
    window.location.href = stripeLink;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div>
      <div className={`mb-2 ${isEmailValid ? '' : 'border-black rounded-md'}`}>
        <input
          type="email"
          placeholder={emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded-md"
        />
        {!isEmailValid && (
          <p className="text-red-500">Please enter a valid email.</p>
        )}
      </div>
      <div className="mt-2">
        <button
          onClick={handleButtonClick}
          className="w-full px-6 py-2 bg-[#3B675E] text-white rounded-md shadow-md"
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

export default function AffiliateProgramPage() {
  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Hubs On-Demand</title>
        <meta
          name="description"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today!"
        />
      </Head>
      
      {/* Move Script tags here */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
      />
      <Script
        id="google-analytics"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQHFL9605P');
          `,
        }}
      />
      <Script
        id="reditus-tracking"
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
              t.src = "https://app.getreditus.com/gr.js?_=" + Math.random();
              p.parentNode.insertBefore(t, p);
            })(window, document, "script");
          `,
        }}
      />

      <NavbarDup />
      <main>
        <section className="bg-[#f4f4f4] p-8">
          <div className="container mx-auto">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Hubs On-Demand</h1>
              <p className="text-lg mb-8">
                Transform your knowledge into profitable digital products effortlessly.
              </p>
              <img
                src={OnDemandHub.src}
                alt="On-Demand Hub"
                className="mx-auto"
                style={{ display: showImage ? 'block' : 'none' }}
              />
              <button
                className="bg-[#038270] text-white px-4 py-2 rounded-md"
                onClick={() => setShowImage(!showImage)}
              >
                {showImage ? 'Hide Image' : 'Show Image'}
              </button>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">How It Works</h2>
              {features.map((feature, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              {faqs.map((faq, index) => (
                <div key={index} className="mb-6">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full text-left bg-[#038270] text-white px-4 py-2 rounded-md"
                  >
                    {faq.question}
                  </button>
                  {activeIndex === index && (
                    <div className="mt-2 p-4 border border-gray-300 rounded-md">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Order Your Hubs</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">1 Hub</h3>
                  <BuyButton
                    buttonLabel="Order 1 Hub"
                    emailPlaceholder="Enter your email"
                    stripeLink="https://buy.stripe.com/7sIbLV6j7eT8e5E4g6"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">2 Hubs</h3>
                  <BuyButton
                    buttonLabel="Order 2 Hubs"
                    emailPlaceholder="Enter your email"
                    stripeLink="https://buy.stripe.com/7sI8ZQ5G7be5a5E4gg"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">3 Hubs</h3>
                  <BuyButton
                    buttonLabel="Order 3 Hubs"
                    emailPlaceholder="Enter your email"
                    stripeLink="https://buy.stripe.com/7sI3fZ6j7d6U9aE4gh"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">4 Hubs</h3>
                  <BuyButton
                    buttonLabel="Order 4 Hubs"
                    emailPlaceholder="Enter your email"
                    stripeLink="https://buy.stripe.com/7sI8ZQ5G7c11d6E4gh"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
