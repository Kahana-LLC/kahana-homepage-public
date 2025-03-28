import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    title: 'Enhanced Productivity',
    description: 'Enable employees to work efficiently with secure access to all necessary resources.',
    icon: '⚡'
  },
  {
    title: 'Improved Collaboration',
    description: 'Facilitate seamless collaboration across teams with secure access to shared resources.',
    icon: '🤝'
  },
  {
    title: 'Better User Experience',
    description: 'Provide a frictionless work experience while maintaining security controls.',
    icon: '✨'
  },
  {
    title: 'Security & Compliance',
    description: 'Maintain robust security and compliance while enabling productivity.',
    icon: '🔒'
  }
];

const features = [
  {
    title: 'Secure Access',
    description: 'Provide secure access to all necessary work resources and applications.',
    details: [
      'Single sign-on',
      'Access control',
      'Resource management'
    ]
  },
  {
    title: 'Workflow Optimization',
    description: 'Streamline work processes and improve operational efficiency.',
    details: [
      'Process automation',
      'Task management',
      'Workflow integration'
    ]
  },
  {
    title: 'User Experience',
    description: 'Deliver a seamless and intuitive work environment.',
    details: [
      'Intuitive interface',
      'Quick access',
      'Personalized settings'
    ]
  },
  {
    title: 'Security Controls',
    description: 'Implement comprehensive security measures without compromising usability.',
    details: [
      'Access policies',
      'Activity monitoring',
      'Compliance rules'
    ]
  }
];

const useCases = [
  {
    title: 'Remote Work Enablement',
    description: 'Empower employees to work effectively from anywhere.',
    benefits: [
      'Secure remote access',
      'Resource availability',
      'Collaboration tools'
    ]
  },
  {
    title: 'Digital Transformation',
    description: 'Support organizational digital transformation initiatives.',
    benefits: [
      'Modern workflows',
      'Cloud adoption',
      'Process optimization'
    ]
  },
  {
    title: 'Employee Productivity',
    description: 'Enhance employee productivity and satisfaction.',
    benefits: [
      'Efficient access',
      'Seamless experience',
      'Work flexibility'
    ]
  }
];

export default function SayYesAtWork() {
  return (
    <>
      <Head>
        <title>Say Yes at Work Solutions | Kahana</title>
        <meta
          name="description"
          content="Enable employees to say yes at work with Kahana's enterprise browser solution. Enhance productivity, collaboration, and user experience while maintaining security."
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
              Say Yes at Work Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enable employees to work efficiently and effectively with Kahana's enterprise browser solution, providing secure access to resources while enhancing productivity and collaboration.
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
            Ready to Enable Your Workforce?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana can help you create an environment where employees can say yes at work while maintaining security and compliance.
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