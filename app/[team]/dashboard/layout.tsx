import React from 'react';

import DashBoardTemplate from '@/components/dashboard/DashBoardTemplate';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardTemplate>{children}</DashBoardTemplate>;
};

export default DashBoardLayout;
