import React from 'react';
import { redirect } from 'next/navigation';

import client from '@/api';
import { getVerifyEmail, platformLogin } from '@/api/auth';
import InviteNotFound from '@/components/invite/ui/InviteNotFound';

const page = async ({ searchParams }: { searchParams: { [key: string]: string | undefined } }) => {
  // 초대 code
  const code = searchParams.code;

  if (code) {
    const data = await getVerifyEmail('register', code);
    if (!data) return;

    const { code: verifyCode, data: VerifyData } = data;
    if (verifyCode === 200 && VerifyData !== null) {
      const data = await platformLogin({ email: VerifyData.email, password: VerifyData.password });
      if (data) {
        client.defaults.headers.common.Authorization = `Bearer ${data.data?.accessToken}`;
        redirect('/no-team/dashboard/upload');
      }
    } else if (verifyCode === 400 || verifyCode === 404) {
      return <InviteNotFound type="register" />;
    }
  }

  return <div />;
};

export default page;
