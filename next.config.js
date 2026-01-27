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
      "res.cloudinary.com", // Domain for Cloudinary CDN images
      "www.thedailystar.net", // Domain for The Daily Star images
      "media.licdn.com", // Domain for LinkedIn images
      "s.alicdn.com", // Domain for Alibaba Cloud images
    ],
    unoptimized: true, // Allow unoptimized local images (Cloudinary handles optimization)
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

  // Handle XML sitemap + PostHog reverse proxy (heatmaps, ad-blocker bypass)
  async rewrites() {
    return [
      {
        source: "/sitemap.xml",
        destination: "/api/sitemap",
      },
      // PostHog reverse proxy - static assets must come first
      {
        source: "/ph/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ph/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
    ];
  },

  // Required for PostHog proxy: API uses trailing slashes (e.g. /e/)
  skipTrailingSlashRedirect: true,

  // Configure headers for specific routes
  async headers() {
    return [
      {
        source: "/oauth-callback",
        headers: [
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Pragma",
            value: "no-cache",
          },
          {
            key: "Expires",
            value: "0",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
      // Cache static images for 1 year (immutable)
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/figma-imports/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
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
