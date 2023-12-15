'use client';
import { useEffect } from 'react';
import axios from 'axios';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useRecoilState, useResetRecoilState } from 'recoil';

import client, { refreshAxiosInstance } from '@/api';
import { getRefreshToken } from '@/api/auth';
import { LoginUserState } from '@/constants/Auth';

import { accessTokenState } from './states/atom';

// 로그인이 필요한 페이지에 대해 로그인 검사
const AuthRequired = ({ children }: { children: React.ReactNode }) => {
  // url
  const router = useRouter();
  const pathname = usePathname();
  const paramsCode = useSearchParams().get('code');

  // sessionStorage
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  // recoil access token
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const resetAccessToken = useResetRecoilState(accessTokenState);

  // access token 재발급 요청 함수 (reissue)
  const refresh = async () => {
    console.log('reissue 요청');
    const {
      data: { accessToken },
    } = await getRefreshToken();

    setAccessToken(accessToken);
    console.log(`reissue해와서 recoil set : ${accessToken}`);
    return accessToken;
  };

  // api 요청에 대한 응답에 따른 조건분기처리
  const setAxiosResInterceptor = () => {
    client.interceptors.response.use(
      (response) => {
        console.log('로그인 정상 & response 성공');
        return response;
      },
      async (error) => {
        const { config } = error;
        console.log(error.response.status);
        console.log('로그인 비정상 & api 요청 response 에러');

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
  };

  // reissue api 요청에 대한 응답에 따른 조건분기처리
  const setRefreshResInterceptor = () => {
    refreshAxiosInstance.interceptors.response.use(
      (response) => {
        console.log('refresh 성공');
        return response;
      },
      async (error) => {
        console.log('Refresh Token is expired.');
        resetAccessToken();

        const redirectUrl = pathname === '/invite' ? `${pathname}?code=${paramsCode}` : `${pathname}`;
        sessionStorage?.setItem('redirectUrl', redirectUrl);
        router.push(`/auth?userState=${LoginUserState.NO_USER}`); // 로그인이 필요합니다.

        return Promise.reject(error);
      },
    );
  };

  // Authorization, interceptor
  const setAuthorization = async () => {
    if (accessToken) {
      client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
      const newAccessToken = await refresh();
      client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
    }
    setAxiosResInterceptor();
    setRefreshResInterceptor();
  };

  useEffect(() => {
    setAuthorization();

    return () => {
      console.log('interceptor 제거 위치');
      // client.interceptors.request.eject(requestInterceptor);
      // client.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return <div>{children}</div>;
};

export default AuthRequired;
