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
import { trackPageView } from "../utils/posthog";
import ICPSurvey from "../components/ICPSurvey";

// Inner component that uses consent
function AppContent({ Component, pageProps }) {
  const router = useRouter();
  const { consent, hasConsent, isLoading } = useConsent();

  useEffect(() => {
    // Track route changes
    const handleRouteChange = (url) => {
      // Track page view in PostHog
      if (hasConsent('analytics')) {
        trackPageView(url);
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
  }, [router.events, hasConsent]);

  // Load scripts based on consent
  useEffect(() => {
    if (isLoading || !consent) return;

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

      // PostHog - load when analytics consent given
      // Default api_host = direct URL so tracking works even if proxy fails. Set NEXT_PUBLIC_POSTHOG_HOST=/ph to use reverse proxy.
      const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';
      const posthogSnippet = `!function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init ss us bi os hs es ns capture Bi calculateEventProperties cs register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty ps vs createPersonProfile gs Zr ys opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing ds debug O fs getPageViewId captureTraceFeedback captureTraceMetric Yr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_AO2jVB9Uuo448EoalpPTIkdZoqZnyjlEh4BUuRngoby',{api_host:'${posthogHost}',ui_host:'https://us.posthog.com',defaults:'2025-11-30',person_profiles:'identified_only',enable_heatmaps:true})`;
      loadInlineScriptIfConsented('posthog-snippet-app', posthogSnippet, 'analytics', {}, hasConsent);
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

  // Capture initial pageview (Next.js routeChangeComplete does not fire on first load)
  useEffect(() => {
    if (isLoading || !consent || !hasConsent('analytics')) return;
    const initialPath = typeof window !== 'undefined' ? window.location.pathname + (window.location.search || '') : router.asPath || '/';
    const t = setTimeout(() => trackPageView(initialPath), 2000);
    return () => clearTimeout(t);
  }, [consent, hasConsent, isLoading]);

  // Listen for consent changes and dynamically load/unload scripts
  useEffect(() => {
    const handleConsentChange = (event) => {
      const newConsent = event.detail;
      
      // Dynamically load scripts based on new consent
      if (newConsent.analytics) {
        // Load analytics scripts (including PostHog so enabling in modal starts tracking immediately)
        const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com';
        const posthogSnippet = `!function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init ss us bi os hs es ns capture Bi calculateEventProperties cs register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty ps vs createPersonProfile gs Zr ys opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing ds debug O fs getPageViewId captureTraceFeedback captureTraceMetric Yr".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_AO2jVB9Uuo448EoalpPTIkdZoqZnyjlEh4BUuRngoby',{api_host:'${posthogHost}',ui_host:'https://us.posthog.com',defaults:'2025-11-30',person_profiles:'identified_only',enable_heatmaps:true})`;
        loadInlineScriptIfConsented('posthog-snippet-app', posthogSnippet, 'analytics', {}, () => newConsent.analytics);
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

  return (
    <>
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
      <ConsentErrorBoundary>
        <ConsentBanner />
        <CookiePreferencesModal />
      </ConsentErrorBoundary>
      {/* ICP Survey - only shows if user has accepted all cookies (Accept All) */}
      {hasConsent('analytics') && hasConsent('advertising') && hasConsent('marketing') && <ICPSurvey />}
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
