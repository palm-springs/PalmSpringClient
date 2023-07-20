import axios from 'axios';

import { getAccessTokenProps, googleAccessTokenResponse, jwtAccessTokenResponse } from '@/types/auth';
import { Response } from '@/types/common';

import { client } from '.';

// 구글 액세스 토큰 발급
export const getAccessToken = async (props: getAccessTokenProps) => {
  const { clientId, clientSecret, code } = props;
  const { data } = await axios.post<googleAccessTokenResponse>(
    `https://oauth2.googleapis.com/token?code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&
grant_type=authorization_code`,
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    },
  );
  return data;
};

// JWT 토큰 발급
export const postSocialLogin = async (platform: string, AccessToken: string) => {
  const { data } = await client.post<Response<jwtAccessTokenResponse>>(`/api/v1/user/login/social/${platform}`, {
    accessToken: AccessToken,
  });
  return data;
};

export const getRefreshToken = async () => {
  const { data } = await client.get(`/api/v1/auth/reissue`);
  return data;
};
