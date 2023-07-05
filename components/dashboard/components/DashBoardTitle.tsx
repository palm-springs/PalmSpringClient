'use client';

import React from 'react';
import { styled } from 'styled-components';

import { ArrowDownIcon, SymbolIcon } from '@/public/icons';

const DashBoardTitle = () => {
  return (
    <>
      <SymbolIcon />
      <SideBarTitle>
        팜스프링 팀블로그
        <ArrowDownIcon />
      </SideBarTitle>
    </>
  );
};

export default DashBoardTitle;

const SideBarTitle = styled.div`
  ${({ theme }) => theme.fonts.Body1_Semibold};
  display: flex;

  align-items: center;

  justify-content: space-between;
  padding: 0.75rem 1rem;

  width: 100%;
`;
