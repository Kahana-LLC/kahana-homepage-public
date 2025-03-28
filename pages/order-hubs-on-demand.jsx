import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import OnDemandHub from '../assets/images/expertsHub.png';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

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

export default function OrderHubsOnDemand() {
  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Order On-Demand | Kahana</title>
        <meta
          name="description"
          content="Order custom enterprise browsing solutions tailored to your organization's needs."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Custom Solutions</h1>
            <p className="mt-4 text-xl text-gray-600">
              Get enterprise browsing solutions tailored to your specific needs.
            </p>
          </div>

          <div className="mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <span className="text-kahana-primary mr-2">•</span>
                      <span className="text-gray-600">Custom security configurations</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-kahana-primary mr-2">•</span>
                      <span className="text-gray-600">Tailored compliance solutions</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-kahana-primary mr-2">•</span>
                      <span className="text-gray-600">Specialized integration options</span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-kahana-primary mr-2">•</span>
                      <span className="text-gray-600">Custom reporting and analytics</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get Started</h2>
                  <p className="text-gray-600 mb-6">
                    Contact our team to discuss your custom enterprise browsing requirements.
                  </p>
                  <Link href="/contact">
                    <button className="bg-kahana-primary text-white px-6 py-2 rounded-md hover:bg-kahana-primary-dark transition-colors">
                      Contact Sales
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SharedCTA
        title="Ready to Get Started?"
        description="Contact us to learn how we can help build your custom solution."
        buttonText="Contact Sales"
        buttonLink="/contact"
      />
    </>
  );
}
