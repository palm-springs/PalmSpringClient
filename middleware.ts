import { NextRequest, NextResponse } from 'next/server';

export const middleware = (request: NextRequest) => {
  const hostname = new URL(request.url).hostname;
  const subdomain = hostname.split('.')[0];
  const isSubdomain = subdomain !== 'palms';
  const pathWithoutAuthentication =
    request.nextUrl.pathname.startsWith('/home') ||
    request.nextUrl.pathname.startsWith('/content') ||
    request.nextUrl.pathname.startsWith('/author');

  // 기본적인 요청을 분산시켜줍니다.
  if (pathWithoutAuthentication) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
    return NextResponse.rewrite(new URL(`/${subdomain}${request.nextUrl.clone().pathname}`, request.url));
  } else {
    const pathName = request.nextUrl.clone().pathname;
    const teamName = pathName.split('/')[1];
    const index = pathName.indexOf('/', 1);
    const targetPathName = pathName.slice(index);

    // https://official.palms.blog 와 같이 해당 블로그인데 "/"로 접근하는 경우 "/home"으로 반환하도록 도와줍니다.
    if (isSubdomain && pathName === '/') {
      return NextResponse.redirect(new URL(`/home`, request.url));
    }

    // 이외에 기본적으로 다른 곳에서 흘러들어온 요청들을 모두 palms.blog 로 모아줍니다.
    // palms.blog와 palmsummer.site 분리를 위해서 root domain도 동적으로 설정
    return NextResponse.redirect(new URL(`https://${teamName}.palms.blog/${targetPathName}`, request.url));
  }
};

export const config = {
  matcher: [
    '/',
    '/home/:path*',
    '/content/:path*',
    '/author/:path*',
    '/:team/home/:path*',
    '/:team/author/:path*',
    '/:team/content/:path*',
  ],
};
