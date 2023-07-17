'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRecoilState, useResetRecoilState } from 'recoil';

import { client } from '@/api';
import { getRefreshToken } from '@/api/auth';

import { accessTokenState } from './states/atom';

const AuthRequired = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  console.log('here');

  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const resetAccessToken = useResetRecoilState(accessTokenState);
  console.log(accessToken);
  // access token 재발급 요청 함수
  const refresh = async () => {
    const newAccessToken = await getRefreshToken();
    console.log('refresh');
    switch (newAccessToken.code) {
      case 401:
        router.push('/auth');
        break;
      case 200:
        setAccessToken(`Bearer ${newAccessToken}`);
        break;
      default:
        console.log(newAccessToken.message);
        break;
    }
  };

  useEffect(() => {
    console.log('first effect');
    if (accessToken === null) {
      console.log('no accessToken');
      refresh();
    }
  }, []);

  useEffect(() => {
    console.log('seconde effect');
    const responseInterceptor = client.interceptors.response.use(
      (response) => {
        return response;
      },
      async (err) => {
        const { code, msg } = err.response;
        const config = err.config;

        console.log('err here');

        if (code === 401) {
          // 액세스 토큰 만료
          if (msg === 'Access Token is expired.') {
            console.log('err msg:', msg);
            refresh();
            console.log('come here');
            return client(config);
          }
          // 리프레시 토큰 만료
          else if (msg === 'Refresh Token is expired.') {
            console.log('err msg:', msg);
            resetAccessToken();
            router.push('/auth');
          } else {
            console.log(msg);
          }
          return Promise.reject(err);
        }

        // authorization 값 없을 때
        else if (code === 400) {
          refresh();
          console.log('come here 2');
          return client(config);
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
