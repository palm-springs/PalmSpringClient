'use client';

import React from 'react';
import { styled } from 'styled-components';

const DashBoardNavBtnContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardNavBtnContainerUI id="dashboard_navbar_profile_btn">{children}</DashBoardNavBtnContainerUI>;
};

export default DashBoardNavBtnContainer;

const DashBoardNavBtnContainerUI = styled.button`
  ${({ theme }) => theme.fonts.Body2_Regular};
  flex-shrink: 0;

  border: none;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.grey_900};
  width: 25.4rem;
  height: 3.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
`;
