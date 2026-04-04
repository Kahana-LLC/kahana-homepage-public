import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import { blogIndex } from '../../data/blog-index';
import { normalizeBlogCategories } from '../../utils/blog-helpers';

const securityFeatures = [
  {
    title: 'FedRAMP Authorization',
    description: 'FedRAMP High Authorization for critical infrastructure.',
    details: [
      'FedRAMP High compliance',
      'Critical infrastructure protection',
      'Zero Trust architecture',
      'Secure BYOD support'
    ]
  },
  {
    title: 'Data Isolation',
    description: '100% data isolation for BYOD environments.',
    details: [
      'Complete data separation',
      'Secure BYOD implementation',
      'Container isolation',
      'Data loss prevention'
    ]
  },
  {
    title: 'Zero Trust Security',
    description: 'Zero Trust implementation for classified environments.',
    details: [
      'Classified data protection',
      'Access control',
      'Continuous monitoring',
      'Threat detection'
    ]
  },
  {
    title: 'AI-Powered Protection',
    description: 'AI-ready threat detection and response.',
    details: [
      'Advanced threat detection',
      'Real-time monitoring',
      'Automated response',
      'Security analytics'
    ]
  }
];

const governmentFeatures = [
  {
    title: 'Secure BYOD',
    description: 'Enterprise-grade security for personal devices.',
    details: [
      'Device isolation',
      'Secure access',
      'Policy enforcement',
      'Compliance management'
    ]
  },
  {
    title: 'Threat Protection',
    description: 'Comprehensive threat protection and monitoring.',
    details: [
      'Real-time monitoring',
      'Threat intelligence',
      'Incident response',
      'Security analytics'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Streamlined compliance and audit processes.',
    details: [
      'FedRAMP compliance',
      'Audit automation',
      'Policy management',
      'Documentation'
    ]
  },
  {
    title: 'Operational Efficiency',
    description: 'Enhanced productivity and reduced overhead.',
    details: [
      'Workflow automation',
      'Resource optimization',
      'Process management',
      'Performance analytics'
    ]
  }
];

const industryBenefits = [
  {
    title: 'Efficiency Gain',
    description: 'Streamlined workflows and reduced admin overhead with digital tools.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: '34%',
    statLabel: 'Fewer Support Tickets',
    source: {
      url: 'https://cloud.google.com/blog/products/chrome-enterprise/forrester-study-finds-managing-chrome-brings-enterprises-cost-savings-and-major-productivity-gains',
      label: 'Google, 2024'
    }
  },
  {
    title: 'Threat Reduction',
    description: 'Significant reduction in credential-based attacks and vulnerabilities.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    stat: '95%',
    statLabel: 'Attack Reduction',
    source: {
      url: 'https://www.menlosecurity.com/blog/4-evasive-web-browser-attacks-targeting-federal-agencies',
      label: 'Menlo Security, 2024'
    }
  },
  {
    title: 'Compliance Success',
    description: '60% reduction in compliance costs through automated evidence collection.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stat: '60%',
    statLabel: 'Cost Reduction',
    source: {
      url: 'https://nordlayer.com/learn/soc/soc-2-audit-checklist/',
      label: 'NordLayer, 2024'
    }
  },
  {
    title: 'Onboarding Speed',
    description: 'Rapid, secure onboarding for contractors and third parties.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    stat: '45d → 1h',
    statLabel: 'Onboarding Time',
    source: {
      url: '/products/enterprise-browser',
      label: 'Oasis Enterprise Browser, 2025'
    }
  }
];

const governmentMetrics = [
  {
    label: 'Mobile/IoT Incidents',
    value: '70%',
    insight: 'Of public sector organizations experience mobile/IoT security incidents.',
    source: { url: 'https://www.verizon.com/about/sites/default/files/2024-mobile-security-index-public-sector.pdf', label: 'Verizon, 2024' }
  },
  {
    label: 'Credential Attacks',
    value: '95%',
    insight: 'Reduction in credential-based attacks with enterprise browsers.',
    source: { url: 'https://www.menlosecurity.com/blog/4-evasive-web-browser-attacks-targeting-federal-agencies', label: 'Menlo Security, 2024' }
  },
  {
    label: 'Security Updates',
    value: '63%',
    insight: 'Of personal devices lack critical security updates.',
    source: { url: 'https://www.indusface.com/news/it-managers-must-watchout-for-web-apps-related-security-breaches-report/', label: 'Indusface, 2024' }
  }
];

export async function getServerSideProps() {
  try {
    const governmentBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'government' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    // Don't fetch images during build - let them load on-demand
    return {
      props: {
        governmentBlogs: governmentBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for government page:', error);
    
    // Return fallback data if everything fails
    const fallbackBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'government' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        governmentBlogs: fallbackBlogs,
      },
    };
  }
}

export default function Government({ governmentBlogs }) {
  const governmentSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Government & Public Sector Solutions | Kahana',
    description: 'Enterprise-grade security and productivity solutions for government and public sector organizations. Features include government compliance, data protection, and comprehensive analytics.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description: 'Kahana provides enterprise-grade security and productivity solutions for government and public sector organizations'
    }
  };

  return (
    <>
      <SEO 
        title="Government & Public Sector Solutions | Kahana"
        description="Enterprise-grade security and productivity solutions for government and public sector organizations. Features include government compliance, data protection, and comprehensive analytics."
        image="https://kahana.co/assets/government-preview.png"
        url="https://kahana.co/markets/government"
        type="webpage"
        schema={governmentSchema}
      />
      <Head>
        <title>Government & Public Sector Solutions | Kahana</title>
        <meta
          name="description"
          content="Kahana's government and public sector solutions help organizations enhance security, improve operations, and maintain compliance with government standards."
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

      {/* Hero Section - Problem Statement */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#728552] mb-3">Government & Public Sector</h2>
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              Secure Government Operations
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8">
              Transform your government operations with enterprise-grade security, enhanced productivity, and comprehensive analytics.
            </p>
            <div className="flex justify-center">
              <Link href="/buyers-guide" className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                  Read Buyer's Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Government Industry Metrics Section - Proof Points */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Government Industry Metrics
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            Key metrics that matter to government IT and security leaders evaluating enterprise browsers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {governmentMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow">
                <div className="text-2xl font-bold text-[#728552] mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-[#4A5745] mb-1">{metric.label}</div>
                <div className="text-sm text-[#4A5745] mb-3">{metric.insight}</div>
                {metric.source && (
                  <a href={metric.source.url} target="_blank" rel="noopener noreferrer" className="block text-xs text-gray-400 underline mt-auto">{metric.source.label}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section - Core Solution */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Government Security
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            Discover how our solutions deliver enterprise-grade security for government operations. Our security-first approach helps organizations protect sensitive data and maintain compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-kahana-primary via-kahana-secondary-300 to-kahana-accent-sky rounded-full flex items-center justify-center mr-3 shadow-md shadow-kahana-accent-sky/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A5745]">{feature.title}</h3>
                </div>
                <p className="text-[#4A5745] text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-[#4A5745] text-sm">
                      <svg className="w-4 h-4 mr-2 text-[#728552]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Industry Benefits Section - ROI */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Government Benefits
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            See how government organizations are transforming their operations and improving service delivery with our solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-kahana-primary via-kahana-secondary-300 to-kahana-accent-sky rounded-full flex items-center justify-center mr-3 shadow-md shadow-kahana-accent-sky/20">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A5745]">
                    {benefit.title}
                  </h3>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#728552] mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-[#4A5745]">
                    {benefit.statLabel}
                  </div>
                </div>
                <p className="text-[#4A5745] text-sm">
                  {benefit.description}
                </p>
                {benefit.source && (
                  <a href={benefit.source.url} target="_blank" rel="noopener noreferrer" className="block text-xs text-gray-400 underline mt-1">{benefit.source.label}</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Section - Social Proof */}
      <FeaturedBlogSection posts={governmentBlogs} />

      {/* CTA Section - Next Steps */}
      <section 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Ready to Transform Your Government Operations?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
            Schedule a demo to see how our solutions can enhance security, improve operations, and streamline your government processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link href="/schedule-demo" className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto">
              Schedule a Demo
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