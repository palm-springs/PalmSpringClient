'use client';

import React from 'react';
import styled from 'styled-components';

const ManagerMember = () => {
  return <ManagerMemberContainer>관리자</ManagerMemberContainer>;
};

export default ManagerMember;

const ManagerMemberContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  margin-right: 7.9rem;
  border: none;
  border-radius: 2rem;
  background-color: ${({ theme }) => theme.colors.grey_400};
  padding: 0.4rem 0.8rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;
