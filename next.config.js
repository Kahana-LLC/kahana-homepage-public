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
      "kahana.co",
    ],
    unoptimized: true, // Allow unoptimized local images
  },

  // Suppress build logs
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },

  // Reduce build output verbosity
  webpack: (config, { dev, isServer }) => {
    config.resolve.alias["@"] = path.join(__dirname);

    // Add this to help with HMR
    if (dev && !isServer) {
      config.watchOptions = {
        poll: false,
        aggregateTimeout: 300,
        ignored: /node_modules/,
      };
    }

    // Suppress webpack logs
    config.stats = {
      ...config.stats,
      loggingDebug: false,
      logging: "none",
      modules: false,
      chunks: false,
      assets: false,
      children: false,
    };

    // Suppress font optimization warnings
    config.optimization = {
      ...config.optimization,
      minimize: true,
      minimizer: [
        ...(config.optimization.minimizer || []),
        {
          apply: (compiler) => {
            compiler.hooks.afterEmit.tap(
              "SuppressFontWarnings",
              (compilation) => {
                compilation.warnings = compilation.warnings.filter(
                  (warning) =>
                    !warning.message.includes("Failed to minify the stylesheet")
                );
              }
            );
          },
        },
      ],
    };

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

  // Add redirects
  async redirects() {
    return [
      {
        source: "/products/consumer-browser",
        destination: "/products/free-agentic-browser",
        permanent: true,
      },
    ];
  },

  // Ensure docs pages are included in the build
  pageExtensions: ["jsx", "js", "tsx", "ts"],

  // Suppress build output
  logging: {
    fetches: {
      fullUrl: false,
    },
  },

  // Disable font optimization
  optimizeFonts: false,
};

module.exports = nextConfig;
