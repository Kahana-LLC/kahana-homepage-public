import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Implement Zero Trust principles with continuous verification and least privilege access.',
    icon: '🔒'
  },
  {
    title: 'Risk Reduction',
    description: 'Minimize attack surface and reduce security risks through strict access controls.',
    icon: '🛡️'
  },
  {
    title: 'Compliance Ready',
    description: 'Meet regulatory requirements with comprehensive security controls and audit trails.',
    icon: '📋'
  },
  {
    title: 'Improved Visibility',
    description: 'Gain complete visibility into user activities and access patterns.',
    icon: '👁️'
  }
];

const features = [
  {
    title: 'Identity Verification',
    description: 'Continuous verification of user identity and device security posture.',
    details: [
      'Multi-factor authentication',
      'Device health checks',
      'Behavioral analytics'
    ]
  },
  {
    title: 'Access Control',
    description: 'Granular access controls based on user context and risk level.',
    details: [
      'Least privilege access',
      'Contextual policies',
      'Dynamic permissions'
    ]
  },
  {
    title: 'Security Monitoring',
    description: 'Real-time monitoring and analysis of security events and access patterns.',
    details: [
      'Activity tracking',
      'Threat detection',
      'Incident response'
    ]
  },
  {
    title: 'Compliance & Audit',
    description: 'Comprehensive logging and reporting for security compliance.',
    details: [
      'Access logs',
      'Security reports',
      'Audit trails'
    ]
  }
];

const useCases = [
  {
    title: 'Remote Work',
    description: 'Secure remote access with Zero Trust principles for distributed workforces.',
    benefits: [
      'Secure remote access',
      'Access control',
      'Activity monitoring'
    ]
  },
  {
    title: 'Cloud Security',
    description: 'Protect cloud resources with Zero Trust access controls.',
    benefits: [
      'Cloud security',
      'Resource protection',
      'Access management'
    ]
  },
  {
    title: 'Data Protection',
    description: 'Safeguard sensitive data with Zero Trust security controls.',
    benefits: [
      'Data security',
      'Access control',
      'Compliance maintenance'
    ]
  }
];

export default function ZeroTrust() {
  return (
    <>
      <Head>
        <title>Zero Trust Solutions | Kahana</title>
        <meta
          name="description"
          content="Implement Zero Trust security with Kahana's enterprise browser solution. Enable continuous verification, least privilege access, and comprehensive security controls."
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
              Zero Trust Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Implement Zero Trust security principles with Kahana's enterprise browser solution, enabling continuous verification and least privilege access.
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
      <section className="bg-[#3B675E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Implement Zero Trust?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana can help you implement Zero Trust security principles while maintaining user productivity.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#3B675E] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
} 