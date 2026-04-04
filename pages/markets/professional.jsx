import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import { blogIndex } from '../../data/blog-index';
import { normalizeBlogCategories } from '../../utils/blog-helpers';

const securityFeatures = [
  {
    title: 'Phishing Protection',
    description: 'Block 140% more phishing attempts with advanced detection.',
    details: [
      'Zero-hour attack prevention',
      'Social engineering defense',
      'Malicious site blocking',
      'Behavioral analytics'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Achieve 99.8% audit success with built-in controls.',
    details: [
      'SOC 2 compliance',
      'GDPR compliance',
      'Data protection',
      'Access controls'
    ]
  },
  {
    title: 'AI Security',
    description: 'Secure access to AI tools while protecting client data.',
    details: [
      'ChatGPT controls',
      'Prompt monitoring',
      'Data leakage prevention',
      'Usage policies'
    ]
  },
  {
    title: 'Third-Party Security',
    description: 'Secure collaboration with clients and contractors.',
    details: [
      'Rapid onboarding',
      'Access management',
      'Activity monitoring',
      'Risk assessment'
    ]
  }
];

const professionalFeatures = [
  {
    title: 'Project Management',
    description: 'Streamline project delivery and collaboration.',
    details: [
      'Task tracking',
      'Milestone planning',
      'Team coordination',
      'Client portals'
    ]
  },
  {
    title: 'Resource Optimization',
    description: 'Maximize utilization of staff and assets.',
    details: [
      'Time tracking',
      'Resource allocation',
      'Utilization analytics',
      'Capacity planning'
    ]
  },
  {
    title: 'Client Collaboration',
    description: 'Enhance communication and transparency with clients.',
    details: [
      'Secure messaging',
      'Document sharing',
      'Feedback tools',
      'Client dashboards'
    ]
  },
  {
    title: 'Analytics & Reporting',
    description: 'Gain insights into performance and outcomes.',
    details: [
      'Project analytics',
      'Utilization reports',
      'Client satisfaction',
      'Custom dashboards'
    ]
  }
];

const industryBenefits = [
  {
    title: 'Operational Efficiency',
    description: 'Streamlined workflows and reduced admin overhead.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: '34%',
    statLabel: 'Fewer Support Tickets',
    source: {
      url: 'https://cloud.google.com/blog/products/chrome-enterprise/forrester-study-finds-managing-chrome-brings-enterprises-cost-savings-and-major-productivity-gains',
      label: 'Google, 2023'
    }
  },
  {
    title: 'Cost Savings',
    description: 'Reduced operational costs through automation and consolidation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: '18%',
    statLabel: 'Lower IT Overhead',
    source: {
      url: 'https://www.bankinfosecurity.com/how-enterprise-browsers-enhance-security-efficiency-a-25416',
      label: 'BankInfoSecurity, 2024'
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

const professionalMetrics = [
  {
    label: 'Social Engineering Attacks',
    value: '40%',
    insight: 'Of breaches in professional services stem from social engineering.',
    source: { url: 'https://www.verizon.com/business/en-sg/resources/reports/dbir/2024/industries-intro/professional-services-data-breaches/', label: 'Verizon DBIR, 2024' }
  },
  {
    label: 'Phishing Attack Surge',
    value: '140%',
    insight: 'Increase in browser-based phishing attacks year-over-year.',
    source: { url: 'https://www.menlosecurity.com/press-releases/menlo-security-state-of-browser-security-report-finds-130-increase-in-zero-hour-phishing-attacks-and-identified-nearly-600-incidents-of-genai-fraud', label: 'Menlo Security, 2025' }
  },
  {
    label: 'Data Leakage Prevention',
    value: '40%',
    insight: 'Reduction in accidental data leaks through browser isolation.',
    source: { url: 'https://seraphicsecurity.com', label: 'Seraphic Security, 2024' }
  }
];

export async function getServerSideProps() {
  try {
    const professionalBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'professional' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    // Don't fetch images during build - let them load on-demand
    return {
      props: {
        professionalBlogs: professionalBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for professional page:', error);
    
    // Return fallback data if everything fails
    const fallbackBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'professional' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        professionalBlogs: fallbackBlogs,
      },
    };
  }
}

export default function Professional({ professionalBlogs }) {
  const professionalSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Professional Services Solutions | Kahana',
    description: 'Enterprise-grade security and productivity solutions for professional services. Features include client data protection, compliance management, and analytics.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description: 'Kahana provides enterprise-grade security and productivity solutions for professional services organizations'
    }
  };

  return (
    <>
      <SEO 
        title="Professional Services Solutions | Kahana"
        description="Enterprise-grade security and productivity solutions for professional services. Features include client data protection, compliance management, and analytics."
        url="https://kahana.co/markets/professional"
        type="webpage"
        schema={professionalSchema}
      />
      <Head>
        <title>Professional Services Solutions | Kahana</title>
        <meta name="description" content="Kahana's professional services solutions help organizations enhance security, improve productivity, and maintain compliance." />
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
            <h2 className="text-base font-semibold leading-7 text-[#728552] mb-3">Professional Services</h2>
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              Secure Professional Services Solutions
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8">
              Professional services firms face escalating cyber risks from social engineering, third-party collaboration, and AI-driven threats. Enterprise browsers provide critical protection for client data while enabling secure access to modern tools and services.
            </p>
            <div className="flex justify-center">
              <Link href="/buyers-guide" className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                  Read Buyer's Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Services Industry Metrics Section - Proof Points */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Professional Services Security Risks
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            The professional services sector faces unique security challenges due to its reliance on SaaS tools, third-party collaboration, and handling of sensitive client data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalMetrics.map((metric, idx) => (
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
            Enterprise Browser Effectiveness
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            Enterprise browsers address professional services' unique security challenges with proven results. Our security-first approach helps organizations protect client data and maintain compliance.
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
            Productivity and Cost Savings
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            Enterprise browsers deliver measurable improvements in security, efficiency, and cost reduction for professional services organizations.
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
                {benefit.source && (
                  <a href={benefit.source.url} target="_blank" rel="noopener noreferrer" className="block text-xs text-gray-400 underline mt-1">{benefit.source.label}</a>
                )}
                <p className="text-[#4A5745] text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Section - Social Proof */}
      <FeaturedBlogSection posts={professionalBlogs} />

      {/* CTA Section - Next Steps */}
      <section 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Ready to Transform Your Professional Services Operations?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
            Join leading professional services firms that trust Kahana for their digital transformation needs. Protect client data and drive efficiency with enterprise-grade security.
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