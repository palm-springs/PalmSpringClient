'use client';

import React, { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { useGetBlogInfo } from '@/hooks/blog';

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

  const res = useGetBlogInfo(team ?? '');

  const title = res?.data.name;

  if (!title) {
    router.push(`/no-team/dashboard`);
  }

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
