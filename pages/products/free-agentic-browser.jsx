import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';
import OasisProductHero from '../../components/products/OasisProductHero';
import DeviceVsBrowserBand from '../../components/products/DeviceVsBrowserBand';
import CapabilityGrid from '../../components/products/CapabilityGrid';

const heroDescription =
  'A productivity-focused, modern browser designed for personal use, featuring smart organization tools, AI-powered assistance, and a seamless browsing experience. Boost your productivity and take control of your digital workflow.';

const productivityFeatures = [
  {
    title: 'Smart Workspace Organization',
    description: 'Organize your digital workspace with intelligent hub management for maximum productivity.',
    details: [
      'Customizable productivity hubs',
      'Smart content categorization',
      'Quick access to frequently used tools',
      'Seamless workflow integration',
    ],
  },
  {
    title: 'AI-Powered Productivity Assistant',
    description: 'Get intelligent suggestions and automation to streamline your daily tasks.',
    details: [
      'Smart task recommendations',
      'Automated workflow suggestions',
      'Content discovery assistance',
      'Personalized productivity insights',
    ],
  },
  {
    title: 'Advanced Tab Management',
    description: 'Efficient tab organization and management for better focus and productivity.',
    details: [
      'Intelligent tab grouping',
      'Memory optimization',
      'Quick tab search and switching',
      'Productivity-focused layouts',
    ],
  },
  {
    title: 'Seamless Multi-Tasking',
    description: 'Enhanced multi-tasking capabilities for improved workflow efficiency.',
    details: [
      'Split-screen functionality',
      'Workspace switching',
      'Context preservation',
      'Productivity shortcuts',
    ],
  },
];

const browsingPillars = [
  {
    title: 'Personal Hub Organization',
    description: 'Organize your favorite sites and content in personal hubs.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    ),
  },
  {
    title: 'Multi-Tab Management',
    description: 'Efficient tab management for better productivity.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'Smart Navigation',
    description: 'Intuitive navigation features for seamless browsing.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    title: 'AI-Powered Assistant',
    description: 'Helpful AI assistant for enhanced browsing experience.',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
];

const technicalFeatures = [
  {
    title: 'Modern Architecture',
    description: 'Built with cutting-edge technology for reliability.',
    details: ['Electron-based', 'Chromium-powered', 'TypeScript implementation', 'Modular design'],
  },
  {
    title: 'Automatic Updates',
    description: 'Seamless update system for continuous improvement.',
    details: ['Background updates', 'Version management', 'Release notes', 'Seamless process'],
  },
  {
    title: 'Data Management',
    description: 'Secure handling of personal data and preferences.',
    details: ['Local data storage', 'Encrypted preferences', 'Sync capabilities', 'Data portability'],
  },
  {
    title: 'User Interface',
    description: 'Clean, modern design for optimal user experience.',
    details: ['Minimalist design', 'Responsive layout', 'Custom themes', 'Smooth animations'],
  },
];

const previewImageUrl = getCloudinaryImageUrl('/assets/oasis-browser-preview.png', { width: 1200, quality: 'auto:good' });
const heroProductImageUrl = getCloudinaryImageUrl('/figma-imports/Personalization Features.webp', {
  width: 1200,
  quality: 'auto:good',
});

const softwareFeatureList = [
  'Smart Workspace Organization',
  'AI-Powered Productivity Assistant',
  'Advanced Tab Management',
  'Seamless Multi-Tasking',
  'Personal Hub Organization',
  'Multi-Tab Management',
  'Smart Navigation',
  'AI-Powered Assistant',
];

export default function FreeAgenticBrowser() {
  const softwareSchema = {
    '@type': 'SoftwareApplication',
    name: 'Kahana Oasis - Free Agentic Browser',
    description:
      'A productivity-focused, modern browser for personal use with smart organization tools, AI-powered assistance, and a seamless browsing experience.',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Cross-platform',
    featureList: softwareFeatureList,
    screenshot: heroProductImageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Kahana',
      url: 'https://kahana.co',
      description: 'Kahana develops productivity-focused tools for personal and professional use.',
    },
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://kahana.co/products/free-agentic-browser#webpage',
        name: 'Oasis Free Agentic Browser',
        description:
          'Boost productivity with Kahana Oasis Free Agentic Browser: smart organization, AI-powered assistance, and seamless browsing for personal use.',
        url: 'https://kahana.co/products/free-agentic-browser',
        isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
        about: { '@id': 'https://kahana.co/products/free-agentic-browser#software' },
      },
      {
        ...softwareSchema,
        '@id': 'https://kahana.co/products/free-agentic-browser#software',
      },
    ],
  };

  const seoDescription =
    'Boost your productivity with Kahana Oasis Free Agentic Browser. Smart organization tools, AI-powered assistance, and seamless browsing designed for maximum efficiency.';

  return (
    <>
      <SEO
        title="Oasis Free Agentic Browser for enhanced productivity"
        description={seoDescription}
        image={previewImageUrl}
        url="https://kahana.co/products/free-agentic-browser"
        type="product"
        schema={pageSchema}
      />
      <Head>
        <title>Oasis Free Agentic Browser | Kahana</title>
        <meta name="description" content={seoDescription} />
      </Head>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KQHFL9605P');
        `}
      </Script>

      <OasisProductHero
        eyebrow="Free Agentic Browser"
        title="Oasis"
        description={heroDescription}
        primaryHref="/oasis-pricing"
        primaryLabel="Get instant access"
        secondaryHref="/contact"
        secondaryLabel="Get in touch"
      />

      <section className="bg-white py-12 md:py-16 overflow-x-hidden border-b border-[#4A5745]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center w-full">
            <div className="w-full max-w-5xl">
              <Image
                src={heroProductImageUrl}
                alt="Oasis Free Agentic Browser - Homepage Personalization"
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg shadow-xl border border-[#4A5745]/10"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <DeviceVsBrowserBand
        heading="Your workflow lives in the browser"
        intro="Experience a new way of browsing with intelligent organization and productivity features designed for personal use."
        leftTitle="When the default browser feels chaotic"
        leftItems={[
          'Tabs and apps multiply with little structure, and context gets lost when you jump between SaaS tools.',
          'Generic browsers optimize for the open web, not for how you personally organize work.',
          'Multitasking turns into hunting for the right window instead of staying in flow.',
        ]}
        rightTitle="What a productivity-first agentic browser changes"
        rightItems={[
          'Hubs and layouts so sites and tasks cluster the way you think.',
          'AI-powered assistance for suggestions, search, and faster navigation.',
          'Tab and workspace patterns built for focus, memory, and seamless multi-tasking.',
        ]}
      />

      <section className="bg-[#f8faf9] py-14 md:py-20 border-b border-[#4A5745]/8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4A5745] mb-4 tracking-tight">
            Built for personal productivity, not enterprise policy overhead
          </h2>
          <p className="text-[#4A5745]/95 leading-relaxed mb-4">
            Oasis Free Agentic Browser is for individuals who want a modern, ergonomic client: smart organization, AI assistance, and a browsing experience that keeps pace with how you work. It complements Kahana&apos;s enterprise offering when you are ready to scale governance for teams.
          </p>
          <p className="text-sm text-[#4A5745]/85">
            Ready to try it?{' '}
            <Link
              href="/oasis-pricing"
              className="text-[#66C2BE] font-semibold no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#66C2BE]"
            >
              Get instant access
            </Link>{' '}
            via our pricing page.
          </p>
        </div>
      </section>

      <CapabilityGrid
        title="Productivity-first features"
        intro="Boost your productivity with intelligent features designed to streamline your workflow and enhance your browsing experience."
        items={productivityFeatures}
      />

      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#4A5745] text-center mb-10 tracking-tight">
            Smart browsing experience
          </h2>
          <p className="text-[#4A5745]/95 text-center mb-10 max-w-3xl mx-auto leading-relaxed">
            Personal hubs, tab discipline, and navigation that stays out of your way so you can stay focused on the work inside each site.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {browsingPillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#4A5745]/10 p-6 md:p-7 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
              >
                <div className="flex gap-4 mb-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-lg bg-kahana-primary-800 flex items-center justify-center ring-1 ring-kahana-primary-900/20"
                    aria-hidden
                  >
                    {pillar.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-[#4A5745] leading-snug tracking-tight pt-1.5">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-sm text-[#4A5745]/90 leading-relaxed border-l-2 border-kahana-primary-800/25 pl-4">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8faf9] py-14 md:py-20 border-y border-[#4A5745]/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#4A5745] text-center mb-6 tracking-tight">
            Technical features
          </h2>
          <p className="text-[#4A5745]/95 text-center max-w-3xl mx-auto leading-relaxed mb-10">
            Modern architecture, updates, and data handling so the experience stays fast, familiar, and under your control.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {technicalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#4A5745]/10 p-6 shadow-sm transition-all duration-200 hover:border-kahana-primary-800/30 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold text-[#4A5745] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#4A5745]/90 mb-4 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, dIndex) => (
                    <li key={dIndex} className="flex gap-2 text-sm text-[#4A5745]/95">
                      <span className="text-kahana-primary-700 mt-1.5" aria-hidden>
                        •
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Ready to boost your productivity?
          </h2>
          <p className="text-xl text-[#4A5745] mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Get instant access through pricing, or reach out if you have questions about Oasis for personal use.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/oasis-pricing"
              className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto"
            >
              Get instant access
            </Link>
            <Link
              href="/contact"
              className="btn-secondary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
