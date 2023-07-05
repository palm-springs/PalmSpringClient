'use client';

import React from 'react';
import Image from 'next/image';
import { styled } from 'styled-components';

import { ArrowDownIcon, SymbolIcon } from '@/public/icons';

const DashBoardTitle = () => {
  return (
    <>
      <Image src={SymbolIcon} alt="심볼" />
      <SideBarTitle>
        팜스프링 팀블로그
        <Image src={ArrowDownIcon} alt="아래 화살표" />
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
