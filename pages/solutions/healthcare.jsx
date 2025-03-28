import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    title: 'HIPAA Compliance',
    description: 'Ensure compliance with healthcare data protection regulations and standards.',
    icon: '🏥'
  },
  {
    title: 'Secure Access',
    description: 'Provide secure access to patient records and healthcare applications.',
    icon: '🔒'
  },
  {
    title: 'Clinical Efficiency',
    description: 'Streamline clinical workflows and improve healthcare delivery.',
    icon: '⚡'
  },
  {
    title: 'Data Protection',
    description: 'Protect sensitive patient information and healthcare data.',
    icon: '🛡️'
  }
];

const features = [
  {
    title: 'HIPAA Compliance',
    description: 'Maintain compliance with healthcare data protection regulations.',
    details: [
      'Data encryption',
      'Access controls',
      'Audit logging'
    ]
  },
  {
    title: 'Clinical Applications',
    description: 'Secure access to healthcare-specific applications and systems.',
    details: [
      'EHR integration',
      'Clinical workflows',
      'Application security'
    ]
  },
  {
    title: 'Access Management',
    description: 'Control and monitor access to sensitive healthcare data.',
    details: [
      'Role-based access',
      'Session management',
      'Activity monitoring'
    ]
  },
  {
    title: 'Security Controls',
    description: 'Implement healthcare-specific security measures.',
    details: [
      'Data protection',
      'Compliance rules',
      'Security policies'
    ]
  }
];

const useCases = [
  {
    title: 'Healthcare Providers',
    description: 'Enable secure access for healthcare professionals.',
    benefits: [
      'Clinical efficiency',
      'Secure access',
      'Compliance management'
    ]
  },
  {
    title: 'Healthcare Systems',
    description: 'Protect healthcare systems and patient data.',
    benefits: [
      'System security',
      'Data protection',
      'Compliance adherence'
    ]
  },
  {
    title: 'Healthcare Organizations',
    description: 'Support healthcare organization security needs.',
    benefits: [
      'Risk management',
      'Compliance readiness',
      'Operational efficiency'
    ]
  }
];

export default function Healthcare() {
  return (
    <>
      <Head>
        <title>Healthcare Solutions | Kahana</title>
        <meta
          name="description"
          content="Secure healthcare solutions with Kahana's enterprise browser. Ensure HIPAA compliance, protect patient data, and enable efficient clinical workflows."
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
              Healthcare Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Secure healthcare operations with Kahana's enterprise browser solution, ensuring HIPAA compliance while enabling efficient clinical workflows and protecting patient data.
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
            Ready to Secure Your Healthcare Operations?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana can help you protect patient data, ensure HIPAA compliance, and enable efficient clinical workflows.
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