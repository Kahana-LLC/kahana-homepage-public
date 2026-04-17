import React from 'react';
import Script from 'next/script';
import Link from 'next/link';
import SEO from '../SEO';
import OasisProductHero from '../products/OasisProductHero';
import FeatureDiscoveryGrid from './FeatureDiscoveryGrid';
import { getCloudinaryImageUrl } from '../../utils/cloudinary-mapper';

const defaultImage = getCloudinaryImageUrl('/assets/oasis-browser-preview.png', { width: 1200, quality: 'auto:good' });

function parseFeatureSlugFromCanonicalUrl(canonicalUrl) {
  if (!canonicalUrl || typeof canonicalUrl !== 'string') return null;
  const path = canonicalUrl.replace(/^https?:\/\/[^/]+/i, '');
  const match = path.match(/\/features\/([^/?#]+)/);
  return match ? match[1].replace(/\/$/, '') : null;
}

/**
 * Shared layout for /features/oasis-* deep-dive pages.
 */
export default function FeatureDeepDiveShell({
  seoTitle,
  seoDescription,
  url,
  image = defaultImage,
  schema,
  heroEyebrow,
  heroTitle,
  heroDescription,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  backHref,
  backLabel,
  children,
}) {
  const featureSlug = parseFeatureSlugFromCanonicalUrl(url);

  return (
    <>
      <SEO title={seoTitle} description={seoDescription} image={image} url={url} type="article" schema={schema} />
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
        eyebrow={heroEyebrow}
        title={heroTitle}
        description={heroDescription}
        primaryHref={primaryHref}
        primaryLabel={primaryLabel}
        secondaryHref={secondaryHref}
        secondaryLabel={secondaryLabel}
      />

      {children}

      <FeatureDiscoveryGrid currentSlug={featureSlug} />

      <section className="border-t border-oasis-green-800/8 bg-oasis-green-50 py-12 md:py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-oasis-green-800/85">
            <Link
              href={backHref}
              className="font-semibold text-brand-link no-underline hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-link"
            >
              {backLabel}
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
