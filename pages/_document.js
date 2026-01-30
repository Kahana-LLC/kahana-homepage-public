import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Resource Hints - DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://static.hotjar.com" />
        <link rel="dns-prefetch" href="https://client.crisp.chat" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="https://api.mixpanel.com" />
        <link rel="dns-prefetch" href="https://api-eu.mixpanel.com" />
        
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Geist-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        
        {/* Favicon - v3 cache-bust so Google fetches updated logo. Google recommends 48x48+ */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=3" sizes="any" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=3" sizes="48x48" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=3" sizes="180x180" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg?v=3" />
        
        {/* Note: Analytics and marketing scripts are now gated by consent and loaded in _app.js */}
        {/* Scripts will only load after user grants appropriate consent */}
      </Head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBXNXKQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
