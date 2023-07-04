'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { LoginButtonImg } from '@/public/images';
import { authClientInfo } from '@/types/auth';

import RequestAccessToken from './RequestAccessToken';

export default function LoginLanding(props: authClientInfo) {
  const { clientId, clientSecret } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code') as string;

  if (code !== null) {
    RequestAccessToken({ clientId, clientSecret, code });
  }

  // 구글 로그인창 호출
  const GOOGLE_END_POINT = 'https://accounts.google.com/o/oauth2/v2/auth';
  return (
    <a
      href={`${GOOGLE_END_POINT}?client_id=${clientId}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile`}>
      <Image src={LoginButtonImg} alt="로그인 버튼" width={500} />
    </a>
  );
}
