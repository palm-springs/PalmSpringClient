import React from 'react';
import { styled } from 'styled-components';

const DashBoardTemplateContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardTemplateUI>{children}</DashBoardTemplateUI>;
};

export default DashBoardTemplateContainer;

const DashBoardTemplateUI = styled.section`
  flex-shrink: 0;
  width: 100%;
`;
