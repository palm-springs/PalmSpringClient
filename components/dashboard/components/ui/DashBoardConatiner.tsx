'use client';

import React from 'react';
import { styled } from 'styled-components';

const DashBoardContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardContainerUI>{children}</DashBoardContainerUI>;
};

export default DashBoardContainer;

const DashBoardContainerUI = styled.section`
  display: flex;
  position: relative;
  flex-direction: column;

  padding-left: 28.6rem;
  height: 100vh;
  overflow-y: hidden;
  & > input {
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.grey_300};
    }
  }
  @media screen and (max-width: 1024px) {
    width: 1024px;
    overflow-x: scroll;
  }
`;
