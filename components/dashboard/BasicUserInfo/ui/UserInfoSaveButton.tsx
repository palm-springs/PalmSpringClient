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
  const { mutate: updateUserInfo } = useUpdateUserInfo(team, userInfoDataState);

  useEffect(() => {
    if (userPreviousData) {
      const {
        data: { thumbnail, nickname, url, job, description },
      } = userPreviousData;
      if (
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

  const notify = () =>
    toast('변경 사항이 저장되었습니다', {
      id: 'link copied',
      style: {
        padding: '1.6rem 2rem',
        borderRadius: '3.2rem',
        background: '#343A40',
        color: '#fff',
        fontSize: '1.4rem',
        fontFamily: 'Pretendard',
        fontStyle: 'normal',
        fontWeight: '700',
        letterSpacing: '-0.028rem',
      },
    });

  const handleOnClick = () => {
    updateUserInfo();
    notify();
    setIsDisabled(true);
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
`;
