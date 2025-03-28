import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';

const securityFeatures = [
  {
    title: 'Enhanced Content Security Policy',
    description: 'Strict CSP rules restricting resource loading to trusted sources.',
    details: [
      'Default-src limited to HTTPS and same-origin',
      'Protection against XSS attacks',
      'Frame-ancestors protection',
      'Form-action restrictions'
    ]
  },
  {
    title: 'Advanced Certificate Management',
    description: 'Robust SSL/TLS certificate validation and control.',
    details: [
      'Detailed certificate information',
      'Granular control over acceptance',
      'User-friendly notifications',
      'Certificate validation'
    ]
  },
  {
    title: 'Comprehensive Permission Management',
    description: 'Granular controls for sensitive browser features.',
    details: [
      'Default deny policy',
      'Clear visual indicators',
      'Persistent permission storage',
      'Origin-based controls'
    ]
  },
  {
    title: 'Mixed Content Protection',
    description: 'Automatic HTTPS enforcement and protection.',
    details: [
      'HTTP to HTTPS upgrade',
      'Mixed content blocking',
      'Strict referrer policy',
      'Secure connections'
    ]
  }
];

const browsingFeatures = [
  {
    title: 'Hub-Based Organization',
    description: 'Organize content in customizable hubs for better workflow.',
    details: [
      'Customizable hubs',
      'Dashboard view',
      'Easy navigation',
      'Real-time collaboration'
    ]
  },
  {
    title: 'Multi-View Capabilities',
    description: 'View multiple sites side-by-side for enhanced productivity.',
    details: [
      'Triple view support',
      'Split-screen viewing',
      'No extensions needed',
      'Flexible layouts'
    ]
  },
  {
    title: 'Smart Navigation',
    description: 'Intuitive navigation features for seamless browsing.',
    details: [
      'Back/Forward navigation',
      'Refresh functionality',
      'Home button access',
      'Multiple window support'
    ]
  },
  {
    title: 'AI-Powered Assistant',
    description: 'Natural language interaction for enhanced productivity.',
    details: [
      'Natural language commands',
      'Content organization help',
      'Integrated search',
      'Smart suggestions'
    ]
  }
];

const enterpriseBenefits = [
  {
    title: 'Compliance Ready',
    description: 'Built-in security features align with compliance requirements.',
    icon: '✅'
  },
  {
    title: 'Reduced Attack Surface',
    description: 'Minimal exposed APIs and restricted resource loading.',
    icon: '🛡️'
  },
  {
    title: 'User Control',
    description: 'Clear permission management and security controls.',
    icon: '⚙️'
  },
  {
    title: 'Performance Optimization',
    description: 'Efficient security implementation with minimal impact.',
    icon: '⚡'
  }
];

const technicalFeatures = [
  {
    title: 'Modern Architecture',
    description: 'Built with cutting-edge technology for reliability.',
    details: [
      'Electron-based',
      'Chromium-powered',
      'TypeScript implementation',
      'Modular design'
    ]
  },
  {
    title: 'Automatic Updates',
    description: 'Seamless update system for continuous improvement.',
    details: [
      'Built-in updates',
      'Version management',
      'Release notes',
      'Seamless process'
    ]
  },
  {
    title: 'Data Management',
    description: 'Secure handling of sensitive data and cookies.',
    details: [
      'Encrypted storage',
      'Secure cookie handling',
      'Origin isolation',
      'Theft protection'
    ]
  },
  {
    title: 'User Interface',
    description: 'Modern, responsive design for optimal experience.',
    details: [
      'Minimalist design',
      'Responsive layout',
      'Custom toolbar',
      'Smooth animations'
    ]
  }
];

export default function EnterpriseBrowser() {
  return (
    <>
      <Head>
        <title>The Enterprise Browser | Kahana</title>
        <meta
          name="description"
          content="Kahana's Enterprise Browser provides enhanced security, collaboration features, and a modern browsing experience for enterprise environments."
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
              The Enterprise Browser
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A secure, modern browser designed for enterprise environments, featuring enhanced security controls, collaboration tools, and a seamless user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Enterprise-Grade Security
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
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

      {/* Browsing Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Modern Browsing Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {browsingFeatures.map((feature, index) => (
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

      {/* Enterprise Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Enterprise Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {enterpriseBenefits.map((benefit, index) => (
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
      <section className="bg-kahana-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise Browsing?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana's Enterprise Browser can enhance security, improve collaboration, and streamline your workflow.
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