'use client';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { useSearchParams } from 'next/navigation';

import GoogleLoginLanding from '@/components/auth/login/GoogleLoginLanding';
import { LoginUserState } from '@/constants/Auth';
import { inviteErrorNotify, noUserErrorNotify, wrongPlatformNotify } from '@/utils/auth';

import BgButton from '../ui/BgButton';
import Contour from '../ui/Contour';
import FlexContainer from '../ui/FlexContainer';
import Input from '../ui/Input';
import LinkButton from '../ui/LinkButton';
import Title from '../ui/Title';

const LoginLanding = () => {
  const redirectState = useSearchParams().get('userState');

  useEffect(() => {
    switch (redirectState) {
      case LoginUserState.INVITE_MISMATCH:
        inviteErrorNotify();
        break;
      case LoginUserState.NO_USER:
        noUserErrorNotify();
        break;
      case LoginUserState.WRONG_PLATFORM:
        wrongPlatformNotify();
        break;
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

      <FlexContainer width={34.8}>
        <Title>로그인</Title>
        <GoogleLoginLanding />
        <Contour>or</Contour>

        <Input>이메일</Input>
        <Input>비밀번호</Input>

        <BgButton>로그인</BgButton>
        <LinkButton href="/sign-up">회원가입</LinkButton>
      </FlexContainer>
    </>
  );
};

export default LoginLanding;
