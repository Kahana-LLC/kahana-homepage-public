import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
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
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: 'Improved Efficiency',
    description: 'Streamlined workflows and automated processes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: 'Better Compliance',
    description: 'Built-in compliance and audit capabilities.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: 'Cost Savings',
    description: 'Reduced operational costs and improved ROI.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
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
      <section className="bg-gradient-to-b from-kahana-accent-sky/20 via-kahana-secondary-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-kahana-primary mb-3">Web Application</h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Organize Your Best Ideas
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A simple platform to help you stay organized, productive, and grow your projects. Keep your hubs private, share them publicly, or monetize - it's your space to bring your ideas to life.
            </p>
            <Link href="/pricing">
              <button className="bg-kahana-primary text-white px-8 py-3 rounded-md font-semibold hover:bg-kahana-primary-dark transition-colors shadow-lg shadow-kahana-accent-sky/20 hover:shadow-xl hover:shadow-kahana-accent-sky/30">
                Plans & Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Smart Organization',
                description: 'Organize your content in customizable hubs for better workflow.',
                details: [
                  'Drag-and-drop interface',
                  'Hierarchical structure',
                  'Search functionality',
                  'Trash/recovery system'
                ]
              },
              {
                title: 'Flexible Sharing',
                description: 'Control who sees your content with flexible sharing options.',
                details: [
                  'Private workspaces',
                  'Public sharing',
                  'Collaboration tools',
                  'Real-time updates'
                ]
              },
              {
                title: 'Monetization Tools',
                description: 'Turn your content into revenue with built-in monetization.',
                details: [
                  'Subscription options',
                  'Payment processing',
                  'Revenue tracking',
                  'Promo code support'
                ]
              },
              {
                title: 'Productivity Features',
                description: 'Stay focused and productive with powerful tools.',
                details: [
                  'Rich text editing',
                  'Flow state tracking',
                  'Activity monitoring',
                  'Mobile access'
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-kahana-accent-sky/20 via-kahana-secondary-300/10 to-kahana-accent-sky/30 rounded-xl overflow-hidden border border-kahana-primary/30 p-6 shadow-lg shadow-kahana-accent-sky/20 hover:shadow-xl hover:shadow-kahana-accent-sky/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-kahana-primary via-kahana-secondary-300 to-kahana-accent-sky rounded-full flex items-center justify-center mr-3 shadow-md shadow-kahana-accent-sky/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
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
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Kahana?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Stay Organized',
                description: 'Keep your ideas and projects neatly organized in customizable hubs.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )
              },
              {
                title: 'Grow Your Projects',
                description: 'Turn your ideas into revenue with built-in monetization tools.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              },
              {
                title: 'Share & Collaborate',
                description: 'Share your work publicly or collaborate with others privately.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                )
              },
              {
                title: 'Stay Focused',
                description: 'Track your flow state and maintain productivity with built-in tools.',
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-kahana-accent-sky/20 via-kahana-secondary-300/10 to-kahana-accent-sky/30 rounded-xl overflow-hidden border border-kahana-primary/30 p-6 shadow-lg shadow-kahana-accent-sky/20 hover:shadow-xl hover:shadow-kahana-accent-sky/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-kahana-primary via-kahana-secondary-300 to-kahana-accent-sky rounded-full flex items-center justify-center mr-3 shadow-md shadow-kahana-accent-sky/20">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Content Creators',
                description: 'Organize and monetize your content creation process.',
                benefits: [
                  'Content organization',
                  'Monetization tools',
                  'Audience engagement',
                  'Revenue tracking'
                ]
              },
              {
                title: 'Small Businesses',
                description: 'Streamline your business operations and growth.',
                benefits: [
                  'Project management',
                  'Team collaboration',
                  'Resource tracking',
                  'Business analytics'
                ]
              },
              {
                title: 'Individual Projects',
                description: 'Keep your personal projects organized and on track.',
                benefits: [
                  'Personal workspaces',
                  'Progress tracking',
                  'Goal setting',
                  'Mobile access'
                ]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-gradient-to-r from-kahana-accent-sky/20 via-kahana-secondary-300/10 to-kahana-accent-sky/30 rounded-xl overflow-hidden border border-kahana-primary/30 p-6 shadow-lg shadow-kahana-accent-sky/20 hover:shadow-xl hover:shadow-kahana-accent-sky/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-kahana-primary via-kahana-secondary-300 to-kahana-accent-sky rounded-full flex items-center justify-center mr-3 shadow-md shadow-kahana-accent-sky/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{useCase.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{useCase.description}</p>
                <ul className="space-y-2">
                  {useCase.benefits.map((benefit, bIndex) => (
                    <li key={bIndex} className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
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
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Built For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Simple & Intuitive',
                description: 'Easy-to-use platform designed for your success.',
                details: [
                  'Clean interface',
                  'Drag-and-drop tools',
                  'Quick navigation',
                  'Mobile-friendly'
                ]
              },
              {
                title: 'Flexible Options',
                description: 'Choose how you want to use the platform.',
                details: [
                  'Private workspaces',
                  'Public sharing',
                  'Monetization tools',
                  'Custom settings'
                ]
              },
              {
                title: 'Secure & Reliable',
                description: 'Your content is safe and always accessible.',
                details: [
                  'Secure storage',
                  'Regular backups',
                  'Privacy controls',
                  'Data protection'
                ]
              },
              {
                title: 'Growth Tools',
                description: 'Tools to help you achieve your goals.',
                details: [
                  'Analytics tracking',
                  'Progress monitoring',
                  'Goal setting',
                  'Performance insights'
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-kahana-accent-sky/20 via-kahana-secondary-300/10 to-kahana-accent-sky/30 rounded-xl overflow-hidden border border-kahana-primary/30 p-6 shadow-lg shadow-kahana-accent-sky/20 hover:shadow-xl hover:shadow-kahana-accent-sky/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-kahana-primary via-kahana-secondary-300 to-kahana-accent-sky rounded-full flex items-center justify-center mr-3 shadow-md shadow-kahana-accent-sky/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-gray-600 text-sm">
                      <svg className="w-4 h-4 mr-2 text-kahana-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
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
      <section className="bg-gradient-to-r from-kahana-primary to-kahana-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" style={{ color: 'white !important' }}>
            Ready to Organize Your Ideas?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Start organizing your projects, growing your audience, and turning your ideas into reality.
          </p>
          <div className="flex justify-center">
            <Link href="/pricing">
              <button className="bg-white text-kahana-primary px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
                Plans & Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 