import axios from 'axios';

import { getAccessTokenResponse } from '@/types/auth';

// login 관련 api 호출 함수
export const getAccessToken = async (code: string) => {
  const { data } = await axios.post<getAccessTokenResponse>(
    `https://oauth2.googleapis.com/token?code=${code}&client_id=${process.env.GOOGLE_CLIENT_ID}&client_secret=${process.env.GOOGLE_CLIENT_SECRET}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET}&
grant_type=authorization_code`,
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    },
  );
  return data;
};

export const postSocialLogin = async (platform: string, AccessToken: string) => {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/user/login/social/${platform}`,
    {
      accessToken: AccessToken,
    },
    {
      headers: { 'content-type': 'application/json' },
      withCredentials: true,
    },
  );
  return data;
};
