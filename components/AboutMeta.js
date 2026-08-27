import { generateAboutMetaTags } from "../utils/metaUtils";
import { generateOrganizationSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function AboutMeta({ about }) {
  const metaTags = generateAboutMetaTags(about);
  const schema = generateOrganizationSchema();

  return (
    <Meta
      title="About Kahana | Digital library"
      description={
        about.description ||
        "Kahana is a digital library for ebooks, videos, and files in curated hubs. Learn about Kahana Group Inc. at kahana.io."
      }
      image={about.featuredImage || "/images/about-hero.jpg"}
      url="https://kahana.io/about"
      type="website"
      twitterHandle="@kahana"
      schema={schema}
    />
  );
}
