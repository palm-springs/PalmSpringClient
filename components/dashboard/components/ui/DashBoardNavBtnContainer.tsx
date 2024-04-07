'use client';

import React from 'react';
import { styled } from 'styled-components';

const DashBoardNavBtnContainer = ({
  children,
  onDashboardClick,
  disabled,
}: {
  children: React.ReactNode;
  onDashboardClick: () => void;
  disabled: boolean;
}) => {
  return (
    <DashBoardNavBtnContainerUI id="dashboard_navbar_profile_btn" onClick={onDashboardClick} disabled={disabled}>
      {children}
    </DashBoardNavBtnContainerUI>
  );
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

  &:disabled {
    background-color: ${({ theme }) => theme.colors.grey_400};
    cursor: default;
  }
`;
