'use client';

import React from 'react';

import DashBoardHeader from './components/DashBoardHeader';
import DashBoardNav from './components/DashBoardNav';
import DashBoardContainer from './components/ui/DashBoardConatiner';

const DashBoardTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashBoardContainer>
      <DashBoardNav />
      <DashBoardHeader />
      {children}
    </DashBoardContainer>
  );
};

export default DashBoardTemplate;
