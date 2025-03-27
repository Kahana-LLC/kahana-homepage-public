import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../components/Footer';
import Link from 'next/link';

const sections = [
  {
    title: 'Our Commitment',
    content: `Kahana is committed to maintaining a workplace that respects and protects the rights of all employees. We adhere to all applicable labor laws and regulations, including right-to-work laws where applicable.`,
    details: [
      'Equal employment opportunities',
      'Fair treatment of all employees',
      'Compliance with labor laws',
      'Protection of employee rights'
    ]
  },
  {
    title: 'Employee Rights',
    content: 'We ensure that all employees have the right to:',
    details: [
      'Choose whether to join or support a union',
      'Work without being required to join a union',
      'Fair compensation and benefits',
      'Safe and healthy working conditions',
      'Freedom from discrimination and harassment'
    ]
  },
  {
    title: 'Legal Compliance',
    content: 'Kahana maintains compliance with all relevant laws and regulations:',
    details: [
      'Federal labor laws',
      'State-specific right-to-work laws',
      'Equal employment opportunity regulations',
      'Workplace safety standards',
      'Fair labor standards'
    ]
  },
  {
    title: 'Our Policies',
    content: 'Our workplace policies reflect our commitment to employee rights:',
    details: [
      'Non-discrimination policy',
      'Equal opportunity employment',
      'Fair compensation practices',
      'Safe workplace standards',
      'Employee grievance procedures'
    ]
  }
];

const faqs = [
  {
    question: 'What is Right to Work?',
    answer: 'Right to Work laws ensure that employees have the freedom to choose whether to join or financially support a union as a condition of employment. These laws protect workers from being required to join a union or pay union dues as a condition of employment.'
  },
  {
    question: 'How does Kahana support Right to Work?',
    answer: 'Kahana fully supports and complies with Right to Work laws. We believe in giving employees the freedom to make their own decisions regarding union membership and support.'
  },
  {
    question: 'What are my rights as an employee?',
    answer: 'As an employee at Kahana, you have the right to work without being required to join a union, receive fair compensation, work in a safe environment, and be free from discrimination or harassment.'
  },
  {
    question: 'How can I report concerns?',
    answer: 'Kahana provides multiple channels for reporting concerns, including direct communication with management, HR department, and anonymous reporting systems. We take all reports seriously and ensure appropriate action is taken.'
  }
];

export default function RightToWork() {
  return (
    <>
      <Head>
        <title>Right to Work | Kahana</title>
        <meta
          name="description"
          content="Learn about Kahana's commitment to workplace rights and compliance with Right to Work laws."
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
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Right to Work
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kahana's commitment to workplace rights and compliance with Right to Work laws.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-600 mb-4">{section.content}</p>
                <ul className="space-y-2">
                  {section.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-gray-600">
                      <span className="text-[#3B675E] mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#3B675E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Have Questions About Your Rights?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Our HR team is here to help answer any questions about your workplace rights and Kahana's policies.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#3B675E] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Contact HR
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
} 