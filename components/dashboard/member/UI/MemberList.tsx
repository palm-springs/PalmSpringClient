'use client';

import React from 'react';
import styled from 'styled-components';

const MemberList = ({ children }: { children: React.ReactNode }) => {
  return <MemberListContainer>{children}</MemberListContainer>;
};

export default MemberList;

const MemberListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
  border-top: solid ${({ theme }) => theme.colors.grey_300} 1px;
  width: 115.3rem;
`;
