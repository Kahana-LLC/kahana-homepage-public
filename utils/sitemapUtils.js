const path = require("path");
const { promises: fs } = require("fs");
const { execSync } = require("child_process");
import { getAllDocs } from "./docsUtils";

const {
  SITE_URL: EXTERNAL_DATA_URL,
  absoluteCorporateUrl,
} = require("../config/site");

// Function to get last modified date from git
async function getLastModifiedDate(filePath) {
  try {
    const gitLog = execSync(`git log -1 --format=%cd --date=iso ${filePath}`)
      .toString()
      .trim();
    return new Date(gitLog).toISOString();
  } catch (error) {
    // If git command fails, use file system stats
    try {
      const stats = await fs.stat(filePath);
      return new Date(stats.mtime).toISOString();
    } catch (err) {
      // If all else fails, return current date
      return new Date().toISOString();
    }
  }
}

// Function to get all documentation pages for sitemap
async function getDocsForSitemap() {
  const docs = await getAllDocs();
  return docs.map((doc) => ({
    url: absoluteCorporateUrl(`/docs/${doc.slug}`),
    lastmod: doc.date || new Date().toISOString(),
    changefreq: "weekly",
    priority: "0.8",
    title: doc.title,
    category: doc.category,
  }));
}

// Function to get all blog posts
async function getAllBlogPosts() {
  const blogDir = path.join(process.cwd(), "data", "blog");
  const blogPosts = [];

  try {
    const files = await fs.readdir(blogDir);
    for (const file of files) {
      if (file.endsWith(".json")) {
        const filePath = path.join(blogDir, file);
        const content = JSON.parse(await fs.readFile(filePath, "utf8"));
        const slug = file.replace(".json", "");

        // Only include posts that have required fields
        if (content.date) {
          blogPosts.push({
            url: absoluteCorporateUrl(`/blog/${slug}`),
            lastmod: content.date,
            changefreq: "weekly",
            priority: "0.8",
            title: content.title,
            image: content.image,
          });
        }
      }
    }
  } catch (error) {
    console.error("Error reading blog posts:", error);
  }

  return blogPosts;
}

// Function to get all pages from the pages directory
async function getAllPages() {
  const pagesDir = path.join(process.cwd(), "pages");
  const pages = [];

  async function scanDirectory(dir) {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = await fs.stat(filePath);

      if (stat.isDirectory()) {
        await scanDirectory(filePath);
      } else if (file.endsWith(".js") || file.endsWith(".jsx")) {
        // Skip special Next.js files
        if (
          file.startsWith("_") ||
          file === "sitemap.xml.js" ||
          file === "sitemap.jsx"
        ) {
          continue;
        }

        const relativePath = path.relative(pagesDir, filePath);
        const route =
          "/" +
          relativePath
            .replace(/\.(js|jsx)$/, "")
            .replace(/\\/g, "/")
            .replace(/index$/, "");

        pages.push({
          url: absoluteCorporateUrl(route || '/'),
          lastmod: await getLastModifiedDate(filePath),
          changefreq: determineChangeFrequency(route),
          priority: determinePriority(route),
        });
      }
    }
  }

  await scanDirectory(pagesDir);
  return pages;
}

// Function to determine change frequency based on route
function determineChangeFrequency(route) {
  const patterns = {
    "/blog": "daily",
    "/products": "weekly",
    "/solutions": "weekly",
    "/docs": "weekly",
    "/about": "monthly",
    "/contact": "monthly",
    "/privacy-policy": "monthly",
    "/terms-and-conditions": "monthly",
  };

  for (const [pattern, freq] of Object.entries(patterns)) {
    if (route.startsWith(pattern)) {
      return freq;
    }
  }
  return "monthly";
}

// Function to determine priority based on route
function determinePriority(route) {
  const patterns = {
    "/": "1.0",
    "/products": "1.0",
    "/solutions": "1.0",
    "/schedule-demo": "1.0",
    "/blog": "0.9",
    "/docs": "0.9",
    "/about": "0.8",
    "/contact": "0.8",
    "/support": "0.8",
    "/privacy-policy": "0.5",
    "/terms-and-conditions": "0.5",
  };

  for (const [pattern, priority] of Object.entries(patterns)) {
    if (route.startsWith(pattern)) {
      return priority;
    }
  }
  return "0.7";
}

module.exports = {
  EXTERNAL_DATA_URL,
  getAllPages,
  getAllBlogPosts,
  getDocsForSitemap,
};
