'use client';
import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

import client, { refreshAxiosInstance } from '@/api';
import { getRefreshToken } from '@/api/auth';

import { accessTokenState } from './states/atom';

const AuthRequired = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;
  const setAccessToken = useSetRecoilState(accessTokenState);
  const resetAccessToken = useResetRecoilState(accessTokenState);

  useEffect(() => {
    console.log('useEffect');
    const accessToken = sessionStorage?.getItem('userToken');
    if (accessToken) {
      const { accessTokenState } = JSON.parse(accessToken);
      console.log(accessTokenState);
      axios.defaults.headers.common.Authorization = `Bearer ${accessTokenState}`;
      client.defaults.headers.common.Authorization = `Bearer ${accessTokenState}`;
    } else {
      router.push('/auth');
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
        console.log('response 성공');
        return response;
      },
      async (error) => {
        const { config } = error;

        if (!error.response) {
          console.log('Access Token is expired.');
          const newAccessToken = await refresh();
          config.headers.Authorization = `Bearer ${newAccessToken}`;
          return client(config);
        }

        console.log('response 있다.');
        return Promise.reject(error);
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
