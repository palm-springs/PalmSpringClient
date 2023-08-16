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

    console.log(status);

    // switch (status) {
    //   // refresh token 만료
    //   case 401:
    //   console.log('Refresh Token is expired.');
    //   resetAccessToken();
    //   sessionStorage?.removeItem('userToken');
    //   return { status, newToken: null };
    // // access token 재발급 성공
    // case 200:
    setAccessToken(accessToken);
    console.log(`바꾸는거 : ${accessToken}`);
    return accessToken;
    // default:
    //   break;
    // }
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
        console.log(error);

        console.log('Access Token is expired.');
        const newAccessToken = await refresh();
        // switch (refreshData?.status) {
        //   case 200:
        config.headers.Authorization = `Bearer ${newAccessToken}`;
        return client(config);
        //   case 401:
        //     router.push('/auth');
        //     break;
        // }

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
      // client.interceptors.request.eject(requestInterceptor);
      // client.interceptors.response.eject(responseInterceptor);
    };
  }, []);

  return <div>{children}</div>;
};

export default AuthRequired;
