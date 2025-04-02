const { getAllPages } = require("../utils/sitemapUtils");
const { getCachedSitemap, setCachedSitemap } = require("../utils/cacheUtils");

function generateSiteMap(pages) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${pages
       .map(
         (page) => `
     <url>
       <loc>${page.url}</loc>
       ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ""}
       ${page.changefreq ? `<changefreq>${page.changefreq}</changefreq>` : ""}
       ${page.priority ? `<priority>${page.priority}</priority>` : ""}
     </url>
     `
       )
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  try {
    // Try to get cached sitemap first
    const cachedSitemap = getCachedSitemap();
    if (cachedSitemap) {
      res.setHeader("Content-Type", "text/xml");
      res.write(cachedSitemap);
      res.end();
      return { props: {} };
    }

    // If no cache, generate new sitemap
    const pages = getAllPages();
    const sitemap = generateSiteMap(pages);

    // Cache the generated sitemap
    setCachedSitemap(sitemap);

    res.setHeader("Content-Type", "text/xml");
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
