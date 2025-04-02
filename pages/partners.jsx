import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';

const conceptCards = [
  {
    title: "Enterprise Solutions",
    description: "Commission from enterprise deals",
    details: [
      {
        title: "Setup & Development",
        explanation: "Commission on setup and development",
        technical: "30% of setup and development fees"
      },
      {
        title: "Subscription Revenue",
        explanation: "Ongoing subscription commissions",
        technical: "12 months of subscription revenue"
      }
    ]
  }
];

const faqs = [
  {
    question: 'How do I apply to be a partner?',
    answer: 'Fill out the form above with your details and information about your experience with enterprise solutions. Our team will review your application and contact you if we think you\'d be a good fit for our partner program.',
    category: 'getting-started'
  },
  {
    question: 'What happens after I submit my application?',
    answer: 'Our team will review your application and contact you within 2-3 business days if we think you\'d be a good fit. If accepted, we\'ll schedule a call to discuss the partnership program in detail and help you get started.',
    category: 'getting-started'
  },
  {
    question: 'What kind of commission can I earn?',
    answer: 'You can earn a 30% commission on enterprise deals, including setup fees, custom development, and the first 12 months of subscription revenue.',
    category: 'earnings'
  },
  {
    question: 'What kind of support do I get as a partner?',
    answer: 'As a partner, you\'ll receive dedicated support from our team, including sales materials, product training, and regular check-ins to help you succeed. You\'ll also have access to our partner portal for tracking your performance and commissions.',
    category: 'support'
  },
  {
    question: 'How do I receive my commissions?',
    answer: 'We process payouts on the 1st of every month. You\'ll need to accumulate at least $50 in commissions to be eligible for a payout. We offer various payment methods including PayPal and direct bank transfer.',
    category: 'payouts'
  },
  {
    question: 'Are there any rules I should be aware of?',
    answer: 'It is forbidden to run paid ads or sponsorships for Kahana without our approval. Running unauthorized paid ads will lead to account suspension and deletion of associated commissions. We may request proof of sales if we notice suspicious activity.',
    category: 'rules'
  }
];

export default function Partners() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    // Initialize Tally embed after component mounts
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://tally.so/widgets/embed.js';
      script.async = true;
      script.onload = () => {
        if (typeof Tally !== 'undefined') {
          Tally.loadEmbeds();
        }
      };
      document.body.appendChild(script);
    }
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const categories = ['all', ...new Set(faqs.map(faq => faq.category))];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toString().toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Head>
        <title>Partners | Kahana - Enterprise Browser Solutions</title>
        <meta
          name="description"
          content="Partner with Kahana to deliver enterprise-grade browser solutions. Join our partner program and earn 30% commission by helping organizations transform their browsing experience with secure, efficient, and modern enterprise solutions."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Kahana Partner Program",
              "description": "Partner with Kahana to deliver enterprise-grade browser solutions. Join our partner program and earn 30% commission.",
              "url": "https://kahana.is/partners",
              "offers": {
                "@type": "Offer",
                "name": "Kahana Partner Program",
                "description": "Earn 30% commission on enterprise deals, including setup fees, custom development, and the first 12 months of subscription revenue.",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Partner with Kahana:<br />Enterprise Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join our partner program and earn 30% commission by helping organizations transform their enterprise browsing experience.
            </p>
          </div>
        </div>
      </section>

      {/* Partner Form Section - Moved Higher */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Become a Partner
          </h2>
          <div className="w-full max-w-2xl mx-auto">
            <iframe 
              data-tally-src="https://tally.so/embed/nrY2BR?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
              loading="lazy" 
              width="100%" 
              height="200" 
              frameBorder="0" 
              marginHeight="0" 
              marginWidth="0" 
              title="Partner"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Evolution Story Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Traditional Partnership Card */}
            <div className="bg-gradient-to-br from-gray-50 to-indigo-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Traditional Partnerships</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Traditional partnership programs often come with complex requirements and limited earning potential.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Complex onboarding</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Limited commission rates</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Restricted earning potential</span>
                </li>
              </ul>
            </div>

            {/* Kahana Partnership Card */}
            <div className="bg-gradient-to-br from-gray-50 to-purple-50/30 rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Kahana Partnership</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our partnership program offers simple onboarding, competitive commissions, and unlimited earning potential.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>Simple onboarding</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>30% commission rate</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-indigo-500 mr-2">✓</span>
                  <span>Unlimited earning potential</span>
                </li>
              </ul>
            </div>
          </div>

          {/* The Solution Card */}
          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">Start Earning Today</h3>
            </div>
            <p className="text-gray-600 text-lg mb-6">
              Join our partner program and start earning commissions by helping organizations transform their enterprise browsing experience.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Quick Onboarding</h4>
                <p className="text-gray-600">Simple signup process</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">High Commissions</h4>
                <p className="text-gray-600">30% commission rate</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-2">Unlimited Potential</h4>
                <p className="text-gray-600">No earning caps</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Solutions Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Enterprise Commission Opportunities
          </h2>
          <div className="grid grid-cols-1 gap-12">
            {conceptCards.map((card, index) => (
              <div key={index} className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl overflow-hidden border border-indigo-100">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 text-lg mb-8">
                    {card.description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {card.details.map((detail, dIndex) => (
                      <div key={dIndex} className="bg-white rounded-xl p-6 shadow-sm">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {detail.title}
                        </h4>
                        <p className="text-gray-600 mb-3">
                          {detail.explanation}
                        </p>
                        <div className="flex items-center text-indigo-600">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-sm font-medium">{detail.technical}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-E9F4E9">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-96 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kahana-primary"
              />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-48 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-kahana-primary"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4 px-6 text-left text-gray-900 font-medium focus:outline-none flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <span className={`ml-2 ${activeIndex === index ? 'text-blue-500' : 'text-gray-400'}`}>
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="py-4 px-6 text-gray-700 border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 