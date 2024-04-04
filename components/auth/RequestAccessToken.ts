'use client';
import { useRouter } from 'next/navigation';

import { postSocialLogin } from '@/api/auth';
import { ACCESS_TOKEN_KEY, LoginUserState } from '@/constants/Auth';
import { useGetAccessToken } from '@/hooks/auth';
import { getAccessTokenProps } from '@/types/auth';
import { successLogin } from '@/utils/successLogin';

const RequestAccessToken = (props: getAccessTokenProps) => {
  const platformData = useGetAccessToken(props);

  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  const router = useRouter();
  const login = async () => {
    if (platformData) {
      const data = await postSocialLogin('google', platformData?.access_token);
      if (!data) {
        sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
        return;
      }

      if (data.code === 200) {
       successLogin(data.data, router);
      } else {
        sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
        router.replace(`/auth?userState=${LoginUserState.WRONG_PLATFORM}`);
      }
    }
  };
  login();
};

export default RequestAccessToken;
