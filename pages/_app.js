import "../styles/globals.css";
import NavbarDup from "../components/NavbarDup";
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
      <div style={{ zIndex: "100" }} className="sticky top-0">
        <NavbarDup />
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
