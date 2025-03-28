import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../../components/Footer';

const benefits = [
  {
    title: 'Secure Access',
    description: 'Provide contractors with secure, controlled access to only the resources they need.',
    icon: '🔒'
  },
  {
    title: 'Easy Management',
    description: 'Streamline contractor onboarding and offboarding with automated access management.',
    icon: '⚡'
  },
  {
    title: 'Cost Control',
    description: 'Reduce IT overhead and hardware costs by leveraging browser-based access.',
    icon: '💰'
  },
  {
    title: 'Compliance Ready',
    description: 'Maintain detailed audit trails and ensure compliance with security requirements.',
    icon: '📋'
  }
];

const features = [
  {
    title: 'Access Control',
    description: 'Granular control over contractor access to corporate resources.',
    details: [
      'Role-based permissions',
      'Time-limited access',
      'Resource restrictions'
    ]
  },
  {
    title: 'Security Monitoring',
    description: 'Comprehensive monitoring of contractor activities and access patterns.',
    details: [
      'Activity tracking',
      'Access logging',
      'Security alerts'
    ]
  },
  {
    title: 'Identity Management',
    description: 'Streamlined contractor identity and access management.',
    details: [
      'Quick provisioning',
      'Access revocation',
      'Identity verification'
    ]
  },
  {
    title: 'Compliance & Audit',
    description: 'Detailed tracking and reporting for compliance requirements.',
    details: [
      'Access reports',
      'Activity logs',
      'Compliance documentation'
    ]
  }
];

const useCases = [
  {
    title: 'IT Contractors',
    description: 'Secure access for IT contractors working on system maintenance and development.',
    benefits: [
      'Controlled system access',
      'Secure development environment',
      'Compliance maintenance'
    ]
  },
  {
    title: 'Consulting Teams',
    description: 'Enable consulting teams to access necessary resources while maintaining security.',
    benefits: [
      'Project-specific access',
      'Team collaboration',
      'Data protection'
    ]
  },
  {
    title: 'Service Providers',
    description: 'Provide secure access for external service providers and vendors.',
    benefits: [
      'Limited resource access',
      'Service delivery support',
      'Security compliance'
    ]
  }
];

export default function Contractors() {
  return (
    <>
      <Head>
        <title>3rd Party Contractor Solutions | Kahana</title>
        <meta
          name="description"
          content="Secure contractor access management with Kahana's enterprise browser solution. Enable controlled, secure access for third-party contractors while maintaining enterprise security."
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
              3rd Party Contractor Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enable secure, controlled access for third-party contractors while maintaining enterprise security with Kahana's browser-based solution.
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
            Ready to Secure Your Contractor Access?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana can help you manage third-party contractor access while maintaining enterprise security.
          </p>
          <Link href="/contact">
            <button className="bg-white text-kahana-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
} 