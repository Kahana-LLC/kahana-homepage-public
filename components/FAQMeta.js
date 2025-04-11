import { generateFAQMetaTags } from "../utils/metaUtils";
import { generateFAQSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function FAQMeta({ faq }) {
  const metaTags = generateFAQMetaTags(faq);
  const schema = generateFAQSchema(faq.questions || []);

  return (
    <Meta
      title={`${faq.title} | Kahana FAQ`}
      description={
        faq.description ||
        "Find answers to frequently asked questions about Kahana's products and services."
      }
      image={faq.featuredImage || "/images/faq-hero.jpg"}
      url="https://kahana.co/faq"
      type="website"
      twitterHandle="@kahana"
      schema={schema}
    />
  );
}
