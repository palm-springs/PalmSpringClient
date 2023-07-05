import axios from 'axios';

import { GOOGLE_REDIRECT_URI } from '@/constants/auth';
import { getAccessTokenProps, getAccessTokenResponse } from '@/types/auth';

// login 관련 api 호출 함수
export const getAccessToken = async (props: getAccessTokenProps) => {
  const { clientId, clientSecret, code } = props;
  const { data } = await axios.post<getAccessTokenResponse>(
    `https://oauth2.googleapis.com/token?code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${GOOGLE_REDIRECT_URI}&
grant_type=authorization_code`,
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    },
  );
  return data;
};
