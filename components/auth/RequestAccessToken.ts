import { getAccessToken, postSocialLogin } from '@/api/auth';

const RequestAccessToken = async (code: string) => {
  const data = await getAccessToken(code);
  if (data) {
    const loginAccessToken = postSocialLogin('google', data?.access_token);
    console.log(loginAccessToken);
  }
};

export default RequestAccessToken;
