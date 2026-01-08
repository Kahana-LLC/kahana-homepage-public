import React, { useState, useEffect } from 'react';
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

const benefitsData = [
  {
    title: 'Stay Organized',
    description: 'Keep your ideas and projects neatly organized in customizable hubs.',
    details: [
      'Customizable organization',
      'Easy content management',
      'Quick access to projects',
      'Streamlined workflow'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: 'Grow Your Projects',
    description: 'Turn your ideas into revenue with built-in monetization tools.',
    details: [
      'Monetization options',
      'Revenue tracking',
      'Payment processing',
      'Growth analytics'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: 'Share & Collaborate',
    description: 'Share your work publicly or collaborate with others privately.',
    details: [
      'Public sharing options',
      'Private collaboration',
      'Team workspaces',
      'Real-time updates'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
      </svg>
    )
  },
  {
    title: 'Stay Focused',
    description: 'Track your flow state and maintain productivity with built-in tools.',
    details: [
      'Flow state tracking',
      'Productivity insights',
      'Focus tools',
      'Activity monitoring'
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export default function WebApplication() {
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBenefitIndex((prev) => (prev + 1) % benefitsData.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, []);

  const nextBenefit = () => {
    setCurrentBenefitIndex((prev) => (prev + 1) % benefitsData.length);
  };

  const prevBenefit = () => {
    setCurrentBenefitIndex((prev) => (prev - 1 + benefitsData.length) % benefitsData.length);
  };

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
            <h2 className="text-base font-semibold leading-7 text-[#728552] mb-3">Web Application</h2>
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              Organize Your Best Ideas
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8">
              A simple platform to help you stay organized, productive, and grow your projects. Keep your hubs private, share them publicly, or monetize - it's your space to bring your ideas to life.
            </p>
            <Link href="/pricing" className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                Plans & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: 'Smart Organization',
                details: [
                  'Drag-and-drop interface',
                  'Hierarchical structure',
                  'Search functionality',
                  'Trash/recovery system'
                ]
              },
              {
                title: 'Flexible Sharing',
                details: [
                  'Private workspaces',
                  'Public sharing',
                  'Collaboration tools',
                  'Real-time updates'
                ]
              },
              {
                title: 'Monetization Tools',
                details: [
                  'Subscription options',
                  'Payment processing',
                  'Revenue tracking',
                  'Promo code support'
                ]
              },
              {
                title: 'Productivity Features',
                details: [
                  'Rich text editing',
                  'Flow state tracking',
                  'Activity monitoring',
                  'Mobile access'
                ]
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 flex flex-col border border-gray-100 hover:shadow-lg transition-all">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 flex items-center justify-center">
                    <svg className="w-10 h-10" style={{ color: '#4A6200' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-left mb-4" style={{ color: '#313A00' }}>{feature.title}</h3>
                
                {/* Feature list - all with green highlight */}
                <div className="space-y-2 flex-grow">
                  {feature.details.map((detail, dIndex) => (
                    <div 
                      key={dIndex} 
                      className="text-sm text-[#4A5745] text-left py-2 px-3 rounded-lg bg-[#F8FAF2]"
                    >
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Animated Carousel */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Why Choose Kahana?
          </h2>
          
          {/* Carousel Container - Full Screen Size */}
          <div className="relative w-full max-w-7xl mx-auto">
            {/* Navigation Arrows */}
            <button
              onClick={prevBenefit}
              className="btn-primary absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
              aria-label="Previous benefit"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextBenefit}
              className="btn-primary absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group"
              aria-label="Next benefit"
            >
              <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Carousel Cards - Full Width */}
            <div className="relative overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentBenefitIndex * 100}%)` }}
              >
                {benefitsData.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="min-w-full"
                  >
                    <div className={`bg-white rounded-2xl p-8 md:p-12 flex flex-col border-2 transition-all duration-500 ${
                      index === currentBenefitIndex 
                        ? 'border-[#E5EFD8] shadow-[0_8px_30px_rgba(74,98,0,0.12)] scale-100' 
                        : 'border-gray-100 shadow-md opacity-60 scale-95'
                    }`}>
                      {/* Icon */}
                      <div className="mb-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                          index === currentBenefitIndex 
                            ? 'bg-[#F8FAF2] scale-110' 
                            : 'bg-gray-50 scale-100'
                        }`}>
                          <div className={`transition-all duration-500 ${index === currentBenefitIndex ? 'text-[#4A6200]' : 'text-gray-400'}`}>
                            {benefit.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Title */}
                      <h3 className={`text-2xl md:text-3xl font-bold text-left mb-4 transition-all duration-500 ${
                        index === currentBenefitIndex ? 'text-[#313A00]' : 'text-gray-500'
                      }`}>
                        {benefit.title}
                      </h3>
                      
                      {/* Description */}
                      <p className={`text-base md:text-lg mb-6 text-left leading-relaxed transition-all duration-500 ${
                        index === currentBenefitIndex ? 'text-[#4A5745]' : 'text-gray-400'
                      }`}>
                        {benefit.description}
                      </p>
                      
                      {/* Feature list */}
                      <div className="space-y-3">
                        {benefit.details.map((detail, dIndex) => (
                          <div 
                            key={dIndex} 
                            className={`text-base md:text-lg text-left py-3 px-4 rounded-lg transition-all duration-500 ${
                              index === currentBenefitIndex 
                                ? 'bg-[#F8FAF2] text-[#4A5745]' 
                                : 'bg-gray-50 text-gray-400'
                            }`}
                          >
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {benefitsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentBenefitIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentBenefitIndex
                      ? 'w-8 h-2 bg-[#4A6200]'
                      : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to benefit ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Perfect For
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex flex-col hover:shadow-xl transition-all">
                <div className="flex justify-start mb-4">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #d6e3f4 0%, #e5efd8 100%)' }}>
                    <svg className="w-10 h-10" style={{ color: '#4A6200' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-left mb-4" style={{ color: '#313A00' }}>{useCase.title}</h3>
                <p className="text-sm text-gray-700 mb-4 text-left">{useCase.description}</p>
                <div className="space-y-2 mb-6 flex-grow">
                  {useCase.benefits.map((benefit, bIndex) => (
                    <div key={bIndex} className="text-sm text-gray-700 text-left px-3 py-2 rounded-lg" style={{ backgroundColor: '#F8FAF2' }}>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features Section */}
      <section className="bg-gradient-to-br from-[#F8FAF2] via-white to-[#F0F4E8] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Built For You
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Simple & Intuitive',
                description: 'Easy-to-use platform designed for your success.',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                )
              },
              {
                title: 'Flexible Options',
                description: 'Choose how you want to use the platform.',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                )
              },
              {
                title: 'Secure & Reliable',
                description: 'Your content is safe and always accessible.',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              {
                title: 'Growth Tools',
                description: 'Tools to help you achieve your goals.',
                icon: (
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                )
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="relative rounded-3xl p-8 flex flex-col justify-between min-h-[400px] hover:scale-[1.02] transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                {/* Main Icon - Centered */}
                <div className="flex justify-center items-center flex-grow py-8">
                  <div 
                    className="rounded-3xl p-8 flex items-center justify-center"
                    style={{
                      background: 'rgba(255, 255, 255, 0.5)',
                      backdropFilter: 'blur(10px)',
                      WebkitBackdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)'
                    }}
                  >
                    <div style={{ color: '#4A6200' }}>
                      {feature.icon}
                    </div>
                  </div>
                </div>

                {/* Title and Description - At Bottom */}
                <div className="text-left mt-auto">
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#313A00' }}>{feature.title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Ready to Organize Your Ideas?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
            Start organizing your projects, growing your audience, and turning your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/pricing" className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
              Plans & Pricing
            </Link>
            <Link href="/contact" className="btn-secondary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 