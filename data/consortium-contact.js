/**
 * Public Signal username for consortium direct intake. Edit this string only (no @ prefix).
 * @see https://signal.org/
 */
export const CONSORTIUM_SIGNAL_USERNAME = "soodonym70";

/**
 * Deep link to start a chat with this Signal username (best-effort; verify for your handle type).
 * @returns {string | null}
 */
export function consortiumSignalContactUrl() {
  const handle = String(CONSORTIUM_SIGNAL_USERNAME).trim().replace(/^@/, "");
  if (!handle) return null;
  return `https://signal.me/#u/${encodeURIComponent(handle)}`;
}
