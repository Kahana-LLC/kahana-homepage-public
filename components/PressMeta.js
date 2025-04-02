import {
  generatePressMetaTags,
  generateOrganizationSchema,
} from "../utils/metaUtils";
import Meta from "./Meta";

export default function PressMeta({ press }) {
  const metaTags = generatePressMetaTags(press);
  const schema = generateOrganizationSchema();

  return (
    <Meta
      title={press.title}
      description={press.description}
      image={press.featuredImage}
      url="/press"
      type="website"
      twitterHandle="@kahana"
      schema={schema}
      metaTags={metaTags}
    />
  );
}
