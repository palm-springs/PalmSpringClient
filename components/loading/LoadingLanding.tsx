import React from 'react';
import { useSearchParams } from 'next/navigation';

import { authClientInfo } from '@/types/auth';

import RequestAccessToken from '../auth/RequestAccessToken';

const LoadingLanding = (props: authClientInfo) => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  if (code) {
    RequestAccessToken({ ...props, code });
  }

  return <div>로딩중입니다...</div>;
};

export default LoadingLanding;
