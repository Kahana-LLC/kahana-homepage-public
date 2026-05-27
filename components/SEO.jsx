import Head from 'next/head';
import { getCloudinaryImageUrl } from '../utils/cloudinary-mapper';

const DEFAULT_ORG_LOGO = getCloudinaryImageUrl('/assets/kahana_logo_transparent.svg');

const SEO = ({
  title = 'Kahana - Enterprise Browser & Productivity Tools',
  description = 'Stay organized and focused with Kahana\'s Oasis Enterprise Browser. Features enterprise-grade security, organization tools, and collaboration features for enhanced productivity.',
  image = 'https://kahana.co/assets/oasis-browser-preview.png',
  url = 'https://kahana.co',
  type = 'website',
  schema = null,
  noindex = false,
  skipCanonical = false,
}) => {
  const siteTitle = title.includes('Kahana') ? title : `${title} | Kahana`;
  
  // Default schema for organization
  const defaultSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Kahana',
    url: 'https://kahana.co',
    logo: DEFAULT_ORG_LOGO,
    sameAs: [
      'https://www.linkedin.com/company/kahana-co',
      'https://twitter.com/kahanaHQ',
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
      <meta property="og:url" content={url} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={siteTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

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