import { NextRequest, NextResponse } from 'next/server';

export const config = {
  // I have a feeling this isn't matching /_subdomains/subdomain/dashboard/home
  matcher: ['/((?!api|_next|fonts|examples|[\\w-]+\\.\\w+).*)'],
};
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/my') || request.nextUrl.pathname.startsWith('/cart')) {
    if (!request.cookies.get('access_token')) return NextResponse.redirect(new URL('/login', request.url));
  }
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    if (!request.cookies.get('access_token')) return NextResponse.json({ is_login: false });
  }

  const url = request.nextUrl;
  const hostname = request.headers.get('host') || process.env.NEXT_PUBLIC_DOMAIN;

  if (!hostname) {
    throw Error('Middleware -> No hostname');
  }
  if (hostname === 'localhost:3000') {
    const pathList = url.pathname.slice(1).split('/');
    if (pathList[0] === 'subdomains') {
      url.pathname = `/_${pathList.join('/')}`;
    } else {
      url.pathname = `/_prod${url.pathname}`;
    }
    return NextResponse.rewrite(url);
  }

  const currentHost = hostname.replace(`.${process.env.NEXT_PUBLIC_DOMAIN}`, '');
  if (currentHost === 'www' || currentHost === process.env.NEXT_PUBLIC_DOMAIN) {
    url.pathname = `/_prod${url.pathname}`;
  } else {
    url.pathname = `/_subdomains/${currentHost}${url.pathname}`;
  }

  return NextResponse.rewrite(url);
}
