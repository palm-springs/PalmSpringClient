'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { GOOGLE_REDIRECT_URI } from '@/constants/auth';
import { LoginButtonImg } from '@/public/images';
import { authClientInfo } from '@/types/auth';

import RequestAccessToken from './RequestAccessToken';

export default function LoginLanding(props: authClientInfo) {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  if (code !== null) {
    RequestAccessToken({ ...props, code });
  }

  // 구글 로그인창 호출
  const GOOGLE_END_POINT = 'https://accounts.google.com/o/oauth2/v2/auth';
  return (
    <a
      href={`${GOOGLE_END_POINT}?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile`}>
      <Image src={LoginButtonImg} alt="로그인 버튼" width={500} />
    </a>
  );
}
