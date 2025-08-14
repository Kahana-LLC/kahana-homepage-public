import {
  generatePartnerMetaTags,
  generateBreadcrumbSchema,
} from "../utils/metaUtils";
import Meta from "./Meta";

export default function PartnerMeta({ partner }) {
  const metaTags = generatePartnerMetaTags(partner);
  const schema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Partners", url: "/partners" },
    { name: partner.name, url: `/partners/${partner.slug}` },
  ]);

  return (
    <Meta
      title={partner.name}
      description={partner.description}
      image={partner.logo}
      url={`/partners/${partner.slug}`}
      type="website"
      twitterHandle="@kahana"
      schema={schema}
      metaTags={metaTags}
    />
  );
}
