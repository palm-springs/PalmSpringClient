'use client';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

import PasswordResetUiLanding from '@/components/auth/login/password/reset/PasswordResetUiLanding';
import PasswordVerify from '@/components/auth/login/password/reset/PasswordVerify';
import InviteNotFound from '@/components/invite/ui/InviteNotFound';
import { checkSessionStorage } from '@/utils/checkSessionStorage';

const PasswordResetLanding = () => {
  const [isVerify, setIsVerify] = useState(true);
  // 이메일 인증 code(토큰) 받아오기
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const sessionStorage = checkSessionStorage();

  useEffect(() => {
    if (sessionStorage?.getItem('isVerify') !== 'true') {
      setIsVerify(false);
    }
  }, []);

  if (!code) return <InviteNotFound type="reset" />;

  // 검증 미실행 된 경우에만 검증
  if (!isVerify) {
    // 토큰 검증
    return <PasswordVerify code={code} />;
  } else {
    // 비밀번호 재설정 UI 렌더링
    const email = sessionStorage?.getItem('email');
    return <PasswordResetUiLanding emailData={email || 'you@example.com'} />;
  }
};

export default PasswordResetLanding;
