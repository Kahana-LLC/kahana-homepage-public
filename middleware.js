import { NextResponse } from 'next/server';

const CANONICAL_HOST = 'kahana.io';
const REDIRECT_HOSTS = new Set(['kahana.co', 'www.kahana.co', 'www.kahana.io']);

export function middleware(request) {
  const host = request.headers.get('host')?.split(':')[0] ?? '';

  if (REDIRECT_HOSTS.has(host)) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.port = '';
    url.protocol = 'https';
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
