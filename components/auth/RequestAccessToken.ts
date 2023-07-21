import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import { postSocialLogin } from '@/api/auth';
import { useGetAccessToken } from '@/hooks/auth';
import { getAccessTokenProps } from '@/types/auth';

import { accessTokenState } from './states/atom';

const RequestAccessToken = async (props: getAccessTokenProps) => {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const platformData = useGetAccessToken(props);

  const router = useRouter();

  if (platformData) {
    const data = await postSocialLogin('google', platformData?.access_token);
    const { accessToken } = data.data;
    setAccessToken(accessToken);

    if (data.code === 200) {
      router.push('/create-blog');
    }
  }
};

export default RequestAccessToken;
