'use client';

import { useEffect, useState } from 'react';

import client from '@/api';
import { getRefreshToken } from '@/api/auth';
import { getUserInfoAfterLogin } from '@/api/dashboard';
import LandingPage from '@/components/landing/LandingPage';
import { ACCESS_TOKEN_KEY } from '@/constants/Auth';
import { checkSessionStorage } from '@/utils/checkSessionStorage';

const Home = () => {
  const [dashboardUrl, setDashboardUrl] = useState('');

  // sessionStorage
  const sessionStorage = checkSessionStorage();

  // access token
  const accessToken = sessionStorage?.getItem(ACCESS_TOKEN_KEY);

  // access token 재발급 요청 함수 (reissue)
  const refresh = async () => {
    const { code, data } = await getRefreshToken();

    if (code === 201) {
      sessionStorage?.setItem(ACCESS_TOKEN_KEY, data.accessToken);
      return data.accessToken;
    } else {
      sessionStorage?.removeItem(ACCESS_TOKEN_KEY);
      return;
    }
  };

  const setAuthorization = async (accessToken: string) => {
    client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    const { data } = await getUserInfoAfterLogin('', accessToken);

    if (!data.joinBlogList || data.joinBlogList.length === 0) {
      setDashboardUrl('/no-team/dashboard/upload');
    } else {
      setDashboardUrl(`/${data.joinBlogList[0].blogUrl}/dashboard/upload`);
    }
  };

  // check Auth and redirect to dashboard
  const checkAuthValidation = async () => {
    if (accessToken) {
      await setAuthorization(accessToken);
    } else {
      const newAccessToken = await refresh();
      if (newAccessToken) {
        await setAuthorization(newAccessToken);
      }
      return;
    }
  };

  useEffect(() => {
    checkAuthValidation();
  }, []);

  return <LandingPage dashboardUrl={dashboardUrl} />;
};

export default Home;
