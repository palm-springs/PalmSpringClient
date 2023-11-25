'use client';
import { useCallback, useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

import client, { refreshAxiosInstance } from '@/api';
import { getRefreshToken } from '@/api/auth';
import { LoginUserState } from '@/types/auth';

import { accessTokenState } from './states/atom';

// 로그인이 필요한 페이지에 대해 로그인 검사
const AuthRequired = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;
  const setAccessToken = useSetRecoilState(accessTokenState);
  const resetAccessToken = useResetRecoilState(accessTokenState);

  const paramsCode = searchParams.get('code');

  useEffect(() => {
    // sessionStorage에서 token 가져오기
    const accessToken = sessionStorage?.getItem('userToken');
    if (accessToken) {
      const { accessTokenState } = JSON.parse(accessToken);
      axios.defaults.headers.common.Authorization = `Bearer ${accessTokenState}`;
      client.defaults.headers.common.Authorization = `Bearer ${accessTokenState}`;
    } else {
      // token 없으면 redirectUrl 저장
      console.log('사용자 X');
      const redirectUrl = pathname === '/invite' ? `${pathname}?code=${paramsCode}` : `${pathname}`;
      sessionStorage?.setItem('redirectUrl', redirectUrl);
      router.push(`/auth?userState=${LoginUserState.NO_USER}`);
    }
  }, []);

  // access token 재발급 요청 함수
  const refresh = async () => {
    console.log('refresh');
    const {
      data: { accessToken },
    } = await getRefreshToken();

    setAccessToken(accessToken);
    console.log(`바꾸는거 : ${accessToken}`);
    return accessToken;
  };

  useEffect(() => {
    console.log('here');
    client.interceptors.response.use(
      (response) => {
        console.log(response.status);
        console.log('response 성공');
        return response;
      },
      async (error) => {
        const { config } = error;
        console.log(error.response.status);
        console.log('야 에러임');

        if (!error.response) {
          console.log(error);
          console.log('Access Token is expired.');
          const newAccessToken = await refresh();
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          return client(config);
        }

        console.log('response 있다.');
        return error.response;
      },
    );

    refreshAxiosInstance.interceptors.response.use(
      (response) => {
        console.log('refresh response 성공');
        return response;
      },
      async (error) => {
        console.log('Refresh Token is expired.');
        resetAccessToken();
        sessionStorage?.removeItem('userToken');
        router.push('/auth');
        return Promise.reject(error);
      },
    );

    return () => {
      console.log('interceptor 제거 위치');
      // client.interceptors.request.eject(requestInterceptor);
      // client.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return <div>{children}</div>;
};

export default AuthRequired;
