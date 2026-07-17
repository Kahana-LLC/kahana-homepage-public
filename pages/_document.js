import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Resource Hints - DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://api.mixpanel.com" />
        <link rel="dns-prefetch" href="https://api-eu.mixpanel.com" />
        {/* LCP hero images — establish connection early (see homepage preload in pages/index.js) */}
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        
        {/* Fonts: loaded via next/font in _app.js (lib/fonts.js) */}
        
        {/* Favicon - v4 cache-bust so browsers/Apple refetch. Google recommends 48x48+ */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=8" sizes="any" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=8" sizes="48x48" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=8" sizes="180x180" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg?v=8" />
        
        {/* Note: Analytics and marketing scripts are now gated by consent and loaded in _app.js */}
        {/* Scripts will only load after user grants appropriate consent */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
