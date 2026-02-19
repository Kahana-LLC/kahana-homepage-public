import "../styles/globals.css";
import NavbarDup from "../components/NavbarDup";
import GlobalBanner from "../components/GlobalBanner";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { trackError } from "../utils/analytics";
import Script from "next/script";
import { ConsentProvider, useConsent } from "../contexts/ConsentContext";
import ConsentBanner from "../components/ConsentBanner";
import CookiePreferencesModal from "../components/CookiePreferencesModal";
import ConsentErrorBoundary from "../components/ConsentErrorBoundary";
import { loadScriptIfConsented, loadInlineScriptIfConsented } from "../utils/scriptLoader";
import { trackMixpanelPageView } from "../utils/mixpanel";

// Inner component that uses consent
function AppContent({ Component, pageProps }) {
  const router = useRouter();
  const { consent, hasConsent, isLoading } = useConsent();

  useEffect(() => {
    if (typeof window === 'undefined') return;

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
  }, [router.events, hasConsent, consent]);

  // Mixpanel via npm (mixpanel-browser) – no CDN, works on localhost even when CDN is blocked
  const initMixpanelFromNpm = async (token, opts) => {
    const { debug = false, apiHost } = opts || {};
    const sessionReplayPercent = parseInt(process.env.NEXT_PUBLIC_MIXPANEL_SESSION_REPLAY_PERCENT || '0', 10);
    const enableHeatmaps = sessionReplayPercent > 0;
    try {
      const mod = await import('mixpanel-browser');
      const mp = mod.default;
      const initOpts = {
        debug,
        track_pageview: false,
        persistence: 'localStorage',
        api_host: apiHost || 'https://api.mixpanel.com',
        loaded: (m) => {
          m.track('Page View', {
            page_path: typeof window !== 'undefined' ? window.location.pathname : '',
            page_title: typeof document !== 'undefined' ? document.title : '',
            url: typeof window !== 'undefined' ? window.location.href : '',
            timestamp: new Date().toISOString(),
          });
        },
      };
      if (enableHeatmaps) {
        initOpts.record_sessions_percent = Math.min(100, Math.max(1, sessionReplayPercent));
        initOpts.record_heatmap_data = true;
      }
      mp.init(token, initOpts);
      return mp;
    } catch (e) {
      console.error('[Mixpanel] init error:', e);
      return null;
    }
  };

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
    initMixpanelFromNpm(token, { debug: true, apiHost }).then((mp) => {
      if (mp) console.log('[Mixpanel] Localhost: initialized, Page View tracked');
    });
  }, []);

  // Load scripts based on consent
  useEffect(() => {
    if (isLoading || !consent) return;

    const isLocalhost = typeof window !== 'undefined' && ['localhost', '127.0.0.1'].includes(window.location.hostname);

    // Google Analytics - requires analytics consent
    if (hasConsent('analytics')) {
      // Load gtag.js
      loadScriptIfConsented(
        'gtag-js-app',
        'https://www.googletagmanager.com/gtag/js?id=G-KQHFL9605P',
        'analytics',
        { async: true },
        hasConsent
      );

      // Load gtag init
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

      // Google Tag Manager - requires analytics consent
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

      // Hotjar - requires analytics consent
      loadInlineScriptIfConsented(
        'hotjar-script-app',
        `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2868036,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        'analytics',
        {},
        hasConsent
      );

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
      initMixpanelFromNpm(mixpanelToken, { debug: isMixpanelDebug, apiHost: mixpanelApiHost }).then((mp) => {
        if (mp && isMixpanelDebug && !isLocalhost) console.log('[Mixpanel] Initialized, Page View tracked');
      });
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

    // Warmly - requires marketing consent
    if (hasConsent('marketing')) {
      loadScriptIfConsented(
        'warmly-script-loader', // Use original ID that Warmly expects
        'https://opps-widget.getwarmly.com/warmly.js?clientId=855ddcba822be578ea36ad4ad5dca9fa',
        'marketing',
        { defer: true },
        hasConsent
      );
    }
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
        loadInlineScriptIfConsented(
          'hotjar-script-app',
          `
            (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:2868036,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
          'analytics',
          {},
          () => newConsent.analytics
        );

        // Mixpanel via npm when consent granted
        const mixpanelToken = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN;
        if (mixpanelToken) {
          const isMixpanelDebug = process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_MIXPANEL_DEBUG === 'true';
          const mixpanelApiHost = process.env.NEXT_PUBLIC_MIXPANEL_API_HOST
            || (process.env.NEXT_PUBLIC_MIXPANEL_EU === 'true' ? 'https://api-eu.mixpanel.com' : 'https://api.mixpanel.com');
          initMixpanelFromNpm(mixpanelToken, { debug: isMixpanelDebug, apiHost: mixpanelApiHost });
        }
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
        loadScriptIfConsented(
          'warmly-script-loader', // Use original ID that Warmly expects
          'https://opps-widget.getwarmly.com/warmly.js?clientId=855ddcba822be578ea36ad4ad5dca9fa',
          'marketing',
          { defer: true },
          () => newConsent.marketing
        );
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

  return (
    <>
      <div className="flex flex-col min-h-screen" data-page={isBuyerGuide ? 'buyer-guide' : undefined}>
        <SEO
          url={`https://kahana.co${router.asPath}`}
          type={router.pathname === "/" ? "website" : "article"}
          skipCanonical
        />
        <div style={{ zIndex: "100" }} className={`sticky top-0 site-nav-wrapper${isBuyerGuide ? ' buyer-guide-layout' : ''}`}>
          <NavbarDup />
          <GlobalBanner />
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
    <ConsentProvider>
      <AppContent Component={Component} pageProps={pageProps} />
    </ConsentProvider>
  );
}

export default MyApp;
