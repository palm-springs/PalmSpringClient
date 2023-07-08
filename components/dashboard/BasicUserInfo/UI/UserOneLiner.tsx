'user client';
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
  gap: 1rem;
  align-items: flex-start;
  border: 0.1rem solid ${({ theme }) => theme.colors.grey_600};
  border-radius: 0.8rem;
  padding: 1rem 1.2rem 5rem 1.2rem;
  width: 50rem;
  height: 8.6rem;
  resize: none;
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_600};
`;

const UserOneLinerContainer = styled.div`
  margin-top: 3.2rem;
`;

const UserNameTitle = styled.p`
  margin-bottom: 0.8rem;
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;
