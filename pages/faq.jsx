import React, { useState } from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';
import NavbarDup from '../components/NavbarDup';

const faqs = [
  {
    question: 'What is Kahana?',
    answer: (
      <span>
        You can think of Kahana as Patreon meets Google Drive - it&apos;s a collaborative platform that lets you create hubs of knowledge with other creators & experts and monetize <i>together</i>. You can upload your best knowledge (information you&apos;ve learned, notes, methodologies, best practices, and templates you&apos;ve curated and created, etc.) and charge for access to it without having to build something from scratch.
      </span>
    ),
  },
  {
    question: 'Is Kahana free to use?',
    answer: 'Yes! You can use Kahana for free, forever.',
  },
  {
    question: 'What does a hub look like?',
    answer: (
      <span>
        You can check out our{' '}
        <a href="https://kahana.co/explore" className="text-[#038270] font-medium">
          Featured Hubs
        </a>{' '}
        page for examples of what a hub looks like.
      </span>
    ),
  },
  {
    question: 'How do I think about starting a hub?',
    answer: (
      <span>
        The first step is to recognize that you have unique knowledge! Everyone has a topic, field, or skill that they could teach someone who was in their shoes two years ago, a year ago, or even six months ago. If you need help finding yours, we put together a{' '}
        <a href="https://blog.kahana.co/how-to-create-your-first-digital-product/" className="text-[#038270] font-medium">
          step-by-step guide
        </a>{' '}
        to show you how you can quickly identify something you know a lot about and are passionate about and turn it into a hub.
      </span>
    ),
  },
  {
    question: 'How do I get paid from Kahana?',
    answer: (
      <span>
        In a nutshell, you earn money when people subscribe to your monetized hubs. In order to charge for access to your hubs, you can connect to Stripe, which you can do by following{' '}
        <a href="https://blog.kahana.co/connect-stripe/" className="text-[#038270] font-medium">
          these steps
        </a>
        .
      </span>
    ),
  },
  {
    question: 'How many hubs can I create?',
    answer: 'You can create 2 hubs for free, and if you upgrade to a paid plan, you can create unlimited hubs.',
  },
  {
    question: 'How is Kahana different from other platforms?',
    answer: (
      <span>
        Kahana is different from other platforms you can use to monetize your content in two main ways. First, it is the only option that is <b>truly collaborative</b> - it enables people ot co-create, build products <i>together</i>, build off of each other&apos;s work, and monetize all in the same place. Second, it&apos;s a much more efficient way of monetize because you can upload and immediately charge for access to existing materials you&apos;ve already created and curated, as opposed to having to build something from scratch (like a course).
      </span>
    ),
  },
  {
    question: 'Is there a storage limit?',
    answer: (
      <span>
        Yes. The free plan (Creator) has a limit of 1 GB, Expert has a limit of 5 GB, and Team Collaboration and Enterprise each have a limit of 50 GB. For more information, please feel refer to our{' '}
        <a href="https://kahana.co/pricing" className="text-[#038270] font-medium">
          Pricing page
        </a>
        .
      </span>
    ),
  },
  {
    question: 'If I already have a website, can I integrate it with Kahana?',
    answer: 'Absolutely! You can embed Kahana hubs within your website, and you can also place content from your website in Kahana hubs.',
  },
  {
    question: 'Do I get custom domains for my hubs?',
    answer: 'This is not something we currently offer, but we are actively looking into enabling this in the future.',
  },
  {
    question: 'What if I don\'t have an audience for my hub? How do I market and get sales for my hub?',
    answer: (
      <span>
        Great question! We offer plenty of support to help you drive traffic to your hubs - we can feature your hub on our{' '}
        <a href="https://kahana.co/explore" className="text-[#038270] font-medium">
          Explore page
        </a>,{' '}
        and we can interview you about your hub to create both a blog post and a YouTube video for you. To have your hub featured, please fill out{' '}
        <a href="https://7hkdcfzbmr0.typeform.com/to/cO7LxhV1" className="text-[#038270] font-medium">
          this form
        </a>,{' '}
        and to set up your interview, please reach out to{' '}
        <a href="mailto:info@kahana.co" className="font-medium text-[#038270]">
          info@kahana.co
        </a>
        .
      </span>
    ),
  },
  {
    question: 'Can I use Kahana without my own content?',
    answer: 'Yes! You can use Kahana hubs to curate and share content that isn\'t your own (so long as you are appropriately crediting the creator and not claiming it is your own content). The value of your hub can be that you are collecting and filtering high-quality information about a given topic so that others don\'t have to.',
  },
  {
    question: 'I have more questions - where can I go?',
    answer: (
      <span>
        If you have more questions, please feel free to visit our{' '}
        <a href="https://kahana.tawk.help/" className="text-[#038270] font-medium">
          Help Center
        </a>
        .
      </span>
    ),
  },
  // Add more questions...
];

export default function FaqPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Kahana FAQ: What is Kahana</title>
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
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">
              Frequently Asked Questions
            </h1>
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
        </div>
        <Footer />
      </div>
    </>
  );
}
