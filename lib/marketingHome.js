import { ABOUT_ORIGIN } from '../config/site';

/** Marketing landing page. Help, newsroom, and careers rewrite `/` to their own home. */
export const MARKETING_HOME_URL = `${ABOUT_ORIGIN}/`;

export function marketingHomeHref(hostname = '') {
  const host = String(hostname || '').split(':')[0].toLowerCase();
  if (/^(help|newsroom|careers)(-beta)?\./.test(host)) {
    return MARKETING_HOME_URL;
  }
  return '/';
}
