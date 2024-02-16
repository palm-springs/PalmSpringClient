import { NextRequest, NextResponse } from 'next/server';

const HTTP_PROTOCOL = process.env.NODE_ENV === 'development' ? 'http' : 'https';
const DOMAIN_NAME = process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'palms.blog';

export const middleware = (request: NextRequest) => {
  const hostArray = request.headers.get('host')?.split('.');
  const subdomain = hostArray?.[0];
  const domain = hostArray?.[1];
  const pathName = request.nextUrl.clone().pathname;

  // sudomain이 있고, palms.blog임이 확인되면 => isSudomain : true
  const isSubdomain =
    subdomain !== (process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'palms') &&
    subdomain !== 'www' &&
    domain === (process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'palms');

  // 랜딩 페이지
  if (!isSubdomain && pathName === '/') return NextResponse.next();
  // 정적 path들 검사
  if (
    !isSubdomain &&
    (pathName.startsWith('/auth') ||
      pathName.startsWith('/create-blog') ||
      pathName.startsWith('/invite') ||
      pathName.startsWith('/loading') ||
      pathName.startsWith('/no-team') ||
      pathName.startsWith('/team'))
  )
    return NextResponse.next();

  // sudomain일 때, 원래 url로 rewrite
  if (isSubdomain) {
    // /home -> / 임시 처리
    if (pathName.startsWith('/home')) {
      return NextResponse.redirect(new URL(`${HTTP_PROTOCOL}://${subdomain}.${DOMAIN_NAME}`, request.url));
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
      return NextResponse.rewrite(new URL(`/${subdomain}${request.nextUrl.clone().pathname}`, request.url));
    }
  }

  // 원래 url (e.g. palms.blog/[team])로 들어온 경우 sudomain으로 redirect
  else {
    const teamName = pathName.split('/')[1];
    const index = pathName.indexOf('/', 1);
    // /[team]
    if (index === -1) {
      return NextResponse.redirect(new URL(`${HTTP_PROTOCOL}://${teamName}.${DOMAIN_NAME}`, request.url));
    }
    // /[team]/content, /[team]/author
    else {
      const targetPathName = pathName.slice(index);
      // /home -> / 임시 처리
      if (targetPathName.startsWith('/home')) {
        return NextResponse.redirect(new URL(`${HTTP_PROTOCOL}://${teamName}.${DOMAIN_NAME}`, request.url));
      }
      if (!targetPathName.startsWith('/dashboard') && !targetPathName.startsWith('/editor')) {
        return NextResponse.redirect(
          new URL(`${HTTP_PROTOCOL}://${teamName}.${DOMAIN_NAME}/${targetPathName}`, request.url),
        );
      }
      return NextResponse.next();
    }
  }
};
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico).*)',
    },
  ],
};
