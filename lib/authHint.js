/**
 * Product-app signed-in hint (set by kahana-web on Firebase login/logout).
 * Cookie `kahana.authHint=1` on Domain=.kahana.io — not a session token.
 */

export const AUTH_HINT_COOKIE = 'kahana.authHint';
export const AUTH_HINT_VALUE = '1';

export function readAuthHintCookie() {
  if (typeof document === 'undefined') return false;
  const match = document.cookie
    .split(';')
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${AUTH_HINT_COOKIE}=`));
  if (!match) return false;
  const value = decodeURIComponent(match.split('=').slice(1).join('='));
  return value === AUTH_HINT_VALUE;
}
