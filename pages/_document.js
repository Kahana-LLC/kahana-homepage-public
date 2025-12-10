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
        
        {/* Preload critical fonts with highest priority for LCP optimization */}
        <link
          rel="preload"
          href="/fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/fonts/Geist-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        
        {/* Favicon */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/favicon.svg?v=2" />
        <link rel="shortcut icon" type="image/svg+xml" href="/favicon.svg?v=2" />
        
        {/* Google tag (gtag.js) - Defer to not block render */}
        <Script
          id="gtag-js"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive" // Ensure this runs after the script is loaded
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-KQHFL9605P');
            `,
          }}
        />

        {/* Note: Analytics scripts moved to _app.js to load after interactive and not block LCP */}
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
