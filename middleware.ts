import { redirect } from 'next/navigation';
import { NextRequest, NextResponse } from 'next/server';

import { getRefreshToken } from './api/auth';
import { getUserInfoAfterLogin } from './api/dashboard';
import client from './api';

export const middleware = (request: NextRequest) => {
  // const checkUser = async () => {
  //   const data = await getRefreshToken();
  //   console.log(data);
  // if (data.code === 201) {
  //   console.log('1212줄임~');
  //   const newAccessToken = data.accessToken;
  //   if (newAccessToken) {
  //     client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
  //     const { data } = await getUserInfoAfterLogin('', newAccessToken);

  //     if (!data.joinBlogList || data.joinBlogList.length === 0) {
  //       return NextResponse.redirect(new URL(`https://palms.blog/no-team/dashboard/upload`, request.url));
  //     } else {
  //       return NextResponse.redirect(
  //         new URL(`https://palms.blog/${data.joinBlogList[0].blogUrl}/dashboard/upload`, request.url),
  //       );
  //     }
  //   }
  // }
  // };

  // if (request.nextUrl.pathname === '/') {
  //   console.log('들어오긴함');
  //   checkUser();
  //   return;
  // }

  const isSubdomain =
    request.nextUrl.pathname.startsWith('/home') ||
    request.nextUrl.pathname.startsWith('/content') ||
    request.nextUrl.pathname.startsWith('/author');

  if (isSubdomain) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-non-null-asserted-optional-chain
    const subdomain = request.headers.get('host')?.split('.')[0]!;
    return NextResponse.rewrite(new URL(`/${subdomain}${request.nextUrl.clone().pathname}`, request.url));
  } else {
    const pathName = request.nextUrl.clone().pathname;
    const teamName = pathName.split('/')[1];
    const index = pathName.indexOf('/', 1);
    const targetPathName = pathName.slice(index);

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
