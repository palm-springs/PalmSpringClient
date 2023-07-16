'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';

import DashBoardHeader from './components/DashBoardHeader';
import DashBoardNav from './components/DashBoardNav';
import DashBoardContainer from './components/ui/DashBoardConatiner';
import { DashboardContextProvider } from './context/dashboardContext';

const DashBoardTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashboardContextProvider>
      <DashBoardContainer>
        <DashBoardNav />
        <DashBoardHeader />
        {children}
      </DashBoardContainer>
    </DashboardContextProvider>
  );
};

export default DashBoardTemplate;
