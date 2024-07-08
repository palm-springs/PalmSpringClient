'use client';
import React from 'react';

import InviteNotFound from '@/components/invite/ui/InviteNotFound';
import { useGetVerifyEmail } from '@/hooks/auth';
import { checkSessionStorage } from '@/utils/checkSessionStorage';

import PasswordResetUiLanding from './PasswordResetUiLanding';

const PasswordVerify = ({ code }: { code: string }) => {
  // 토큰 검증
  const data = useGetVerifyEmail('reset', code);

  const sessionStorage = checkSessionStorage();
  if (sessionStorage?.getItem('isVerify') === 'true')
    return <PasswordResetUiLanding emailData={sessionStorage?.getItem('email') || ''} />;

  if (!data) return;

  // 실패시
  if (!data.data || data.code !== 200) {
    return <InviteNotFound type="reset" />;
  }

  // 성공시
  sessionStorage?.setItem('email', data.data.email);
  sessionStorage?.setItem('isVerify', 'true');
  return <PasswordResetUiLanding emailData={data.data.email} />;
};

export default PasswordVerify;
