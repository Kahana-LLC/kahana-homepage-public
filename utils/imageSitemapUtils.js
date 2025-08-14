const fs = require("fs");
const path = require("path");
const { getAllPages } = require("./sitemapUtils");

const IMAGE_EXTENSIONS = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
const EXCLUDED_DIRS = ["node_modules", ".next", ".git"];

function findImagesInDirectory(dir) {
  const images = [];

  function scanDirectory(currentDir) {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // Skip excluded directories
        if (!EXCLUDED_DIRS.includes(file)) {
          scanDirectory(filePath);
        }
      } else if (IMAGE_EXTENSIONS.includes(path.extname(file).toLowerCase())) {
        const relativePath = path.relative(process.cwd(), filePath);
        const url = `https://kahana.co/${relativePath.replace(/\\/g, "/")}`;

        // Get image dimensions
        const dimensions = getImageDimensions(filePath);

        images.push({
          url,
          ...dimensions,
          lastmod: new Date(stat.mtime).toISOString(),
        });
      }
    });
  }

  scanDirectory(dir);
  return images;
}

function getImageDimensions(filePath) {
  try {
    const sharp = require("sharp");
    const metadata = sharp(filePath).metadata();
    return {
      width: metadata.width,
      height: metadata.height,
    };
  } catch (error) {
    console.error(`Error getting dimensions for ${filePath}:`, error);
    return {};
  }
}

function generateImageSitemap(images) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
           xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
     ${images
       .map(
         (image) => `
     <url>
       <loc>${image.url}</loc>
       <image:image>
         <image:loc>${image.url}</image:loc>
         ${image.width ? `<image:width>${image.width}</image:width>` : ""}
         ${image.height ? `<image:height>${image.height}</image:height>` : ""}
         ${
           image.lastmod
             ? `<image:lastmod>${image.lastmod}</image:lastmod>`
             : ""
         }
       </image:image>
     </url>
     `
       )
       .join("")}
   </urlset>
 `;
}

module.exports = {
  findImagesInDirectory,
  generateImageSitemap,
};
