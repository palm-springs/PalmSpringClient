import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

import { DuckDuckImg } from '@/public/images';

interface DashBoardProfileContainerProps {
  userName: string;
  email: string;
  profileImgUrl?: string;
}

const DashBoardProfileContainer = (props: DashBoardProfileContainerProps) => {
  const { userName, email, profileImgUrl } = props;

  return (
    <DashBoardProfileContainerUI>
      <Image src={profileImgUrl ?? DuckDuckImg} alt="프로필 이미지" />
      <div>
        <span>{userName}</span>
        <span>{email}</span>
      </div>
    </DashBoardProfileContainerUI>
  );
};

export default DashBoardProfileContainer;

const DashBoardProfileContainerUI = styled.article`
  display: flex;
  align-items: center;
  width: 25.4rem;
  height: 5.6rem;

  & > img {
    margin: 0.8rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    :first-child {
      margin-bottom: 0.2rem;
      height: 1.7rem;
      ${({ theme }) => theme.fonts.Body3_Semibold};
      color: ${({ theme }) => theme.colors.grey_900};
    }
    :nth-child(2) {
      height: 1.7rem;
      ${({ theme }) => theme.fonts.Body3_Regular};
      color: ${({ theme }) => theme.colors.grey_700};
    }
  }
`;
