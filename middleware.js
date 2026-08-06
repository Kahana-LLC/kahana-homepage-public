import { NextResponse } from 'next/server';
import {
  getCorporateSurfaceById,
  isPreviewHost,
  resolveApexHostname,
  resolveCorporateSurface,
} from './config/corporateHosts';
import {
  apexMarketingRedirectsEnabled,
  buildApexRedirectUrl,
  isApexMarketingHost,
} from './config/apexRedirects';

/** www / legacy aliases → brand apex (path preserved). */
const REDIRECT_TO_APEX = {
  'kahana.co': 'kahana.io',
  'www.kahana.co': 'kahana.io',
  'www.kahana.io': 'kahana.io',
  'www.auralibrary.org': 'auralibrary.org',
};

function withSurfaceHeader(response, surfaceId) {
  response.headers.set('x-kahana-surface', surfaceId);
  return response;
}

function resolveSurface(request, host) {
  const fromHost = resolveCorporateSurface(host);
  if (fromHost) return fromHost;

  if (!isPreviewHost(host)) return null;

  const fromQuery = request.nextUrl.searchParams.get('kahana_surface');
  const fromHeader = request.headers.get('x-kahana-surface');
  return getCorporateSurfaceById(fromQuery || fromHeader);
}

export function middleware(request) {
  const host = request.headers.get('host')?.split(':')[0] ?? '';
  const { pathname, search } = request.nextUrl;

  // Legacy / www aliases → brand apex (path preserved). www then hits Phase 2.5
  // on the next request (or we redirect www straight through canonicalization).
  const apexAlias = REDIRECT_TO_APEX[host];
  if (apexAlias) {
    const url = request.nextUrl.clone();
    url.hostname = apexAlias;
    url.port = '';
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }

  // Phase 2.5: apex marketing → corporate subdomains (hard 301)
  if (
    apexMarketingRedirectsEnabled() &&
    isApexMarketingHost(host) &&
    !pathname.startsWith('/api/')
  ) {
    const location = buildApexRedirectUrl(pathname, search, host);
    if (location) {
      return NextResponse.redirect(location, 301);
    }
  }

  const surface = resolveSurface(request, host);
  if (!surface) {
    return NextResponse.next();
  }

  // Retire about.*/contact → canonical apex contact for that brand
  if (
    surface.id === 'about' &&
    (pathname === '/contact' || pathname.startsWith('/contact/'))
  ) {
    const apex = resolveApexHostname(host);
    const target = new URL(`https://${apex}/contact`);
    target.search = search;
    return NextResponse.redirect(target, 301);
  }

  // Corporate subdomains: map `/` to surface home; leave other paths as-is
  if (surface.homePath && (pathname === '/' || pathname === '')) {
    const url = request.nextUrl.clone();
    url.pathname = surface.homePath;
    url.searchParams.delete('kahana_surface');
    return withSurfaceHeader(NextResponse.rewrite(url), surface.id);
  }

  return withSurfaceHeader(NextResponse.next(), surface.id);
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|.*\\..*).*)',
  ],
};
