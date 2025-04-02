import {
  generateEventMetaTags,
  generateBreadcrumbSchema,
} from "../utils/metaUtils";
import Meta from "./Meta";

export default function EventMeta({ event }) {
  const metaTags = generateEventMetaTags(event);
  const schema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Events", url: "/events" },
    { name: event.title, url: `/events/${event.slug}` },
  ]);

  return (
    <Meta
      title={event.title}
      description={event.description}
      image={event.featuredImage}
      url={`/events/${event.slug}`}
      type="event"
      twitterHandle="@kahana"
      schema={schema}
      metaTags={metaTags}
    />
  );
}
