import React from 'react';
import { styled } from 'styled-components';

const DashBoardContentListContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardContentListUI>{children}</DashBoardContentListUI>;
};

export default DashBoardContentListContainer;

const DashBoardContentListUI = styled.article`
  padding: 0 2.4rem 0 4rem;
  height: calc(100vh - 20rem);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:first-child {
    position: sticky;
    top: 0;
    z-index: 10;
    background: white;
  }
`;
