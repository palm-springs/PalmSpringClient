'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';

import { useGetAccessToken } from '@/hooks/auth';
import { authClientInfo } from '@/types/auth';

interface RequestAccessTokenProps extends authClientInfo {
  children: React.ReactNode;
}

const RequestAccessToken = (props: RequestAccessTokenProps) => {
  const { clientId, clientSecret, children } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code') as string;

  const data = useGetAccessToken({ clientId, clientSecret, code });

  return <>{children}</>;
};

export default RequestAccessToken;
