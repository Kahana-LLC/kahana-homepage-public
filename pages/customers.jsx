import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

const featuredCustomers = [
  {
    name: 'Enterprise Solutions Inc.',
    logo: '/images/customer-logos/enterprise-solutions.png',
    description: 'Transformed their knowledge base into a revenue-generating platform, increasing customer engagement by 200%.',
    industry: 'Technology Consulting'
  },
  {
    name: 'Healthcare Innovations',
    logo: '/images/customer-logos/healthcare-innovations.png',
    description: 'Created a secure, HIPAA-compliant knowledge hub for medical professionals, serving over 10,000 healthcare providers.',
    industry: 'Healthcare'
  },
  {
    name: 'Government Services',
    logo: '/images/customer-logos/government-services.png',
    description: 'Streamlined internal knowledge sharing while maintaining strict security protocols and compliance requirements.',
    industry: 'Government'
  }
];

const successStories = [
  {
    title: 'From Internal Wiki to Revenue Stream',
    customer: 'Enterprise Solutions Inc.',
    quote: 'Kahana helped us transform our internal knowledge base into a valuable revenue stream. Our customers now have access to premium content while maintaining security and compliance.',
    author: 'Sarah Johnson',
    role: 'Chief Knowledge Officer',
    metrics: [
      { label: 'Revenue Increase', value: '200%' },
      { label: 'Customer Engagement', value: '150%' },
      { label: 'Content Creation', value: '300%' }
    ]
  },
  {
    title: 'Secure Knowledge Sharing in Healthcare',
    customer: 'Healthcare Innovations',
    quote: 'The security features and HIPAA compliance made Kahana the perfect choice for our healthcare knowledge platform. We can now safely share medical expertise while maintaining patient privacy.',
    author: 'Dr. Michael Chen',
    role: 'Medical Director',
    metrics: [
      { label: 'Active Users', value: '10,000+' },
      { label: 'Content Articles', value: '5,000+' },
      { label: 'Compliance Rate', value: '100%' }
    ]
  },
  {
    title: 'Government Knowledge Management',
    customer: 'Government Services',
    quote: 'Kahana\'s enterprise-grade security and customizable features allowed us to create a secure knowledge sharing platform that meets all government requirements.',
    author: 'Robert Martinez',
    role: 'IT Director',
    metrics: [
      { label: 'Departments Served', value: '15' },
      { label: 'Security Score', value: '98%' },
      { label: 'Cost Savings', value: '40%' }
    ]
  }
];

export default function Customers() {
  return (
    <>
      <Head>
        <title>Kahana Customers | Success Stories</title>
        <meta
          name="description"
          content="Discover how leading organizations are using Kahana to transform their knowledge into revenue. Read success stories from our customers across various industries."
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

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Industry Leaders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how organizations across various industries are using Kahana to transform their knowledge into valuable revenue streams while maintaining security and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Customers */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Featured Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCustomers.map((customer, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="h-16 mb-4 flex items-center justify-center">
                  <Image
                    src={customer.logo}
                    alt={`${customer.name} logo`}
                    width={120}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {customer.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{customer.industry}</p>
                <p className="text-gray-600">{customer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Success Stories
          </h2>
          <div className="space-y-12">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {story.title}
                </h3>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-2/3">
                    <blockquote className="text-gray-600 text-lg mb-6">
                      "{story.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <p className="font-semibold text-gray-900">{story.author}</p>
                        <p className="text-gray-500">{story.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/3">
                    <div className="grid grid-cols-3 gap-4">
                      {story.metrics.map((metric, mIndex) => (
                        <div key={mIndex} className="text-center">
                          <div className="text-2xl font-bold text-[#3B675E]">
                            {metric.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3B675E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Knowledge?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Join our growing list of successful customers and start monetizing your knowledge today.
          </p>
          <Link href="/contact">
            <button className="bg-white text-[#3B675E] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
} 