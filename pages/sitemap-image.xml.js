const {
  findImagesInDirectory,
  generateImageSitemap,
} = require("../utils/imageSitemapUtils");
const { getCachedSitemap, setCachedSitemap } = require("../utils/cacheUtils");

function ImageSitemap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  try {
    // Try to get cached sitemap first
    const cachedSitemap = getCachedSitemap("image-sitemap.xml");
    if (cachedSitemap) {
      res.setHeader("Content-Type", "text/xml");
      res.write(cachedSitemap);
      res.end();
      return { props: {} };
    }

    // If no cache, generate new sitemap
    const images = findImagesInDirectory(process.cwd());
    const sitemap = generateImageSitemap(images);

    // Cache the generated sitemap
    setCachedSitemap(sitemap, "image-sitemap.xml");

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return {
      props: {},
    };
  } catch (error) {
    console.error("Error generating image sitemap:", error);
    res.statusCode = 500;
    res.write("Error generating image sitemap");
    res.end();
    return {
      props: {},
    };
  }
}

export default ImageSitemap;
