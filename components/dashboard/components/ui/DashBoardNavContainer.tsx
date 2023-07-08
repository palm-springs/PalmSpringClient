'use client';

import React from 'react';
import { styled } from 'styled-components';

const DashBoardNavContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardNavUI>{children}</DashBoardNavUI>;
};

export default DashBoardNavContainer;

const DashBoardNavUI = styled.nav`
  display: flex;
  position: fixed;
  flex-direction: column;
  align-items: center;
  margin: 0;
  background: ${({ theme }) => theme.colors.grey_100};
  padding-top: 3.2rem;
  width: 28.6rem;
  height: 100vh;
  & > :nth-child(1) {
    align-self: flex-start;
    margin-left: 2.4rem;
  }
  button {
    border: none;
    background: none;
  }
`;
