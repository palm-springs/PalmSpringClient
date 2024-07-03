'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import PasswordResetLanding from '@/components/auth/login/password/reset/PasswordResetLanding';
import PasswordVerify from '@/components/auth/login/password/reset/PasswordVerify';
import InviteNotFound from '@/components/invite/ui/InviteNotFound';
import { checkSessionStorage } from '@/utils/checkSessionStorage';

const Page = () => {
  const sessionStorage = checkSessionStorage();
  // 이메일 인증 code(토큰) 받아오기
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  if (!code) return <InviteNotFound type="reset" />;

  // 검증 미실행 된 경우에만 검증
  if (sessionStorage?.getItem('isVerify') !== 'true') {
    // 토큰 검증
    return (
      <Suspense>
        <PasswordVerify code={code} />{' '}
      </Suspense>
    );
  } else {
    // 비밀번호 재설정 UI 렌더링
    const email = sessionStorage?.getItem('email');
    return (
      <Suspense>
        <PasswordResetLanding emailData={email || 'you@example.com'} />
      </Suspense>
    );
  }
};

export default Page;
