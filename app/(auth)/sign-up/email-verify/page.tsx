import React from 'react';

import { getVerifyEmail } from '@/api/auth';
import EmailVerifyLanding from '@/components/auth/sign-up/email-verify/EmailVerifyLanding';
import InviteNotFound from '@/components/invite/ui/InviteNotFound';

const page = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  // 가입 인증 code
  const code = searchParams.code;

  if (code) {
    const data = await getVerifyEmail('register', code);
    if (!data) return;

    const { code: verifyCode, data: VerifyData } = data;
    if (verifyCode === 200 && VerifyData !== null) {
      return <EmailVerifyLanding data={VerifyData} />;
    } else if (verifyCode === 400 || verifyCode === 404) {
      return <InviteNotFound type="register" />;
    }
  }

  return <div />;
};

export default page;
