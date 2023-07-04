'use client';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import styled from 'styled-components';

import { GOOGLE_REDIRECT_URI } from '@/constants/auth';
import { LogoIcon } from '@/public/icons';
import { GoogleImg } from '@/public/images';
import { authClientInfo } from '@/types/auth';

import RequestAccessToken from './RequestAccessToken';

const LoginLanding = (props: authClientInfo) => {
  const { clientId } = props;
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  if (code) {
    RequestAccessToken({ ...props, code });
  }

  // 구글 로그인창 호출
  const GOOGLE_END_POINT = 'https://accounts.google.com/o/oauth2/v2/auth';
  return (
    <LoginLandingContainer>
      <LoginContainer>
        <Image src={LogoIcon} alt="로고" />
        <LoginText>팜스프링으로 최고의 팀 블로그를 운영해보세요</LoginText>
        <LoginButton
          href={`${GOOGLE_END_POINT}?client_id=${clientId}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile`}>
          <Image src={GoogleImg} alt="구글 로고" />
          <span>구글로 시작하기</span>
        </LoginButton>
      </LoginContainer>
    </LoginLandingContainer>
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

  width: 21.75rem;
`;

const LoginText = styled.h1`
  margin-top: 1.5rem;
  ${({ theme }) => theme.fonts.Body1_Semibold};
`;

const LoginButton = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  margin-top: 2.5rem;

  border: 1px solid ${({ theme }) => theme.colors.grey_400};

  border-radius: 1rem;

  background-color: ${({ theme }) => theme.colors.grey_0};
  width: 21.75rem;
  height: 3.5rem;

  & > span {
    ${({ theme }) => theme.fonts.Body1_Semibold};
  }
`;
