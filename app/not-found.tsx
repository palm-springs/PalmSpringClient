'use client';

import styled from 'styled-components';

import { Error404Img } from '@/public/images';

const NotFound = () => {
  return (
    <Error404Container>
      <Error404Img />
      <MainMessage>페이지가 존재하지 않습니다.</MainMessage>
      <SubMessage>
        요청하신 페이지가 사라졌거나,
        <br />
        일시적으로 사용이 중단되었어요.
      </SubMessage>
    </Error404Container>
  );
};

export default NotFound;

const Error404Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`;

const MainMessage = styled.h1`
  ${({ theme }) => theme.fonts.Heading1};
  margin-top: 4.4rem;
`;

const SubMessage = styled.h1`
  ${({ theme }) => theme.fonts.Body1_Semibold};
  margin-top: 1.2rem;
  text-align: center;
  line-height: 150%;
`;
