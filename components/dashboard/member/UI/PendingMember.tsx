'use client';

import React from 'react';
import styled from 'styled-components';

const PendingMember = () => {
  return <PendingMemberContainer>수락대기중</PendingMemberContainer>;
};

export default PendingMember;

const PendingMemberContainer = styled.div`
  ${({ theme }) => theme.fonts.Body3_Semibold};
  margin-right: 4.7rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 2rem;
  padding: 0.4rem 1.2rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;
