'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';

import { useGetUserInfo } from '@/hooks/dashboard';

import DashBoardHeader from './components/DashBoardHeader';
import DashBoardNav from './components/DashBoardNav';
import DashBoardContainer from './components/ui/DashBoardConatiner';
import { DashboardContextProvider } from './context/dashboardContext';

interface DashBoardTemplateProps {
  children: React.ReactNode;
  noHeader?: boolean;
}

const DashBoardTemplate = (props: DashBoardTemplateProps) => {
  const { children, noHeader } = props;

  return (
    <DashboardContextProvider>
      <DashBoardContainer>
        <DashBoardNav />
        {!noHeader && <DashBoardHeader />}
        {children}
      </DashBoardContainer>
    </DashboardContextProvider>
  );
};

export default DashBoardTemplate;
