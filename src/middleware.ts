import { NextResponse } from 'next/server';

export function middleware(request: NextRequeste) {
  // if (request.nextUrl.pathname.startsWith('/about')) {
  //   // This logic is only applied to /about
  // }

  if (request.nextUrl.pathname.startsWith('/my')) {
    if (!request.cookies.get('access_token')) return NextResponse.redirect(new URL('/login', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    if (!request.cookies.get('access_token')) return NextResponse.json(null);
  }
}
