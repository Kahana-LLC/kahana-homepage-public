import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';
import AffiliateBanner from '../assets/images/AffiliateBanner.webp';

const features = [
  {
    title: 'High Commissions',
    description: 'High Commissions: We understand that affiliates like programs with the potential for substantial earnings. Our partner program\'s competitive 30% commission structure, particularly with high-ticket SaaS and project-based sales ($5,000-$100,000+ per project), is an incentive for affiliates to promote Kahana.',
  },
  {
    title: 'Recurring Revenue',
    description: 'Once you refer someone to us, you earn a recurring commission for the entire first year they are on Kahana.',
  },
  {
    title: 'Quality and Reputation',
    description: (
      <span>
        As an affiliate, you should be cautious about the products you endorse. We are proud to be a software platform that is used daily by experts, teams, and organizations across the world. Simply put, it&apos;s in our DNA to continue to seek ways to improve our platform from our users and customers, so that as an affiliate, you know you will be sharing a platform that is hungry to deliver substantial value in the short-term and long-term for users. You can see reviews from our happy customers on{' '}
        <a href="https://www.capterra.com/p/10009805/Kahana/" className="text-[#038270] font-medium">
          Capterra
        </a>{' '}
        and{' '}
        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7049745436105994240/" className="text-[#038270] font-medium">
          LinkedIn
        </a>
        .
      </span>
    ),
  },
  {
    title: 'High Conversion Rate',
    description: 'You want to partner with a platform with a proven track record of converting leads into paying customers. When users sign up on Kahana, they have plenty of options to get a lot of value out of the platform and the ecosystem. For example, they can create hubs for and monetize them. They can increase the exposure of their hubs through our paid Boost Program. Organizations can bring Kahana to their teams right away through the Enterprise plan. Our sales funnel and onboarding experience are designed to educate and help people find the best solution for them as quickly as possible.',
  },
  {
    title: 'Support and Resources',
    description: 'As an affiliate, you will receive full access to a comprehensive Google Drive folder of marketing materials, resources, and support from Kahana. This includes high-converting banners, email templates, landing pages, videos, and other materials to help you best share Kahana. We encourage you to be creative, and if you have ideas for new types of collateral that would help you, we are happy to create them for you.',
  },
  {
    title: 'Transparent Tracking and Reporting',
    description: 'When you become an affiliate, you will get your own highly-organized affiliate dashboard that provides real-time insights into clicks, conversions, commissions earned, and more.',
  },
];

const faqs = [
  {
    question: 'Can you really make money?',
    answer: 'Yes. You can make a 30% commission when anyone purchases a Kahana subscription or service. Plus, you continue to get the commission for the first year they're on the platform. ',
  },
  {
    question: 'What kind of support do I get?',
    answer: 'We\’ll provide you with tracking links and marketing materials that you can use to share Kahana. You can join the Kahana Discord for community support and you\'ll also get the option to see a public view of our product roadmap for updates to our platform that might interest you and your audience.',
  },
  {
    question: 'How do I get started?',
    answer: 'Sign up to be an affiliate below. There\'s a quick form to fill out in order to create your Affiliate Account and get access to resources, and then our team will follow up with you and take care of the next steps. We have partnered with Reditus to provide you with a Partner Account and portal that you can use to track the status of your referrals, access resources, and see all your revenue stats in one place.',
  },
  {
    question: 'What subscriptions and services can I earn revenue from?',
    answer: (
      <span>
        You can earn revenue from any of the subscriptions or services that we offer. You can check out our{' '}
        <a href="https://kahana.co/pricing" className="text-[#038270] font-medium">
          Pricing page
        </a>{' '}
        for more information about the subscriptions people can purchase and you can check out our{' '}
        <a href="https://kahana.co/solutions" className="text-[#038270] font-medium">
          Solutions page
        </a>{' '}
        for more information about the services that are available.
      </span>
    ),
  },
  {
    question: 'How do I calculate my revenue as an affiliate?',
    answer: (
      <span>
        Here&apos;s a formula you can use to calculate your average monthly earnings:
        <br />
        <br />
        <b>(Total Earnings from Boost Program + Total Earnings from Hub Services + Total Earnings from Enterprise + Total Earnings from Premium Upgrades) / 12</b>
        <br />
        <br />
        <b>For any service that is purchased, you earn both 30% of any one-time payments (e.g., setup fees), as well as 30% of any recurring revenue Kahana gains from the service (e.g., revenue share on hub sales).</b>
      </span>
    ),
  },
  {
    question: 'How and when do I receive my commissions?',
    answer: 'We process all payouts on the 1st of every month. This means you\'ll receive your commissions on a monthly basis.',
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
    question: 'How will I receive my commissions?',
    answer: 'We offer various payment methods, including PayPal, direct bank transfer, or other options. You can select your preferred payment method in your account settings.',
  },
  {
    question: 'Can I track my commission earnings and payout status?',
    answer: 'Yes, you can easily monitor your commission earnings and payout status through your affiliate dashboard. This dashboard provides you with real-time insights into your performance, pending commissions, and upcoming payouts.',
  },
  {
    question: 'How long do my affiliate links stay active?',
    answer: '90 days. So if a customer clicks on your affiliate link and goes on to make a purchase or take a desired action within the following 90 days, you will receive credit for that conversion.',
  },
  {
    question: 'Are there any rules I should be aware of?',
    answer: 'It is forbidden to run paid ads or sponsorships for Kahana. That includes any type of paid ad, with any kind of targeting. If you do want to run paid ads, please reach out to us to get our approval. Running paid ads will immediately lead to the suspension of your account and deletion of all commissions and sales associated with it. Should you be generating a suspicious number of sales, we may ask for proof of where/how you are generating them.',
  },
];


export default function AffiliateProgramPage() {
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
        <title>Kahana Affiliate Program</title>
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
      <div>
        <div className="sticky top-0 z-50">
          <NavbarDup />
        </div>
       {showImage && (
          <section className="relative py-0 px-0 sm:px-0 lg:px-0 bg-white">
            <Image
              src={AffiliateBanner}
              alt="Affiliate Program Image"
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
            <p className="text-gray-700">
              Refer people to Kahana and earn up to a 30% commission by joining our partner program.
            </p>
            <a href="https://app.getreditus.com/marketplace/kahana" className="block mt-8">
              <button className="px-6 py-3 bg-[#038270] text-white rounded-md shadow-md hover:bg-[#046856]">
                Sign Up Now
              </button>
            </a>
          </div>
        </section> 
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              Become a Kahana partner
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Your feature section */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4"
                >
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
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
        {/* New "Sign up below" Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#F7FAFC]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Sign up below to join Kahana&apos;s partner program
            </h2>
              <a href="https://app.getreditus.com/marketplace/kahana" className="block mt-8">
                <button className="px-6 py-3 bg-[#038270] text-white rounded-md shadow-md hover:bg-[#046856]">
                  Sign Up Here
                </button>
              </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
