import {
  getAllPages,
  getAllBlogPosts,
  getDocsForSitemap,
} from "../utils/sitemapUtils";

const EXTERNAL_DATA_URL = "https://kahana.co";

// Define priority levels for different types of pages with a more logical hierarchy
const PRIORITIES = {
  home: "1.0", // Homepage
  primary: "0.9", // About, Products, Solutions, Enterprise Browser
  secondary: "0.8", // Docs, Blog index, Resources
  tertiary: "0.7", // Individual blog posts, case studies
  support: "0.6", // FAQ, Contact, Support
  utility: "0.5", // Privacy, Terms, etc.
};

// Define change frequencies based on content type and update frequency
const CHANGEFREQ = {
  realtime: "always", // Dynamic content that changes very frequently
  daily: "daily", // Homepage, main product pages
  weekly: "weekly", // Blog posts, docs
  monthly: "monthly", // About, general pages
  quarterly: "monthly", // Legal, terms
};

function getPriority(url) {
  // Remove domain for matching
  const path = url.replace(EXTERNAL_DATA_URL, "");

  // Homepage
  if (path === "" || path === "/") return PRIORITIES.home;

  // Primary pages
  if (
    ["/about", "/products", "/solutions", "/enterprise-browser"].some(
      (p) => path === p
    )
  ) {
    return PRIORITIES.primary;
  }

  // Secondary pages
  if (path === "/blog" || path === "/docs" || path === "/resources") {
    return PRIORITIES.secondary;
  }

  // Support pages
  if (["/faq", "/contact", "/support"].some((p) => path === p)) {
    return PRIORITIES.support;
  }

  // Utility pages
  if (["/privacy-policy", "/terms", "/sitemap.xml"].some((p) => path === p)) {
    return PRIORITIES.utility;
  }

  // Blog posts and documentation pages
  if (path.startsWith("/blog/") || path.startsWith("/docs/")) {
    return PRIORITIES.tertiary;
  }

  return PRIORITIES.tertiary; // Default priority
}

function getChangefreq(url) {
  // Remove domain for matching
  const path = url.replace(EXTERNAL_DATA_URL, "");

  // Homepage and dynamic content
  if (path === "" || path === "/") return CHANGEFREQ.daily;

  // Frequently updated sections
  if (path.startsWith("/blog/") || path === "/blog") return CHANGEFREQ.weekly;

  // Documentation
  if (path.startsWith("/docs/") || path === "/docs") return CHANGEFREQ.weekly;

  // Product and solution pages
  if (path.startsWith("/products/") || path.startsWith("/solutions/")) {
    return CHANGEFREQ.monthly;
  }

  // Legal and utility pages
  if (["/privacy-policy", "/terms", "/sitemap.xml"].some((p) => path === p)) {
    return CHANGEFREQ.quarterly;
  }

  return CHANGEFREQ.monthly; // Default frequency
}

function parseUrl(url) {
  // If the URL is a string with space-separated values
  if (typeof url === "string" && url.includes(" ")) {
    const [urlPath] = url.split(" ");
    return { url: urlPath };
  }
  return url;
}

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .sort((a, b) => {
    // Sort by priority (higher priority first)
    const prioA = getPriority(a.url);
    const prioB = getPriority(b.url);
    if (prioA !== prioB) {
      return parseFloat(prioB) - parseFloat(prioA);
    }
    // Secondary sort by URL length (shorter URLs first)
    return a.url.length - b.url.length;
  })
  .map((page) => {
    const url = page.url.trim();
    const priority = getPriority(url);
    const changefreq = getChangefreq(url);

    return `<url>
    <loc>${url}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}
</url>`;
  })
  .join("\n")}
</urlset>`;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
  return null;
}

export async function getServerSideProps({ res }) {
  try {
    // Get all pages, blog posts, and documentation
    const [pages, blogPosts, docs] = await Promise.all([
      getAllPages(),
      getAllBlogPosts(),
      getDocsForSitemap(),
    ]);

    // Combine all URLs
    const allUrls = [...pages, ...blogPosts, ...docs];

    // Filter out unwanted pages and normalize URLs
    const filteredPages = allUrls
      .filter((page) => {
        const url = typeof page === "string" ? page.split(" ")[0] : page.url;
        return (
          !url.includes("/404") &&
          !url.includes("/api/") &&
          !url.includes("[slug]") &&
          !url.includes("undefined") &&
          !url.includes("template") // Exclude any template files
        );
      })
      .map((page) => {
        const url = typeof page === "string" ? page.split(" ")[0] : page.url;
        // Ensure URL starts with the correct domain
        if (!url.startsWith(EXTERNAL_DATA_URL)) {
          return {
            url: `${EXTERNAL_DATA_URL}${url.startsWith("/") ? "" : "/"}${url}`,
          };
        }
        return { url };
      });

    // Log all URLs for debugging
    console.log(
      "All URLs in sitemap:",
      filteredPages.map((p) => p.url)
    );

    // Generate sitemap XML
    const sitemap = generateSiteMap(filteredPages);

    res.setHeader("Content-Type", "application/xml");
    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.statusCode = 500;
    res.write("Error generating sitemap");
    res.end();

    return {
      props: {},
    };
  }
}

export default SiteMap;
