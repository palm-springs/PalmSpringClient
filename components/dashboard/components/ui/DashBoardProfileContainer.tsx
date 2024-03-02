import React, { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

import { NoUserProfileIcon } from '@/public/icons';
interface DashBoardProfileContainerProps {
  userName: string;
  email: string;
  profileImgUrl: string | null;
  setIsPopOverMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const DashBoardProfileContainer = (props: DashBoardProfileContainerProps) => {
  const { userName, email, profileImgUrl, setIsPopOverMenuOpen } = props;

  return (
    <DashBoardProfileContainerUI
      tabIndex={0}
      onBlur={() => setIsPopOverMenuOpen(false)}
      onClick={() => setIsPopOverMenuOpen(true)}>
      {profileImgUrl ? (
        <ProfileImg src={profileImgUrl} alt="프로필 이미지" width={40} height={40} />
      ) : (
        <NoUserProfileIcon />
      )}
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

  transition: 0.3s ease-out;

  margin-bottom: 0.8rem;
  border-radius: 0.8rem;
  cursor: pointer;
  width: 25.4rem;
  height: 5.6rem;

  &:hover {
    background: ${({ theme }) => theme.colors.grey_200};
  }

  & > img {
    margin: 0.8rem;
  }

  & > svg {
    margin: 0.8rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      width: 20rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

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

const ProfileImg = styled(Image)`
  border-radius: 50%;
  width: 4rem;
  overflow: hidden;
`;
