/** @type {import('next').NextConfig} */
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
    ],
  },
};

module.exports = nextConfig;
