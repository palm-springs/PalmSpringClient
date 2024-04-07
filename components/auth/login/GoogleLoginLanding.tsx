'use client';

import styled from 'styled-components';

import { GoogleLogoIcon } from '@/public/icons';

const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI;
// 브랜치테스트용
// const redirectUri = TEST_REDIRECT_URI;

const GoogleLoginLanding = () => {
  // 구글 로그인창 호출
  const GOOGLE_END_POINT = 'https://accounts.google.com/o/oauth2/v2/auth';

  return (
    <>
      <LoginLandingContainer>
        <LoginContainer>
          <LoginButton
            href={`${GOOGLE_END_POINT}?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`}>
            <GoogleLogoIcon />
            <span>구글로 로그인</span>
          </LoginButton>
        </LoginContainer>
      </LoginLandingContainer>
    </>
  );
};
export default GoogleLoginLanding;

const LoginLandingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 34.8rem;
`;

const LoginButton = styled.a`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  border: 1px solid ${({ theme }) => theme.colors.grey_400};

  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.colors.grey_0};
  width: 34.8rem;
  height: 5.6rem;

  &:hover {
    transition: 0.3s ease-out;
    background-color: ${({ theme }) => theme.colors.grey_50};;
  }

  & > span {
    ${({ theme }) => theme.fonts.Body3_Semibold};
  }
`;
