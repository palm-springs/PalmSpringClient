import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const isSubdomain =
    request.nextUrl.pathname.startsWith('/home') ||
    request.nextUrl.pathname.startsWith('/content') ||
    request.nextUrl.pathname.startsWith('/author');

  if (isSubdomain) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
    const subdomain = request.headers.get('host')?.split('.')[0]!;
    return NextResponse.rewrite(new URL(`/${subdomain}${request.nextUrl.clone().pathname}`, request.url));
  }
  // else {
  //   const pathName = request.nextUrl.clone().pathname;
  //   const teamName = pathName.split('/')[1];
  //   const index = pathName.indexOf('/', 1);
  //   const targetPathName = pathName.slice(index);

  //   return NextResponse.redirect(new URL(`https://${teamName}.palms.blog/${targetPathName}`, request.url));
  // }
};

export const config = {
  matcher: [
    '/home/:path*',
    '/content/:path*',
    '/author/:path*',
    '/:team/home/:path*',
    '/:team/author/:path*',
    '/:team/content/:path*',
  ],
};
