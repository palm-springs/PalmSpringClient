import { useSearchParams } from 'next/navigation';

import { authClientInfo } from '@/types/auth';

import RequestAccessToken from '../auth/RequestAccessToken';
import LoadingLottie from '../common/ui/LoadingLottie';

const LoadingLanding = (props: authClientInfo) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  if (code) {
    RequestAccessToken({ ...props, code });
  }

  return <LoadingLottie width={10} height={10} />;
};

export default LoadingLanding;
