import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Footer from '../../components/Footer';
import Link from 'next/link';

const products = [
  {
    title: 'The Enterprise Browser',
    description: 'A secure, modern browser designed specifically for enterprise environments, providing enhanced security, collaboration features, and seamless integration with existing systems.',
    features: [
      'Enhanced security controls',
      'Modern browsing experience',
      'Enterprise compliance',
      'Seamless integration',
      'Collaboration tools'
    ],
    link: '/products/enterprise-browser',
    icon: '🌐'
  },
  {
    title: 'Web Application',
    description: 'A comprehensive web application solution that provides secure access, efficient management, and seamless integration capabilities for enterprise environments.',
    features: [
      'Secure authentication',
      'Data protection',
      'Compliance management',
      'Integration capabilities',
      'Performance optimization'
    ],
    link: '/products/web-application',
    icon: '🔒'
  }
];

const benefits = [
  {
    title: 'Enhanced Security',
    description: 'Enterprise-grade security features built into every product.',
    icon: '🛡️'
  },
  {
    title: 'Improved Efficiency',
    description: 'Streamlined workflows and automated processes.',
    icon: '⚡'
  },
  {
    title: 'Better Compliance',
    description: 'Built-in compliance and audit capabilities.',
    icon: '✅'
  },
  {
    title: 'Cost Savings',
    description: 'Reduced operational costs and improved ROI.',
    icon: '💰'
  }
];

const Products = () => {
  return (
    <>
      <Head>
        <title>Products | Kahana</title>
        <meta
          name="description"
          content="Explore Kahana's suite of enterprise products, including The Enterprise Browser and Web Application solutions."
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
              Our Products
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover Kahana's suite of enterprise solutions designed to enhance security, efficiency, and compliance in your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-8">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  {product.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <span className="text-[#3B675E] mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href={product.link}>
                  <button className="w-full bg-[#3B675E] text-white px-6 py-3 rounded-md hover:bg-[#2A4A3F] transition-colors">
                    Learn More
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Enterprise Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#3B675E] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Schedule a demo to see how Kahana's products can improve security, efficiency, and compliance in your organization.
          </p>
          <Link href="/schedule-a-demo">
            <button className="bg-white text-[#3B675E] px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors">
              Schedule Demo
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Products; 