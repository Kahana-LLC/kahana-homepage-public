import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Protect corporate data and applications while allowing employees to use their personal devices with confidence.',
    icon: '🔒'
  },
  {
    title: 'Employee Freedom',
    description: 'Enable employees to work from their preferred devices while maintaining enterprise security standards.',
    icon: '✨'
  },
  {
    title: 'Cost Savings',
    description: 'Reduce hardware costs by leveraging existing personal devices while maintaining security and compliance.',
    icon: '💰'
  },
  {
    title: 'Improved Productivity',
    description: 'Boost employee satisfaction and productivity by allowing them to work on familiar devices.',
    icon: '📈'
  }
];

const features = [
  {
    title: 'Device Management',
    description: 'Comprehensive management of personal devices accessing corporate resources.',
    details: [
      'Device health monitoring',
      'Compliance checking',
      'Remote management capabilities'
    ]
  },
  {
    title: 'Data Protection',
    description: 'Advanced security measures to protect corporate data on personal devices.',
    details: [
      'Data encryption',
      'Secure data containers',
      'Remote wipe capabilities'
    ]
  },
  {
    title: 'Access Control',
    description: 'Granular control over corporate resource access from personal devices.',
    details: [
      'Role-based access',
      'Application control',
      'Network segmentation'
    ]
  },
  {
    title: 'Compliance & Audit',
    description: 'Comprehensive logging and monitoring for compliance and security.',
    details: [
      'Activity monitoring',
      'Compliance reporting',
      'Security event tracking'
    ]
  }
];

const useCases = [
  {
    title: 'Remote Work',
    description: 'Enable secure remote work on personal devices while maintaining corporate security.',
    benefits: [
      'Secure remote access',
      'Flexible work arrangements',
      'Reduced IT overhead'
    ]
  },
  {
    title: 'Contractor Access',
    description: 'Provide secure access to corporate resources for contractors and temporary workers.',
    benefits: [
      'Controlled access',
      'Temporary access management',
      'Security compliance'
    ]
  },
  {
    title: 'Employee Choice',
    description: 'Support employee device choice while maintaining enterprise security.',
    benefits: [
      'Employee satisfaction',
      'Cost reduction',
      'Security assurance'
    ]
  }
];

export default function BYOD() {
  return (
    <>
      <Head>
        <title>BYOD Solutions | Kahana</title>
        <meta
          name="description"
          content="Secure BYOD (Bring Your Own Device) solutions with Kahana's enterprise browser. Enable employees to work from personal devices while maintaining enterprise security."
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
              Secure BYOD Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enable employees to work from their personal devices while maintaining enterprise security with Kahana's BYOD solution.
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
            Ready to Enable Secure BYOD?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana can help you implement a secure BYOD program while maintaining enterprise security.
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