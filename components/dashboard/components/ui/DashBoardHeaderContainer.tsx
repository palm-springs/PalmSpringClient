import React from 'react';
import { styled } from 'styled-components';

const DashBoardHeaderContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardHeaderUI>{children}</DashBoardHeaderUI>;
};

export default DashBoardHeaderContainer;

const DashBoardHeaderUI = styled.section`
  display: flex;
  width: 100%;
`;
