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
      axios.defaults.headers.Authorization = `Bearer ${accessTokenState}`;
    } else {
      router.push('/auth');
    }
  }, []);

  // access token 재발급 요청 함수
  const refresh = async () => {
    console.log('refresh');
    const {
      status,
      data: {
        data: { accessToken },
      },
    } = await getRefreshToken();

    console.log(status);

    switch (status) {
      // refresh token 만료
      case 401:
        console.log('Refresh Token is expired.');
        resetAccessToken();
        sessionStorage?.removeItem('userToken');
        return status;
      // access token 재발급 성공
      case 201:
        setAccessToken(accessToken);
        return status;
      default:
        break;
    }
  };

  useEffect(() => {
    console.log('here');
    // const requestInterceptor = client.interceptors.request.use(async (config) => {
    //   const accessToken = sessionStorage?.getItem('userToken');
    //   if (accessToken) {
    //     // console.log('액세스 토큰 다시 받을게요~');
    //     // await refresh();
    //     const { accessTokenState } = JSON.parse(accessToken);
    //     console.log(accessTokenState);
    //     config.headers.Authorization = `Bearer ${accessTokenState}`;
    //   } else {
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
      async (response) => {
        console.log('response 성공');
        return response;
      },
      async (error) => {
        const { config, status } = error;
        console.log(error);

        if (status >= 400) {
          // access token 만료
          if (status === 401) {
            console.log('Access Token is expired.');
            const refreshStatus = await refresh();
            switch (refreshStatus) {
              case 201:
                return client(config);
              case 401:
                router.push('/auth');
                break;
            }
          }
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
