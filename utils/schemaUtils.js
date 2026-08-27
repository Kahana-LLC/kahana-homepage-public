const { SITE_URL: EXTERNAL_DATA_URL } = require("../config/site");

function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kahana",
    url: EXTERNAL_DATA_URL,
    logo: `${EXTERNAL_DATA_URL}/images/logo.png`,
    sameAs: [
      "https://twitter.com/kahanaHQ",
      "https://www.linkedin.com/company/kahana-llc",
      "https://app.kahana.io",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${EXTERNAL_DATA_URL}/contact`,
      areaServed: "Worldwide",
    },
  };
}

function generateProductSchema(product) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "USD",
    },
    description: product.description,
    url: `${EXTERNAL_DATA_URL}/products/${product.slug}`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      ratingCount: product.reviewCount,
    },
  };
}

function generateBlogPostSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.featuredImage,
    datePublished: post.publishedDate,
    dateModified: post.lastModifiedDate,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Kahana",
      logo: {
        "@type": "ImageObject",
        url: `${EXTERNAL_DATA_URL}/images/logo.png`,
      },
    },
    description: post.excerpt,
    url: `${EXTERNAL_DATA_URL}/blog/${post.slug}`,
  };
}

function generateBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@id": `${EXTERNAL_DATA_URL}${item.url}`,
        name: item.name,
      },
    })),
  };
}

function generateFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

module.exports = {
  generateOrganizationSchema,
  generateProductSchema,
  generateBlogPostSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
};
