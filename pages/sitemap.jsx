import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const sitemapSections = [
  {
    title: 'Main Pages',
    links: [
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' },
      { text: 'Products', href: '/products' },
      { text: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Products',
    links: [
      { text: 'Secure Browser', href: '/products/secure-browser' },
      { text: 'Browser Management', href: '/products/browser-management' },
      { text: 'Browser Extensions', href: '/products/extensions' }
    ]
  },
  {
    title: 'Solutions',
    links: [
      { text: 'Enterprise', href: '/enterprise' },
      { text: 'Right to Work', href: '/right-to-work' },
      { text: 'Partner Program', href: '/partner-program' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { text: 'FAQ', href: '/faq' },
      { text: 'Terms and Conditions', href: '/terms-and-conditions' },
      { text: 'Privacy Policy', href: '/privacy-policy' }
    ]
  }
];

export default function Sitemap() {
  return (
    <>
      <Head>
        <title>Sitemap | Kahana</title>
        <meta
          name="description"
          content="Navigate Kahana's website with our comprehensive sitemap."
        />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Sitemap</h1>
            <p className="mt-4 text-xl text-gray-600">
              Find your way around Kahana's website.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sitemapSections.map((section, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href}>
                        <span className="text-kahana-primary hover:text-kahana-primary-dark cursor-pointer">
                          {link.text}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
