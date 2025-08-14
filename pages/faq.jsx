import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SharedCTA from '../components/SharedCTA';

const faqCategories = [
  {
    title: 'Product Overview',
    questions: [
      {
        question: 'What is Kahana Oasis?',
        answer: 'Kahana Oasis is an enterprise browser that combines security, productivity, and collaboration features. It provides a modern browsing experience with advanced security controls, multi-view capabilities, and AI-powered assistance for enterprise environments.'
      },
      {
        question: 'What are the key features of Kahana Oasis?',
        answer: 'Key features include hub-based organization, multi-view capabilities (triple view support), smart navigation, AI-powered assistant, enterprise-grade security controls, and seamless integration with existing systems.'
      },
      {
        question: 'How does Kahana Oasis differ from traditional browsers?',
        answer: 'Kahana Oasis is specifically designed for enterprise use, offering enhanced security controls, compliance features, and productivity tools that aren\'t available in traditional browsers. It provides centralized management, advanced threat protection, and built-in collaboration features.'
      }
    ]
  },
  {
    title: 'Security & Compliance',
    questions: [
      {
        question: 'How does Kahana ensure enterprise security?',
        answer: 'Kahana implements multiple layers of security including enterprise-grade encryption, threat detection, access controls, and compliance monitoring. Our platform includes features like secure browsing, content filtering, and real-time threat protection.'
      },
      {
        question: 'What compliance standards does Kahana support?',
        answer: 'Kahana supports various compliance frameworks including HIPAA for healthcare, FedRAMP for government, and industry-specific regulations. Our platform provides built-in compliance monitoring and reporting tools.'
      },
      {
        question: 'How does Kahana protect sensitive data?',
        answer: 'We protect sensitive data through enterprise-grade encryption, secure data transmission, access controls, and regular security updates. Our platform also includes features for data loss prevention and secure content sharing.'
      }
    ]
  },
  {
    title: 'Implementation & Integration',
    questions: [
      {
        question: 'How do I get started with Kahana?',
        answer: 'Getting started is easy. Contact our sales team to schedule a demo and discuss your organization\'s needs. We\'ll help you choose the right solution and guide you through the implementation process, including installation, configuration, and user training.'
      },
      {
        question: 'Can Kahana integrate with existing systems?',
        answer: 'Yes, Kahana is designed to integrate seamlessly with your existing enterprise systems, including identity providers (SSO), security tools, and compliance frameworks. We support standard protocols and APIs for easy integration.'
      },
      {
        question: 'What kind of training and support is provided?',
        answer: 'We provide comprehensive support including 24/7 technical assistance, dedicated account management, regular updates, and training resources. Our support team offers both technical and user training to ensure successful adoption.'
      }
    ]
  },
  {
    title: 'Use Cases & Solutions',
    questions: [
      {
        question: 'What industries does Kahana serve?',
        answer: 'Kahana serves various industries including healthcare, government, financial services, and enterprise organizations. Our solutions are tailored to meet specific industry requirements and compliance needs.'
      },
      {
        question: 'How does Kahana support remote work?',
        answer: 'Kahana provides enterprise-grade security for remote workers, enabling secure access to corporate resources from any location. Our platform includes features for secure remote browsing, collaboration, and access control.'
      },
      {
        question: 'Can Kahana help with M&A integration?',
        answer: 'Yes, Kahana accelerates M&A integration by providing secure, controlled access for acquired employees while maintaining enterprise security and compliance. Our platform enables rapid onboarding and secure resource access.'
      }
    ]
  }
];

export default function FAQ() {
  const [openCategories, setOpenCategories] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (categoryIndex) => {
    setOpenCategories(prev => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex]
    }));
  };

  const highlightText = (text, query) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.split(regex).map((part, i) => 
      regex.test(part) ? (
        <span key={i} className="bg-yellow-200 px-1 rounded">
          {part}
        </span>
      ) : part
    );
  };

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(faq =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  const totalResults = filteredCategories.reduce(
    (sum, category) => sum + category.questions.length,
    0
  );

  return (
    <>
      <Head>
        <title>FAQ | Kahana</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Kahana's enterprise browsing solutions, security features, implementation, and use cases."
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

          {/* Search Bar */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-kahana-primary focus:border-transparent"
              />
              <svg
                className="absolute right-3 top-3.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {searchQuery && (
              <p className="mt-2 text-sm text-gray-600">
                Found {totalResults} matching {totalResults === 1 ? 'result' : 'results'}
              </p>
            )}
          </div>

          <div className="mt-12 space-y-6">
            {filteredCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(categoryIndex)}
                  className="w-full px-6 py-4 bg-white hover:bg-gray-50 flex justify-between items-center border-b border-gray-200"
                >
                  <h2 className="text-2xl font-bold text-gray-900">
                    {category.title}
                    {searchQuery && (
                      <span className="ml-2 text-sm font-normal text-gray-500">
                        ({category.questions.length} matches)
                      </span>
                    )}
                  </h2>
                  <svg
                    className={`w-6 h-6 text-gray-500 transform transition-transform ${
                      openCategories[categoryIndex] ? 'rotate-180' : ''
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
                </button>
                
                {openCategories[categoryIndex] && (
                  <div className="px-6 py-4 bg-white">
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => (
                        <div key={faqIndex} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                          <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            {highlightText(faq.question, searchQuery)}
                          </h3>
                          <p className="text-gray-600">
                            {highlightText(faq.answer, searchQuery)}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center mt-12">
              <p className="text-xl text-gray-600">No FAQs found matching your search.</p>
            </div>
          )}

          {/* Additional Resources Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Additional Resources
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Documentation CTA */}
              <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-kahana-primary mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">Documentation</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Dive deeper into Kahana's features with our comprehensive documentation. Learn about advanced configurations, best practices, and troubleshooting guides.
                </p>
                <Link href="/docs">
                  <button className="bg-kahana-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-kahana-primary-dark transition-colors shadow-lg shadow-kahana-accent-sky/20 hover:shadow-xl hover:shadow-kahana-accent-sky/30"
                    
                  >
                    <span >
                      View Documentation
                    </span>
                  </button>
                </Link>
              </div>

              {/* Blog CTA */}
              <div className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl p-8">
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-kahana-primary mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15"
                    />
                  </svg>
                  <h3 className="text-2xl font-bold text-gray-900">Blog</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  Stay updated with the latest insights, industry trends, and best practices in enterprise browsing security and productivity.
                </p>
                <Link href="/blog">
                  <button className="bg-kahana-primary text-white px-6 py-2 rounded-md font-semibold hover:bg-kahana-primary-dark transition-colors shadow-lg shadow-kahana-accent-sky/20 hover:shadow-xl hover:shadow-kahana-accent-sky/30"
                    
                  >
                    <span >
                      Read Our Blog
                    </span>
                  </button>
                </Link>
              </div>
            </div>
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
