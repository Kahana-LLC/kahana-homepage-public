import "../styles/globals.css";
import { fontGeist, fontBricolage } from "../lib/fonts";
import dynamic from "next/dynamic";
import Head from "next/head";
import GlobalBanner from "../components/GlobalBanner";

/** Set true to show the top promo banner again. */
const SHOW_GLOBAL_BANNER = false;
import SEO from "../components/SEO";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { trackError } from "../utils/analytics";
import { ConsentProvider, useConsent } from "../contexts/ConsentContext";
import ConsentBanner from "../components/ConsentBanner";
import ConsentErrorBoundary from "../components/ConsentErrorBoundary";

/** Code-split global chrome + modal to reduce main-thread work during hydration (desktop TBT). */
const NavbarDup = dynamic(() => import("../components/NavbarDup"), { ssr: true });
const Footer = dynamic(() => import("../components/Footer"), { ssr: true });
const CookiePreferencesModal = dynamic(() => import("../components/CookiePreferencesModal"), { ssr: false });
import { loadScriptIfConsented, loadInlineScriptIfConsented } from "../utils/scriptLoader";
import { trackMixpanelPageView } from "../utils/mixpanel";
import { ensureMixpanelFromNpm } from "../utils/mixpanelNpmInit";

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

    // Track initial page view (localhost: always; production: with analytics consent)
    if (mixpanelOk) {
      trackMixpanelPageView(router.asPath, document.title);
    }

    // Track route changes
    const handleRouteChange = (url) => {
      if (mixpanelOk) {
        trackMixpanelPageView(url, document.title);
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
  }, [router.asPath, router.events, hasConsent, consent]);

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

  // Load scripts based on consent
  useEffect(() => {
    if (isLoading || !consent) return;

    const isLocalhost = typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname);
    const cancelIdleTasks = [];

    // Google Analytics - requires analytics consent
    if (hasConsent('analytics')) {
      cancelIdleTasks.push(scheduleIdle(() => {
        loadScriptIfConsented(
          'gtag-js-app',
          'https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P',
          'analytics',
          { async: true },
          hasConsent
        );

        loadInlineScriptIfConsented(
          'gtag-init-app',
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQHFL9605P');
          `,
          'analytics',
          {},
          hasConsent
        );

        loadInlineScriptIfConsented(
          'gtm-script-app',
          `
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
          'analytics',
          {},
          hasConsent
        );
      }, 4000));
    }

    // Mixpanel via npm – analytics consent OR localhost (no CDN)
    const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
    if ((hasConsent('analytics') || isLocalhost) && mixpanelToken) {
      const isMixpanelDebug = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_MIXPANEL_DEBUG === 'true';
      const mixpanelApiHost = process.env.NEXT_PUBLIC_MIXPANEL_API_HOST
        || (process.env.NEXT_PUBLIC_MIXPANEL_EU === 'true' ? 'https://api-eu.mixpanel.com' : 'https://api.mixpanel.com');
      if (isMixpanelDebug && !isLocalhost) {
        console.log('[Mixpanel] Init via npm, host:', window.location.host, 'api_host:', mixpanelApiHost);
      }
      cancelIdleTasks.push(scheduleIdle(() => {
        ensureMixpanelFromNpm(mixpanelToken, { debug: isMixpanelDebug, apiHost: mixpanelApiHost }).then((mp) => {
          if (mp && isMixpanelDebug && !isLocalhost) console.log('[Mixpanel] Initialized, Page View tracked');
        });
      }, 2500));
    } else if (!mixpanelToken) {
      console.warn('[Mixpanel] Token not found. Set NEXT_PUBLIC_MIXPANEL_TOKEN in env. For production (Heroku/Vercel), add it in the platform config and redeploy.');
    }

    // Google Ads - requires advertising consent
    if (hasConsent('advertising')) {
      loadScriptIfConsented(
        'adsbygoogle-script-app',
        'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5821697528846539',
        'advertising',
        { async: true, crossOrigin: 'anonymous' },
        hasConsent
      );
    }

    // Warmly — defer until browser idle to reduce main-thread contention with first input (INP)
    if (hasConsent('marketing')) {
      const loadWarmly = () => {
        loadScriptIfConsented(
          'warmly-script-loader',
          'https://opps-widget.getwarmly.com/warmly.js?clientId=855ddcba822be578ea36ad4ad5dca9fa',
          'marketing',
          { defer: true },
          hasConsent
        );
      };
      cancelIdleTasks.push(scheduleIdle(loadWarmly, 4000));
    }
    return () => {
      cancelIdleTasks.forEach((cancel) => cancel());
    };
  }, [consent, hasConsent, isLoading]);

  // Listen for consent changes and dynamically load/unload scripts
  useEffect(() => {
    const handleConsentChange = (event) => {
      const newConsent = event.detail;
      
      // Dynamically load scripts based on new consent
      if (newConsent.analytics) {
        // Load analytics scripts
        loadScriptIfConsented(
          'gtag-js-app',
          'https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P',
          'analytics',
          { async: true },
          () => newConsent.analytics
        );
        
        loadInlineScriptIfConsented(
          'gtag-init-app',
          `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-KQHFL9605P');
          `,
          'analytics',
          {},
          () => newConsent.analytics
        );
        loadInlineScriptIfConsented(
          'gtm-script-app',
          `
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
          'analytics',
          {},
          () => newConsent.analytics
        );
        // Mixpanel: initialized only from the consent useEffect via ensureMixpanelFromNpm (single-flight)
      }
      
      if (newConsent.advertising) {
        loadScriptIfConsented(
          'adsbygoogle-script-app',
          'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5821697528846539',
          'advertising',
          { async: true, crossOrigin: 'anonymous' },
          () => newConsent.advertising
        );
      }
      
      if (newConsent.marketing) {
        const loadWarmly = () => {
          loadScriptIfConsented(
            'warmly-script-loader',
            'https://opps-widget.getwarmly.com/warmly.js?clientId=855ddcba822be578ea36ad4ad5dca9fa',
            'marketing',
            { defer: true },
            () => newConsent.marketing
          );
        };
        if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
          window.requestIdleCallback(loadWarmly, { timeout: 4000 });
        } else {
          window.setTimeout(loadWarmly, 2000);
        }
      }
      
      // Note: We don't remove scripts when consent is revoked to avoid breaking functionality
      // User would need to reload page for full effect, but this allows dynamic enabling
    };

    window.addEventListener('consentChanged', handleConsentChange);
    return () => {
      window.removeEventListener('consentChanged', handleConsentChange);
    };
  }, [hasConsent]);

  const isBuyerGuide = router.pathname === '/buyers-guide' || router.pathname === '/enterprise-buyer-guide';
  const needsDocsStyles =
    router.pathname.startsWith("/docs") ||
    router.pathname.startsWith("/white-paper") ||
    isBuyerGuide;
  const needsSearchStyles =
    router.pathname.startsWith("/explore");

  return (
    <>
      {needsDocsStyles ? (
        <Head>
          <style>{'@import url("/styles/docs.css");'}</style>
        </Head>
      ) : null}
      {needsSearchStyles ? (
        <Head>
          <style>{'@import url("/styles/search-ui.css");'}</style>
        </Head>
      ) : null}
      <div className="flex flex-col min-h-screen" data-page={isBuyerGuide ? 'buyer-guide' : undefined}>
        <SEO
          url={`https://kahana.co${router.asPath}`}
          type={router.pathname === "/" ? "website" : "article"}
          skipCanonical
        />
        <div style={{ zIndex: "100" }} className={`site-nav-wrapper h-16${isBuyerGuide ? ' buyer-guide-layout' : ''}`}>
          <NavbarDup />
          {SHOW_GLOBAL_BANNER ? <GlobalBanner /> : null}
        </div>
        <main className="flex-grow">
          <Component {...pageProps} />
        </main>
        <Footer />
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
