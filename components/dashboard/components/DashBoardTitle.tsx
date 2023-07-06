import React from 'react';

import { ArrowDownIcon, SymbolIcon } from '@/public/icons';

import SideBarTitle from './ui/SideBarTitle';

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
