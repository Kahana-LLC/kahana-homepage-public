import "../styles/globals.css";
import NavbarDup from "../components/NavbarDup";
import GlobalBanner from "../components/GlobalBanner";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { trackError } from "../utils/analytics";

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
  );
}

export default MyApp;
