import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import { blogIndex } from '../../data/blog-index';

const educationFeatures = [
  {
    title: 'Learning Management',
    description: 'Streamlined educational processes and operations.',
    details: [
      'Course management',
      'Student engagement',
      'Assessment tools',
      'Learning analytics'
    ]
  },
  {
    title: 'Educational Resources',
    description: 'Optimize educational resources and learning experience.',
    details: [
      'Content management',
      'Resource sharing',
      'Digital libraries',
      'Collaborative tools'
    ]
  },
  {
    title: 'Team Collaboration',
    description: 'Enhanced collaboration across educational teams.',
    details: [
      'Faculty communication',
      'Department coordination',
      'Student support',
      'Administrative tools'
    ]
  },
  {
    title: 'Education Analytics',
    description: 'Comprehensive educational performance analytics.',
    details: [
      'Student progress',
      'Learning outcomes',
      'Resource utilization',
      'Institutional efficiency'
    ]
  }
];

const securityFeatures = [
  {
    title: 'Student Data Protection',
    description: 'Comprehensive protection for student information.',
    details: [
      'FERPA compliance',
      'Data encryption',
      'Access controls',
      'Usage monitoring'
    ]
  },
  {
    title: 'Campus Security',
    description: 'Enhanced protection for educational networks.',
    details: [
      'Network security',
      'Threat detection',
      'Access management',
      'Compliance monitoring'
    ]
  },
  {
    title: 'Device Management',
    description: 'Secure management of educational devices.',
    details: [
      'Device authentication',
      'Policy enforcement',
      'Usage monitoring',
      'Security controls'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Meet educational regulatory requirements.',
    details: [
      'FERPA compliance',
      'COPPA compliance',
      'GDPR compliance',
      'Industry standards'
    ]
  }
];

const industryBenefits = [
  {
    title: 'IT Efficiency',
    description: 'Centralized browser management reduces troubleshooting time for SaaS app access issues.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: '34%',
    statLabel: 'Fewer Support Tickets',
    source: {
      url: 'https://www.jamf.com/blog/secure-and-manage-devices-for-your-school/',
      label: 'Jamf, 2024'
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
      url: 'https://www.verizon.com/business/resources/reports/dbir',
      label: 'Verizon DBIR, 2024'
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
    description: 'Rapid, secure onboarding for faculty, staff, and third-party vendors.',
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

const educationMetrics = [
  {
    label: 'Data Breaches',
    value: '1,500+',
    insight: 'Confirmed data breaches in education sector in 2023, the highest globally.',
    source: { url: 'https://www.knowbe4.com/hubfs/Global-Education-Report_US_EN.pdf', label: 'KnowBe4, 2023' }
  },
  {
    label: 'Ransomware Attacks',
    value: '116',
    insight: 'Ransomware attacks on education in 2024, impacting 1.8M records.',
    source: { url: 'https://statescoop.com/ransomware-education-sector-decline-2024/', label: 'StateScoop, 2024' }
  },
  {
    label: 'Backup Compromise',
    value: '71%',
    insight: 'Of ransomware victims had backups compromised.',
    source: { url: 'https://www.varonis.com/blog/education-cybersecurity-statistics', label: 'Varonis, 2024' }
  },
  {
    label: 'Breach Cost',
    value: '$3.65M',
    insight: 'Average cost of data breaches in education sector.',
    source: { url: 'https://www.varonis.com/blog/education-cybersecurity-statistics', label: 'Varonis, 2024' }
  },
  {
    label: 'Phishing Blocked',
    value: '95%',
    insight: 'Of phishing attempts targeting student portals blocked.',
    source: { url: 'https://www.verizon.com/business/resources/reports/dbir', label: 'Verizon DBIR, 2024' }
  }
];

export async function getServerSideProps() {
  try {
    const educationBlogs = blogIndex
      .filter(post => post.category.some(cat => 
        cat.toLowerCase() === 'education' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    // Don't fetch images during build - let them load on-demand
    return {
      props: {
        educationBlogs: educationBlogs,
      },
    };
  } catch (error) {
    console.error('Error in getServerSideProps for education page:', error);
    
    // Return fallback data if everything fails
    const fallbackBlogs = blogIndex
      .filter(post => post.category.some(cat => 
        cat.toLowerCase() === 'education' || 
      cat.toLowerCase() === 'security'
      ))
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 3);

    return {
      props: {
        educationBlogs: fallbackBlogs,
      },
    };
  }
}

export default function Education({ educationBlogs }) {
  return (
    <>
      <SEO 
        title="Education Solutions | Kahana"
        description="Transform your educational operations with Kahana's secure, efficient solutions for modern learning challenges."
        url="https://kahana.co/markets/education"
        type="webpage"
      />
      <Head>
        <title>Education Solutions | Kahana</title>
        <meta name="description" content="Transform your educational operations with Kahana's secure, efficient solutions for modern learning challenges." />
      </Head>

      {/* Hero Section - Problem Statement */}
      <section className="bg-gradient-to-b from-kahana-accent-sky/20 via-kahana-secondary-300/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Education Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your educational operations with secure, efficient solutions designed for modern learning challenges.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/schedule-demo" className="inline-block bg-kahana-primary text-white px-8 py-3 rounded-md hover:bg-kahana-primary-dark transition-colors">
                Schedule Demo
              </Link>
              <Link href="/sales" className="inline-block border border-kahana-primary text-kahana-primary px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Education Industry Metrics Section - Proof Points */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Education Industry Metrics
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Key metrics that matter to education IT and security leaders evaluating enterprise browsers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {educationMetrics.map((metric, idx) => (
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
            Education Security
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Discover how our solutions deliver enterprise-grade security for educational operations. Our security-first approach helps organizations protect student data and maintain compliance.
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
            Education Benefits
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            See how educational institutions are transforming their operations and improving efficiency with our solutions.
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
      <FeaturedBlogSection posts={educationBlogs} />

      {/* CTA Section - Next Steps */}
      <section className="bg-gradient-to-r from-kahana-primary to-kahana-secondary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6" >
            Ready to Transform Your Educational Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto" >
            Join leading educational institutions that trust Kahana for their digital transformation needs.
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
      </section>
    </>
  );
} 