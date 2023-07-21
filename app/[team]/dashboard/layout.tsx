import React from 'react';

import AuthRequired from '@/components/auth/AuthRequired';
import DashBoardTemplate from '@/components/dashboard/DashBoardTemplate';

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthRequired>
      <DashBoardTemplate>{children}</DashBoardTemplate>
    </AuthRequired>
  );
};

export default DashBoardLayout;
