'use client';

import React, { Dispatch, SetStateAction } from 'react';

import { ArrowDownIcon, SymbolIcon } from '@/public/icons';

import SideBarTitle from './ui/SideBarTitle';

interface DashBoardTitleProps {
  setIsBlogListOpen: Dispatch<SetStateAction<boolean>>;
}

const DashBoardTitle = (props: DashBoardTitleProps) => {
  const { setIsBlogListOpen } = props;
  return (
    <>
      <SymbolIcon />
      <SideBarTitle>
        팜스프링 팀블로그
        <button type="button" onClick={() => setIsBlogListOpen((prev) => !prev)}>
          <ArrowDownIcon />
        </button>
      </SideBarTitle>
    </>
  );
};

export default DashBoardTitle;
