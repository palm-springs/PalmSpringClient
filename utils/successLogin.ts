import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

import client from '@/api';
import { getUserInfoAfterLogin } from '@/api/dashboard';
import { ACCESS_TOKEN_KEY } from '@/constants/Auth';

import { checkSessionStorage } from './checkSessionStorage';

export const successLogin = async (accessToken: string, router: AppRouterInstance) => {
  const sessionStorage = checkSessionStorage();
  const redirectUrl = sessionStorage?.getItem('redirectUrl');

  sessionStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
  client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  if (redirectUrl) {
    sessionStorage?.removeItem('redirectUrl');
    router.replace(redirectUrl);
  } else {
    const { data } = await getUserInfoAfterLogin('', accessToken);
    if (!data.joinBlogList || data.joinBlogList.length === 0) {
      router.push('/no-team/dashboard/statistics');
    } else {
      router.push(`/${data.joinBlogList[0].blogUrl}/dashboard/statistics`);
    }
  }
};
