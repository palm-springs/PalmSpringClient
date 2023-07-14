'use client';
import React from 'react';
import styled from 'styled-components';

const UserName = () => {
  return (
    <UserNameContainer>
      <UserNameTitle>내 이름</UserNameTitle>
      <UserNameTextarea placeholder="이름을 입력해주세요"></UserNameTextarea>
    </UserNameContainer>
  );
};

export default UserName;

const UserNameTextarea = styled.textarea`
  ${({ theme }) => theme.fonts.Body2_Regular};
  gap: 1rem;
  align-items: flex-start;
  border: 1px solid ${({ theme }) => theme.colors.grey_600};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 50rem;
  height: 4.6rem;
  resize: none;
  color: ${({ theme }) => theme.colors.grey_600};
`;

const UserNameContainer = styled.div`
  margin-top: 3.2rem;
`;

const UserNameTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_950};
`;
