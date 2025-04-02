import { generateDocMetaTags } from "../utils/metaUtils";
import { generateBreadcrumbSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function DocMeta({ doc }) {
  const metaTags = generateDocMetaTags(doc);

  // Generate breadcrumb schema for documentation
  const breadcrumbItems = [
    { name: "Documentation", url: "https://kahana.ai/docs" },
    { name: doc.title, url: `https://kahana.ai/docs/${doc.slug}` },
  ];
  const schema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <Meta
      title={`${doc.title} | Kahana Documentation`}
      description={
        doc.description ||
        "Learn how to use Kahana's products and features with our comprehensive documentation."
      }
      image={doc.featuredImage || "/images/docs-hero.jpg"}
      url={`https://kahana.ai/docs/${doc.slug}`}
      type="article"
      twitterHandle="@kahana"
      schema={schema}
    />
  );
}
