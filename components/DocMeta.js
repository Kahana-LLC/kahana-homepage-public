import { generateDocMetaTags } from "../utils/metaUtils";
import { generateBreadcrumbSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function DocMeta({ doc }) {
  const metaTags = generateDocMetaTags(doc);

  const breadcrumbItems = [
    { name: "Help", url: "https://help.kahana.io/help" },
    { name: doc.title, url: `https://help.kahana.io/help/${doc.slug}` },
  ];
  const schema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <Meta
      title={`${doc.title} | Aura Library Help`}
      description={
        doc.description ||
        "Learn how to use Aura Library's products and features."
      }
      image={doc.featuredImage || "/images/docs-hero.jpg"}
      url={`https://help.kahana.io/help/${doc.slug}`}
      type="article"
      twitterHandle="@kahana"
      schema={schema}
    />
  );
}
