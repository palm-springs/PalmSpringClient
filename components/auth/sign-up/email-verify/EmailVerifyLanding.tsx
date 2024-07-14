'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import client from '@/api';
import { platformLogin } from '@/api/auth';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { ACCESS_TOKEN_KEY } from '@/constants/Auth';
import { verifyEmailResponse } from '@/types/auth';

interface EmailVerifyProps {
  data: verifyEmailResponse;
}

const EmailVerifyLanding = (props: EmailVerifyProps) => {
  const { data } = props;
  const router = useRouter();

  useEffect(() => {
    // 이메일 인증 성공한 유저 platform 로그인 후 대시보드 이동
    const getUserLogin = async () => {
      const userData = await platformLogin({ email: data.email, password: data.password });
      if (userData) {
        const accessToken = userData.data?.accessToken;
        if (accessToken) {
          client.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
          sessionStorage?.setItem(ACCESS_TOKEN_KEY, accessToken);
          // 대시보드 이동 후 토스트용
          sessionStorage?.setItem('success-signup', 'true');
          router.push('/no-team/dashboard/statistics');
        }
      }
    };
    getUserLogin();
  });

  return <LoadingLottie width={10} height={10} fit />;
};

export default EmailVerifyLanding;
