'use client';

import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';

import { LogoIcon } from '@/public/icons';
import { GoogleImg } from '@/public/images';
import { authClientInfo } from '@/types/auth';

const LoginLanding = (props: authClientInfo) => {
  const { clientId } = props;
  const redirectState = useSearchParams().get('state');

  const errorNotify = () => {
    toast.error('초대된 사용자가 아닙니다. 다시 로그인해주세요.', {
      duration: 3000,
      id: 'error on modifying invite link',
      style: {
        padding: '1.6rem 2rem',
        borderRadius: '3.2rem',
        background: '#343A40',
        color: '#fff',
        fontSize: '1.4rem',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: '-0.028rem',
      },
    });
  };

  useEffect(() => {
    if (redirectState === 'userMismatch') {
      errorNotify();
    }
  }, []);
  // 구글 로그인창 호출
  const GOOGLE_END_POINT = 'https://accounts.google.com/o/oauth2/v2/auth';
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
      <LoginLandingContainer>
        <LoginContainer>
          <LogoIcon />
          <LoginText>우리 팀 이야기를 세상에 전달하는 방법</LoginText>
          <LoginButton
            href={`${GOOGLE_END_POINT}?client_id=${clientId}&redirect_uri=${
              // process.env.NODE_ENV === 'production' ? 'https://palms.blog/loading' : 'http://localhost:3000/loading'
              process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI
            }&response_type=code&scope=email profile`}>
            <Image src={GoogleImg} alt="구글 로고" />
            <span>구글로 시작하기</span>
          </LoginButton>
        </LoginContainer>
      </LoginLandingContainer>
    </>
  );
};
export default LoginLanding;

const LoginLandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 34.8rem;
`;

const LoginText = styled.h1`
  ${({ theme }) => theme.fonts.Body1_Semibold};
  margin-top: 1.6rem;
`;

const LoginButton = styled.a`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  margin-top: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_400};

  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.colors.grey_0};
  width: 34.8rem;
  height: 5.6rem;

  & > span {
    ${({ theme }) => theme.fonts.Body1_Semibold};
  }
`;
