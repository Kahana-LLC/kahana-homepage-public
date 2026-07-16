import "../styles/globals.css";
import { fontGeist, fontBricolage } from "../lib/fonts";
import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalBanner from "../components/GlobalBanner";
import {
  isProductHuntGlobalBannerRoute,
  isProductHuntCelebrationActive,
  SHOW_PRODUCT_HUNT_CELEBRATION,
} from "../data/product-hunt-launch";

/** Product Hunt #4 celebration banner on homepage, blog, products, and features. Set SHOW_PRODUCT_HUNT_CELEBRATION false in product-hunt-launch.js to disable. */
const SHOW_PRODUCT_HUNT_BANNER = SHOW_PRODUCT_HUNT_CELEBRATION;
import SEO from "../components/SEO";
import { absoluteCorporateUrl } from "../config/site";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { trackError } from "../utils/analytics";
import {
  getGaMeasurementId,
  buildGtagConfigSnippet,
  trackGaPageView,
} from "../utils/googleAnalytics";
import { ConsentProvider, useConsent } from "../contexts/ConsentContext";
import ConsentBanner from "../components/ConsentBanner";
import ConsentErrorBoundary from "../components/ConsentErrorBoundary";

import Footer from "../components/Footer";

/** Code-split nav + modal; footer stays in the main graph to avoid late paint CLS on the wordmark block. */
const NavbarDup = dynamic(() => import("../components/NavbarDup"), { ssr: true });
const CookiePreferencesModal = dynamic(() => import("../components/CookiePreferencesModal"), { ssr: false });
import { loadScriptIfConsented, loadInlineScriptIfConsented } from "../utils/scriptLoader";
import { trackMixpanelPageView } from "../utils/mixpanel";
import { ensureMixpanelFromNpm } from "../utils/mixpanelNpmInit";
import { logger } from "../utils/logger";

function scheduleIdle(fn, timeout = 3000) {
  if (typeof window === "undefined") return () => {};
  if (typeof window.requestIdleCallback === "function") {
    const id = window.requestIdleCallback(fn, { timeout });
    return () => window.cancelIdleCallback?.(id);
  }
  const timer = window.setTimeout(fn, Math.min(timeout, 1200));
  return () => window.clearTimeout(timer);
}

// Inner component that uses consent
function AppContent({ Component, pageProps }) {
  const router = useRouter();
  const { consent, hasConsent, isLoading } = useConsent();

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (process.env.NODE_ENV !== "development") return;

    // debugMixpanel() – run in console to diagnose. debugMixpanel.sendTest() to fire a test event.
    window.debugMixpanel = function () {
      const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
      const apiHost = process.env.NEXT_PUBLIC_MIXPANEL_API_HOST
        || (process.env.NEXT_PUBLIC_MIXPANEL_EU === 'true' ? 'https://api-eu.mixpanel.com' : 'https://api.mixpanel.com');
      let consentStored = null;
      try {
        const raw = localStorage.getItem('kahana_consent_preferences');
        if (raw) consentStored = JSON.parse(raw);
      } catch (e) {
        consentStored = { _error: String(e) };
      }
      const analyticsConsent = consentStored?.analytics === true;
      const scriptEl = document.querySelector('script[src*="mixpanel"]'); // CDN only; we use npm now
      let configToken = null;
      let configOptOut = null;
      if (window.mixpanel) {
        try {
          if (typeof window.mixpanel.get_config === 'function') {
            const c = window.mixpanel.get_config();
            configToken = c?.token;
            configOptOut = c?.opt_out_tracking_by_default;
          } else if (window.mixpanel.config) {
            configToken = window.mixpanel.config.token;
            configOptOut = window.mixpanel.config.opt_out_tracking_by_default;
          }
        } catch (_) {}
      }
      const isLocalhost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
      const tokenMatch = token && configToken ? token === configToken : null;

      console.log('%c=== Mixpanel Debug ===', 'font-weight:bold; font-size:1.1em');
      console.log('Host:', window.location.host, '| Localhost:', isLocalhost);
      console.log('Token (env):', token ? `***${token.slice(-4)}` : 'NOT SET');
      console.log('Token (Mixpanel):', configToken ? `***${configToken.slice(-4)}` : (window.mixpanel ? 'undefined' : 'N/A'));
      console.log('Token match:', tokenMatch === true ? 'YES' : tokenMatch === false ? 'NO' : 'N/A');
      console.log('api_host:', apiHost);
      console.log('Analytics consent:', analyticsConsent, '| localStorage:', consentStored);
      console.log('Source:', scriptEl ? 'CDN' : 'npm (mixpanel-browser)');
      console.log('window.mixpanel:', !!window.mixpanel, '| .track:', !!(window.mixpanel && typeof window.mixpanel.track === 'function'));
      if (configOptOut != null) console.log('opt_out_tracking_by_default:', configOptOut);
      console.log('NODE_ENV:', process.env.NODE_ENV);

      if (!token) {
        console.log('%c→ Fix: Add NEXT_PUBLIC_MIXPANEL_TOKEN to .env.local and restart `npm run dev`', 'color:orange');
      }
      if (!window.mixpanel && token) {
        console.log('%c→ Mixpanel not loaded. We use npm (mixpanel-browser); check init errors above.', 'color:orange');
      }
      if (window.mixpanel && typeof window.mixpanel.track === 'function') {
        console.log('%c→ Run debugMixpanel.sendTest() to send a test event', 'color:green');
        console.log('  Then: Mixpanel dashboard → Events / Live View (can take 1–2 min). Network tab → filter "mixpanel" to see POSTs.');
      }
      console.log('========================');
    };

    window.debugMixpanel.sendTest = function () {
      if (!window.mixpanel || typeof window.mixpanel.track !== 'function') {
        console.warn('[Mixpanel] No window.mixpanel.track. Run debugMixpanel() first.');
        return;
      }
      try {
        window.mixpanel.track('Debug Test Event', {
          source: 'debugMixpanel.sendTest',
          url: window.location.href,
          ts: new Date().toISOString(),
        });
        console.log('[Mixpanel] Sent "Debug Test Event". Check Mixpanel → Events / Live View (may take 1–2 min).');
      } catch (e) {
        console.error('[Mixpanel] sendTest error:', e);
      }
    };

    const isLocalhost = typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname);
    const mixpanelOk = (hasConsent('analytics') || isLocalhost) && process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;

    // Track initial page view (localhost: always for Mixpanel; GA needs analytics consent)
    if (mixpanelOk) {
      trackMixpanelPageView(router.asPath, document.title);
    }
    if (hasConsent('analytics')) {
      trackGaPageView(router.asPath, document.title);
    }

    // Track route changes
    const handleRouteChange = (url) => {
      if (mixpanelOk) {
        trackMixpanelPageView(url, document.title);
      }
      if (hasConsent('analytics')) {
        trackGaPageView(url, document.title);
      }
    };

    // Track errors
    const handleError = (error) => {
      // Only track if analytics consent is granted
      if (hasConsent('analytics')) {
      trackError("runtime_error", error.message, {
        url: window.location.href,
        stack: error.stack,
      });
      }
    };

    // Track unhandled promise rejections
    const handleUnhandledRejection = (event) => {
      // Only track if analytics consent is granted
      if (hasConsent('analytics')) {
      trackError(
        "unhandled_rejection",
        event.reason?.message || "Unknown error",
        {
          url: window.location.href,
        }
      );
      }
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
  }, [router.asPath, router.events, hasConsent, consent?.analytics]);

  useEffect(() => {
    const onRouteChangeError = (err, url) => {
      if (process.env.NODE_ENV === 'development') {
        console.error('[routeChangeError]', url, err);
      }
    };
    router.events.on('routeChangeError', onRouteChangeError);
    return () => router.events.off('routeChangeError', onRouteChangeError);
  }, [router.events]);

  // Load Mixpanel on localhost immediately (no consent wait)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const host = window.location.hostname;
    if (!['localhost', '127.0.0.1'].includes(host)) return;
    const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    if (!token) {
      console.warn('[Mixpanel] Localhost: NEXT_PUBLIC_MIXPANEL_TOKEN missing in .env.local');
      return;
    }
    const apiHost = process.env.NEXT_PUBLIC_MIXPANEL_API_HOST
      || (process.env.NEXT_PUBLIC_MIXPANEL_EU === 'true' ? 'https://api-eu.mixpanel.com' : 'https://api.mixpanel.com');
    console.log('[Mixpanel] Localhost: init via npm (no CDN)…');
    ensureMixpanelFromNpm(token, { debug: true, apiHost }).then((mp) => {
      if (mp) console.log('[Mixpanel] Localhost: initialized, Page View tracked');
    });
  }, []);

  const analyticsConsent = consent?.analytics === true;

  // Load scripts based on consent
  useEffect(() => {
    if (isLoading || !consent) return;

    const isLocalhost = typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname);
    const cancelIdleTasks = [];

    // GA4 via gtag (canonical). GTM only if NEXT_PUBLIC_GTM_ID is set — never also put GA4 Config in GTM.
    if (analyticsConsent) {
      const measurementId = getGaMeasurementId();
      cancelIdleTasks.push(scheduleIdle(() => {
        if (typeof document !== "undefined" && document.getElementById("gtag-js-app")) {
          return;
        }
        if (measurementId) {
          loadScriptIfConsented(
            'gtag-js-app',
            `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
            'analytics',
            { async: true },
            hasConsent
          );

          loadInlineScriptIfConsented(
            'gtag-init-app',
            buildGtagConfigSnippet(measurementId),
            'analytics',
            {},
            hasConsent
          );

          trackGaPageView(router.asPath, typeof document !== 'undefined' ? document.title : undefined);
        }

      }, 4000));
    }

    // Mixpanel via npm – analytics consent OR localhost (no CDN)
    const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    if ((analyticsConsent || isLocalhost) && mixpanelToken) {
      const isMixpanelDebug = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_MIXPANEL_DEBUG === 'true';
      const mixpanelApiHost = process.env.NEXT_PUBLIC_MIXPANEL_API_HOST
        || (process.env.NEXT_PUBLIC_MIXPANEL_EU === 'true' ? 'https://api-eu.mixpanel.com' : 'https://api.mixpanel.com');
      logger.debug('[Mixpanel] Init via npm, host:', window.location.host, 'api_host:', mixpanelApiHost);
      cancelIdleTasks.push(scheduleIdle(() => {
        ensureMixpanelFromNpm(mixpanelToken, { debug: isMixpanelDebug, apiHost: mixpanelApiHost }).then((mp) => {
          if (mp) logger.debug('[Mixpanel] Initialized, Page View tracked');
        });
      }, 2500));
    } else if (!mixpanelToken && process.env.NODE_ENV === 'development') {
      logger.warn('[Mixpanel] Token not found. Set NEXT_PUBLIC_MIXPANEL_TOKEN in env.');
    }

    return () => {
      cancelIdleTasks.forEach((cancel) => cancel());
    };
  }, [isLoading, consent, analyticsConsent, hasConsent, router.asPath]);

  // Listen for consent changes and dynamically load/unload scripts
  useEffect(() => {
    const handleConsentChange = (event) => {
      const newConsent = event.detail;
      
      // Dynamically load scripts based on new consent
      if (newConsent.analytics) {
        const analyticsAlreadyLoaded =
          typeof document !== "undefined" && document.getElementById("gtag-js-app");
        if (!analyticsAlreadyLoaded) {
          const measurementId = getGaMeasurementId();
          if (measurementId) {
            loadScriptIfConsented(
              'gtag-js-app',
              `https://www.googletagmanager.com/gtag/js?id=${measurementId}`,
              'analytics',
              { async: true },
              () => newConsent.analytics
            );

            loadInlineScriptIfConsented(
              'gtag-init-app',
              buildGtagConfigSnippet(measurementId),
              'analytics',
              {},
              () => newConsent.analytics
            );
            trackGaPageView(router.asPath, typeof document !== 'undefined' ? document.title : undefined);
          }
        }
        // Mixpanel: initialized only from the consent useEffect via ensureMixpanelFromNpm (single-flight)
      }
      
      // Note: We don't remove scripts when consent is revoked to avoid breaking functionality
      // User would need to reload page for full effect, but this allows dynamic enabling
    };

    window.addEventListener('consentChanged', handleConsentChange);
    return () => {
      window.removeEventListener('consentChanged', handleConsentChange);
    };
  }, [hasConsent, router.asPath]);

  const isBuyerGuide = router.pathname === '/buyers-guide' || router.pathname === '/enterprise-buyer-guide';
  const isLinktreePage = router.pathname === '/adam-kershner';
  const showProductHuntBanner =
    SHOW_PRODUCT_HUNT_BANNER &&
    !isLinktreePage &&
    isProductHuntCelebrationActive() &&
    isProductHuntGlobalBannerRoute(router.pathname);
  const needsDocsStyles =
    router.pathname.startsWith("/help") ||
    router.pathname.startsWith("/white-paper") ||
    router.pathname === "/" ||
    isBuyerGuide;
  const needsSearchStyles =
    router.pathname.startsWith("/explore");

  return (
    <>
      {needsDocsStyles ? (
        <Head>
          <link rel="stylesheet" href="/styles/docs.css" />
        </Head>
      ) : null}
      {needsSearchStyles ? (
        <Head>
          <link rel="stylesheet" href="/styles/search-ui.css" />
        </Head>
      ) : null}
      <div className="flex flex-col min-h-screen" data-page={isBuyerGuide ? 'buyer-guide' : undefined}>
        <SEO
          url={absoluteCorporateUrl((router.asPath || "/").split("?")[0].split("#")[0] || "/")}
          type={router.pathname === "/" ? "website" : "article"}
          skipCanonical
        />
        <div style={{ zIndex: "100" }} className={`site-nav-wrapper h-16${isBuyerGuide ? ' buyer-guide-layout' : ''}${isLinktreePage ? ' hidden' : ''}`}>
          {!isLinktreePage ? <NavbarDup /> : null}
        </div>
        <main
          className={`flex-grow${
            showProductHuntBanner
              ? ' pb-[calc(7rem+var(--consent-banner-offset,0px))] sm:pb-[calc(6.5rem+var(--consent-banner-offset,0px))]'
              : ''
          }`}
        >
          <Component key={router.asPath} {...pageProps} />
        </main>
        {!isLinktreePage ? <Footer /> : null}
        {showProductHuntBanner ? <GlobalBanner /> : null}
      </div>
      <ConsentErrorBoundary>
        <ConsentBanner />
        <CookiePreferencesModal />
      </ConsentErrorBoundary>
    </>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <div className={`${fontGeist.variable} ${fontBricolage.variable}`}>
      <ConsentProvider>
        <AppContent Component={Component} pageProps={pageProps} />
      </ConsentProvider>
    </div>
  );
}

export default MyApp;
