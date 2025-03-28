import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Protect users from malicious websites, phishing attempts, and malware threats.',
    icon: '🔒'
  },
  {
    title: 'Content Filtering',
    description: 'Control access to inappropriate or harmful web content with advanced filtering.',
    icon: '🛡️'
  },
  {
    title: 'Threat Prevention',
    description: 'Block known malicious sites and prevent access to dangerous content.',
    icon: '🚫'
  },
  {
    title: 'Compliance Ready',
    description: 'Ensure web browsing compliance with organizational policies and regulations.',
    icon: '✅'
  }
];

const features = [
  {
    title: 'Web Security',
    description: 'Comprehensive protection against web-based threats and attacks.',
    details: [
      'Malware protection',
      'Phishing prevention',
      'URL filtering'
    ]
  },
  {
    title: 'Content Control',
    description: 'Advanced content filtering and access control capabilities.',
    details: [
      'Category filtering',
      'Custom policies',
      'Real-time blocking'
    ]
  },
  {
    title: 'Threat Intelligence',
    description: 'Real-time threat detection and prevention using advanced intelligence.',
    details: [
      'Threat detection',
      'Risk assessment',
      'Security alerts'
    ]
  },
  {
    title: 'Policy Management',
    description: 'Flexible policy management and enforcement capabilities.',
    details: [
      'Policy configuration',
      'User groups',
      'Compliance rules'
    ]
  }
];

const useCases = [
  {
    title: 'Enterprise Security',
    description: 'Protect enterprise users from web-based threats and malicious content.',
    benefits: [
      'Threat prevention',
      'Content filtering',
      'Policy enforcement'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Ensure web browsing compliance with organizational policies.',
    benefits: [
      'Policy compliance',
      'Access control',
      'Activity monitoring'
    ]
  },
  {
    title: 'User Protection',
    description: 'Safeguard users from dangerous websites and malicious content.',
    benefits: [
      'Malware protection',
      'Phishing prevention',
      'Safe browsing'
    ]
  }
];

export default function SafeBrowsing() {
  return (
    <>
      <Head>
        <title>Safe Browsing Solutions | Kahana</title>
        <meta
          name="description"
          content="Enable safe browsing with Kahana's enterprise browser solution. Protect users from web threats, control content access, and ensure compliance."
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
              Safe Browsing Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect users from web threats and ensure safe browsing with Kahana's enterprise browser solution, featuring advanced security controls and content filtering.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Enterprise Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
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

      {/* Use Cases Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center text-gray-600">
                      <span className="text-[#3B675E] mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-kahana-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Enable Safe Browsing?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana can help you implement comprehensive safe browsing controls while maintaining user productivity.
          </p>
          <Link href="/contact">
            <button className="bg-white text-kahana-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>
    </>
  );
} 