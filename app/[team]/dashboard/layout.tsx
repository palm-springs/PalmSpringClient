import React from 'react';

import DashBoardTemplate from '@/components/dashboard/components/DashBoardTemplate';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardTemplate>{children}</DashBoardTemplate>;
};

export default DashBoardLayout;
