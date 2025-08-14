import {
  generatePressReleaseMetaTags,
  generateBreadcrumbSchema,
} from "../utils/metaUtils";
import Meta from "./Meta";

export default function PressReleaseMeta({ release }) {
  const metaTags = generatePressReleaseMetaTags(release);
  const schema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Press", url: "/press" },
    { name: release.title, url: `/press/${release.slug}` },
  ]);

  return (
    <Meta
      title={release.title}
      description={release.excerpt}
      image={release.featuredImage}
      url={`/press/${release.slug}`}
      type="article"
      twitterHandle="@kahana"
      schema={schema}
      metaTags={metaTags}
    />
  );
}
