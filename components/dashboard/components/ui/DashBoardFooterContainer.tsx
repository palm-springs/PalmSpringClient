import React from 'react';
import { styled } from 'styled-components';

const DashBoardFooterContainer = ({ children }: { children: React.ReactNode }) => {
  return <DashBoardFooterUI>{children}</DashBoardFooterUI>;
};

export default DashBoardFooterContainer;

const DashBoardFooterUI = styled.section`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
  margin-bottom: 1.6rem;

  background: ${({ theme }) => theme.colors.grey_100};
  padding: 0 1.6rem;
  width: 100%;

  & > button {
    background: ${({ theme }) => theme.colors.grey_900};
    &:hover {
      transition: 0.3s ease-out;
      background: ${({ theme }) => theme.colors.grey_800};
    }
  }
`;
