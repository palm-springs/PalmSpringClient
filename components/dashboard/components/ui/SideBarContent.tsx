'use client';

import React from 'react';
import { styled } from 'styled-components';

interface sideBarContetProps {
  children: React.ReactNode;
  currentPage: boolean;
  disabled: boolean;
}

const SideBarContent = (props: sideBarContetProps) => {
  const { currentPage, children, disabled } = props;

  return (
    <SideBarContentContainer $currentPage={currentPage} $disabled={disabled}>
      {children}
    </SideBarContentContainer>
  );
};

export default SideBarContent;

const SideBarContentContainer = styled.div<{ $currentPage: boolean; $disabled: boolean }>`
  ${({ $disabled, theme, $currentPage }) =>
    $disabled ? theme.fonts.Body3_Regular : $currentPage ? theme.fonts.Body3_Semibold : theme.fonts.Body3_Regular};
  display: flex;
  gap: 0.8rem;
  align-items: center;
  transition: 0.3s ease-out;
  border-radius: 0.8rem;

  background: ${({ theme, $currentPage, $disabled }) =>
    $disabled ? theme.colors.grey_100 : $currentPage ? theme.colors.grey_300 : theme.colors.grey_100};

  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  padding: 0rem 1.6rem;
  width: 25.4rem;
  height: 4rem;
  color: ${({ $disabled, theme }) => ($disabled ? 'rgba(16, 16, 16, 0.3)' : theme.colors.grey_900)};

  &:hover {
    background: ${({ theme, $disabled }) => ($disabled ? null : theme.colors.grey_200)};
  }

  & > img {
    align-self: center;
  }
`;
