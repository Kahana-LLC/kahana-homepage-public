import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    title: 'Cost Savings',
    description: 'Significantly reduce VDI infrastructure and maintenance costs with a browser-based solution.',
    icon: '💰'
  },
  {
    title: 'Simplified Management',
    description: 'Streamline IT operations by eliminating complex VDI infrastructure management.',
    icon: '⚡'
  },
  {
    title: 'Enhanced Performance',
    description: 'Improve user experience with faster access and better resource utilization.',
    icon: '🚀'
  },
  {
    title: 'Flexible Access',
    description: 'Enable secure access from any device without the overhead of VDI.',
    icon: '✨'
  }
];

const features = [
  {
    title: 'Browser-Based Access',
    description: 'Secure access to corporate resources through a managed browser.',
    details: [
      'No VDI infrastructure needed',
      'Cross-platform support',
      'Instant access'
    ]
  },
  {
    title: 'Resource Management',
    description: 'Efficient resource allocation and management without VDI overhead.',
    details: [
      'Optimized performance',
      'Reduced server load',
      'Better scalability'
    ]
  },
  {
    title: 'Security Controls',
    description: 'Enterprise-grade security without VDI complexity.',
    details: [
      'Access control',
      'Data protection',
      'Compliance enforcement'
    ]
  },
  {
    title: 'Cost Optimization',
    description: 'Comprehensive cost reduction through VDI elimination.',
    details: [
      'Infrastructure savings',
      'Maintenance reduction',
      'Resource optimization'
    ]
  }
];

const useCases = [
  {
    title: 'VDI Migration',
    description: 'Migrate from traditional VDI to a more efficient browser-based solution.',
    benefits: [
      'Cost reduction',
      'Simplified management',
      'Better user experience'
    ]
  },
  {
    title: 'Remote Work',
    description: 'Support remote work without VDI infrastructure overhead.',
    benefits: [
      'Flexible access',
      'Reduced complexity',
      'Improved performance'
    ]
  },
  {
    title: 'Application Access',
    description: 'Provide secure application access without VDI complexity.',
    benefits: [
      'Streamlined access',
      'Better scalability',
      'Cost efficiency'
    ]
  }
];

export default function VDI() {
  return (
    <>
      <Head>
        <title>VDI Reduction Solutions | Kahana</title>
        <meta
          name="description"
          content="Reduce VDI costs and complexity with Kahana's enterprise browser solution. Eliminate VDI infrastructure while maintaining secure access to corporate resources."
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
              VDI Reduction Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eliminate VDI infrastructure costs and complexity while maintaining secure access to corporate resources with Kahana's browser-based solution.
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
            Ready to Reduce Your VDI Costs?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana can help you eliminate VDI infrastructure while maintaining secure access to corporate resources.
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