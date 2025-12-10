import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const sitemapSections = [
  {
    title: 'Main Pages',
    links: [
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' },
      { text: 'Contact', href: '/contact' },
      { text: 'Blog', href: '/blog' },
      { text: 'Installations', href: '/installations' },
      { text: 'Schedule Demo', href: '/schedule-demo' }
    ]
  },
  {
    title: 'Products',
    links: [
      { text: 'Products Overview', href: '/products' },
      { text: 'Enterprise Browser', href: '/products/enterprise-browser' },
      { text: 'Web Application', href: '/products/web-application' },
      { text: "Buyer's Guide", href: '/enterprise-buyer-guide' }
    ]
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
      { text: 'Government', href: '/solutions/government' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { text: 'Resources', href: '/resources' },
      { text: 'Events', href: '/events' },
      { text: 'Press', href: '/press' },
      { text: 'Marketing Kit', href: '/marketing-kit' }
    ]
  },
  {
    title: 'Documentation',
    links: [
      { text: 'Documentation Home', href: '/docs' },
      { text: 'Getting Started', href: '/docs/getting-started' },
      { text: 'AI Assistant', href: '/docs/ai-assistant' },
      { text: 'Multi-View', href: '/docs/multi-view' },
      { text: 'Hubs', href: '/docs/hubs' },
      { text: 'Settings', href: '/docs/settings' },
      { text: 'Keyboard Shortcuts', href: '/docs/keyboard-shortcuts' },
      { text: 'Advanced Features', href: '/docs/advanced-features' },
      { text: 'Security Guide', href: '/docs/security-guide' },
      { text: 'Troubleshooting', href: '/docs/troubleshooting' },
    ]
  },
  {
    title: 'Support',
    links: [
      { text: 'Support Center', href: '/support' },
      { text: 'Contact Sales', href: '/sales' },
    ]
  },
  {
    title: 'Company',
    links: [
      { text: 'About Us', href: '/about' },
      { text: 'Careers', href: '/careers' },
      { text: 'Manifesto', href: '/manifesto' },
      { text: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Legal',
    links: [
      { text: 'Privacy Policy', href: '/privacy-policy' },
      { text: 'Terms & Conditions', href: '/terms-and-conditions' },
      { text: 'Accessibility', href: '/docs/accessibility' },
      { text: 'Right to Work', href: '/right-to-work' }
    ]
  }
];

export default function Sitemap() {
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
              A complete guide to Kahana's website structure and content
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
