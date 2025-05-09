import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [],
};
