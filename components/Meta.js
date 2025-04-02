import Head from "next/head";
import { generateMetaTags } from "../utils/metaUtils";

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

  return (
    <Head>
      <title>{title}</title>
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
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  );
}
