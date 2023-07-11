'use client';

import React from 'react';
import { styled } from 'styled-components';

const DashBoardContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardContainerUI>{children}</DashBoardContainerUI>;
};

export default DashBoardContainer;

const DashBoardContainerUI = styled.section`
  display: flex;
`;
