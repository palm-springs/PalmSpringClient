'use client';
import { useEffect, useRef } from 'react';
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import styled from 'styled-components';

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

    // 로그인 API 호출
    const data = await platformLogin({ email, password });
    if (!data) return;
    const { code, data: loginData } = data;

    // 성공시
    if (code === 200) {
      loginData && successLogin(loginData.accessToken, router);
    }
    // 실패시
    else if (code === 400 || code === 404) {
      failLogin();
    }
  };

  const redirectState = useSearchParams().get('userState');

  // login 으로 리다이렉트된 경우 에러 케이스 토스트 분기
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
        position="top-right"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          top: 20,
          right: 24,
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
        <NoticeInfoContainer>
          기존 Google 가입 계정에 대해 Google 로그인이 원활하게 진행되지 않는 경우,{' '}
          <Link href="/login/password">비밀번호 찾기</Link> 를 통해 비밀번호를 설정하신 후 이메일/비밀번호를 통해서도
          로그인할 수 있습니다.
        </NoticeInfoContainer>
      </FlexContainer>
    </>
  );
};

export default LoginLanding;

const NoticeInfoContainer = styled.div`
  margin-top: 4.8rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.grey_600};
  font-size: 1.4rem;
  & a {
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.background_green_soft};
    padding: 0.2rem 0.6rem;
    color: ${({ theme }) => theme.colors.green_hover};
    font-size: 1.2rem;
  }
`;
