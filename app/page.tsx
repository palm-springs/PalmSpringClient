'use client';

import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import client from '@/api';
import { getRefreshToken } from '@/api/auth';
import { getUserInfoAfterLogin } from '@/api/dashboard';
import { accessTokenState } from '@/components/auth/states/atom';
import LandingPage from '@/components/landing/LandingPage';

const Home = () => {
  const [dashboardUrl, setDashboardUrl] = useState('');

  // recoil access token
  const [, setAccessToken] = useRecoilState(accessTokenState);

  // access token 재발급 요청 함수 (reissue)
  const refresh = async () => {
    const { code, data } = await getRefreshToken();

    if (code === 201) {
      setAccessToken(data.accessToken);
      return data.accessToken;
    } else {
      return;
    }
  };

  // check Auth and redirect to dashboard
  const checkAuthValidation = async () => {
    const newAccessToken = await refresh();
    if (newAccessToken) {
      client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
      const { data } = await getUserInfoAfterLogin('', newAccessToken);

      if (!data.joinBlogList || data.joinBlogList.length === 0) {
        setDashboardUrl('/no-team/dashboard/upload');
      } else {
        setDashboardUrl(`/${data.joinBlogList[0].blogUrl}/dashboard/upload`);
      }
    }
    return;
  };

  useEffect(() => {
    checkAuthValidation();
  }, []);

  return <LandingPage dashboardUrl={dashboardUrl} />;
};

export default Home;
