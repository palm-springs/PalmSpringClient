import { useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import client from '@/api';
import { postSocialLogin } from '@/api/auth';
import { getUserInfoAfterLogin } from '@/api/dashboard';
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
      const {
        data: { joinBlogList },
      } = await getUserInfoAfterLogin('', accessToken);
      if (joinBlogList.length === 0) {
        router.push('/no-team/dashboard');
      } else {
        router.push(`/${joinBlogList[0].blogUrl}/dashboard/upload`);
      }
    }
  }
};

export default RequestAccessToken;
