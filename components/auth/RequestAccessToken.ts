import { postSocialLogin } from '@/api/auth';
import { useGetAccessToken } from '@/hooks/auth';
import { getAccessTokenProps } from '@/types/auth';

const RequestAccessToken = async (props: getAccessTokenProps) => {
  const platformData = useGetAccessToken(props);
  if (platformData) {
    const { data } = await postSocialLogin('google', platformData?.access_token);
    console.log(data.accessToken);
  }
};

export default RequestAccessToken;
