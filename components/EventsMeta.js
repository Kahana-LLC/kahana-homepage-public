import {
  generateEventsMetaTags,
  generateOrganizationSchema,
} from "../utils/metaUtils";
import Meta from "./Meta";

export default function EventsMeta({ events }) {
  const metaTags = generateEventsMetaTags(events);
  const schema = generateOrganizationSchema();

  return (
    <Meta
      title={events.title}
      description={events.description}
      image={events.featuredImage}
      url="/events"
      type="website"
      twitterHandle="@kahana"
      schema={schema}
      metaTags={metaTags}
    />
  );
}
