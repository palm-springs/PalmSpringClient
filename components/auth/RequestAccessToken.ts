'use client';
import { useRouter } from 'next/navigation';

import { postSocialLogin } from '@/api/auth';
import { getUserInfoAfterLogin } from '@/api/dashboard';
import { ACCESS_TOKEN_KEY, LoginUserState } from '@/constants/Auth';
import { useGetAccessToken } from '@/hooks/auth';
import { getAccessTokenProps } from '@/types/auth';

const RequestAccessToken = (props: getAccessTokenProps) => {
  const platformData = useGetAccessToken(props);

  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;
  const redirectUrl = sessionStorage?.getItem('redirectUrl');

  const router = useRouter();
  const login = async () => {
    if (platformData) {
      const data = await postSocialLogin('google', platformData?.access_token);
      if (!data) {
        sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
        return;
      }

      if (data.code === 200) {
        const { accessToken } = data.data;
        sessionStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
        if (redirectUrl) {
          sessionStorage?.removeItem('redirectUrl');
          router.replace(redirectUrl);
        } else {
          const { data } = await getUserInfoAfterLogin('', accessToken);
          if (!data.joinBlogList || data.joinBlogList.length === 0) {
            router.push('/no-team/dashboard/upload');
          } else {
            router.push(`/${data.joinBlogList[0].blogUrl}/dashboard/upload`);
          }
        }
      } else {
        sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
        router.replace(`/auth?userState=${LoginUserState.WRONG_PLATFORM}`);
      }
    }
  };
  login();
};

export default RequestAccessToken;
