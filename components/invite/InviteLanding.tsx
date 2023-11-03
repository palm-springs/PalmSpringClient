'use client';
import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useGetMemberInvite } from '@/hooks/auth';

import LoadingLottie from '../common/ui/LoadingLottie';

import InviteAcceptForm from './ui/InviteAcceptForm';
import InviteNotFound from './ui/InviteNotFound';

const InviteAcceptLanding = () => {
  const router = useRouter();
  const pathname = usePathname();
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  const searchParams = useSearchParams();

  // 초대 code
  const code = searchParams.get('code');
  const data = useGetMemberInvite(code);

  // code parmeter 없을 때
  if (!code) return <InviteNotFound />;

  if (data) {
    // 초대 사용자와 로그인 사용자 불일치
    if (data.code === 403) {
      sessionStorage?.setItem('redirectUrl', `${pathname}?code=${code}`);
      router.push(`/auth`);
    }
    // 유효하지 않은 초대 링크
    else if (data.code === 404) {
      return <InviteNotFound />;
    }
    // 초대 수락하기 폼
    else {
      return <InviteAcceptForm blogName={data.data.blogName} blogUrl={data.data.blogUrl} />;
    }
  } else {
    // 유효하지 않은 초대 링크
    return <LoadingLottie width={10} height={10} fit />;
  }
};

export default InviteAcceptLanding;
