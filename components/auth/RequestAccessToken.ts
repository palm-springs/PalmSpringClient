import { useSetRecoilState } from 'recoil';

import { postSocialLogin } from '@/api/auth';
import { useGetAccessToken } from '@/hooks/auth';
import { getAccessTokenProps } from '@/types/auth';

import { accessTokenState } from './states/atom';

const RequestAccessToken = async (props: getAccessTokenProps) => {
  const setAccessToken = useSetRecoilState(accessTokenState);
  const platformData = useGetAccessToken(props);

  if (platformData) {
    const {
      data: { accessToken },
    } = await postSocialLogin('google', platformData?.access_token);
    setAccessToken(accessToken);
  }
};

export default RequestAccessToken;
