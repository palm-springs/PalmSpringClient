'use client';
import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import { postSocialLogin } from '@/api/auth';
import { getUserInfoAfterLogin } from '@/api/dashboard';
import { useGetAccessToken } from '@/hooks/auth';
import { getAccessTokenProps } from '@/types/auth';

import { accessTokenState } from './states/atom';

const RequestAccessToken = (props: getAccessTokenProps) => {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const platformData = useGetAccessToken(props);

  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;
  const redirectUrl = sessionStorage?.getItem('redirectUrl');

  const router = useRouter();
  const login = async () => {
    if (platformData) {
      const data = await postSocialLogin('google', platformData?.access_token);
      const { accessToken } = data.data;
      setAccessToken(accessToken);

      if (data.code === 200) {
        if (redirectUrl) {
          sessionStorage?.removeItem('redirectUrl');
          router.replace(redirectUrl);
        } else {
          const {
            data: { joinBlogList },
          } = await getUserInfoAfterLogin('', accessToken);
          if (joinBlogList.length === 0) {
            router.push('/no-team/dashboard');
          } else {
            router.push(`/${joinBlogList[0].blogUrl}/dashboard/upload`);
          }
        }
      }
    }
  };
  login();
};

export default RequestAccessToken;
