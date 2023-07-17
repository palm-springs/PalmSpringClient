import axios from 'axios';

import { GOOGLE_REDIRECT_URI } from '@/constants/auth';
import { getAccessTokenProps, googleAccessTokenResponse, jwtAccessTokenResponse } from '@/types/auth';
import { Response } from '@/types/common';

// login 관련 api 호출 함수
export const getAccessToken = async (props: getAccessTokenProps) => {
  const { clientId, clientSecret, code } = props;
  const { data } = await axios.post<googleAccessTokenResponse>(
    `https://oauth2.googleapis.com/token?code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${GOOGLE_REDIRECT_URI}&
grant_type=authorization_code`,
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    },
  );
  return data;
};

export const postSocialLogin = async (platform: string, AccessToken: string) => {
  const { data } = await axios.post<Response<jwtAccessTokenResponse>>(
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
