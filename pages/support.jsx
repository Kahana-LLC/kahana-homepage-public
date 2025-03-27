import React from 'react';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function SupportPage() {
  const supportCategories = [
    {
      title: 'Getting Started',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      description: 'New to Kahana? Start here for setup guides and basic tutorials.',
      link: '#'
    },
    {
      title: 'Security Configuration',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      description: 'Learn how to configure security settings and policies.',
      link: '#'
    },
    {
      title: 'User Management',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      description: 'Manage users, roles, and permissions within your organization.',
      link: '#'
    },
    {
      title: 'Troubleshooting',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: 'Common issues and their solutions.',
      link: '#'
    }
  ];

  const commonQuestions = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password through the login page by clicking "Forgot Password" and following the email instructions.',
      link: '#'
    },
    {
      question: 'How do I add new users to my organization?',
      answer: 'Navigate to the User Management section in your admin dashboard to invite and manage new users.',
      link: '#'
    },
    {
      question: 'What are the system requirements?',
      answer: 'Kahana Enterprise Browser supports Windows 10+, macOS 10.15+, and major Linux distributions.',
      link: '#'
    },
    {
      question: 'How do I update the browser?',
      answer: 'Updates are automatically downloaded and installed. You can check for updates manually in Settings.',
      link: '#'
    }
  ];

  return (
    <>
      <Head>
        <title>Support - Kahana</title>
        <meta
          name="description"
          content="Get help with Kahana Enterprise Browser. Access documentation, tutorials, and contact our support team."
        />
      </Head>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#0B3B2D] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">How can we help?</h1>
              <p className="text-xl max-w-2xl mx-auto">
                Find answers, documentation, and contact information for Kahana Enterprise Browser support.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Support Categories */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Support Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {supportCategories.map((category, index) => (
                  <a
                    key={index}
                    href={category.link}
                    className="block p-6 bg-white border rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <div className="text-[#0B3B2D] mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </a>
                ))}
              </div>
            </div>

            {/* Common Questions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Common Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {commonQuestions.map((item, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">{item.question}</h3>
                    <p className="text-gray-600 mb-4">{item.answer}</p>
                    <a href={item.link} className="text-[#0B3B2D] hover:underline">
                      Learn more →
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gray-50 p-8 rounded-lg">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4">Need More Help?</h2>
                <p className="text-gray-600 mb-8">
                  Our support team is available 24/7 to help you with any questions or issues you may have.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Email Support</h3>
                    <a
                      href="mailto:support@kahana.co"
                      className="text-[#0B3B2D] hover:underline"
                    >
                      support@kahana.co
                    </a>
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold mb-2">Enterprise Support</h3>
                    <p className="text-gray-600">
                      Contact your dedicated account manager or call
                      <a href="tel:+18005555555" className="text-[#0B3B2D] hover:underline ml-1">
                        1-800-555-5555
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
} 