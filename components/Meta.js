import Head from "next/head";
import { generateMetaTags } from "../utils/metaUtils";
import { useRouter } from "next/router";

export default function Meta({
  title,
  description,
  image,
  url,
  type = "website",
  siteName = "Kahana",
  twitterHandle = "@kahana",
  noindex = false,
  canonicalUrl = null,
  schema = null,
}) {
  const router = useRouter();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kahana.is";
  const fullTitle = title ? `${title} | Kahana` : "Kahana";
  const fullDescription =
    description || "Kahana - Enterprise Browser Solutions";
  const canonical = canonicalUrl
    ? `${siteUrl}${canonicalUrl}`
    : `${siteUrl}${router.asPath}`;

  const metaTags = generateMetaTags({
    title,
    description,
    image,
    url,
    type,
    siteName,
    twitterHandle,
    noindex,
    canonicalUrl,
  });

  // Add Open Graph and Twitter card meta tags
  const ogTags = [
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: fullDescription },
    { property: "og:type", content: type },
    { property: "og:site_name", content: siteName },
    { property: "og:url", content: canonical },
    { property: "og:image", content: image || `${siteUrl}/og-image.jpg` },
  ];

  const twitterTags = [
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: twitterHandle },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: fullDescription },
    { name: "twitter:image", content: image || `${siteUrl}/og-image.jpg` },
  ];

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      {metaTags.map((tag, index) => {
        if (tag.rel) {
          return <link key={index} rel={tag.rel} href={tag.href} />;
        }
        if (tag.property) {
          return (
            <meta key={index} property={tag.property} content={tag.content} />
          );
        }
        return <meta key={index} name={tag.name} content={tag.content} />;
      })}
      {ogTags.map((tag, index) => (
        <meta
          key={`og-${index}`}
          property={tag.property}
          content={tag.content}
        />
      ))}
      {twitterTags.map((tag, index) => (
        <meta key={`twitter-${index}`} name={tag.name} content={tag.content} />
      ))}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}
