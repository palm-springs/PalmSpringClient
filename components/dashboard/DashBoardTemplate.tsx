'use client';

import React from 'react';
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

  const title = res && res.data && res.data.name;

  if (!title && typeof window !== 'undefined') {
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
