'use client';

import React from 'react';
import { styled } from 'styled-components';

const SideBarTitle = ({ children }: { children: React.ReactNode }) => {
  return <SideBarTitleContainer>{children}</SideBarTitleContainer>;
};

export default SideBarTitle;

const SideBarTitleContainer = styled.div`
  ${({ theme }) => theme.fonts.Body1_Semibold};
  display: flex;

  align-items: center;

  justify-content: space-between;

  cursor: pointer;
  padding: 1.2rem 1.6rem;

  width: 27rem;
`;
