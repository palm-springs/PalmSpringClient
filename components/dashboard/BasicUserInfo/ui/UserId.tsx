'use client';
import React from 'react';
import styled from 'styled-components';

const UserId = () => {
  return (
    <UserIdContainer>
      <UserIdTitle>ID</UserIdTitle>
      <UserIdCustomTextarea defaultValue="/@sopt/author/"></UserIdCustomTextarea>
    </UserIdContainer>
  );
};

export default UserId;

const UserIdCustomTextarea = styled.textarea`
  display: inline-flex;
  align-items: flex-start;
  margin-top: 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.grey_600};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem;
  width: 50rem;
  height: 4.6rem;
  resize: none;
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_600};
  /* 기능넣을때 수정할 예정입니당. */
  &:focus {
    color: ${({ theme }) => theme.colors.grey_950};
  }
`;

const UserIdContainer = styled.div`
  margin-top: 3.2rem;
`;

const UserIdTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;
