import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import { blogIndex } from '../../data/blog-index';

const hospitalityFeatures = [
  {
    title: 'Guest Services',
    description: 'Streamlined guest service processes and operations.',
    details: [
      'Reservation management',
      'Guest check-in/out',
      'Service requests',
      'Guest communication'
    ]
  },
  {
    title: 'Property Management',
    description: 'Optimize hospitality operations and guest experience.',
    details: [
      'Room management',
      'Staff scheduling',
      'Inventory control',
      'Maintenance tracking'
    ]
  },
  {
    title: 'Team Collaboration',
    description: 'Enhanced collaboration across hospitality teams.',
    details: [
      'Staff communication',
      'Task management',
      'Department coordination',
      'Service delivery'
    ]
  },
  {
    title: 'Hospitality Analytics',
    description: 'Comprehensive hospitality performance analytics.',
    details: [
      'Occupancy rates',
      'Guest satisfaction',
      'Revenue metrics',
      'Operational efficiency'
    ]
  }
];

const securityFeatures = [
  {
    title: 'Guest Data Protection',
    description: 'Comprehensive protection for guest information.',
    details: [
      'Data encryption',
      'Access controls',
      'Privacy compliance',
      'Data governance'
    ]
  },
  {
    title: 'Payment Security',
    description: 'Enhanced protection for payment processing.',
    details: [
      'PCI DSS compliance',
      'Fraud detection',
      'Transaction monitoring',
      'Secure payments'
    ]
  },
  {
    title: 'Property Management Security',
    description: 'Secure management of hospitality systems.',
    details: [
      'System authentication',
      'Network security',
      'Access management',
      'Compliance monitoring'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Meet hospitality regulatory requirements.',
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
    title: 'IT Efficiency',
    description: 'Centralized browser management reduces troubleshooting time for booking engines and POS systems.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: '34%',
    statLabel: 'Fewer Support Tickets',
    source: {
      url: 'https://techdocs.zebra.com/enterprise-browser/2-5/guide/about/',
      label: 'Zebra Technologies, 2024'
    }
  },
  {
    title: 'Cost Reduction',
    description: 'Lowered IT overhead through centralized management and automation.',
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
    description: 'Rapid, secure onboarding for seasonal staff and third-party vendors.',
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

const hospitalityMetrics = [
  {
    label: 'Data Breach Impact',
    value: '31%',
    insight: 'Of hospitality organizations reported a data breach in 2024, with average costs of $3.82M per incident.',
    source: { url: 'https://www.venzagroup.com/fall-2024-top-cybersecurity-statistics-for-hospitality/', label: 'Venza Group, 2024' }
  },
  {
    label: 'Browser Vulnerabilities',
    value: '44%',
    insight: 'Of breaches exploit browser vulnerabilities and malicious extensions.',
    source: { url: 'https://www.paloaltonetworks.com/resources/research/unit-42-incident-response-report', label: 'Palo Alto Networks, 2024' }
  },
  {
    label: 'MFA Gap',
    value: '71%',
    insight: 'Of hospitality organizations lack MFA for admin access.',
    source: { url: 'https://www.verizon.com/business/resources/Tc7d/reports/psr-travel-and-hospitality-snapshot.pdf', label: 'Verizon DBIR, 2024' }
  }
];

export async function getServerSideProps() {
  try {
    const hospitalityBlogs = blogIndex
      .filter(post => post.category.some(cat => 
        cat.toLowerCase() === 'hospitality' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    // Don't fetch images during build - let them load on-demand
    return {
      props: {
        hospitalityBlogs: hospitalityBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for hospitality page:', error);
    
    // Return fallback data if everything fails
    const fallbackBlogs = blogIndex
      .filter(post => post.category.some(cat => 
        cat.toLowerCase() === 'hospitality' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        hospitalityBlogs: fallbackBlogs,
      },
    };
  }
}

export default function Hospitality({ hospitalityBlogs }) {
  return (
    <>
      <SEO 
        title="Hospitality Solutions | Kahana"
        description="Transform your hospitality operations with Kahana's secure, efficient solutions for modern hospitality challenges."
        url="https://kahana.co/markets/hospitality"
        type="webpage"
      />
      <Head>
        <title>Hospitality Solutions | Kahana</title>
        <meta name="description" content="Transform your hospitality operations with Kahana's secure, efficient solutions for modern hospitality challenges." />
      </Head>

      {/* Hero Section - Problem Statement */}
      <section className="bg-gradient-to-b from-kahana-accent-sky/20 via-kahana-secondary-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Hospitality Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your hospitality operations with secure, efficient solutions designed for modern hospitality challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buyers-guide" className="inline-block bg-white text-kahana-primary px-8 py-3 rounded-md hover:bg-gray-50 transition-colors border-2 border-kahana-primary">
                Read Buyer's Guide
              </Link>
              <Link href="/sales" className="inline-block border border-kahana-primary text-kahana-primary px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hospitality Industry Metrics Section - Proof Points */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Hospitality Industry Metrics
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Key metrics that matter to hospitality IT and security leaders evaluating enterprise browsers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hospitalityMetrics.map((metric, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col hover:shadow-2xl transition-shadow">
                <div className="text-2xl font-bold text-kahana-primary mb-2">{metric.value}</div>
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
            Hospitality Security
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Discover how our solutions deliver enterprise-grade security for hospitality operations. Our security-first approach helps organizations protect guest data and maintain compliance.
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

      {/* Industry Benefits Section - ROI */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Hospitality Benefits
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            See how hospitality organizations are transforming their operations and improving efficiency with our solutions.
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
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-kahana-primary mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-gray-600">
                    {benefit.statLabel}
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
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
      <FeaturedBlogSection posts={hospitalityBlogs} />

      {/* CTA Section - Next Steps */}
      <section className="bg-gradient-to-r from-kahana-primary to-kahana-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4" >
              Ready to Transform Your Hospitality Operations?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto" >
              Join leading hospitality organizations that trust Kahana for the new wave of security and productivity.
            </p>
            <div className="flex justify-center">
              <Link 
                href="/sales" 
                className="contact-sales-btn bg-transparent border border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-kahana-primary transition-colors"
                
              >
                <span >
                  Contact Sales
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 