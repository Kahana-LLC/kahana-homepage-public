import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    title: 'Rapid Integration',
    description: 'Accelerate M&A integration by providing immediate secure access to corporate resources for acquired employees.',
    icon: '⚡'
  },
  {
    title: 'Enhanced Security',
    description: 'Maintain strict security controls during the transition period while enabling productivity.',
    icon: '🔒'
  },
  {
    title: 'Seamless Experience',
    description: 'Provide a frictionless onboarding experience for acquired employees with immediate access to needed resources.',
    icon: '✨'
  },
  {
    title: 'Cost Efficiency',
    description: 'Reduce IT overhead and hardware costs during M&A transitions with a browser-based solution.',
    icon: '💰'
  }
];

const features = [
  {
    title: 'Identity Management',
    description: 'Streamlined identity and access management for acquired employees.',
    details: [
      'Quick user provisioning',
      'Role-based access control',
      'Identity synchronization'
    ]
  },
  {
    title: 'Security Controls',
    description: 'Comprehensive security measures to protect corporate assets during integration.',
    details: [
      'Access monitoring',
      'Data protection',
      'Compliance enforcement'
    ]
  },
  {
    title: 'Resource Access',
    description: 'Controlled access to corporate resources and applications.',
    details: [
      'Application whitelisting',
      'Resource segmentation',
      'Access auditing'
    ]
  },
  {
    title: 'Compliance & Reporting',
    description: 'Detailed tracking and reporting for compliance and audit requirements.',
    details: [
      'Activity logging',
      'Compliance reporting',
      'Audit trail generation'
    ]
  }
];

const useCases = [
  {
    title: 'Acquisition Integration',
    description: 'Enable rapid integration of acquired companies with secure access to corporate resources.',
    benefits: [
      'Quick employee onboarding',
      'Secure resource access',
      'Compliance maintenance'
    ]
  },
  {
    title: 'Divestiture Support',
    description: 'Support divestiture processes with controlled access management.',
    benefits: [
      'Access control',
      'Data protection',
      'Transition support'
    ]
  },
  {
    title: 'Joint Ventures',
    description: 'Facilitate secure collaboration in joint venture scenarios.',
    benefits: [
      'Partner access control',
      'Resource sharing',
      'Security compliance'
    ]
  }
];

export default function MA() {
  return (
    <>
      <Head>
        <title>M&A Onboarding Solutions | Kahana</title>
        <meta
          name="description"
          content="Streamline M&A onboarding with Kahana's enterprise browser solution. Enable rapid, secure integration of acquired employees while maintaining enterprise security."
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
              M&A Onboarding Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline M&A integration with secure, rapid onboarding of acquired employees using Kahana's enterprise browser solution.
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
            Ready to Streamline Your M&A Process?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana can help you accelerate M&A onboarding while maintaining security and compliance.
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