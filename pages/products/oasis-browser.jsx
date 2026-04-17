import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../../components/SEO';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';
import OasisProductHero from '../../components/products/OasisProductHero';
import OasisBrowserFeatureVisuals from '../../components/products/oasis/OasisBrowserFeatureVisuals';
import SharedCTA from '../../components/SharedCTA';

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

      <SharedCTA
        title="Ready to try Oasis?"
        description="Download via pricing, or reach out if you have questions about Oasis for personal use."
        primaryLabel="Download"
        primaryHref="/oasis-pricing"
        secondaryLabel="Get in touch"
        secondaryHref="/contact"
      />
    </>
  );
}
