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
  bottom: 2.4rem;
  flex-shrink: 0;

  border: none;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey_900};
  width: 25.4rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
