import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
  const subdomain = request.headers.get('host')?.split('.')[0]!;

  return NextResponse.rewrite(new URL(`/${subdomain}${request.nextUrl.clone().pathname}`, request.url));

  if (request.nextUrl.pathname.startsWith('/home')) {
    return NextResponse.rewrite(new URL(`/${subdomain}${request.nextUrl.clone().pathname}`, request.url));
  }
  if (request.nextUrl.pathname.startsWith('/content')) {
    return NextResponse.rewrite(new URL(`/${subdomain}/content`, request.url));
  }
  if (request.nextUrl.pathname.startsWith('/author')) {
    return NextResponse.rewrite(new URL(`/${subdomain}/author`, request.url));
  }
};

export const config = {
  matcher: ['/home/:path*', '/content/:path*', '/author/:path*'],
};
