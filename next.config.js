/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // This will prevent ESLint errors from failing the build
  },
  swcMinify: true,

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
};

module.exports = nextConfig;
