import DashBoardTemplate from '@/components/dashboard/components/DashBoardTemplate';
import React from 'react';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardTemplate>{children}</DashBoardTemplate>;
};

export default DashBoardLayout;
