'use client';
import Lottie from 'lottie-react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import SuccessLottie from '@/public/lottie/blogCompleteLottie.json';

import { createBlogDataState } from '../info/states/atom';

const LoginSuccessLanding = () => {
  const { name, url } = useRecoilValue(createBlogDataState);
  return (
    <LoginSuccessContainer>
      <Lottie animationData={SuccessLottie} className="lottie" />
      <BlogName>{name}</BlogName>
      <SuccessMessage>블로그 개설이 완료되었습니다</SuccessMessage>
      <GoDashBoardButton href={`/${url}/dashboard/upload`}>대시보드 바로가기</GoDashBoardButton>
    </LoginSuccessContainer>
  );
};

export default LoginSuccessLanding;
const LoginSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  & > .lottie {
    margin-bottom: 3.2rem;
    width: 49.7rem;
    height: 25.9rem;
  }
`;

const BlogName = styled.h1`
  ${({ theme }) => theme.fonts.Title};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const SuccessMessage = styled.h2`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const GoDashBoardButton = styled.a`
  ${({ theme }) => theme.fonts.Button_large};
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 3.9rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};

  width: 18.1rem;
  height: 4.2rem;
  color: ${({ theme }) => theme.colors.grey_0};
  &:hover {
    transition: 0.3s ease-out;
    background-color: ${({ theme }) => theme.colors.green_hover};
  }
`;
