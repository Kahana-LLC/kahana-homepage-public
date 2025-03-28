import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

const faqs = [
  {
    question: 'What is Kahana?',
    answer: 'Kahana is an enterprise browsing solution that provides secure, compliant, and efficient web access for organizations. Our platform includes features like advanced security controls, centralized management, and productivity tools.'
  },
  {
    question: 'How does Kahana ensure security?',
    answer: 'Kahana implements multiple layers of security, including enterprise-grade encryption, threat detection, access controls, and compliance monitoring. We regularly update our security measures to protect against emerging threats.'
  },
  {
    question: 'Can Kahana integrate with existing systems?',
    answer: 'Yes, Kahana is designed to integrate seamlessly with your existing enterprise systems, including identity providers, security tools, and compliance frameworks.'
  },
  {
    question: 'What kind of support does Kahana offer?',
    answer: 'We provide comprehensive support including 24/7 technical assistance, dedicated account management, regular updates, and training resources for your team.'
  },
  {
    question: 'How do I get started with Kahana?',
    answer: 'Getting started is easy. Contact our sales team to schedule a demo and discuss your organization\'s needs. We\'ll help you choose the right solution and guide you through the implementation process.'
  }
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ | Kahana</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Kahana's enterprise browsing solutions."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
            <p className="mt-4 text-xl text-gray-600">
              Find answers to common questions about Kahana's enterprise browsing solutions.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SharedCTA
        title="Still Have Questions?"
        description="Contact our team to learn more about how Kahana can help your organization."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </>
  );
}
