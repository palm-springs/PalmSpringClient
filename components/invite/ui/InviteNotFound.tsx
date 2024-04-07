'use client';
import styled from 'styled-components';

import { Error404Img } from '@/public/images';

interface InviteNotFoundProps {
  type: string;
}

const InviteNotFound = (props: InviteNotFoundProps) => {
  const { type } = props;
  return (
    <Error404Container>
      <Error404Img />
      <MainMessage>유효하지 않은 {type === 'invite' && '초대'} 링크입니다.</MainMessage>
      <SubMessage>
        링크가 유효하지 않습니다.
        <br />
        {type === 'invite' && '초대'} 링크를 다시 한번 확인해주세요.
      </SubMessage>
    </Error404Container>
  );
};

export default InviteNotFound;

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
