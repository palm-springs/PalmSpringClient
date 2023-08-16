'use client';
import { useEffect } from 'react';
import axios, { AxiosError } from 'axios';
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
    const newRefreshData = await getRefreshToken();

    if (newRefreshData) {
      const {
        status,
        data: {
          data: { accessToken },
        },
      } = newRefreshData;
      console.log(status);

      switch (status) {
        // refresh token 만료
        case 401:
          console.log('Refresh Token is expired.');
          resetAccessToken();
          sessionStorage?.removeItem('userToken');
          return { status, newToken: null };
        // access token 재발급 성공
        case 200:
          setAccessToken(accessToken);
          console.log(`바꾸는거 : ${accessToken}`);
          return { status, newToken: accessToken };
        default:
          break;
      }
    }
  };

  useEffect(() => {
    console.log('here');
    // axios.interceptors.request.use(async (config) => {
    //   const accessToken = sessionStorage?.getItem('userToken');
    //   console.log(accessToken);
    //   console.log('request interceptor');
    //   if (accessToken) {
    //     console.log('헤더에 토큰 껴넣기~');
    //     const { accessTokenState } = JSON.parse(accessToken);
    //     config.headers.Authorization = `Bearer ${accessTokenState}`;
    //     console.log(accessTokenState);
    //   } else {
    //     console.log('토큰 없다 안녕~');
    //     router.push('/auth');
    //   }

    //   return config;
    // });
    client.interceptors.response.use(
      // async (response) => {
      //   if (response.status >= 400) throw new Error(response.data);
      //   const { config, status } = response;
      //   const { code, message } = response.data;

      //   console.log(response, status, code, message);

      //   // access token 만료
      //   if (status === 401) {
      //     console.log('일단 여기에요');
      //     router.push('/auth');
      //     if (message === 'Access Token is expired.') {
      //       await refresh();
      //       console.log('여기까지 오지롱');
      //       return client(config);
      //     } else if (message === 'Refresh Token is expired.') {
      //       resetAccessToken();
      //       console.log('heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere');
      //       router.push('/auth');
      //     }
      //   } else if (status === 400) {
      //     sessionStorage?.removeItem('userToken');
      //     router.push('/auth');
      //   } else if (status === 403) {
      //     sessionStorage?.removeItem('userToken');
      //     router.push('/auth');
      //   }

      //   return response;
      // },
      (response) => {
        console.log('response 성공');
        return response;
      },
      async (error) => {
        const { config } = error;
        console.log(error);

        console.log('Access Token is expired.');
        const refreshData = await refresh();
        switch (refreshData?.status) {
          case 200:
            config.headers.Authorization = `Bearer ${refreshData?.newToken}`;
            return client(config);
          case 401:
            router.push('/auth');
            break;
        }

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
