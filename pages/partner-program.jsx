import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import AffiliateBanner from '../assets/images/AffiliateBanner.webp';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

const features = [
  {
    title: '⬆️ Premium Upgrade',
    description: [
      'Upgrade from the free Creator tier to the Expert tier',
      'Unlock additional features and benefits',
      'You earn 30% of the subscription for the first 12 months'
    ],
    link: 'https://app.getreditus.com/marketplace/kahana'
  },
  {
    title: '🛠️ On-Demand Hub Deal',
    description: [
      'We build knowledge hubs for individuals and organizations',
      'Customers provide content and requirements',
      'Our team handles design, formatting, and content creation',
      'You earn 30% of the total project fee'
    ],
    link: 'https://app.getreditus.com/marketplace/kahana'
  },
  {
    title: '🏢 Enterprise Deal',
    description: [
      'Custom Kahana environments for organizations',
      'Includes setup fee, custom development, and recurring subscription',
      'You earn 30% of the setup fee, custom development, and first 12 months\' subscription'
    ],
    link: 'https://app.getreditus.com/marketplace/kahana'
  },
];

const faqs = [
  {
    question: 'Can you really make money?',
    answer: 'Yes. You can make a 30% commission when anyone purchases a Kahana subscription or service. Plus, you continue to get the commission for the first year they\'re on the platform.',
  },
  {
    question: 'What kind of support do I get?',
    answer: 'We\'ll provide you with tracking links and marketing materials that you can use to share Kahana. You can join the Kahana Discord for community support and you\'ll also get the option to see a public view of our product roadmap for updates to our platform that might interest you and your audience.',
  },
  {
    question: 'How do I get started?',
    answer: 'Sign up to be a partner below. There\'s a quick form to fill out in order to create your Partner Account and get access to resources, and then our team will follow up with you and take care of the next steps. We have partnered with Reditus to provide you with a Partner Account and portal that you can use to track the status of your referrals, access resources, and see all your revenue stats in one place.',
  },
  {
    question: 'How do I calculate my revenue as a partner?',
    answer: (
      <span>
        Here&apos;s a formula you can use to calculate your average monthly earnings:
        <br />
        <br />
        <b>(Total Earnings from On-Demand Hub Creation + Total Earnings from Enterprise Deals + Total Earnings from Boost Program + Total Earnings from Premium Upgrades) / 12</b>
        <br />
        <br />
        The &apos;Earn commission on&apos; section above provides a detailed breakdown of how you earn revenue for each of these.
      </span>
    ),
  },
  {
    question: 'When do I receive my payouts?',
    answer: 'We process all payouts on the 1st of every month. This means you\'ll receive your commissions on a monthly basis.',
  },
  {
    question: 'How will I receive my payouts?',
    answer: 'We offer various payment methods, including PayPal, direct bank transfer, or other options. You can select your preferred payment method in your account settings.',
  },
  {
    question: 'What is the minimum amount required for a payout?',
    answer: 'To be eligible for a payout, you need to have accumulated at least $50 in due commissions. Once your commissions reach or exceed this threshold, you\'ll qualify for a payout in the next scheduled payout cycle.',
  },
  {
    question: 'What happens if my commissions don\'t meet the minimum threshold in a given month?',
    answer: 'If your commissions haven\'t reached the $50 minimum threshold by the 1st of the month, they will continue to accrue. Once your commissions cross the threshold in a subsequent month and have completed the 30-day waiting period, they will become eligible for payout.',
  },
  {
    question: 'Can I track my earnings and payout status?',
    answer: 'Yes, you can easily monitor your commission earnings and payout status through your partner dashboard. This dashboard provides you with real-time insights into your performance, pending commissions, and upcoming payouts.',
  },
  {
    question: 'How long do my partner links stay active?',
    answer: '90 days. So if a customer clicks on your partner link and goes on to make a purchase or take a desired action within the following 90 days, you will receive credit for that conversion.',
  },
  {
    question: 'Are there any rules I should be aware of?',
    answer: 'It is forbidden to run paid ads or sponsorships for Kahana. That includes any type of paid ad, with any kind of targeting. If you do want to run paid ads, please reach out to us to get our approval. Running paid ads will immediately lead to the suspension of your account and deletion of all commissions and sales associated with it. Should you be generating a suspicious number of sales, we may ask for proof of where/how you are generating them.',
  },
];

export default function PartnerProgram() {
  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      setShowImage(viewportWidth > 1150);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Partner Program | Kahana</title>
        <meta
          name="description"
          content="Join Kahana's Partner Program and help organizations transform their enterprise browsing experience."
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
      <div>
        {showImage && (
          <section className="relative py-0 px-0 sm:px-0 lg:px-0 bg-white">
            <Image
              src={AffiliateBanner}
              alt="Partner Program Image"
              layout="responsive"
              objectFit="cover"
              className="hidden md:block"
            />
          </section>
        )}
        {/* It pays to be a partner section */}
        <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-white ${showImage ? 'mt-0' : 'mt-4'}`}>
          <div className="max-w-7xl mx-auto text-center" style={{ padding: showImage ? '0' : '2rem 0' }}>
            <h2 className={`text-3xl font-bold ${showImage ? 'mb-2' : 'mb-4'} text-gray-900`}>
              It pays to be a partner of Kahana
            </h2>
            <p className="text-gray-700" style={{ marginBottom: '20px' }}>
              Partner with Kahana and earn a 30% commission 💰
            </p>
            <div className="mt-8">
              <SharedCTA 
                title="Join Our Partner Program"
                description="Start earning commissions by helping others transform their knowledge."
                buttonText="Join Our Partner Program"
                buttonLink="https://app.getreditus.com/marketplace/kahana"
                buttonVariant="secondary"
                className="!py-4 !bg-transparent"
              />
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-E9F4E9">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              Earn money from every
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4"
                >
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <ul className="text-gray-700 text-left list-disc pl-5 space-y-2">
                    {feature.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full py-4 px-6 text-left text-gray-900 font-medium focus:outline-none"
                  >
                    {faq.question}
                    <span className={`ml-2 ${activeIndex === index ? 'text-blue-500' : 'text-gray-400'}`}>
                      {activeIndex === index ? '-' : '+'}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="py-4 px-6 text-gray-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 