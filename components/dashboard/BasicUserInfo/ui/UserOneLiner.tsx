'use client';
import React from 'react';
import styled from 'styled-components';

const UserOneLiner = () => {
  return (
    <UserOneLinerContainer>
      <UserNameTitle>한 줄 소개</UserNameTitle>
      <UserOneLinerTextarea placeholder="한 줄 소개를 입력해주세요"></UserOneLinerTextarea>
    </UserOneLinerContainer>
  );
};

export default UserOneLiner;

const UserOneLinerTextarea = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  gap: 1rem;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem 5rem;
  width: 64.5rem;
  height: 8.6rem;
  resize: none;
  color: ${({ theme }) => theme.colors.grey_600};
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.grey_700};
  }
`;

const UserOneLinerContainer = styled.div`
  display: flex;
  margin-top: 3.2rem;
`;

const UserNameTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin: 1rem 10.3rem 0.8rem 0;
  color: ${({ theme }) => theme.colors.grey_950};
`;
