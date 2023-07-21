'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { useGetUserBasicInfo } from '@/hooks/dashboard';

const UserName = () => {
  const { team } = useParams();
  const basicUserData = useGetUserBasicInfo(team);
  if (!basicUserData) return;

  return (
    <UserNameContainer>
      <UserNameTitle>이름</UserNameTitle>
      <UserNameTextarea placeholder="이름을 입력해주세요">{basicUserData.data.nickname}</UserNameTextarea>
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

const UserNameTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 1rem 13.8rem 0.8rem 0;
  color: ${({ theme }) => theme.colors.grey_950};
`;
