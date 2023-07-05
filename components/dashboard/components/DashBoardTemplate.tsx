'use client';

import React from 'react';
import { styled } from 'styled-components';
import DashBoardNav from './DashBoardNav';

const DashBoardTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <DashBoardContainer>
      <DashBoardNav />
      {children}
    </DashBoardContainer>
  );
};

export default DashBoardTemplate;

const DashBoardContainer = styled.section`
  display: flex;
`;
