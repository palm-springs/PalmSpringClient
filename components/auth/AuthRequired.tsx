'use client';
import { useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useResetRecoilState, useSetRecoilState } from 'recoil';

import client from '@/api';
import { getRefreshToken } from '@/api/auth';

import { accessTokenState } from './states/atom';

const AuthRequired = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;
  const setAccessToken = useSetRecoilState(accessTokenState);
  const resetAccessToken = useResetRecoilState(accessTokenState);

  useEffect(() => {
    const accessToken = sessionStorage?.getItem('userToken');
    console.log(accessToken);
    if (accessToken) {
      const { accessTokenState } = JSON.parse(accessToken);
      console.log(accessTokenState);
      axios.defaults.headers.Authorization = `Bearer ${accessTokenState}`;
    }
  }, []);

  // access token 재발급 요청 함수
  const refresh = async () => {
    const {
      code,
      message,
      data: { accessToken },
    } = await getRefreshToken();

    console.log(accessToken);
    console.log('refresh');

    console.log(code);
    switch (code) {
      // refresh token 만료
      case 401:
        router.push('/auth');
        break;
      // access token 재발급 성공
      case 200:
        setAccessToken(accessToken);
        break;
      default:
        router.push('/auth');
        break;
    }
  };

  useEffect(() => {
    const requestInterceptor = client.interceptors.request.use(async (config) => {
      const accessToken = sessionStorage?.getItem('userToken');
      if (accessToken) {
        const { accessTokenState } = JSON.parse(accessToken);
        console.log(accessTokenState);
        config.headers.Authorization = `Bearer ${accessTokenState}`;
      } else {
        router.push('/auth');
      }

      return config;
    });
    const responseInterceptor = client.interceptors.response.use(async (response) => {
      const { config } = response;
      const { code, message } = response.data;

      // access token 만료
      if (code === 401) {
        router.push('/auth');
        if (message === 'Access Token is expired.') {
          // await refresh();
          // console.log('여기까지 오지롱');
          // return client(config);
        } else if (message === 'Refresh Token is expired.') {
          resetAccessToken();
          console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere');
          router.push('/auth');
        }
      } else if (code === 400) {
        sessionStorage?.removeItem('userToken');
        router.push('/auth');
      } else if (code === 403) {
        sessionStorage?.removeItem('userToken');
        router.push('/auth');
      }

      return response;
    });

    return () => {
      client.interceptors.request.eject(requestInterceptor);
      client.interceptors.response.eject(responseInterceptor);
    };
  }, [router, resetAccessToken]);

  return <div>{children}</div>;
};

export default AuthRequired;
