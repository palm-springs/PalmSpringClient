'use client';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { UserBasicInfo } from '@/types/user';
import CheckUserIdDuplication from '@/utils/checkUserIdDuplication';

import { invitedUserDataState } from '../states/userData';

import UserDescription from './UserDescription';
import UserId from './UserId';
import UserName from './UserName';
import UserPosition from './UserPosition';
import UserProfile from './UserProfile';

const InviteAcceptForm = () => {
  // states
  const [focus, setFocus] = useState({ nickname: false, url: false, description: false, job: false });
  const [isUrlDuplicate, setIsDuplicate] = useState<boolean | null>(false);
  const [{ nickname, url }, setInvitedUserData] = useRecoilState(invitedUserDataState);

  // event handle func
  const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, id } = e.currentTarget;
    setInvitedUserData((prev: UserBasicInfo) => ({ ...prev, [id]: value }));

    if (id === 'url') {
      CheckUserIdDuplication('palmspring_official', value, setIsDuplicate);
    }
  };

  const handleOnFocus = (type: string, value: boolean) => {
    setFocus({ ...focus, [type]: value });
  };

  return (
    <InviteAcceptFormContainer>
      <TeamName>햇살티미단</TeamName>
      <Title>초대 수락하기</Title>

      <UserProfile />
      <UserName isFocus={focus.nickname} handleOnChange={handleOnInputChange} handleOnFocus={handleOnFocus} />
      <UserId
        isFocus={focus.url}
        handleOnChange={handleOnInputChange}
        handleOnFocus={handleOnFocus}
        isDuplicate={isUrlDuplicate}
      />
      <UserDescription isFocus={focus.description} handleOnChange={handleOnInputChange} handleOnFocus={handleOnFocus} />
      <UserPosition isFocus={focus.job} handleOnChange={handleOnInputChange} handleOnFocus={handleOnFocus} />

      <AcceptButton type="button" disabled={!nickname || !url || isUrlDuplicate || isUrlDuplicate === null}>
        수락하기
      </AcceptButton>
    </InviteAcceptFormContainer>
  );
};

export default InviteAcceptForm;

const InviteAcceptFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto;

  width: 40rem;
`;

const TeamName = styled.h1`
  ${({ theme }) => theme.fonts.Body1_Semibold};

  margin-top: 10.7rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const Title = styled.h2`
  ${({ theme }) => theme.fonts.Heading1};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const AcceptButton = styled.button<{ disabled: boolean }>`
  ${({ theme }) => theme.fonts.Button_medium};
  margin: 3.2rem 0 11.4rem;

  border: none;
  border-radius: 0.8rem;

  background-color: ${({ disabled, theme }) => (disabled ? theme.colors.background_green : theme.colors.green)};
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  width: 100%;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_0};
`;
