'use client';
import { styled } from 'styled-components';

const LoginPage = () => {
  return (
    <>
      <Title>로그인 페이지 입니다</Title>
      <Content>내용내용내용내용내용내용</Content>
    </>
  );
};

export default LoginPage;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.pink_300};
  font-size: 10rem;
`;

const Content = styled.p`
  color: ${({ theme }) => theme.colors.gray_900_60};
  font-size: 5rem;
`;
