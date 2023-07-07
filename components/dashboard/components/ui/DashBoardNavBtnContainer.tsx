'use client';

import React from 'react';
import { styled } from 'styled-components';

const DashBoardNavBtnContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardNavBtnContainerUI>{children}</DashBoardNavBtnContainerUI>;
};

export default DashBoardNavBtnContainer;

const DashBoardNavBtnContainerUI = styled.button`
  ${({ theme }) => theme.fonts.Body2_Regular};
  position: absolute;
  bottom: 1.5rem;
  flex-shrink: 0;

  border: none;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.green};
  width: 15.875rem;
  height: 2.25rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
