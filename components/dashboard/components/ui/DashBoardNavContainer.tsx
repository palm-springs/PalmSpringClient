'use client';

import React from 'react';
import { styled } from 'styled-components';

const DashBoardNavContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardNavUI>{children}</DashBoardNavUI>;
};

export default DashBoardNavContainer;

const DashBoardNavUI = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  background: ${({ theme }) => theme.colors.grey_100};
  padding: 2rem 0.5rem 0 0.5rem;
  width: 17.875rem;
  height: 100vh;
  & > :nth-child(1) {
    align-self: flex-start;
    margin-left: 1rem;
  }
`;
