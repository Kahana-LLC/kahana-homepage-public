import "../styles/globals.css";
import NavbarDup from "../components/NavbarDup";
import GlobalBanner from "../components/GlobalBanner";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { trackError } from "../utils/analytics";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Track route changes
    const handleRouteChange = (url) => {
      // You can add additional tracking here if needed
    };

    // Track errors
    const handleError = (error) => {
      trackError("runtime_error", error.message, {
        url: window.location.href,
        stack: error.stack,
      });
    };

    // Track unhandled promise rejections
    const handleUnhandledRejection = (event) => {
      trackError(
        "unhandled_rejection",
        event.reason?.message || "Unknown error",
        {
          url: window.location.href,
        }
      );
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleUnhandledRejection);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      window.removeEventListener("error", handleError);
      window.removeEventListener(
        "unhandledrejection",
        handleUnhandledRejection
      );
    };
  }, [router.events]);

  return (
    <>
      {/* Load analytics scripts after page is interactive */}
      <Script
        id="gtag-js"
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQHFL9605P');
          `,
        }}
      />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),
              dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WBXNXKQ');
          `,
        }}
      />
      <Script
        id="hotjar-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2868036,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />
      <Script
        id="adsbygoogle-script"
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5821697528846539"
        crossOrigin="anonymous"
      />
      
      <div className="flex flex-col min-h-screen">
        <SEO
          url={`https://kahana.co${router.asPath}`}
          type={router.pathname === "/" ? "website" : "article"}
        />
        <div style={{ zIndex: "100" }} className="sticky top-0">
          <NavbarDup />
          <GlobalBanner />
        </div>
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
