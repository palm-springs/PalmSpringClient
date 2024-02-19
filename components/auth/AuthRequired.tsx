'use client';
import { useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import client, { refreshAxiosInstance } from '@/api';
import { getRefreshToken } from '@/api/auth';
import { ACCESS_TOKEN_KEY, LoginUserState } from '@/constants/Auth';

// 로그인이 필요한 페이지에 대해 로그인 검사
const AuthRequired = ({ children }: { children: React.ReactNode }) => {
  // url
  const router = useRouter();
  const pathname = usePathname();
  const paramsCode = useSearchParams().get('code');

  // sessionStorage
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  // access token
  const accessToken = sessionStorage?.getItem(ACCESS_TOKEN_KEY);

  // access token 재발급 요청 함수 (reissue)
  const refresh = async () => {
    const { code, data } = await getRefreshToken();

    if (code === 201) {
      sessionStorage?.setItem(ACCESS_TOKEN_KEY, data.accessToken);
      return data.accessToken;
    } else {
      sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
      return;
    }
  };

  // Authorization, interceptor
  const setAuthorization = async () => {
    if (accessToken) {
      client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      const newAccessToken = await refresh();
      if (newAccessToken) {
        client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      } else {
        router.push(`/auth?userState=${LoginUserState.NO_USER}`);
      }
    }
  };

  useEffect(() => {
    setAuthorization();

    // api 요청에 대한 응답에 따른 조건분기처리
    const clientInterceptor = client.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const { config } = error;

        if (!error.response) {
          const newAccessToken = await refresh();

          config.headers.Authorization = `Bearer ${newAccessToken}`;
          sessionStorage?.setItem(ACCESS_TOKEN_KEY, newAccessToken);
          return client(config);
        }

        return error.response;
      },
    );

    // reissue api 요청에 대한 응답에 따른 조건분기처리
    const refreshInterceptor = refreshAxiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        sessionStorage?.removeItem(ACCESS_TOKEN_KEY);

        const redirectUrl = pathname === '/invite' ? `${pathname}?code=${paramsCode}` : `${pathname}`;
        sessionStorage?.setItem('redirectUrl', redirectUrl);
        router.push(`/auth?userState=${LoginUserState.NO_USER}`); // 로그인이 필요합니다.

        return Promise.reject(error);
      },
    );

    return () => {
      client.interceptors.response.eject(clientInterceptor);
      refreshAxiosInstance.interceptors.request.eject(refreshInterceptor);
    };
  }, []);

  return <div>{children}</div>;
};

export default AuthRequired;
