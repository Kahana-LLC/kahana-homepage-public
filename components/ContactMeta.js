import { generateContactMetaTags } from "../utils/metaUtils";
import { generateOrganizationSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function ContactMeta({ contact }) {
  const metaTags = generateContactMetaTags(contact);
  const schema = generateOrganizationSchema();

  return (
    <Meta
      title="Contact Kahana | Get in Touch"
      description={
        contact.description ||
        "Get in touch with Kahana's team. We're here to help with your enterprise browsing and security needs."
      }
      image={contact.featuredImage || "/images/contact-hero.jpg"}
      url="https://kahana.io/contact"
      type="website"
      twitterHandle="@kahana"
      schema={schema}
    />
  );
}
