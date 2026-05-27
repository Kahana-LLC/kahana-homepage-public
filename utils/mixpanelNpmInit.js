import { logger } from './logger';

/**
 * Single-flight Mixpanel init via mixpanel-browser (npm).
 * Prevents duplicate mp.init() when consent updates trigger both consentChanged and useEffect,
 * and when localhost dev runs the dedicated localhost effect alongside the consent effect.
 */

let initPromise = null;

export async function ensureMixpanelFromNpm(token, opts = {}) {
  if (typeof window === 'undefined') return null;
  if (!token) return null;

  const { debug = false, apiHost } = opts;
  const sessionReplayPercent = parseInt(
    process.env.NEXT_PUBLIC_MIXPANEL_SESSION_REPLAY_PERCENT || '0',
    10
  );
  const enableHeatmaps = sessionReplayPercent > 0;

  const mod = await import('mixpanel-browser');
  const mp = mod.default;

  try {
    const existingToken =
      typeof mp.get_config === 'function' ? mp.get_config('token') : null;
    if (existingToken === token) {
      return mp;
    }
  } catch (_) {
    // Not initialized yet
  }

  if (initPromise) {
    return initPromise;
  }

  initPromise = (async () => {
    try {
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
      logger.error('[Mixpanel] init error:', e);
      initPromise = null;
      return null;
    }
  })();

  return initPromise;
}
