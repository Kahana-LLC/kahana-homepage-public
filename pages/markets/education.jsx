import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

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

const industryBenefits = [
  {
    title: 'Student Success',
    stat: '85%',
    statLabel: 'Success Rate',
    description: 'Improve student outcomes with enhanced learning tools.',
    icon: '🎓'
  },
  {
    title: 'Resource Efficiency',
    stat: '40%',
    statLabel: 'Cost Reduction',
    description: 'Optimize educational resources and reduce costs.',
    icon: '💰'
  },
  {
    title: 'Faculty Productivity',
    stat: '60%',
    statLabel: 'Productivity Gain',
    description: 'Enhance faculty productivity with streamlined tools.',
    icon: '📚'
  },
  {
    title: 'Learning Engagement',
    stat: '75%',
    statLabel: 'Engagement Rate',
    description: 'Increase student engagement with interactive features.',
    icon: '🎯'
  }
];

export default function Education() {
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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Education Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your educational operations with secure, efficient solutions designed for modern learning challenges.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/schedule-demo" className="inline-block bg-[#66C2BE] text-white px-8 py-3 rounded-md hover:bg-[#55B3AF] transition-colors">
                Schedule Demo
              </Link>
              <Link href="/contact" className="inline-block border border-[#66C2BE] text-[#66C2BE] px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Education Solutions
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            Experience a new way of educational operations with smart solutions and enhanced productivity features. Learn how our platform is transforming education.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {educationFeatures.map((feature, index) => (
              <div key={index} className="bg-gradient-to-r from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-[#E3DFF1]/30 rounded-xl overflow-hidden border border-[#A5DAD8]/30 p-6 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#66C2BE] via-[#8CB7D0] to-[#E3DFF1] rounded-full flex items-center justify-center mr-3 shadow-md shadow-[#E3DFF1]/20">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
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

      {/* Industry Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Education Benefits
          </h2>
          <p className="text-gray-600 text-center mb-8 max-w-3xl mx-auto">
            See how educational institutions are transforming their operations and improving efficiency with our solutions.
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
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#66C2BE] to-[#8CB7D0] rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Educational Operations?
            </h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Join leading educational institutions that trust Kahana for their digital transformation needs.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/schedule-demo" className="inline-block bg-white text-[#66C2BE] px-8 py-3 rounded-md hover:bg-gray-50 transition-colors">
                Schedule Demo
              </Link>
              <Link href="/contact" className="inline-block border border-white text-white px-8 py-3 rounded-md hover:bg-white/10 transition-colors">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 