import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';
import IndustryMetrics from '../../components/IndustryMetrics';
import { parseIndustryMetrics, getIndustryData } from '../../utils/metricsParser';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import { blogIndex } from '../../data/blog-index';
import { normalizeBlogCategories } from '../../utils/blog-helpers';

const securityFeatures = [
  {
    title: 'Web App Protection',
    description: 'Block 57% of healthcare breaches targeting web applications.',
    details: [
      'EHR system security',
      'Patient portal protection',
      'Ransomware prevention',
      'DDoS mitigation'
    ]
  },
  {
    title: 'HIPAA Compliance',
    description: 'Achieve 99.8% audit success with built-in controls.',
    details: [
      'ePHI protection',
      'Access controls',
      'Audit logging',
      'Compliance reporting'
    ]
  },
  {
    title: 'Credential Protection',
    description: 'Counter 71% of attacks using valid credentials.',
    details: [
      'Zero Trust access',
      'MFA enforcement',
      'Session monitoring',
      'Risk assessment'
    ]
  },
  {
    title: 'Data Leakage Prevention',
    description: '40% reduction in accidental data leaks.',
    details: [
      'Browser isolation',
      'DLP controls',
      'Copy-paste protection',
      'Download monitoring'
    ]
  }
];

const healthcareFeatures = [
  {
    title: 'Clinical Workflow',
    description: 'Streamlined clinical processes and patient care.',
    details: [
      'Patient management',
      'Care coordination',
      'Clinical documentation',
      'Workflow automation'
    ]
  },
  {
    title: 'Resource Management',
    description: 'Optimize healthcare resources and operations.',
    details: [
      'Staff scheduling',
      'Resource allocation',
      'Inventory management',
      'Capacity planning'
    ]
  },
  {
    title: 'Care Team Collaboration',
    description: 'Enhanced collaboration across healthcare teams.',
    details: [
      'Secure messaging',
      'Document sharing',
      'Team coordination',
      'Care planning'
    ]
  },
  {
    title: 'Healthcare Analytics',
    description: 'Comprehensive healthcare performance analytics.',
    details: [
      'Clinical metrics',
      'Quality measures',
      'Patient outcomes',
      'Operational insights'
    ]
  }
];

const industryBenefits = [
  {
    title: 'Incident Response',
    description: '80% faster response through centralized monitoring.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: '80%',
    statLabel: 'Faster Response',
    source: {
      url: 'https://www.cyberark.com/what-is/enterprise-browser/',
      label: 'CyberArk, 2024'
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
  }
];

export async function getServerSideProps() {
  try {
    const healthcareBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'healthcare' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    // Don't fetch images during build - let them load on-demand
    return {
      props: {
        healthcareBlogs: healthcareBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for healthcare page:', error);
    
    // Return fallback data if everything fails
    const fallbackBlogs = blogIndex
      .filter(post => normalizeBlogCategories(post.category).some(cat => 
        cat.toLowerCase() === 'healthcare' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        healthcareBlogs: fallbackBlogs,
      },
    };
  }
}

export default function Healthcare({ healthcareBlogs }) {
  const healthcareSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Healthcare Solutions | Kahana',
    description: 'Enterprise-grade security and productivity solutions for the healthcare industry. Features include HIPAA compliance, medical device security, and comprehensive healthcare analytics.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description: 'Kahana provides enterprise-grade security and productivity solutions for healthcare organizations'
    }
  };

  const healthcareMetrics = [
    {
      label: 'Web App Attacks',
      value: '57%',
      insight: 'Of healthcare breaches involve web applications.',
      source: { url: 'https://www.hhs.gov/sites/default/files/web-application-attacks-in-healthcare.pdf', label: 'HHS, 2024' }
    },
    {
      label: 'Browser Exploits',
      value: '44%',
      insight: 'Of incidents involve browser-based attacks.',
      source: { url: 'https://www.paloaltonetworks.com/resources/research/unit-42-incident-response-report', label: 'Palo Alto Networks, 2025' }
    },
    {
      label: 'Attack Prevalence',
      value: '92%',
      insight: 'Of healthcare organizations targeted by cyberattacks.',
      source: { url: 'https://cylera.com/blog/2024-healthcare-cybersecurity-year-in-review/', label: 'Cylera, 2024' }
    },
    {
      label: 'Breach Cost',
      value: '$10.10M',
      insight: 'Average cost per healthcare data breach.',
      source: { url: 'https://www.checkpoint.com/cyber-hub/cyber-security/what-is-healthcare-cyber-security/cyberattacks-on-the-healthcare-sector/', label: 'Check Point, 2024' }
    },
    {
      label: 'Ransomware Surge',
      value: '278%',
      insight: 'Increase in healthcare ransomware attacks since 2020.',
      source: { url: 'https://cylera.com/blog/2024-healthcare-cybersecurity-year-in-review/', label: 'HHS OCR, 2024' }
    }
  ];

  return (
    <>
      <SEO 
        title="Healthcare Solutions | Kahana"
        description="Enterprise-grade security and productivity solutions for the healthcare industry. Features include HIPAA compliance, medical device security, and comprehensive healthcare analytics."
        image="https://kahana.co/assets/healthcare-preview.png"
        url="https://kahana.co/markets/healthcare"
        type="webpage"
        schema={healthcareSchema}
      />
      <Head>
        <title>Healthcare Solutions | Kahana</title>
        <meta
          name="description"
          content="Kahana's healthcare solutions help organizations enhance security, improve patient care, and maintain compliance in the healthcare industry."
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
      <section className="bg-gradient-to-b from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Healthcare</h2>
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              Secure Healthcare Solutions
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8">
              Healthcare organizations face escalating cyber threats from web applications, unsecured devices, and sensitive patient data. Enterprise browsers provide critical protection for EHR systems while ensuring HIPAA compliance and operational continuity.
            </p>
            <div className="flex justify-center">
              <Link href="/buyers-guide" className="btn-secondary inline-flex items-center justify-center px-6 py-3 text-base no-underline hover:no-underline focus:no-underline">
                Read Buyer's Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Industry Metrics Section - Proof Points */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Healthcare Security Risks
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            The healthcare sector faces unique security challenges due to its reliance on web applications, third-party vendors, and sensitive patient data.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthcareMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow">
                <div className="text-2xl font-bold text-[#66C2BE] mb-2">{metric.value}</div>
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
            Enterprise browsers address healthcare's unique security challenges with proven results. Our security-first approach helps organizations protect patient data and maintain compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#66C2BE] via-[#8CB7D0] to-[#E3DFF1] rounded-full flex items-center justify-center mr-3 shadow-md shadow-[#E3DFF1]/20">
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
                      <svg className="w-4 h-4 mr-2 text-[#66C2BE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            Enterprise browsers deliver measurable improvements in security, efficiency, and cost reduction for healthcare organizations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-kahana-accent-sky/20 to-kahana-secondary-300/10 rounded-xl overflow-hidden p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#66C2BE] via-[#8CB7D0] to-[#E3DFF1] rounded-full flex items-center justify-center mr-3 shadow-md shadow-[#E3DFF1]/20">
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#4A5745]">
                    {benefit.title}
                  </h3>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#66C2BE] mb-1">
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
      <FeaturedBlogSection posts={healthcareBlogs} />

      {/* CTA Section - Next Steps */}
      <section 
        className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Ready to Transform Your Healthcare Operations?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed font-bold" style={{ color: '#313A00' }}>
            Join leading healthcare organizations that trust Kahana for their digital transformation needs. Protect patient data and ensure operational continuity with enterprise-grade security.
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