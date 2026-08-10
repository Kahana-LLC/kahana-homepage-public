import { generateJobPostingMetaTags } from "../utils/metaUtils";
import { generateBreadcrumbSchema } from "../utils/schemaUtils";
import Meta from "./Meta";

export default function JobPostingMeta({ job }) {
  const metaTags = generateJobPostingMetaTags(job);

  // Generate breadcrumb schema for job posting
  const breadcrumbItems = [
    { name: "Careers", url: "https://kahana.io/careers" },
    { name: job.title, url: `https://kahana.io/careers/${job.slug}` },
  ];
  const schema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <Meta
      title={`${job.title} | Careers at Kahana`}
      description={
        job.description ||
        `Join Kahana as a ${job.title}. ${
          job.location ? `Based in ${job.location}.` : ""
        } Help us build the future of enterprise security.`
      }
      image={job.featuredImage || "/images/careers-hero.jpg"}
      url={`https://kahana.io/careers/${job.slug}`}
      type="website"
      twitterHandle="@kahana"
      schema={schema}
    />
  );
}
