import React, { useState } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavbarDup';

const faqs = [
  {
    question: 'How do I join the Kahana community?',
    answer: 'To join our community, simply fill out the application form on our community page. We review each application to ensure we maintain a high-quality community of cybersecurity and AI professionals.',
  },
  {
    question: 'What are the benefits of joining the community?',
    answer: 'Members get access to exclusive content, early previews of new features, community events, discussion forums, and our biweekly newsletter with curated insights on cybersecurity and AI trends.',
  },
  {
    question: 'How often do you host community events?',
    answer: 'We host regular virtual events, including webinars, AMAs, and networking sessions. The frequency varies, but we typically have at least one major event per month, plus smaller discussion groups.',
  },
  {
    question: 'Can I share my own content in the community?',
    answer: 'Yes! We encourage members to share relevant content, insights, and experiences. However, please ensure your content aligns with our community guidelines and adds value to the discussion.',
  },
  {
    question: 'How do I access the community resources?',
    answer: "Once approved as a member, you'll receive access to our community platform where you can find all resources, participate in discussions, and connect with other members.",
  },
  {
    question: 'What is the #HackAMonday blog series?',
    answer: "#HackAMonday is our weekly blog series where we share insights about recent cyber incidents, security features, and community updates. It's a great way to stay informed about the latest in cybersecurity.",
  },
  {
    question: 'How can I contribute to the community?',
    answer: 'You can contribute by participating in discussions, sharing your expertise, attending events, providing feedback on new features, and helping other community members with their questions.',
  },
  {
    question: 'Is there a cost to join the community?',
    answer: 'No, membership in the Kahana community is free. We believe in making cybersecurity knowledge and networking accessible to all professionals in the field.',
  },
];

export default function CommunityFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Community FAQ | Kahana</title>
        <meta name="description" content="Frequently asked questions about the Kahana community" />
      </Head>

      <NavBar />

      <main className="min-h-screen bg-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#011910] sm:text-5xl mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-[#4A5745]">
              Find answers to common questions about our community, membership, and resources.
            </p>
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-[#A5DAD8]/30 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-[#011910]">
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-[#66C2BE] transform transition-transform duration-200 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`px-6 transition-all duration-200 ease-in-out ${
                      openIndex === index ? 'pb-4' : 'h-0 overflow-hidden'
                    }`}
                  >
                    <p className="text-[#4A5745]">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-[#E3DFF1]/10 rounded-xl p-8 border border-[#A5DAD8]/30">
            <h2 className="text-2xl font-semibold text-[#011910] mb-4">Still Have Questions?</h2>
            <p className="text-[#4A5745] mb-6">
              If you couldn't find the answer you're looking for, our community team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#66C2BE] hover:bg-[#4A9E9A] transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/community"
                className="inline-flex items-center justify-center px-6 py-3 border border-[#66C2BE] text-base font-medium rounded-md text-[#66C2BE] bg-white hover:bg-[#66C2BE]/5 transition-colors"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
} 