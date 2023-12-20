'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

import mapPageType2Component from '@/constants/mapPageType2Component';
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

  const prefetchDashboardData = () => {
    const prefetchPath = Object.keys(mapPageType2Component);
    // RSC prefetch
    for (const key of prefetchPath) {
      if (key === 'blogdirectnav') continue;
      router.prefetch(`/[team]/dashboard/${key}`);
    }
  };

  useEffect(() => {
    if (!team && window.location.host !== '/no-team/dashboard') {
      router.push(`/no-team/dashboard`);
    }
    prefetchDashboardData();
  }, []);

  return (
    <DashboardContextProvider>
      <DashBoardContainer>
        <DashBoardNav />
        {userRole && (
          <>
            {!noHeader && <DashBoardHeader />}
            {children}
          </>
        )}
      </DashBoardContainer>
    </DashboardContextProvider>
  );
};

export default DashBoardTemplate;
