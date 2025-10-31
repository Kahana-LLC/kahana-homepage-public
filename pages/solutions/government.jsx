import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    title: 'FedRAMP Compliance',
    description: 'Meet federal security requirements and compliance standards.',
    icon: '🏛️'
  },
  {
    title: 'Secure Access',
    description: 'Provide secure access to government systems and sensitive data.',
    icon: '🔒'
  },
  {
    title: 'Operational Efficiency',
    description: 'Streamline government operations and service delivery.',
    icon: '⚡'
  },
  {
    title: 'Data Protection',
    description: 'Protect sensitive government information and citizen data.',
    icon: '🛡️'
  }
];

const features = [
  {
    title: 'FedRAMP Compliance',
    description: 'Maintain compliance with federal security requirements.',
    details: [
      'Security controls',
      'Access management',
      'Audit capabilities'
    ]
  },
  {
    title: 'Government Systems',
    description: 'Secure access to government-specific applications and systems.',
    details: [
      'System integration',
      'Workflow automation',
      'Application security'
    ]
  },
  {
    title: 'Access Management',
    description: 'Control and monitor access to sensitive government data.',
    details: [
      'Role-based access',
      'Session management',
      'Activity monitoring'
    ]
  },
  {
    title: 'Security Controls',
    description: 'Implement government-specific security measures.',
    details: [
      'Data protection',
      'Compliance rules',
      'Security policies'
    ]
  }
];

const useCases = [
  {
    title: 'Federal Agencies',
    description: 'Enable secure access for federal government employees.',
    benefits: [
      'FedRAMP compliance',
      'Secure access',
      'Operational efficiency'
    ]
  },
  {
    title: 'State & Local',
    description: 'Protect state and local government systems and data.',
    benefits: [
      'System security',
      'Data protection',
      'Compliance adherence'
    ]
  },
  {
    title: 'Government Services',
    description: 'Support government service delivery and operations.',
    benefits: [
      'Service efficiency',
      'Citizen data protection',
      'Operational readiness'
    ]
  }
];

export default function Government() {
  return (
    <>
      <Head>
        <title>Government Solutions | Kahana</title>
        <meta
          name="description"
          content="Secure government solutions with Kahana's enterprise browser. Ensure FedRAMP compliance, protect sensitive data, and enable efficient government operations."
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
            <h1 className="text-4xl font-bold text-[#4A5745] mb-6">
              Government Solutions
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto">
              Secure government operations with Kahana's enterprise browser solution, ensuring FedRAMP compliance while enabling efficient service delivery and protecting sensitive data.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F3F8E4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Key Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-lg p-6 shadow-md border border-[#728552]">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-[#4A5745] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#4A5745]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Enterprise Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-[#F3F8E4] rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#4A5745] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4A5745] mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-[#4A5745]">
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
      <section className="bg-[#F3F8E4] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Use Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gradient-to-br from-[#F3F8E4] to-[#E0D48C] rounded-lg p-6 shadow-md border border-[#728552]">
                <h3 className="text-xl font-semibold text-[#4A5745] mb-3">
                  {useCase.title}
                </h3>
                <p className="text-[#4A5745] mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center text-[#4A5745]">
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
      <section className="bg-[#788B59] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Secure Your Government Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Oasis can transform your government organization.
          </p>
          <Link href="/schedule-demo">
            <button className="nav-button download inline-flex items-center justify-center rounded-md text-white font-bold shadow-sm px-6 py-3 text-base no-underline hover:no-underline focus:no-underline" style={{ textDecoration: 'none', backgroundColor: '#788B59' }}>
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>
    </>
  );
} 