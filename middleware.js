import { NextResponse } from 'next/server';
import {
  getCorporateSurfaceById,
  isPreviewHost,
  resolveCorporateSurface,
} from './config/corporateHosts';
import {
  apexMarketingRedirectsEnabled,
  buildApexRedirectUrl,
  isApexMarketingHost,
} from './config/apexRedirects';

const CANONICAL_HOST = 'kahana.io';
const REDIRECT_HOSTS = new Set(['kahana.co', 'www.kahana.co', 'www.kahana.io']);

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

  // Legacy aliases → apex (path preserved). www then hits Phase 2.5 map on next request,
  // or we redirect www straight through canonicalization below.
  if (REDIRECT_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
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
    const location = buildApexRedirectUrl(pathname, search);
    if (location) {
      return NextResponse.redirect(location, 301);
    }
  }

  const surface = resolveSurface(request, host);
  if (!surface) {
    return NextResponse.next();
  }

  // Retire about.kahana.io/contact → canonical apex contact
  if (
    surface.id === 'about' &&
    (pathname === '/contact' || pathname.startsWith('/contact/'))
  ) {
    const target = new URL(`https://${CANONICAL_HOST}/contact`);
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
