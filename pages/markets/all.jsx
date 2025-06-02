import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import SEO from '../../components/SEO';

const industries = [
  {
    key: 'manufacturing',
    name: 'Manufacturing',
    description: 'Secure, optimize, and modernize manufacturing operations.',
    href: '/markets/manufacturing',
  },
  {
    key: 'professional',
    name: 'Professional Services',
    description: 'Empower professional services with secure collaboration and compliance.',
    href: '/markets/professional',
  },
  {
    key: 'healthcare',
    name: 'Healthcare',
    description: 'Protect patient data and streamline healthcare workflows.',
    href: '/markets/healthcare',
  },
  {
    key: 'financial',
    name: 'Financial Services',
    description: 'Enhance security and compliance for financial organizations.',
    href: '/markets/financial',
  },
  {
    key: 'energy',
    name: 'Energy & Utilities',
    description: 'Secure grid operations and optimize utility performance.',
    href: '/markets/energy-utilities',
  },
  {
    key: 'retail',
    name: 'Retail & E-commerce',
    description: 'Protect transactions and customer data in retail environments.',
    href: '/markets/retail',
  },
  {
    key: 'government',
    name: 'Government',
    description: 'Modernize and secure government operations.',
    href: '/markets/government',
  },
  {
    key: 'technology',
    name: 'Technology',
    description: 'Drive innovation securely in the technology sector.',
    href: '/markets/technology',
  },
  {
    key: 'education',
    name: 'Education',
    description: 'Enable secure, modern learning environments.',
    href: '/markets/education',
  },
  {
    key: 'hospitality',
    name: 'Hospitality',
    description: 'Protect guest data and streamline hospitality operations.',
    href: '/markets/hospitality',
  },
];

export default function AllIndustries() {
  return (
    <>
      <SEO 
        title="All Industries | Kahana"
        description="Explore Kahana's solutions for every industry: manufacturing, healthcare, financial, government, technology, and more."
        url="https://kahana.co/markets/all"
        type="webpage"
      />
      <Head>
        <title>All Industries | Kahana</title>
        <meta name="description" content="Explore Kahana's solutions for every industry: manufacturing, healthcare, financial, government, technology, and more." />
      </Head>
      <section className="bg-gradient-to-b from-[#E3DFF1]/20 via-[#8CB7D0]/10 to-white py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">All Industries</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover how Kahana empowers organizations across every industry with secure, modern solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div key={industry.key} className="bg-white rounded-xl border border-[#A5DAD8]/30 shadow-lg shadow-[#E3DFF1]/20 hover:shadow-xl hover:shadow-[#E3DFF1]/30 transition-all duration-300 p-8 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-[#66C2BE] mb-2">{industry.name}</h2>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                </div>
                <Link href={industry.href} className="inline-block mt-auto text-[#66C2BE] hover:text-[#55B3AF] font-semibold underline">Explore {industry.name}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
} 