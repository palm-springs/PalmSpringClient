'use client';

import React from 'react';
import { styled } from 'styled-components';

interface sideBarContetProps {
  children: React.ReactNode;
  currentPage: boolean;
}

const SideBarContent = (props: sideBarContetProps) => {
  const { currentPage, children } = props;

  return <SideBarContentContainer $currentPage={currentPage}>{children}</SideBarContentContainer>;
};

export default SideBarContent;

const SideBarContentContainer = styled.div<{ $currentPage: boolean }>`
  ${({ theme, $currentPage }) => ($currentPage ? theme.fonts.Body3_Semibold : theme.fonts.Body3_Regular)};
  display: flex;
  gap: 0.5rem;
  align-items: center;
  border-radius: 0.375rem;

  background: ${({ theme, $currentPage }) => ($currentPage ? theme.colors.grey_300 : theme.colors.grey_100)};

  cursor: pointer;
  padding: 0rem 1rem;
  width: 15.875rem;
  height: 2.5rem;

  & > img {
    align-self: center;
  }
`;
