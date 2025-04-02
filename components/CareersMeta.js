import { generateCareersMetaTags } from "../utils/metaUtils";
import { generateOrganizationSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function CareersMeta({ careers }) {
  const metaTags = generateCareersMetaTags(careers);
  const schema = generateOrganizationSchema();

  return (
    <Meta
      title="Careers at Kahana | Join Our Team"
      description={
        careers.description ||
        "Join Kahana's team of innovators. We're looking for talented individuals to help us shape the future of enterprise security."
      }
      image={careers.featuredImage || "/images/careers-hero.jpg"}
      url="https://kahana.ai/careers"
      type="website"
      twitterHandle="@kahana"
      schema={schema}
    />
  );
}
