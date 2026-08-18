import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getAllDocsMetadata } from '../utils/docsUtils';

const staticSitemapSections = [
  {
    title: 'Main Pages',
    links: [
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' },
      { text: 'Help', href: '/help' },
      { text: 'Contact', href: 'https://kahana.io/contact' },
      { text: 'Blog', href: '/blog' },
      { text: 'FAQ', href: '/faq' },
      { text: 'Pricing', href: '/pricing' },
      { text: 'Features', href: '/features' },
      { text: 'Use cases', href: '/use-cases' },
      { text: 'Who it is for', href: '/for' },
      { text: 'Success stories', href: '/success-stories' },
    ],
  },
  {
    title: 'Oasis Browser (legacy download)',
    links: [
      { text: 'Oasis pricing & download', href: '/oasis-pricing' },
      { text: 'Installations', href: '/installations' },
      { text: 'Press', href: '/press' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Events', href: '/events' },
      { text: 'Press', href: '/press' },
      { text: 'Press kit', href: '/press-kit' },
      { text: 'Press releases', href: '/press-releases' },
      { text: 'Marketing Kit', href: '/marketing-kit' },
    ],
  },
  {
    title: 'Support',
    links: [
      { text: 'Support Center', href: '/support' },
      { text: 'Contact', href: 'https://kahana.io/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Manifesto', href: '/manifesto' },
      { text: 'Contact', href: 'https://kahana.io/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '/privacy-policy' },
      { text: 'Terms & Conditions', href: '/terms-and-conditions' },
      { text: 'Right to Work', href: '/right-to-work' },
    ],
  },
];

export async function getStaticProps() {
  const docs = await getAllDocsMetadata();
  const slugFor = (d) => d.slug || '';
  const docLinks = [
    { text: 'Help home', href: '/help' },
    ...docs
      .filter((d) => slugFor(d))
      .sort((a, b) => (a.title || '').localeCompare(b.title || '', undefined, { sensitivity: 'base' }))
      .map((d) => ({
        text: d.title || slugFor(d),
        href: `/help/${slugFor(d)}`,
      })),
  ];

  const sitemapSections = [
    ...staticSitemapSections.slice(0, 4),
    { title: 'Help', links: docLinks },
    ...staticSitemapSections.slice(4),
  ];

  return { props: { sitemapSections } };
}

export default function Sitemap({ sitemapSections }) {
  return (
    <>
      <Head>
        <title>Sitemap | Kahana - Navigate Our Website</title>
        <meta
          name="description"
          content="Browse Kahana's complete website structure. Find information about our enterprise browser, web applications, solutions, documentation, support resources, and more."
        />
        <meta name="robots" content="noindex, follow" />
      </Head>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900">Website Sitemap</h1>
            <p className="mt-4 text-xl text-gray-600">
              A complete guide to Kahana&apos;s website structure and content
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sitemapSections.map((section, index) => (
              <div key={section.title || index} className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{section.title}</h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={`${link.href}-${linkIndex}`}>
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
