import { generateAboutMetaTags } from "../utils/metaUtils";
import { generateOrganizationSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function AboutMeta({ about }) {
  const metaTags = generateAboutMetaTags(about);
  const schema = generateOrganizationSchema();

  return (
    <Meta
      title="About Kahana | Our Mission and Story"
      description={
        about.description ||
        "Learn about Kahana's mission to revolutionize enterprise browsing and security. Discover our story, values, and commitment to innovation."
      }
      image={about.featuredImage || "/images/about-hero.jpg"}
      url="https://kahana.ai/about"
      type="website"
      twitterHandle="@kahana"
      schema={schema}
    />
  );
}
