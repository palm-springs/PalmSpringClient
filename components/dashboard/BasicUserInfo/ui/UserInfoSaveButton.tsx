'use client';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { useUpdateUserInfo } from '@/hooks/dashboard';
import { Response } from '@/types/common';
import { UserBasicInfoProps } from '@/types/user';

import { userInfoState } from '../state/user';

interface UserInfoSaveButtonProps {
  userPreviousData: Response<UserBasicInfoProps> | undefined;
}

const UserInfoSaveButton = (props: UserInfoSaveButtonProps) => {
  const { userPreviousData } = props;
  const [isDisabled, setIsDisabled] = useState(true);

  const { team } = useParams();
  const userInfoDataState = useRecoilValue(userInfoState);

  const handleButtonDisabled = () => {
    setIsDisabled(true);
  };

  const { mutate: updateUserInfo } = useUpdateUserInfo(team as string, userInfoDataState, handleButtonDisabled);

  useEffect(() => {
    if (userPreviousData) {
      const {
        data: { thumbnail, nickname, url, job, description },
      } = userPreviousData;
      if (userInfoDataState.url === '' || userInfoDataState.nickname === '') {
        setIsDisabled(true);
      } else if (
        thumbnail !== userInfoDataState.thumbnail ||
        nickname !== userInfoDataState.nickname ||
        url !== userInfoDataState.url ||
        job !== userInfoDataState.job ||
        description !== userInfoDataState.description
      ) {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
    }
  }, [userInfoDataState]);

  const handleOnClick = () => {
    updateUserInfo();
  };
  return (
    <>
      <SaveButton type="button" disabled={isDisabled} onClick={handleOnClick}>
        저장하기
      </SaveButton>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          bottom: 50,
        }}
      />
    </>
  );
};

export default UserInfoSaveButton;

const SaveButton = styled.button<{ disabled: boolean }>`
  ${({ theme }) => theme.fonts.Button_medium};
  display: flex;
  position: absolute;
  top: 6.8rem;
  left: 0;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  margin-left: 104.1rem;
  border-radius: 0.8rem;
  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.background_green : theme.colors.green)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem 2rem;
  width: 9.6rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};

  &:not(:disabled):hover {
    transition: 0.3s ease-out;
    background-color: ${({ theme }) => theme.colors.green_hover};
    cursor: pointer;
  }
`;
