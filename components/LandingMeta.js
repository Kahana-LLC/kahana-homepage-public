import { generateLandingMetaTags } from "../utils/metaUtils";
import { generateOrganizationSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function LandingMeta({ landing }) {
  const metaTags = generateLandingMetaTags(landing);
  const schema = generateOrganizationSchema();

  return (
    <Meta
      title={landing.title}
      description={landing.description}
      image={landing.featuredImage}
      url={`https://kahana.io${landing.path}`}
      type="website"
      twitterHandle="@kahana"
      schema={schema}
      noindex={landing.noindex}
      canonicalUrl={landing.canonicalUrl}
    />
  );
}
