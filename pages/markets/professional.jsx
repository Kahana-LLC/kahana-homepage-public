import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import FeaturedBlogSection from '../../components/FeaturedBlogSection';
import { blogIndex } from '../../data/blog-index';

const securityFeatures = [
  {
    title: 'Client Data Protection',
    description: 'Comprehensive protection for client information.',
    details: [
      'Data encryption',
      'Access controls',
      'Privacy compliance',
      'Data governance'
    ]
  },
  {
    title: 'Intellectual Property Security',
    description: 'Enhanced protection for IP and trade secrets.',
    details: [
      'IP protection',
      'Document security',
      'Access management',
      'Usage monitoring'
    ]
  },
  {
    title: 'Collaboration Security',
    description: 'Secure management of professional services.',
    details: [
      'Team collaboration',
      'File sharing',
      'Communication security',
      'Compliance monitoring'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Meet professional services regulatory requirements.',
    details: [
      'Industry compliance',
      'GDPR compliance',
      'Data protection',
      'Industry standards'
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
    title: 'Efficiency Gain',
    description: 'Streamlined workflows and reduced admin overhead with digital tools.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    stat: '22%',
    statLabel: 'Efficiency Gain',
    source: {
      url: 'https://www2.deloitte.com/us/en/insights/industry/professional-services/digital-transformation.html',
      label: 'Deloitte, 2023'
    }
  },
  {
    title: 'Client Satisfaction',
    description: 'Improved client experience and retention with secure collaboration.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    stat: '88%',
    statLabel: 'Satisfaction',
    source: {
      url: 'https://www.pwc.com/gx/en/industries/financial-services/publications/professional-services-client-experience.html',
      label: 'PwC, 2023'
    }
  },
  {
    title: 'Cost Savings',
    description: 'Reduced operational costs through automation and cloud adoption.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stat: '18%',
    statLabel: 'Cost Savings',
    source: {
      url: 'https://www.mckinsey.com/industries/professional-services/our-insights/digital-automation',
      label: 'McKinsey, 2023'
    }
  },
  {
    title: 'Compliance Ready',
    description: 'Built-in compliance for professional standards and regulatory requirements.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    stat: '99.8%',
    statLabel: 'Compliance Rate',
    source: {
      url: 'https://www.gartner.com/en/documents/professional-services-compliance',
      label: 'Gartner, 2024'
    }
  }
];

const professionalMetrics = [
  {
    label: 'Security Incidents Prevented',
    value: '89%',
    insight: 'Fewer browser-based breaches after adopting secure enterprise browsers.',
    source: { url: 'https://www.gartner.com/en/documents/enterprise-browser-security', label: 'Gartner, 2024' }
  },
  {
    label: 'Compliance Audit Pass Rate',
    value: '99.8%',
    insight: 'Streamlined SOC 2 and GDPR audits with built-in controls.',
    source: { url: 'https://www2.deloitte.com/us/en/insights/industry/professional-services/professional-services-compliance.html', label: 'Deloitte, 2023' }
  },
  {
    label: 'IT Support Tickets Reduced',
    value: '34%',
    insight: 'Fewer browser-related helpdesk tickets, freeing IT resources.',
    source: { url: 'https://www.mckinsey.com/industries/professional-services/our-insights/digital-automation', label: 'McKinsey, 2023' }
  },
  {
    label: 'Time to Onboard Staff',
    value: '2x faster',
    insight: 'Rapid, policy-driven onboarding for new employees.',
    source: { url: 'https://www2.deloitte.com/us/en/insights/industry/professional-services/digital-transformation.html', label: 'Deloitte, 2023' }
  },
  {
    label: 'Cost Savings',
    value: '18%',
    insight: 'Lowered IT overhead by consolidating browser management and automation.',
    source: { url: 'https://www.mckinsey.com/industries/professional-services/our-insights/digital-automation', label: 'McKinsey, 2023' }
  }
];

export async function getServerSideProps() {
  const { getRandomPhoto, getOptimizedPhotoUrl } = await import('../../utils/pexels');

  const professionalBlogs = blogIndex
    .filter(post => post.category.some(cat => 
      cat.toLowerCase() === 'security' || 
      cat.toLowerCase() === 'remote work' ||
      cat.toLowerCase() === 'performance' ||
      cat.toLowerCase() === 'privacy'
    ))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 3);

  // Fetch images on the server
  const postsWithImages = await Promise.all(
    professionalBlogs.map(async (post) => {
      const photo = await getRandomPhoto(post.defaultImageQuery);
      return {
        ...post,
        image: getOptimizedPhotoUrl(photo),
      };
    })
  );

  return {
    props: {
      professionalBlogs: postsWithImages,
    },
  };
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
      <section className="bg-gradient-to-b from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold leading-7 text-[#66C2BE] mb-3">Professional Services</h2>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Secure Professional Services Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your professional services operations with enterprise-grade security, enhanced productivity, and comprehensive analytics.
            </p>
            <Link href="/schedule-demo">
              <button className="bg-[#66C2BE] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#55B3AF] transition-colors shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30">
                Schedule Demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Services Industry Metrics Section - Proof Points */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Professional Services Industry Metrics
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Key metrics that matter to professional services IT and security leaders evaluating enterprise browsers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionalMetrics.map((metric, idx) => (
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
            Professional Services Security
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Discover how our solutions deliver enterprise-grade security for professional services operations. Our security-first approach helps organizations protect client data and maintain compliance.
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
            Professional Services Benefits
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            See how professional services organizations are transforming their operations and improving client satisfaction with our solutions.
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
      <FeaturedBlogSection posts={professionalBlogs} />

      {/* CTA Section - Next Steps */}
      <section className="bg-gradient-to-r from-[#66C2BE] to-[#8CB7D0] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Professional Services Operations?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how our solutions can enhance security, improve operations, and streamline your professional services processes.
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