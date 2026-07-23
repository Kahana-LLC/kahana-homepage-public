/** @type {import('next').NextConfig} */
const path = require("path");
const {
  blogRedirects: archivedBlogRedirects,
  docsRedirects: archivedDocsRedirects,
} = require("./config/archivedContentRedirects");
const {
  pageRedirects: archivedOasisPageRedirects,
} = require("./config/archivedOasisPageRedirects");

/**
 * Only load @next/bundle-analyzer when ANALYZE=true.
 * It is a devDependency; Heroku prunes devDependencies after build, so an
 * unconditional require() breaks `next start` in production.
 */
function withBundleAnalyzer(config) {
  if (process.env.ANALYZE === "true") {
    return require("@next/bundle-analyzer")({ enabled: true })(config);
  }
  return config;
}

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: {
    // Tree-shake barrel imports (smaller client bundles; helps LCP/FCP parse cost)
    optimizePackageImports: [
      "@heroicons/react",
      "@tabler/icons-react",
      "framer-motion",
      "react-icons",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // This will prevent ESLint errors from failing the build
  },
  swcMinify: true,
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  images: {
    domains: [
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
      "images.pexels.com",
      "kahana.io",
      "res.cloudinary.com",
      "www.thedailystar.net",
      "media.licdn.com",
      "s.alicdn.com",
      // Blog featured images (external hosts)
      "www.vdocipher.com",
      "discover.strongdm.com",
      "browserstack.wpenginepowered.com",
      "cyberguy.com",
      "encrypted-tbn0.gstatic.com",
      "www.eccouncil.org",
      "foyercus.blob.core.windows.net",
      "surfshark.com",
      "www.qualtrics.com",
      "www.zdnet.com",
      "www.totalassure.com",
      "cdn.prod.website-files.com",
      "depenning.com",
      "www.leanix.net",
      "substack-post-media.s3.amazonaws.com",
      "substackcdn.com",
      "www.eginnovations.com",
      "i.ytimg.com",
      "www.browserstack.com",
      "www.paloaltonetworks.com",
      "images.fastcompany.com",
      "static.endpointprotector.com",
      "layerxsecurity.com",
      "patchmypc.com",
      "www.watchguard.com",
      "etimg.etb2bimg.com",
      "www.lifewire.com",
      "salesforcedevops.net",
      "www.searchengineinsight.com",
      "dropinblog.net",
      "cdn.mos.cms.futurecdn.net",
      "preview.redd.it",
      "redaccess.io",
      "docs.netskope.com",
      "s.yimg.com",
      "media.zenfs.com",
      "content.nordlayer.com",
      "www.slideteam.net",
      "blog.admindroid.com",
      "www.in-com.com",
      "image-optimizer.cyberriskalliance.com",
      "files.cyberriskalliance.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kahana.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ph-files.imgix.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.mm.bing.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "opengraph.githubassets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.cio.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "beehiiv-images-production.s3.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "byteiota.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.pseo.one",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.ssltrust.com.au",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cradlepoint.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pcmag.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "itdigest.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "research.aimultiple.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sp-ao.shortpixel.ai",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.digit.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static0.anpoimages.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "talmatic.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "techlasi.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "thedigitalcauldron.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "vegavid.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www-static-blogs.operacdn.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.blockchain-council.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.hakia.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.macorva.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.magiclasso.co",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.pcworld.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.quytech.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.surf.security",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.tenforums.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.themeasure.net",
        pathname: "/**",
      },
    ],
    // Keep optimization enabled so <Image /> can serve right-sized variants.
    unoptimized: false,
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

  // Configure headers for specific routes
  async headers() {
    const isProd = process.env.NODE_ENV === "production";

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
      {
        source: "/fonts/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Webpack HMR manifests must never be cached (dev); rule kept in prod too (harmless).
      {
        source: "/_next/static/webpack/:path*.hot-update.:ext*",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store",
          },
        ],
      },
      // Production: long-cache hashed build assets. Development: no-store so webpack runtime
      // (e.g. chunks/webpack.js) is not served from cache with a stale hot-update hash (404 loop).
      ...(isProd
        ? [
            {
              source: "/_next/static/:path*",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
          ]
        : [
            {
              source: "/_next/static/:path*",
              headers: [
                {
                  key: "Cache-Control",
                  value: "no-store",
                },
              ],
            },
          ]),
    ];
  },

  // Add redirects
  async redirects() {
    return [
      {
        source: "/wall-of-love",
        destination: "/testimonials",
        permanent: true,
      },
      {
        source: "/products/consumer-browser",
        destination: "/oasis-pricing",
        permanent: true,
      },
      {
        source: "/products/free-agentic-browser",
        destination: "/oasis-pricing",
        permanent: true,
      },
      {
        source: "/products/enterprise-browser",
        destination: "/oasis-pricing",
        permanent: true,
      },
      // Oasis marketing pages archived (pricing + installations kept live)
      ...archivedOasisPageRedirects,
      // Oasis-era blog/docs archived → indexes (specific /docs/:slug before catch-all)
      ...archivedBlogRedirects,
      ...archivedDocsRedirects,
      // Docs surface renamed to Help
      {
        source: '/docs',
        destination: '/help',
        permanent: true,
      },
      {
        source: '/docs/:path*',
        destination: '/help/:path*',
        permanent: true,
      },
      {
        source: '/content-rights',
        destination: '/help/content-rights',
        permanent: true,
      },
      // Features retired → Help topic articles
      {
        source: '/features/explore',
        destination: '/help/explore',
        permanent: true,
      },
      {
        source: '/features/hubs',
        destination: '/help/hubs',
        permanent: true,
      },
      {
        source: '/features/profiles',
        destination: '/help/profiles',
        permanent: true,
      },
      {
        source: '/features/aura',
        destination: '/help/how-aura-works',
        permanent: true,
      },
      {
        source: '/features/earning',
        destination: '/help/earning',
        permanent: true,
      },
      {
        source: '/features/trust',
        destination: '/help/trust',
        permanent: true,
      },
      {
        source: '/features',
        destination: '/help',
        permanent: true,
      },
      {
        source: '/features/:path*',
        destination: '/help',
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

  optimizeFonts: true,
};

module.exports = withBundleAnalyzer(nextConfig);
