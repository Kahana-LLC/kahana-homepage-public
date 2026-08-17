/**
 * Conservative public-library floors for marketing.
 * Hubs/files come from production Explore stats (listed inventory).
 * User count is the charter-safe registered floor — do not invent a higher number.
 */
export const KAHANA_STATS_FALLBACK = {
  hubs: 1400,
  files: 17000,
  users: 6500,
};

const EXPLORE_TAGS_URL =
  'https://us-central1-kahana-15c2a.cloudfunctions.net/api/workspaces/explore/tags?limit=1';

function floorToStep(value, step) {
  const n = Number(value);
  if (!Number.isFinite(n) || n <= 0) return 0;
  return Math.floor(n / step) * step;
}

export function formatStatPlus(n) {
  return `${Number(n).toLocaleString('en-US')}+`;
}

export async function fetchKahanaLibraryStats() {
  const stats = { ...KAHANA_STATS_FALLBACK };
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);

  try {
    const res = await fetch(EXPLORE_TAGS_URL, {
      headers: { Accept: 'application/json' },
      signal: controller.signal,
    });
    if (!res.ok) return stats;

    const body = await res.json();
    const live = body?.stats || {};
    const hubs = floorToStep(live.publicHubCount, 100);
    const files = floorToStep(live.indexedFileCount, 1000);
    if (hubs > 0) stats.hubs = Math.max(hubs, KAHANA_STATS_FALLBACK.hubs);
    if (files > 0) stats.files = Math.max(files, KAHANA_STATS_FALLBACK.files);
  } catch {
    // Keep charter/fallback floors.
  } finally {
    clearTimeout(timer);
  }

  return stats;
}
