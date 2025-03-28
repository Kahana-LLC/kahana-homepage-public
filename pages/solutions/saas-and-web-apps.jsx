import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Protect your SaaS applications with enterprise-grade security features, including SSO, MFA, and granular access controls.',
    icon: '🔒'
  },
  {
    title: 'Improved User Experience',
    description: 'Provide a seamless, unified experience for your users across all web applications with a single, secure browser.',
    icon: '✨'
  },
  {
    title: 'Cost Reduction',
    description: 'Reduce VDI costs and simplify your infrastructure by centralizing application access in a secure browser.',
    icon: '💰'
  },
  {
    title: 'Compliance & Audit',
    description: 'Maintain detailed audit logs and ensure compliance with industry regulations like SOC 2, HIPAA, and GDPR.',
    icon: '📋'
  }
];

const features = [
  {
    title: 'Single Sign-On (SSO)',
    description: 'Integrate with your existing identity provider for seamless authentication across all applications.',
    details: [
      'SAML 2.0 support',
      'OAuth 2.0 integration',
      'Custom authentication flows'
    ]
  },
  {
    title: 'Access Control',
    description: 'Granular control over who can access which applications and features.',
    details: [
      'Role-based access control',
      'IP-based restrictions',
      'Time-based access policies'
    ]
  },
  {
    title: 'Audit & Monitoring',
    description: 'Comprehensive logging and monitoring of all user activities and security events.',
    details: [
      'Real-time activity monitoring',
      'Detailed audit logs',
      'Security event alerts'
    ]
  },
  {
    title: 'Application Management',
    description: 'Centralized management of all web applications and their security policies.',
    details: [
      'Application whitelisting',
      'Policy enforcement',
      'Version control'
    ]
  }
];

const useCases = [
  {
    title: 'SaaS Companies',
    description: 'Secure access to your SaaS platform while maintaining a great user experience.',
    benefits: [
      'Protect sensitive data',
      'Meet compliance requirements',
      'Reduce support tickets'
    ]
  },
  {
    title: 'Web Applications',
    description: 'Provide secure access to your web applications without compromising usability.',
    benefits: [
      'Enhanced security',
      'Simplified access management',
      'Better user experience'
    ]
  },
  {
    title: 'Enterprise Clients',
    description: 'Help enterprise clients securely access your applications while meeting their security requirements.',
    benefits: [
      'Meet enterprise security needs',
      'Support compliance requirements',
      'Reduce deployment complexity'
    ]
  }
];

export default function SaasAndWebApps() {
  return (
    <>
      <Head>
        <title>SaaS & Web Apps Solutions | Kahana</title>
        <meta
          name="description"
          content="Secure and streamline access to your SaaS applications and web apps with Kahana's enterprise browser solution. Enhance security, improve user experience, and reduce costs."
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
              Secure SaaS & Web Applications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance security, improve user experience, and reduce costs with Kahana's enterprise browser solution for SaaS and web applications.
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
            Ready to Secure Your Applications?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana can help secure your SaaS and web applications while improving the user experience.
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