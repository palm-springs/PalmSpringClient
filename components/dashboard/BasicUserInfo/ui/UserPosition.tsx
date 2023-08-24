'use client';
import React, { ChangeEvent } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { userInfoState } from '../state/user';

const UserPosition = () => {
  const [{ job }, setUserInfoData] = useRecoilState(userInfoState);

  const handleOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.currentTarget;
    setUserInfoData((prev) => ({ ...prev, job: value }));
  };

  return (
    <UserPositionContainer>
      <UserPositionTitle>직책</UserPositionTitle>
      <UserPositionTextarea value={job} placeholder="직책을 입력해주세요" onChange={handleOnChange} />
    </UserPositionContainer>
  );
};

export default UserPosition;

const UserPositionTextarea = styled.textarea`
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
  &::placeholder {
    color: ${({ theme }) => theme.colors.grey_600};
  }
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;

const UserPositionContainer = styled.div`
  display: flex;
  margin: 3.2rem 0;
`;

const UserPositionTitle = styled.span`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 1rem 13.8rem 0.8rem 0;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_950};
`;
