'use client';
import React, { useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';

import client from '@/api';
import { getRefreshToken } from '@/api/auth';
import { getUserInfoAfterLogin } from '@/api/dashboard';

import { accessTokenState } from '../components/auth/states/atom';

export const useCheckAuthValidation = async () => {
  const router = useRouter();

  // recoil access token
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  // access token 재발급 요청 함수 (reissue)
  const refresh = async () => {
    console.log('reissue 요청');
    const { code, data } = await getRefreshToken();

    if (code === 201) {
      setAccessToken(data.accessToken);
      console.log(`reissue해와서 recoil set : ${data.accessToken}`);
      return data.accessToken;
    } else {
      return;
    }
  };

  // check Auth and redirect to dashboard
  const newAccessToken = await refresh();
  if (newAccessToken) {
    client.defaults.headers.common.Authorization = `Bearer ${newAccessToken}`;
    const { data } = await getUserInfoAfterLogin('', newAccessToken);

    if (!data.joinBlogList || data.joinBlogList.length === 0) {
      redirect('/no-team/dashboard/upload');
    } else {
      redirect(`/${data.joinBlogList[0].blogUrl}/dashboard/upload`);
    }
  }
};
