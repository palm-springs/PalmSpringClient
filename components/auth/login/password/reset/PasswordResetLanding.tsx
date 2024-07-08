'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import PasswordResetUiLanding from '@/components/auth/login/password/reset/PasswordResetUiLanding';
import PasswordVerify from '@/components/auth/login/password/reset/PasswordVerify';
import InviteNotFound from '@/components/invite/ui/InviteNotFound';
import { checkSessionStorage } from '@/utils/checkSessionStorage';

const PasswordResetLanding = () => {
  const [isVerify, setIsVerify] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState('');

  // 이메일 인증 code(토큰) 받아오기
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  useEffect(() => {
    setIsClient(true);

    const sessionStorage = checkSessionStorage();
    if (sessionStorage?.getItem('isVerify') !== 'true') {
      setIsVerify(false);
    }

    const emailData = sessionStorage?.getItem('email');
    setEmail(emailData || 'you@example.com');
  }, []);

  if (!code) return <InviteNotFound type="reset" />;
  if (!isClient) return null;

  // 검증 미실행 된 경우에만 검증
  if (!isVerify) {
    // 토큰 검증
    return <PasswordVerify code={code} />;
  } else {
    // 비밀번호 재설정 UI 렌더링
    return <PasswordResetUiLanding emailData={email} />;
  }
};

export default PasswordResetLanding;
