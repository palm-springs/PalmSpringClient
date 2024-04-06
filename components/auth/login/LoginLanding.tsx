'use client';
import { useEffect, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { platformLogin } from '@/api/auth';
import GoogleLoginLanding from '@/components/auth/login/GoogleLoginLanding';
import { LoginUserState } from '@/constants/Auth';
import { failLogin, inviteErrorNotify, noUserErrorNotify } from '@/utils/auth';
import { successLogin } from '@/utils/successLogin';

import BgButton from '../ui/BgButton';
import Contour from '../ui/Contour';
import FlexContainer from '../ui/FlexContainer';
import Input from '../ui/Input';
import LinkButton from '../ui/LinkButton';
import Title from '../ui/Title';

const LoginLanding = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const handleLogin = async () => {
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (!email || !password) return;
    const data = await platformLogin({ email, password });
    if (!data) return;
    const { code, data: loginData } = data;
    if (code === 200) {
      loginData && successLogin(loginData.accessToken, router);
    } else if (code === 400 || code === 404) {
      failLogin();
    }
  };

  const redirectState = useSearchParams().get('userState');

  useEffect(() => {
    if (redirectState !== null) {
      switch (redirectState) {
        case LoginUserState.INVITE_MISMATCH:
          inviteErrorNotify();
          break;
        case LoginUserState.NO_USER:
          noUserErrorNotify();
          break;
      }
    }
  }, []);
  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          bottom: 80,
        }}
      />

      <FlexContainer margin={'auto 0'}>
        <Title>로그인</Title>
        <GoogleLoginLanding />
        <Contour>or</Contour>

        <Input ref={emailRef} type="email">
          이메일
        </Input>
        <Input ref={passwordRef} type="password">
          <span>
            비밀번호 <Link href="/login/password">비밀번호 찾기</Link>
          </span>
        </Input>

        <BgButton disabled={false} onClick={handleLogin}>
          로그인
        </BgButton>
        <LinkButton href="/sign-up">회원가입</LinkButton>
      </FlexContainer>
    </>
  );
};

export default LoginLanding;
