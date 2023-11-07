'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

import userState from '@/recoil/atom/user';

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

  const { team } = useParams();

  const router = useRouter();

  const userRole = useRecoilValue(userState);

  useEffect(() => {
    if (!team && window.location.host !== '/no-team/dashboard') {
      router.push(`/no-team/dashboard`);
    }
  }, []);

  return (
    <DashboardContextProvider>
      <DashBoardContainer>
        <DashBoardNav />
        {!noHeader && userRole && <DashBoardHeader />}
        {children}
      </DashBoardContainer>
    </DashboardContextProvider>
  );
};

export default DashBoardTemplate;
