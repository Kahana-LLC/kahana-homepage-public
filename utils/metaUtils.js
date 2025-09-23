const EXTERNAL_DATA_URL = "https://kahana.co";

function generateMetaTags({
  title,
  description,
  image,
  url,
  type = "website",
  siteName = "Kahana",
  twitterHandle = "@kahana",
  noindex = false,
  canonicalUrl = null,
}) {
  const metaTags = [];

  // Basic meta tags
  metaTags.push(
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:site_name", content: siteName }
  );

  // Image meta tags
  if (image) {
    const fullImageUrl = image.startsWith("http")
      ? image
      : `${EXTERNAL_DATA_URL}${image}`;
    metaTags.push(
      { property: "og:image", content: fullImageUrl },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:image", content: fullImageUrl }
    );
  }

  // Twitter Card meta tags
  metaTags.push(
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: twitterHandle },
    { name: "twitter:creator", content: twitterHandle },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description }
  );

  // Canonical URL
  if (canonicalUrl) {
    metaTags.push({ rel: "canonical", href: canonicalUrl });
  }

  // Noindex tag if needed
  if (noindex) {
    metaTags.push({ name: "robots", content: "noindex,nofollow" });
  }

  return metaTags;
}

function generateBlogMetaTags(post) {
  return generateMetaTags({
    title: post.title,
    description: post.excerpt,
    image: post.featuredImage,
    url: `${EXTERNAL_DATA_URL}/blog/${post.slug}`,
    type: "article",
    twitterHandle: post.authorTwitter || "@kahana",
  });
}

function generateProductMetaTags(product) {
  return generateMetaTags({
    title: `${product.name} | Kahana`,
    description: product.description,
    image: product.featuredImage,
    url: `${EXTERNAL_DATA_URL}/products/${product.slug}`,
    type: "product",
    twitterHandle: "@kahana",
  });
}

function generatePageMetaTags(page) {
  return generateMetaTags({
    title: page.title,
    description: page.description,
    image: page.featuredImage,
    url: `${EXTERNAL_DATA_URL}${page.path}`,
    type: "website",
    twitterHandle: "@kahana",
  });
}


function generateDocMetaTags(doc) {
  return generateMetaTags({
    title: `${doc.title} | Kahana Documentation`,
    description:
      doc.description ||
      "Learn how to use Kahana's products and features with our comprehensive documentation.",
    image: doc.featuredImage || "/images/docs-hero.jpg",
    url: `${EXTERNAL_DATA_URL}/docs/${doc.slug}`,
    type: "article",
    twitterHandle: "@kahana",
  });
}

function generateLandingMetaTags(landing) {
  return generateMetaTags({
    title: landing.title,
    description: landing.description,
    image: landing.featuredImage,
    url: `${EXTERNAL_DATA_URL}${landing.path}`,
    type: "website",
    twitterHandle: "@kahana",
  });
}

function generateContactMetaTags(contact) {
  return generateMetaTags({
    title: "Contact Kahana | Get in Touch",
    description:
      contact.description ||
      "Get in touch with Kahana's team. We're here to help with your enterprise browsing and security needs.",
    image: contact.featuredImage || "/images/contact-hero.jpg",
    url: `${EXTERNAL_DATA_URL}/contact`,
    type: "website",
    twitterHandle: "@kahana",
  });
}

function generateAboutMetaTags(about) {
  return generateMetaTags({
    title: "About Kahana | Our Mission and Story",
    description:
      about.description ||
      "Learn about Kahana's mission to revolutionize enterprise browsing and security. Discover our story, values, and commitment to innovation.",
    image: about.featuredImage || "/images/about-hero.jpg",
    url: `${EXTERNAL_DATA_URL}/about`,
    type: "website",
    twitterHandle: "@kahana",
  });
}

function generateCareersMetaTags(careers) {
  return generateMetaTags({
    title: "Careers at Kahana | Join Our Team",
    description:
      careers.description ||
      "Join Kahana's team of innovators. We're looking for talented individuals to help us shape the future of enterprise security.",
    image: careers.featuredImage || "/images/careers-hero.jpg",
    url: `${EXTERNAL_DATA_URL}/careers`,
    type: "website",
    twitterHandle: "@kahana",
  });
}

function generateJobPostingMetaTags(job) {
  return generateMetaTags({
    title: `${job.title} | Careers at Kahana`,
    description:
      job.description ||
      `Join Kahana as a ${job.title}. ${
        job.location ? `Based in ${job.location}.` : ""
      } Help us build the future of enterprise security.`,
    image: job.featuredImage || "/images/careers-hero.jpg",
    url: `${EXTERNAL_DATA_URL}/careers/${job.slug}`,
    type: "website",
    twitterHandle: "@kahana",
  });
}

function generatePressMetaTags(press) {
  return generateMetaTags({
    title: "Press & Media | Kahana",
    description:
      press.description ||
      "Stay up to date with Kahana's latest news, press releases, and media coverage. Learn about our innovations in enterprise security.",
    image: press.featuredImage || "/images/press-hero.jpg",
    url: `${EXTERNAL_DATA_URL}/press`,
    type: "website",
    twitterHandle: "@kahana",
  });
}

function generatePressReleaseMetaTags(release) {
  return generateMetaTags({
    title: `${release.title} | Kahana Press`,
    description: release.excerpt || release.title,
    image: release.featuredImage || "/images/press-hero.jpg",
    url: `${EXTERNAL_DATA_URL}/press/${release.slug}`,
    type: "article",
    twitterHandle: "@kahana",
  });
}

function generateEventsMetaTags(events) {
  return generateMetaTags({
    title: "Events & Webinars | Kahana",
    description:
      events.description ||
      "Join Kahana at upcoming events and webinars. Learn about our latest innovations and network with industry leaders.",
    image: events.featuredImage || "/images/events-hero.jpg",
    url: `${EXTERNAL_DATA_URL}/events`,
    type: "website",
    twitterHandle: "@kahana",
  });
}

function generateEventMetaTags(event) {
  return generateMetaTags({
    title: `${event.title} | Kahana Events`,
    description:
      event.description ||
      `Join us for ${event.title}. ${
        event.date ? `Happening on ${event.date}.` : ""
      } Learn about enterprise security and innovation.`,
    image: event.featuredImage || "/images/events-hero.jpg",
    url: `${EXTERNAL_DATA_URL}/events/${event.slug}`,
    type: "event",
    twitterHandle: "@kahana",
  });
}


module.exports = {
  generateMetaTags,
  generateBlogMetaTags,
  generateProductMetaTags,
  generatePageMetaTags,
  generateDocMetaTags,
  generateLandingMetaTags,
  generateContactMetaTags,
  generateAboutMetaTags,
  generateCareersMetaTags,
  generateJobPostingMetaTags,
  generatePressMetaTags,
  generatePressReleaseMetaTags,
  generateEventsMetaTags,
  generateEventMetaTags,
};
