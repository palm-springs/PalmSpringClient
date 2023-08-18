'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { useGetBlogInfo } from '@/hooks/blog';

import LoadingLottie from '../common/ui/LoadingLottie';

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

  useEffect(() => {
    if (!team && window.location.host !== '/no-team/dashboard') {
      router.push(`/no-team/dashboard`);
    }
  }, []);

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
