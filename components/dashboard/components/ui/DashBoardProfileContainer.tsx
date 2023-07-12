import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

import { DuckDuckImg } from '@/public/images';

interface DashBoardProfileContainerProps {
  userName: string;
  email: string;
  profileImgUrl?: string;
  setIsPopOverMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const DashBoardProfileContainer = (props: DashBoardProfileContainerProps) => {
  const { userName, email, profileImgUrl, setIsPopOverMenuOpen } = props;

  return (
    <DashBoardProfileContainerUI onClick={() => setIsPopOverMenuOpen((prev) => !prev)}>
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

  transition-duration: 0.3s ease-out;

  margin-bottom: 0.8rem;
  cursor: pointer;
  width: 25.4rem;
  height: 5.6rem;

  &:hover {
    background: ${({ theme }) => theme.colors.grey_200};
  }

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
