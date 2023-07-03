import Image from 'next/image';

import { LoginButtonImg } from '@/public/images';

export default function LoginLanding() {
  // 구글 로그인창 호출
  const GOOGLE_END_POINT = 'https://accounts.google.com/o/oauth2/v2/auth';
  return (
    <a
      href={`${GOOGLE_END_POINT}?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile`}>
      <Image src={LoginButtonImg} alt="로그인 버튼" width={500} />
    </a>
  );
}
