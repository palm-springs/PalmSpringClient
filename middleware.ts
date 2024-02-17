import { NextRequest, NextResponse } from 'next/server';

const HTTP_PROTOCOL = process.env.NODE_ENV === 'development' ? 'http' : 'https';
const DOMAIN_NAME = process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'palms.blog';

export const middleware = (request: NextRequest) => {
  const hostArray = request.headers.get('host')?.split('.');
  const subdomain = hostArray?.[0];
  const domain = hostArray?.[1];
  const pathName = request.nextUrl.clone().pathname;

  const isSubdomain =
    subdomain !== (process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'palms') &&
    subdomain !== 'www' &&
    domain === (process.env.NODE_ENV === 'development' ? 'localhost:3000' : 'palms');

  // 랜딩 페이지
  if (pathName === '/') return NextResponse.next();
  // 정적 path들 검사
  if (
    pathName.startsWith('/auth') ||
    pathName.startsWith('/create-blog') ||
    pathName.startsWith('/invite') ||
    pathName.startsWith('/loading') ||
    pathName.startsWith('/no-team') ||
    pathName.startsWith('/team')
  )
    return NextResponse.next();

  // sudomain일 때, 원래 url로 rewrite
  if (isSubdomain) {
    return NextResponse.next();
  }

  // /[team]/... 로 들어온 경우 subdomain으로 redirect
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

    // /dashboard, /editor이 아니면 subdomain redirect
    if (!targetPathName.startsWith('/dashboard') && !targetPathName.startsWith('/editor')) {
      return NextResponse.redirect(
        new URL(`${HTTP_PROTOCOL}://${teamName}.${DOMAIN_NAME}/${targetPathName}`, request.url),
      );
    }
    return NextResponse.next();
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
      source: '/((?!api|_next/static|_next/image|favicon.ico|images|icons|lottie).*)',
    },
  ],
};
