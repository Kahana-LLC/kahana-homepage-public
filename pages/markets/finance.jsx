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
    title: 'Ransomware Protection',
    description: 'Block 65% of ransomware attacks targeting financial services.',
    details: [
      'Zero-hour attack prevention',
      'Data encryption protection',
      'Recovery automation',
      'Threat intelligence'
    ]
  },
  {
    title: 'Browser Security',
    description: 'Prevent 44% of breaches exploiting browser vulnerabilities.',
    details: [
      'Phishing protection',
      'Extension control',
      'Isolation technology',
      'Traffic monitoring'
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

const financialFeatures = [
  {
    title: 'Financial Operations',
    description: 'Streamlined financial processes and operations.',
    details: [
      'Transaction processing',
      'Account management',
      'Payment processing',
      'Workflow automation'
    ]
  },
  {
    title: 'Resource Management',
    description: 'Optimize financial resources and operations.',
    details: [
      'Asset management',
      'Resource allocation',
      'Portfolio tracking',
      'Risk management'
    ]
  },
  {
    title: 'Team Collaboration',
    description: 'Enhanced collaboration across financial teams.',
    details: [
      'Secure messaging',
      'Document sharing',
      'Team coordination',
      'Project management'
    ]
  },
  {
    title: 'Financial Analytics',
    description: 'Comprehensive financial performance analytics.',
    details: [
      'Performance metrics',
      'Risk analysis',
      'Market insights',
      'Operational analytics'
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
      url: 'https://cloud.google.com/blog/products/chrome-enterprise/triple-impact-connections-cuts-costs-and-support-tickets-with-chromeos',
      label: 'Google, 2024'
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
      url: 'https://www.bankinfosecurity.com/island-raises-250m-to-replace-sase-enterprise-browser-a-27856',
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

const financeMetrics = [
  {
    label: 'Ransomware Attacks',
    value: '65%',
    insight: 'Of financial firms targeted by ransomware in 2024.',
    source: { url: 'https://www.arcserve.com/blog/ransomware-hit-over-two-thirds-financial-services-firms-2024-5-steps-ensure-your-firm-can', label: 'Arcserve, 2024' }
  },
  {
    label: 'Browser Exploits',
    value: '44%',
    insight: 'Of breaches involve browser-based attacks.',
    source: { url: 'https://www.verizon.com/business/resources/infographics/2025-dbir-finance-snapshot.pdf', label: 'Verizon DBIR, 2025' }
  },
  {
    label: 'Breach Cost',
    value: '$6.08M',
    insight: 'Average cost per financial services data breach.',
    source: { url: 'https://www.ibm.com/think/insights/cost-of-a-data-breach-2024-financial-industry', label: 'IBM, 2024' }
  },
  {
    label: 'Recovery Cost',
    value: '$2.58M',
    insight: 'Average ransomware recovery cost for financial firms.',
    source: { url: 'https://www.arcserve.com/blog/ransomware-hit-over-two-thirds-financial-services-firms-2024-5-steps-ensure-your-firm-can', label: 'Arcserve, 2024' }
  },
  {
    label: 'Mega-Breach Cost',
    value: '$375M',
    insight: 'Average cost for breaches with 50M+ records.',
    source: { url: 'https://www.ibm.com/think/insights/cost-of-a-data-breach-2024-financial-industry', label: 'IBM, 2024' }
  }
];

export async function getServerSideProps() {
  const { getRandomPhoto, getOptimizedPhotoUrl } = await import('../../utils/pexels');

  const financeBlogs = blogIndex
    .filter(post => post.category.some(cat => 
      cat.toLowerCase() === 'finance' || 
      cat.toLowerCase() === 'financial' ||
      cat.toLowerCase() === 'security'
    ))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // Fetch images on the server
  const postsWithImages = await Promise.all(
    financeBlogs.map(async (post) => {
      const photo = await getRandomPhoto(post.defaultImageQuery);
      return {
        ...post,
        image: getOptimizedPhotoUrl(photo),
      };
    })
  );

  return {
    props: {
      financeBlogs: postsWithImages,
    },
  };
}

export default function Finance({ financeBlogs }) {
  const financeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Finance Solutions | Kahana',
    description: 'Enterprise-grade security and productivity solutions for the finance industry. Features include financial compliance, transaction security, and comprehensive financial analytics.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description: 'Kahana provides enterprise-grade security and productivity solutions for finance organizations'
    }
  };

  return (
    <>
      <SEO 
        title="Finance Solutions | Kahana"
        description="Enterprise-grade security and productivity solutions for the finance industry. Features include financial compliance, transaction security, and comprehensive financial analytics."
        image="https://kahana.co/assets/finance-preview.png"
        url="https://kahana.co/markets/finance"
        type="webpage"
        schema={financeSchema}
      />
      <Head>
        <title>Finance Solutions | Kahana</title>
        <meta
          name="description"
          content="Kahana's finance solutions help organizations enhance security, improve operations, and maintain compliance in the finance industry."
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
            <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Financial Services</h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Secure Financial Services Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Financial institutions face escalating cyber threats, with 65% targeted by ransomware and breaches costing $6.08M on average. Enterprise browsers provide critical protection for sensitive financial data while ensuring compliance and operational continuity.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/schedule-demo">
                <button className="bg-[#66C2BE] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#55B3AF] transition-colors shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30">
                  Schedule Demo
                </button>
              </Link>
              <Link href="http://localhost:3006/sales">
                <button className="border border-[#66C2BE] text-[#66C2BE] px-8 py-3 rounded-md font-semibold hover:bg-[#66C2BE]/10 transition-colors">
                  Contact Sales
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Services Industry Metrics Section - Proof Points */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Financial Services Security Risks
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            The financial services sector faces unique security challenges due to its high-value data, regulatory requirements, and sophisticated threat landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financeMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow">
                <div className="text-2xl font-bold text-[#66C2BE] mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-600 mb-3">{metric.insight}</div>
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Enterprise Browser Effectiveness
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Enterprise browsers address financial services' unique security challenges with proven results. Our security-first approach helps organizations protect sensitive data and maintain compliance.
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
                  <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex items-center text-gray-600 text-sm">
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Productivity and Cost Savings
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Enterprise browsers deliver measurable improvements in security, efficiency, and cost reduction for financial services organizations.
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[#66C2BE] mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-600">
                    {benefit.statLabel}
                  </div>
                </div>
                {benefit.source && (
                  <a href={benefit.source.url} target="_blank" rel="noopener noreferrer" className="block text-xs text-gray-400 underline mt-1">{benefit.source.label}</a>
                )}
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog Section - Social Proof */}
      <FeaturedBlogSection posts={financeBlogs} />

      {/* CTA Section - Next Steps */}
      <section className="bg-gradient-to-r from-[#66C2BE] to-[#8CB7D0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Financial Services Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading financial institutions that trust Kahana for their digital transformation needs. Protect sensitive data and ensure operational continuity with enterprise-grade security.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/schedule-demo" className="bg-white text-[#66C2BE] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </Link>
            <Link href="http://localhost:3006/sales" className="inline-block border border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 