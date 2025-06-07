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
    title: 'Grid Security',
    description: 'Enhanced protection for critical infrastructure.',
    details: [
      'Grid monitoring',
      'Threat detection',
      'Access controls',
      'Compliance monitoring'
    ]
  },
  {
    title: 'Industrial IoT Protection',
    description: 'Secure management of connected utility devices.',
    details: [
      'Device authentication',
      'Network segmentation',
      'Real-time monitoring',
      'Threat detection'
    ]
  },
  {
    title: 'Data Protection',
    description: 'Comprehensive protection for utility data.',
    details: [
      'Data encryption',
      'Access controls',
      'Usage monitoring',
      'Data loss prevention'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Meet utility industry regulatory requirements.',
    details: [
      'NERC CIP compliance',
      'NIST framework',
      'GDPR compliance',
      'Industry standards'
    ]
  }
];

const utilityFeatures = [
  {
    title: 'Grid Operations',
    description: 'Enhanced grid management and monitoring.',
    details: [
      'Real-time monitoring',
      'Load balancing',
      'Outage management',
      'Grid analytics'
    ]
  },
  {
    title: 'Resource Management',
    description: 'Optimize utility resources and operations.',
    details: [
      'Asset tracking',
      'Resource allocation',
      'Maintenance scheduling',
      'Inventory management'
    ]
  },
  {
    title: 'Team Collaboration',
    description: 'Enhanced collaboration across utility teams.',
    details: [
      'Field operations',
      'Maintenance teams',
      'Emergency response',
      'Project coordination'
    ]
  },
  {
    title: 'Utility Analytics',
    description: 'Comprehensive utility performance analytics.',
    details: [
      'Grid performance',
      'Resource utilization',
      'Operational metrics',
      'Predictive analytics'
    ]
  }
];

const industryBenefits = [
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
  },
  {
    title: 'Response Time',
    description: '80% faster incident response with centralized monitoring.',
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
    description: '18% lower IT overhead by replacing VPNs with enterprise browsers.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: '18%',
    statLabel: 'Cost Savings',
    source: {
      url: 'https://chromeenterprise.google/download/',
      label: 'Google, 2024'
    }
  }
];

const energyMetrics = [
  {
    label: 'Wiper Attacks',
    value: '31%',
    insight: 'Of global wiper cyberattacks target energy & utilities.',
    source: { url: 'https://www.statista.com/statistics/1479650/wiper-cyberattack-detections-global-industries/', label: 'Statista, 2023' }
  },
  {
    label: 'Ransomware Impact',
    value: '44%',
    insight: 'Of energy-sector breaches involve ransomware.',
    source: { url: 'https://www.statista.com/statistics/1385289/cause-ransomware-attacks-by-industry/', label: 'Statista, 2023' }
  },
  {
    label: 'Breach Cost',
    value: '$4.72M',
    insight: 'Average cost per energy-sector data breach.',
    source: { url: 'https://www.utilitydive.com/news/experts-raise-concerns-about-cybersecurity-and-energy-storage-batteries-hackers/744170/', label: 'Utility Dive, 2023' }
  }
];

export async function getServerSideProps() {
  const { getRandomPhoto, getOptimizedPhotoUrl } = await import('../../utils/pexels');

  const energyBlogs = blogIndex
    .filter(post => post.category.some(cat => 
      cat.toLowerCase() === 'energy' || 
      cat.toLowerCase() === 'energy & utilities' ||
      cat.toLowerCase() === 'utilities' ||
      cat.toLowerCase() === 'security'
    ))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // Fetch images on the server
  const postsWithImages = await Promise.all(
    energyBlogs.map(async (post) => {
      const photo = await getRandomPhoto(post.defaultImageQuery);
      return {
        ...post,
        image: getOptimizedPhotoUrl(photo),
      };
    })
  );

  return {
    props: {
      energyBlogs: postsWithImages,
    },
  };
}

export default function EnergyUtilities({ energyBlogs }) {
  const energyUtilitiesSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Energy & Utilities Solutions | Kahana',
    description: 'Enterprise-grade security and productivity solutions for the energy and utilities industry. Features include grid security, compliance management, and comprehensive utility analytics.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Kahana',
      description: 'Kahana provides enterprise-grade security and productivity solutions for energy and utility organizations'
    }
  };

  return (
    <>
      <SEO 
        title="Energy & Utilities Solutions | Kahana"
        description="Enterprise-grade security and productivity solutions for the energy and utilities industry. Features include grid security, compliance management, and comprehensive utility analytics."
        image="https://kahana.co/assets/energy-utilities-preview.png"
        url="https://kahana.co/markets/energy-utilities"
        type="webpage"
        schema={energyUtilitiesSchema}
      />
      <Head>
        <title>Energy & Utilities Solutions | Kahana</title>
        <meta
          name="description"
          content="Kahana's energy and utilities solutions help organizations enhance grid security, improve operations, and maintain compliance in the utility industry."
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
            <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Energy & Utilities</h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Securing the Grid
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              The energy sector faces unprecedented threats, with 31% of global wiper attacks targeting utilities and breaches costing $4.72M on average. Enterprise browsers provide critical protection for grid operations while ensuring compliance and operational continuity.
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

      {/* Energy & Utilities Industry Metrics Section - Proof Points */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Energy & Utilities Security Risks
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            The energy and utilities sector faces unique security challenges due to critical infrastructure, regulatory requirements, and sophisticated threat landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {energyMetrics.map((metric, idx) => (
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
            Enterprise browsers address energy and utilities' unique security challenges with proven results. Our security-first approach helps organizations protect critical infrastructure and maintain compliance.
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
            Enterprise browsers deliver measurable improvements in security, efficiency, and cost reduction for energy and utilities organizations.
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
      <FeaturedBlogSection posts={energyBlogs} />

      {/* CTA Section - Next Steps */}
      <section className="bg-gradient-to-r from-[#66C2BE] to-[#8CB7D0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Grid Security?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join leading energy providers that trust Kahana for their digital transformation needs. Protect critical infrastructure and ensure operational continuity with enterprise-grade security.
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