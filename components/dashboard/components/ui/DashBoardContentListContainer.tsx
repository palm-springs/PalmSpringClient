import React from 'react';
import { styled } from 'styled-components';

const DashBoardContentListContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardContentListUI>{children}</DashBoardContentListUI>;
};

export default DashBoardContentListContainer;

const DashBoardContentListUI = styled.article`
  padding: 0 2.4rem 0 4rem;
`;
