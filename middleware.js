import { NextResponse } from 'next/server';
import {
  getCorporateSurfaceById,
  isPreviewHost,
  resolveCorporateSurface,
} from './config/corporateHosts';

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

  if (REDIRECT_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.port = '';
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }

  const surface = resolveSurface(request, host);
  if (!surface) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  // Phase 1: map subdomain root to the surface home; leave other paths as-is
  // so shared nav/footer still work on the same host.
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
    /*
     * Skip static assets and Next internals; still run for pages + API.
     */
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|.*\\..*).*)',
  ],
};
