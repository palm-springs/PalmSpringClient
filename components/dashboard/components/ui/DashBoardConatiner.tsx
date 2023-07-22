'use client';

import React from 'react';
import { styled } from 'styled-components';

const DashBoardContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardContainerUI>{children}</DashBoardContainerUI>;
};

export default DashBoardContainer;

const DashBoardContainerUI = styled.section`
  display: flex;
  flex-direction: column;

  padding-left: 28.6rem;
  & > input {
    &:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.colors.grey_300};
    }
  }
`;
