import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';

const features = [
  {
    title: 'High Commissions',
    description: 'Earn competitive commissions on every sale.',
  },
  {
    title: 'Advanced Tracking',
    description: 'Track your referrals and earnings with our advanced analytics.',
  },
  {
    title: 'Advanced Tracking',
    description: 'Track your referrals and earnings with our advanced analytics.',
  },
  {
    title: 'Advanced Tracking',
    description: 'Track your referrals and earnings with our advanced analytics.',
  },
  {
    title: 'Advanced Tracking',
    description: 'Track your referrals and earnings with our advanced analytics.',
  },
  {
    title: 'Advanced Tracking',
    description: 'Track your referrals and earnings with our advanced analytics.',
  },
];

const faqs = [
  {
    question: 'Can you really make money?',
    answer: 'Yes. Our partners earn $450 per month on average, and many earn $1,000 or more every month. With a 30-day cookie, you make a 30% commission when anyone purchases a Teachable subscription. Plus, you continue to get the commission for the first year they’re on the platform.',
  },
  {
    question: 'What kind of support do I get?',
    answer: 'We’ll provide you with tracking links and marketing language that has performed well for affiliates in the past. Plus, you’ll also get monthly emails about updates to our platform that might interest you and your audience.',
  },
  {
    question: 'How do I get started?',
    answer: 'Sign up to be a partner below. We’ll follow up with you and take care of the next steps.',
  },
];


export default function AffiliateProgramPage() {
  return (
    <>
      <Head>
        <title>Kahana Affiliate Program</title>
        <meta
          name="Kahana"
          content="Kahana is the easiest way to monetize your content and research. Transform knowledge and expertise into subscription revenue. Sign up for free today! "
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
        <div className="sticky top-0">
          <NavbarDup />
        </div>
        <header>
          {/* Add your header content */}
        </header>
        {/* New Image Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <img
              src="/your-image-path.jpg"  // Replace with your actual image path
              alt="Affiliate Program Image"
              className="mx-auto mb-6"
            />
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              It pays to partner with Kahana.
            </h2>
            <p className="text-gray-700">
              Refer creators to Kahana and earn to 30% commission by joining our partner program.
            </p>
            <button className="mt-8 px-6 py-3 bg-[#038270] text-white rounded-md shadow-md hover:bg-[#046856]">
              Sign Up Now
            </button>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Why Join Our Affiliate Program?
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Most Frequently Asked Questions
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
              Sign Up Below to join Kahana's Affiliate Program
            </h2>
            <button className="mt-8 px-6 py-3 bg-[#038270] text-white rounded-md shadow-md hover:bg-[#046856]">
              Sign Up Here
            </button>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
