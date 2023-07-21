'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { useGetUserBasicInfo } from '@/hooks/dashboard';

const UserPosition = () => {
  const { team } = useParams();
  const basicUserData = useGetUserBasicInfo();
  if (!basicUserData) return;
  return (
    <UserPositionContainer>
      <UserPositionTitle>직책</UserPositionTitle>
      <UserPositionTextarea placeholder="직책을 입력해주세요">{basicUserData.data.job}</UserPositionTextarea>
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
  color: ${({ theme }) => theme.colors.grey_600};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;

const UserPositionContainer = styled.div`
  display: flex;
  margin: 3.2rem 0;
`;

const UserPositionTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 1rem 13.8rem 0.8rem 0;
  color: ${({ theme }) => theme.colors.grey_950};
`;
