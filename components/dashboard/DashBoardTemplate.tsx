import React from 'react';

import DashBoardNav from './components/DashBoardNav';
import DashBoardContainer from './components/ui/DashBoardConatiner';

const DashBoardTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashBoardContainer>
      <DashBoardNav />
      {children}
    </DashBoardContainer>
  );
};

export default DashBoardTemplate;
