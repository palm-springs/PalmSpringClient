'use client';

import React, { MouseEventHandler } from 'react';
import { styled } from 'styled-components';

interface SideBarTitleProps {
  children: React.ReactNode;
  onBlogListSelectorClick: MouseEventHandler<HTMLButtonElement>;
}

const SideBarTitle = (props: SideBarTitleProps) => {
  const { children, onBlogListSelectorClick } = props;

  return <SideBarTitleContainer onClick={onBlogListSelectorClick}>{children}</SideBarTitleContainer>;
};

export default SideBarTitle;

const SideBarTitleContainer = styled.button`
  ${({ theme }) => theme.fonts.Body1_Semibold};
  display: flex;

  align-items: center;

  justify-content: space-between;
  margin: 1rem;
  border: none;
  border-radius: 0.8rem;
  background: none;

  cursor: pointer;
  padding: 1.2rem 1.6rem;

  width: 27rem;

  &:hover {
    outline: none;
    background: ${({ theme }) => theme.colors.grey_200};
  }
`;
