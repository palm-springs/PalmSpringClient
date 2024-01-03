'use client';
import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { userInfoState } from '../state/user';

const UserName = () => {
  const [{ nickname }, setUserInfoData] = useRecoilState(userInfoState);

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setUserInfoData((prev) => ({ ...prev, nickname: value }));
  };

  return (
    <UserNameContainer>
      <UserNameTitle>이름</UserNameTitle>
      <UserNameTextarea value={nickname} placeholder="이름을 입력해주세요" onChange={handleOnChange} />
    </UserNameContainer>
  );
};

export default UserName;

const UserNameTextarea = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  gap: 1rem;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 64.5rem;
  height: 4.6rem;
  resize: none;
  color: ${({ theme }) => theme.colors.grey_900};

  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;

const UserNameContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3.2rem;
`;

const UserNameTitle = styled.span`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 1rem 13.8rem 0.8rem 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_950};
`;
