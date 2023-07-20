'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { client } from '@/api';
import { getRefreshToken } from '@/api/auth';

import { accessTokenState } from './states/atom';

const AuthRequired = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const resetAccessToken = useResetRecoilState(accessTokenState);
  // console.log(accessToken);
  // access token 재발급 요청 함수
  // const refresh = async () => {
  //   const newAccessToken = await getRefreshToken();
  //   console.log('refresh');
  //   switch (newAccessToken.code) {
  //     case 401:
  //       router.push('/auth');
  //       break;
  //     case 200:
  //       setAccessToken(`Bearer ${newAccessToken}`);
  //       break;
  //     default:
  //       console.log(newAccessToken.message);
  //       break;
  //   }
  // };

  useEffect(() => {
    console.log('first effect');
    if (accessToken) {
      client.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    }
    if (accessToken === null) {
      router.push('/auth');
      console.log('no accessToken');
      // refresh();
    }
  }, []);

  useEffect(() => {
    console.log('second effect');
    const responseInterceptor = client.interceptors.response.use(
      (response) => {
        // if (response.status === 200) {
        //   console.log(response.data.data.accessToken);
        //   setAccessToken(response.data.data.accessToken);
        // }
        return response;
      },
      async (err) => {
        const { status, statusText } = err.response;
        if (status === 401) {
          // 액세스 토큰 만료
          // if (statusText === 'Access Token is expired.') {
          // console.log('err msg:', statusText);
          resetAccessToken();
          router.push('/auth');
          // refresh();
          // return client(config);
          // }
          // 리프레시 토큰 만료
          // else if (statusText === 'Refresh Token is expired.') {
          //   console.log('err msg:', statusText);
          //   resetAccessToken();
          //   router.push('/auth');
          // } else {
          //   console.log(statusText);
          // }
          // return Promise.reject(err);
        }

        // authorization 값 없을 때
        else if (status === 400) {
          console.log('400 err');
          router.push('/auth');
        }
      },
    );

    return () => {
      client.interceptors.response.eject(responseInterceptor);
    };
  }, [router, accessToken, resetAccessToken]);

  return <div>{children}</div>;
};

export default AuthRequired;
