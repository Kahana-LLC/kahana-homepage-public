import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Secure Authentication',
    description: 'Robust authentication and authorization system.',
    details: [
      'Multi-factor authentication',
      'Single sign-on support',
      'Role-based access control',
      'Session management'
    ]
  },
  {
    title: 'Data Protection',
    description: 'Comprehensive data security and privacy controls.',
    details: [
      'End-to-end encryption',
      'Data masking',
      'Secure storage',
      'Access logging'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Built-in compliance and audit capabilities.',
    details: [
      'Audit trails',
      'Compliance reporting',
      'Policy enforcement',
      'Documentation'
    ]
  },
  {
    title: 'Integration Capabilities',
    description: 'Seamless integration with existing systems.',
    details: [
      'API support',
      'SSO integration',
      'Directory services',
      'Custom connectors'
    ]
  }
];

const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Enterprise-grade security features built-in.',
    icon: '🔒'
  },
  {
    title: 'Improved Efficiency',
    description: 'Streamlined workflows and automated processes.',
    icon: '⚡'
  },
  {
    title: 'Better Compliance',
    description: 'Built-in compliance and audit capabilities.',
    icon: '✅'
  },
  {
    title: 'Cost Savings',
    description: 'Reduced operational costs and improved ROI.',
    icon: '💰'
  }
];

const useCases = [
  {
    title: 'Enterprise Applications',
    description: 'Secure and efficient enterprise application management.',
    benefits: [
      'Centralized control',
      'Secure access',
      'Compliance ready',
      'Easy integration'
    ]
  },
  {
    title: 'Cloud Services',
    description: 'Seamless cloud service integration and management.',
    benefits: [
      'Cloud security',
      'Service integration',
      'Access control',
      'Cost optimization'
    ]
  },
  {
    title: 'Business Operations',
    description: 'Streamlined business operations and workflows.',
    benefits: [
      'Process automation',
      'Workflow optimization',
      'Resource management',
      'Performance tracking'
    ]
  }
];

const technicalFeatures = [
  {
    title: 'Modern Architecture',
    description: 'Built with cutting-edge technology stack.',
    details: [
      'Cloud-native design',
      'Microservices architecture',
      'API-first approach',
      'Scalable infrastructure'
    ]
  },
  {
    title: 'Security Framework',
    description: 'Comprehensive security implementation.',
    details: [
      'Zero trust security',
      'Threat protection',
      'Vulnerability scanning',
      'Security monitoring'
    ]
  },
  {
    title: 'Performance Optimization',
    description: 'Optimized for speed and reliability.',
    details: [
      'Load balancing',
      'Caching system',
      'Performance monitoring',
      'Resource optimization'
    ]
  },
  {
    title: 'User Experience',
    description: 'Intuitive and responsive interface.',
    details: [
      'Modern UI/UX',
      'Responsive design',
      'Accessibility features',
      'Custom theming'
    ]
  }
];

export default function WebApplication() {
  return (
    <>
      <Head>
        <title>Web Application | Kahana</title>
        <meta
          name="description"
          content="Kahana's Web Application provides secure, efficient, and compliant web application management for enterprise environments."
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
              Web Application
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive web application solution designed for enterprise environments, providing secure access, efficient management, and seamless integration capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
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

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Enterprise Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
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

      {/* Technical Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Technical Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {technicalFeatures.map((feature, index) => (
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

      {/* CTA Section */}
      <section className="bg-[#3B675E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Enhance Your Web Application Security?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana's Web Application can improve security, efficiency, and compliance in your enterprise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/schedule-a-demo">
              <button className="bg-white text-[#3B675E] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Schedule Demo
              </button>
            </Link>
            <Link href="/pricing">
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-[#3B675E] transition-colors">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
} 