import {
  generatePartnersMetaTags,
  generateOrganizationSchema,
} from "../utils/metaUtils";
import Meta from "./Meta";

export default function PartnersMeta({ partners }) {
  const metaTags = generatePartnersMetaTags(partners);
  const schema = generateOrganizationSchema();

  return (
    <Meta
      title={partners.title}
      description={partners.description}
      image={partners.featuredImage}
      url="/partners"
      type="website"
      twitterHandle="@kahana"
      schema={schema}
      metaTags={metaTags}
    />
  );
}
