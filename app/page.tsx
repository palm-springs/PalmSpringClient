'use client';
import { redirect } from 'next/navigation';

import client from '@/api';
import { getRefreshToken } from '@/api/auth';
import { getUserInfoAfterLogin } from '@/api/dashboard';
import LandingPage from '@/components/landing/LandingPage';

const Home = () => {
  const checkUser = async () => {
    const data = await getRefreshToken();
    console.log('HOME', data);

    if (data.code === 201) {
      console.log('1212줄임~');
      const newAccessToken = data.data.accessToken;
      if (newAccessToken) {
        client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
        const { data } = await getUserInfoAfterLogin('', newAccessToken);

        console.log(data);

        if (!data.joinBlogList || data.joinBlogList.length === 0) {
          redirect(`https://palms.blog/no-team/dashboard/upload`);
        } else {
          redirect(`https://palms.blog/${data.joinBlogList[0].blogUrl}/dashboard/upload`);
        }
      }
    }
  };

  checkUser();

  return <LandingPage />;
};

export default Home;
