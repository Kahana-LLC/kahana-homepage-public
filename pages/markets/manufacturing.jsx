import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import { blogIndex } from '../../data/blog-index';

const securityFeatures = [
  {
    title: 'Attack Prevention',
    description: 'Block 95% of browser-based attacks through granular controls.',
    details: [
      'Phishing protection',
      'Malicious extension blocking',
      'Isolation technology',
      'Traffic monitoring'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Achieve 99.8% audit success with built-in controls.',
    details: [
      'SOC 2 compliance',
      'GDPR compliance',
      'Industrial standards',
      'Zero Trust access'
    ]
  },
  {
    title: 'Incident Response',
    description: '80% faster response through centralized monitoring.',
    details: [
      'Real-time alerts',
      'Traffic visibility',
      'Encrypted analysis',
      'Rapid investigation'
    ]
  },
  {
    title: 'Credential Protection',
    description: 'Counter 71% of attacks using valid credentials.',
    details: [
      'MFA enforcement',
      'Access controls',
      'Session monitoring',
      'Risk assessment'
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
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

const manufacturingMetrics = [
  {
    label: 'Ransomware Attacks',
    value: '29%',
    insight: 'Manufacturing accounts for 29% of global ransomware victims.',
    source: { url: 'https://www.preveil.com/blog/cybersecurity-statistics/', label: 'Preveil, 2024' }
  },
  {
    label: 'Attack Surge',
    value: '87%',
    insight: 'Industrial ransomware attacks increased by 87% in 2024.',
    source: { url: 'https://industrialcyber.co/reports/dragos-finds-ransomware-attacks-on-industrial-sector-surge-87-manufacturing-hit-hardest-as-ot-targeting-rises/', label: 'Industrial Cyber, 2024' }
  },
  {
    label: 'Browser Exploits',
    value: '44%',
    insight: 'Nearly half of all incidents involve browser-based attacks.',
    source: { url: 'https://www.paloaltonetworks.com/resources/research/unit-42-incident-response-report', label: 'Palo Alto Networks, 2025' }
  },
  {
    label: 'Breach Cost',
    value: '$5.56M',
    insight: 'Average data breach cost in the industrial sector.',
    source: { url: 'https://www.ibm.com/think/insights/cost-of-a-data-breach-industrial-sector', label: 'IBM, 2024' }
  },
  {
    label: 'Downtime Cost',
    value: '$10M/day',
    insight: 'Cost of unplanned outages due to cyber attacks.',
    source: { url: 'https://www.crowdstrike.com/en-us/cybersecurity-101/exposure-management/enterprise-browser/', label: 'CrowdStrike, 2024' }
  }
];

export async function getServerSideProps() {
  try {
    const manufacturingBlogs = blogIndex
      .filter(post => post.category.some(cat => 
        cat.toLowerCase() === 'manufacturing' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    // Don't fetch images during build - let them load on-demand
    return {
      props: {
        manufacturingBlogs: manufacturingBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for manufacturing page:', error);
    
    // Return fallback data if everything fails
    const fallbackBlogs = blogIndex
      .filter(post => post.category.some(cat => 
        cat.toLowerCase() === 'manufacturing' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        manufacturingBlogs: fallbackBlogs,
      },
    };
  }
}

export default function Manufacturing({ manufacturingBlogs }) {
  const manufacturingSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Manufacturing Solutions | Kahana',
    description: 'Enterprise-grade security and productivity solutions for the manufacturing industry. Features include supply chain security, industrial IoT protection, and comprehensive manufacturing analytics.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description: 'Kahana provides enterprise-grade security and productivity solutions for manufacturing organizations'
    }
  };

  return (
    <>
      <SEO 
        title="Manufacturing Solutions | Kahana"
        description="Enterprise-grade security and productivity solutions for the manufacturing industry. Features include supply chain security, industrial IoT protection, and comprehensive manufacturing analytics."
        image="https://kahana.co/assets/manufacturing-preview.png"
        url="https://kahana.co/markets/manufacturing"
        type="webpage"
        schema={manufacturingSchema}
      />
      <Head>
        <title>Manufacturing Solutions | Kahana</title>
        <meta
          name="description"
          content="Kahana's manufacturing solutions help organizations enhance security, improve productivity, and maintain compliance in the manufacturing industry."
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
            <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Manufacturing</h2>
            <h1 className="text-5xl font-bold text-[#4A5745] mb-6">
              Secure Manufacturing Solutions
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8">
              Manufacturing operations face unprecedented cyber threats as digitization accelerates. Enterprise browsers provide critical protection for your digital factory floor, ensuring secure access to IoT systems, cloud workflows, and AI-driven analytics while maintaining compliance with industrial standards.
            </p>
            <div className="flex justify-center">
              <Link href="/buyers-guide">
                <button className="bg-white text-[#66C2BE] px-8 py-3 rounded-md font-semibold hover:bg-[#F3F8E4] transition-colors border-2 border-[#66C2BE] shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30">
                  Read Buyer's Guide
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Industry Metrics Section - Proof Points */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Manufacturing Security Risks
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            The manufacturing sector faces escalating cyber threats as digitization accelerates. These key metrics highlight the critical need for enterprise-grade security solutions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingMetrics.map((metric, idx) => (
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
            Enterprise browsers address manufacturing's unique vulnerabilities with proven results. Our security-first approach helps organizations protect operations and maintain compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl overflow-hidden border border-[#A5DAD8]/30 p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300">
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
            Enterprise browsers deliver measurable improvements in security, efficiency, and cost reduction for manufacturing organizations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl overflow-hidden border border-[#A5DAD8]/30 p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300">
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
      <FeaturedBlogSection posts={manufacturingBlogs} />

      {/* CTA Section - Next Steps */}
      <section className="bg-gradient-to-r from-[#788B59] to-[#728552] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" >
            Ready to Transform Your Manufacturing Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" >
            Join leading manufacturers that trust Kahana for their digital transformation needs. Protect your operations and drive efficiency with enterprise-grade security.
          </p>
          <div className="flex justify-center">
            <Link 
              href="/sales" 
              className="contact-sales-btn bg-transparent border border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-[#728552] transition-colors"
              
            >
              <span >
                Contact Sales
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 