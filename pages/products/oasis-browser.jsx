import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';
import OasisProductHero from '../../components/products/OasisProductHero';
import OasisBrowserFeatureVisuals from '../../components/products/oasis/OasisBrowserFeatureVisuals';

const heroDescription =
  'Oasis is a browser with a built-in AI assistant that can plan, search, and take action on your tabs, history, and pages, not just chat beside them. Use your voice when you want speed, and import from your old browser so switching takes seconds, not a weekend.';

const previewImageUrl = getCloudinaryImageUrl('/assets/oasis-browser-preview.png', { width: 1200, quality: 'auto:good' });

const softwareFeatureList = [
  'Built-in AI assistant with browser context (tabs, bookmarks, history, active page)',
  'Voice conversation and dictation into the assistant (supported builds)',
  'Confirmation prompts for sensitive browser actions',
  'Starter prompts, busy states, read-aloud and feedback on AI messages',
  'Import wizard: bookmarks, passwords, history, autofill, payments, extensions (where supported)',
];

export default function OasisBrowser() {
  const softwareSchema = {
    '@type': 'SoftwareApplication',
    name: 'Kahana Oasis Browser',
    description:
      'Oasis is a personal browser with a built-in AI assistant that acts on tabs, bookmarks, history, and pages; voice input; and guided import from other browsers.',
    applicationCategory: 'WebApplication',
    operatingSystem: 'Cross-platform',
    featureList: softwareFeatureList,
    screenshot: previewImageUrl,
    publisher: {
      '@type': 'Organization',
      name: 'Kahana',
      url: 'https://kahana.co',
      description: 'Kahana develops Oasis and enterprise browser products.',
    },
  };

  const pageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://kahana.co/products/oasis-browser#webpage',
        name: 'Oasis Browser',
        description:
          'Oasis: browser-native AI assistant, voice, and quick import from other browsers.',
        url: 'https://kahana.co/products/oasis-browser',
        isPartOf: { '@type': 'WebSite', name: 'Kahana', url: 'https://kahana.co' },
        about: { '@id': 'https://kahana.co/products/oasis-browser#software' },
      },
      {
        ...softwareSchema,
        '@id': 'https://kahana.co/products/oasis-browser#software',
      },
    ],
  };

  const seoDescription =
    'Oasis Browser is a personal browser with a built-in AI assistant that uses real tab and history context, optional voice control, and quick guided import from other browsers.';

  return (
    <>
      <SEO
        title="Oasis Browser | AI in your real browser context"
        description={seoDescription}
        image={previewImageUrl}
        url="https://kahana.co/products/oasis-browser"
        type="product"
        schema={pageSchema}
      />
      <Head>
        <title>Oasis Browser | Kahana</title>
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
        eyebrow="Oasis Browser"
        title="Oasis"
        description={heroDescription}
        primaryHref="/oasis-pricing"
        primaryLabel="Download"
        secondaryHref="/contact"
        secondaryLabel="Get in touch"
      />

      <OasisBrowserFeatureVisuals />

      <section className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12 sm:py-16 md:py-20 lg:py-28 mb-0 bg-[#F8FAF2]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Ready to try Oasis?
          </h2>
          <p className="text-xl text-[#4A5745] mb-6 sm:mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
            Download via pricing, or reach out if you have questions about Oasis for personal use.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/oasis-pricing"
              className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold no-underline hover:no-underline focus:no-underline w-full sm:w-auto"
            >
              Download
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
