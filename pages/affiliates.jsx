import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';
import Image from 'next/image';
import AffiliateBanner from '../assets/images/AffiliateBanner.webp';
import Link from 'next/link';

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
      'You earn 30% of the setup fee, custom development, and first 12 months’ subscription'
    ],
    link: 'https://app.getreditus.com/marketplace/kahana'
  },
  // {
  //   title: '🚀 Boost Program',
  //   description: [
  //     'Expand the reach of existing hubs',
  //     'Tailored email campaigns to target audiences',
  //     'Autopilot recurring revenue generation',
  //     'You earn 30% of the setup fee and Kahana’s cut of hub sales for the first 12 months'
  //   ],
  //   link: 'https://app.getreditus.com/marketplace/kahana'
  // },

];


// const features = [
//   {
//     title: 'On-Demand Hub Creation',
//     description: (
//       <span>
//         <strong>What it is:</strong> An add-on service we provide for individuals and organizations who have a ton of expertise but don&apos;t have the time or energy to build hubs themselves. It&apos;s like ordering Domino&apos;s for recurring revenue: customers get to choose the number of hubs they want, add specific requests, and submit existing content they&apos;d like to include. Our team will handle all the graphic design, formatting, and content creation to turn their knowledge into hubs and deliver them in as little as 5 business days. For more details, check out{' '}
//         <span>
//           <Link href="/order-hubs-on-demand" className="text-[#038270] font-medium">
//             this page
//           </Link>
//         </span>
//         .
//         <br />
//         <br />
//         <strong>What you earn:</strong> 30% of the total project fee. For example, if you refer someone who orders two hubs, this will come out to $7K total ($4K for the first hub, $3K for the second). Of that $7K, <strong>you earn a total of $2.1K</strong> ($7K x 30%).
//       </span>
//     ),
//   },
//   {
//     title: 'Enterprise Deals',
//     description: (
//       <span>
//         <strong>What it is:</strong> Our highest-ticket SaaS subscription that we offer for organizations that want their own Kahana environment. This typically involves a setup fee and some custom development upfront in addition to a recurring subscription. For more details, check out our{' '}
//         <span>
//           <Link href="/pricing" className="text-[#038270] font-medium">
//             Pricing page
//           </Link>
//         </span>
//         .
//         <br />
//         <br />
//         <strong>What you earn:</strong> 30% of the setup fee and any custom development fees, as well as 30% of the company&apos;s subscription for the first 12 months. For example, if you refer an organization whose Enterprise contract is $300 per month, and their setup fee & custom development add up to $50K, <strong>you earn a total of $16.08K</strong> ([$300 x 12] x 30% + $50K x 30%).
//       </span>
//     ),
//   },
//   {
//     title: 'Boost Program',
//     description: (
//       <span>
//         <strong>What it is:</strong> An add-on service we provide for individuals and organizations who are interested in expanding the reach of their hubs. Our team will create a tailored email campaign on their behalf and put their hub(s) in front of thousands of potential customers per month that match their ideal customer profile. We take care of the entire process so that they generate recurring revenue on autopilot. You can check out{' '}
//         <a href="https://blog.kahana.co/boost-program/" className="text-[#038270] font-medium">
//           this post
//         </a>{' '}
//         for more details.
//         <br />
//         <br />
//         <strong>What you earn:</strong> 30% of the $500 setup fee, as well as 30% of Kahana&apos;s 50% cut of all hub sales for the first 12 months. For example, if someone you refer has a $500 hub (one-time payment) that generates 60 sales in the first year, <strong>you earn a total of $4.65K</strong> ([$500 x 60 x 50%] x 30% + $500 x 30%).
//       </span>
//     ),
//   },
//   {
//     title: 'Premium Upgrades',
//     description: (
//       <span>
//         <strong>What it is:</strong> Our premium SaaS subscription (Expert) for people who want to upgrade from the free tier (Creator). For more details, check out our{' '}
//         <span>
//           <Link href="/pricing" className="text-[#038270] font-medium">
//             Pricing page
//           </Link>
//         </span>
//         .
//         <br />
//         <br />
//         <strong>What you earn:</strong> 30% of the subscription for the first 12 months. The subscription is $9.99 per month or $99.99 per year, so for every person you refer who upgrades, <strong>you will earn a total of $35.96 or $30.00</strong> ([$9.99 x 12] x 30% OR $99.99 x 30%).
//       </span>
//     ),
//   },
// ];

const faqs = [
  {
    question: 'Can you really make money?',
    answer: 'Yes. You can make a 30% commission when anyone purchases a Kahana subscription or service. Plus, you continue to get the commission for the first year they\'re on the platform.',
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
    question: 'How do I calculate my revenue as an affiliate?',
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
            <p className="text-gray-700" style={{ marginBottom: '20px' }}>
              Refer people to Kahana and earn a 30% 💰
            </p>
            <a href="https://app.getreditus.com/marketplace/kahana" className="block mt-8" target="_blank" rel="noopener noreferrer">
              <button className="px-6 py-3 bg-[#3B675E] text-white rounded-md shadow-md hover:bg-[#046856]">
                Become an Affiliate
              </button>
            </a>
          </div>
        </section> 
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-E9F4E9">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
              Earn money from every
            </h2>
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {/* Your feature section */}
  {features.map((feature, index) => (
    <div
      key={index}
      className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center space-y-4"
    >
      <h3 className="text-xl font-semibold">{feature.title}</h3>
      <ul className="text-gray-700 text-left list-disc pl-4">
        {feature.description.map((point, i) => (
          <li key={i} className="ml-4">{point}</li>
        ))}
      </ul>
      <a
        href={feature.link}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 bg-[#3B675E] text-white rounded-md shadow-md hover:bg-[#046856] cursor-pointer"
        >
        Learn more
      </a>
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
        {/* Remove the unnecessary nested <span> */}
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
              <a href="https://app.getreditus.com/marketplace/kahana" className="block mt-8" target="_blank" rel="noopener noreferrer">
                <button className="px-6 py-3 bg-[#3B675E] text-white rounded-md shadow-md hover:bg-[#046856]">
                  Become an Affiliate
                </button>
              </a>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
