'use client';
import React from 'react';

import InviteNotFound from '@/components/invite/ui/InviteNotFound';
import { useGetVerifyEmail } from '@/hooks/auth';
import { checkSessionStorage } from '@/utils/checkSessionStorage';

import PasswordResetLanding from './PasswordResetLanding';

const PasswordVerify = ({ code }: { code: string }) => {
  const sessionStorage = checkSessionStorage();

  // 토큰 검증
  const data = useGetVerifyEmail('reset', code);

  // 실패시
  if (!data || !data.data || data.code !== 200) {
    return <InviteNotFound type="reset" />;
  }

  // 성공시
  sessionStorage?.setItem('email', data.data.email);
  sessionStorage?.setItem('isVerify', 'true');
  return <PasswordResetLanding emailData={data.data.email} />;
};

export default PasswordVerify;
