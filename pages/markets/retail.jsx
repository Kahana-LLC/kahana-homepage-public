import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import { blogIndex } from '../../data/blog-index';

const retailFeatures = [
  {
    title: 'E-commerce Operations',
    description: 'Streamlined e-commerce processes and operations.',
    details: [
      'Online transaction processing',
      'Inventory management',
      'Order fulfillment',
      'Customer service automation'
    ]
  },
  {
    title: 'Retail Management',
    description: 'Optimize retail operations and customer experience.',
    details: [
      'Store operations',
      'Customer data management',
      'Sales analytics',
      'Inventory tracking'
    ]
  },
  {
    title: 'Team Collaboration',
    description: 'Enhanced collaboration across retail teams.',
    details: [
      'Staff communication',
      'Task management',
      'Schedule coordination',
      'Performance tracking'
    ]
  },
  {
    title: 'Retail Analytics',
    description: 'Comprehensive retail performance analytics.',
    details: [
      'Sales metrics',
      'Customer insights',
      'Inventory analytics',
      'Operational efficiency'
    ]
  }
];

const securityFeatures = [
  {
    title: 'Payment Security',
    description: 'Comprehensive protection for payment processing.',
    details: [
      'PCI DSS compliance',
      'Data encryption',
      'Fraud detection',
      'Transaction monitoring'
    ]
  },
  {
    title: 'Customer Data Protection',
    description: 'Enhanced protection for customer information.',
    details: [
      'Data encryption',
      'Access controls',
      'Privacy compliance',
      'Data governance'
    ]
  },
  {
    title: 'Point of Sale Security',
    description: 'Secure management of retail systems.',
    details: [
      'Device authentication',
      'Network security',
      'Transaction protection',
      'Compliance monitoring'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Meet retail regulatory requirements.',
    details: [
      'PCI DSS compliance',
      'GDPR compliance',
      'CCPA compliance',
      'Industry standards'
    ]
  }
];

const industryBenefits = [
  {
    title: 'Onboarding Speed',
    description: 'Rapid, secure onboarding for seasonal staff and contractors.',
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
  },
  {
    title: 'IT Support Reduction',
    description: '34% fewer browser-related helpdesk tickets after implementation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: '34%',
    statLabel: 'Fewer Tickets',
    source: {
      url: 'https://chromeenterprise.google/customers/schnucks-market/',
      label: 'Schnucks Markets, 2024'
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
    title: 'Cost Reduction',
    description: '18% lower IT overhead by replacing legacy systems with enterprise browsers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: '18%',
    statLabel: 'Cost Savings',
    source: {
      url: 'https://www.bankinfosecurity.com/how-enterprise-browsers-enhance-security-efficiency-a-25416',
      label: 'BankInfoSecurity, 2024'
    }
  }
];

const retailMetrics = [
  {
    label: 'Phishing Surge',
    value: '692%',
    insight: 'Increase in phishing attacks during Black Friday targeting retail brands.',
    source: { url: 'https://www.darktrace.com/blog/phishing-attacks-surge-in-buildup-to-black-friday', label: 'Darktrace, 2024' }
  },
  {
    label: 'Breach Cost',
    value: '$3.48M',
    insight: 'Average cost per retail data breach.',
    source: { url: 'https://www.retailtouchpoints.com/features/executive-viewpoints/the-real-price-of-a-data-breach-in-retail', label: 'IBM, 2024' }
  },
  {
    label: 'Browser Vulnerabilities',
    value: '44%',
    insight: 'Of retail breaches exploit unpatched browsers and malicious extensions.',
    source: { url: 'https://www.paloaltonetworks.com/resources/research/unit-42-incident-response-report', label: 'Palo Alto Networks, 2024' }
  }
];

export async function getServerSideProps() {
  try {
    const retailBlogs = blogIndex
      .filter(post => post.category.some(cat => 
        cat.toLowerCase() === 'retail' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    // Don't fetch images during build - let them load on-demand
    return {
      props: {
        retailBlogs: retailBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for retail page:', error);
    
    // Return fallback data if everything fails
    const fallbackBlogs = blogIndex
      .filter(post => post.category.some(cat => 
        cat.toLowerCase() === 'retail' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        retailBlogs: fallbackBlogs,
      },
    };
  }
}

export default function Retail({ retailBlogs }) {
  const retailSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Retail & E-commerce Solutions | Kahana',
    description: 'Enterprise-grade security and productivity solutions for retail and e-commerce organizations. Features include transaction security, customer data protection, and comprehensive retail analytics.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description: 'Kahana provides enterprise-grade security and productivity solutions for retail organizations'
    }
  };

  return (
    <>
      <SEO 
        title="Retail & E-commerce Solutions | Kahana"
        description="Transform your retail and e-commerce operations with Kahana's secure, efficient solutions for modern retail challenges."
        url="https://kahana.co/markets/retail"
        type="webpage"
      />
      <Head>
        <title>Retail & E-commerce Solutions | Kahana</title>
        <meta name="description" content="Transform your retail and e-commerce operations with Kahana's secure, efficient solutions for modern retail challenges." />
      </Head>

      {/* Hero Section - Problem Statement */}
      <section className="bg-gradient-to-b from-kahana-accent-sky/20 via-kahana-secondary-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#4A5745] mb-4">
              Retail & E-commerce Solutions
            </h1>
            <p className="text-xl text-[#4A5745] max-w-3xl mx-auto mb-8">
              The retail sector faces unprecedented threats, with 92% of breaches linked to system intrusion and phishing attacks. Enterprise browsers provide critical protection for customer data while ensuring compliance and operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buyers-guide" className="inline-block bg-white text-[#728552] px-8 py-3 rounded-md hover:bg-[#F3F8E4] transition-colors border-2 border-kahana-primary">
                Read Buyer's Guide
              </Link>
              <Link href="/sales" className="inline-block border border-kahana-primary text-[#728552] px-8 py-3 rounded-md hover:bg-[#F3F8E4] transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Retail Industry Metrics Section - Proof Points */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-12">
            Retail Security Risks
          </h2>
          <p className="text-[#4A5745] text-center mb-8 max-w-3xl mx-auto">
            The retail sector faces unique security challenges due to high-value customer data, peak shopping periods, and sophisticated threat landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {retailMetrics.map((metric, idx) => (
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
            Enterprise browsers address retail's unique security challenges with proven results. Our security-first approach helps organizations protect customer data and maintain compliance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-kahana-accent-sky/20 via-kahana-secondary-300/10 to-kahana-accent-sky/30 rounded-xl overflow-hidden border border-kahana-primary/30 p-6 shadow-lg shadow-kahana-accent-sky/20 hover:shadow-xl hover:shadow-kahana-accent-sky/30 transition-all duration-300">
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
            Enterprise browsers deliver measurable improvements in security, efficiency, and cost reduction for retail organizations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryBenefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-r from-kahana-accent-sky/20 via-kahana-secondary-300/10 to-kahana-accent-sky/30 rounded-xl overflow-hidden border border-kahana-primary/30 p-6 shadow-lg shadow-kahana-accent-sky/20 hover:shadow-xl hover:shadow-kahana-accent-sky/30 transition-all duration-300">
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
      <FeaturedBlogSection posts={retailBlogs} />

      {/* CTA Section - Next Steps */}
      <section className="bg-gradient-to-r from-[#788B59] to-[#728552] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" >
            Ready to Transform Your Retail Security?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" >
            Join leading retailers that trust Kahana for their digital transformation needs. Protect customer data and ensure operational continuity with enterprise-grade security.
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