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
      { text: 'Contact', href: '/contact' },
      { text: 'Adam Kershner', href: '/adam-kershner' },
      { text: 'Blog', href: '/blog' },
      { text: 'Installations', href: '/installations' },
      { text: 'Schedule Demo', href: '/schedule-demo' },
    ],
  },
  {
    title: 'Products',
    links: [
      { text: 'Products Overview', href: '/products' },
      { text: 'Enterprise Browser', href: '/products/oasis-enterprise-browser' },
      { text: 'Web Application', href: '/products/web-application' },
      { text: "Buyer's Guide", href: '/buyers-guide' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { text: 'Solutions Overview', href: '/solutions' },
      { text: 'SaaS & Web Apps', href: '/solutions/saas-and-web-apps' },
      { text: 'Remote Workforce', href: '/solutions/remote-workforce' },
      { text: 'Merger Integration', href: '/solutions/merger-integration' },
      { text: 'External Workforce', href: '/solutions/external-workforce' },
      { text: 'VDI Reduction', href: '/solutions/vdi-reduction' },
      { text: 'Zero Trust Security', href: '/solutions/zero-trust-security' },
      { text: 'Privileged User Management', href: '/solutions/privileged-user-management' },
      { text: 'Secure Browsing', href: '/solutions/secure-browsing' },
      { text: 'Workplace Enablement', href: '/solutions/workplace-enablement' },
      { text: 'Healthcare', href: '/solutions/healthcare' },
      { text: 'Government', href: '/solutions/government' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { text: 'Resources', href: '/resources' },
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
      { text: 'Contact Sales', href: '/sales' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Manifesto', href: '/manifesto' },
      { text: 'Contact', href: '/contact' },
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
    { text: 'Documentation home', href: '/docs' },
    ...docs
      .filter((d) => slugFor(d))
      .sort((a, b) => (a.title || '').localeCompare(b.title || '', undefined, { sensitivity: 'base' }))
      .map((d) => ({
        text: d.title || slugFor(d),
        href: `/docs/${slugFor(d)}`,
      })),
  ];

  const sitemapSections = [
    ...staticSitemapSections.slice(0, 4),
    { title: 'Documentation', links: docLinks },
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
