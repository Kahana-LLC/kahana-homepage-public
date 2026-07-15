import Head from 'next/head';
import { ABOUT_ORIGIN, SITE_URL } from '../config/site';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

const DEFAULT_ORG_LOGO = getCloudinaryImageUrl('/assets/kahana_logo_transparent.svg');

/** Marketing home copy — keep in sync with homepage hero / PLATFORM_FAQ voice. */
export const DEFAULT_SEO_TITLE = 'The Digital Library With Aura';
export const DEFAULT_SEO_DESCRIPTION =
  'Contribute what you know, learn from curated hubs on Explore, and give Aura so quality rises. Paid access is optional.';
/**
 * Kahana wordmark as a padded PNG (1200×630). SVG is unreliable for OG/Twitter;
 * Cloudinary converts the mapped transparent logo.
 */
export const DEFAULT_OG_IMAGE =
  'https://res.cloudinary.com/dlhpqrucv/image/upload/w_1200,h_630,c_pad,b_rgb:F8FAF2,f_png,q_auto:good/kahana-homepage/public/kahana_logo_transparent';
export const DEFAULT_OG_IMAGE_WIDTH = 1200;
export const DEFAULT_OG_IMAGE_HEIGHT = 630;

const SEO = ({
  title = DEFAULT_SEO_TITLE,
  description = DEFAULT_SEO_DESCRIPTION,
  image = DEFAULT_OG_IMAGE,
  url = `${ABOUT_ORIGIN}/`,
  type = 'website',
  schema = null,
  noindex = false,
  skipCanonical = false,
}) => {
  // Keep DEFAULT_SEO_TITLE exact for Messages/OG; brand other titles with "| Kahana".
  const siteTitle =
    title === DEFAULT_SEO_TITLE || title.includes('Kahana')
      ? title
      : `${title} | Kahana`;

  // Default schema for organization
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kahana',
    url: ABOUT_ORIGIN,
    logo: DEFAULT_ORG_LOGO,
    sameAs: [
      'https://www.linkedin.com/company/kahana-co',
      'https://twitter.com/kahanaHQ',
      SITE_URL,
      'https://app.kahana.io',
    ],
  };

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{siteTitle}</title>
      <meta name="title" content={siteTitle} />
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Kahana" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {image === DEFAULT_OG_IMAGE && (
        <>
          <meta property="og:image:width" content={String(DEFAULT_OG_IMAGE_WIDTH)} />
          <meta property="og:image:height" content={String(DEFAULT_OG_IMAGE_HEIGHT)} />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL (omit when page provides its own to avoid duplicate) */}
      {!skipCanonical && <link rel="canonical" href={url} />}

      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema || defaultSchema),
        }}
      />
    </Head>
  );
};

export default SEO; 