import axios from 'axios';

import { getAccessTokenProps } from '@/types/auth';

// login 관련 api 호출 함수
export const getAccessToken = async (props: getAccessTokenProps) => {
  const { clientId, clientSecret, code } = props;
  const data = await axios.post(
    `https://oauth2.googleapis.com/token?code=${code}&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=http://localhost:3000/auth&
grant_type=authorization_code`,
    {
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    },
  );
  return data;
};
