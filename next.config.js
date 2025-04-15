/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // This will prevent ESLint errors from failing the build
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  images: {
    domains: [
      "images.unsplash.com", // Domain for Unsplash images
      "firebasestorage.googleapis.com", // Domain for Firebase Storage images
      "images.pexels.com", // Domain for Pexels images
    ],
    unoptimized: true, // Allow unoptimized local images
  },

  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname);
    return config;
  },

  // Handle XML sitemap
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
    ];
  },

  // Ensure docs pages are included in the build
  pageExtensions: ["jsx", "js", "tsx", "ts"],
  async generateStaticParams() {
    const fs = require("fs");
    const path = require("path");
    const docsDir = path.join(process.cwd(), "data/docs");
    const files = fs.readdirSync(docsDir);
    const docs = files
      .filter((file) => file.endsWith(".json"))
      .map((file) => ({
        params: {
          slug: file.replace(/\.json$/, ""),
        },
      }));
    return docs;
  },
};

module.exports = nextConfig;
