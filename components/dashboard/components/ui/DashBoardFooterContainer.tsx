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
  z-index: 100;
  margin-bottom: 0.8rem;
  padding: 0 1.6rem;
  width: 28.6rem;
  width: 100%;

  #dashboard_navbar_profile_btn {
    background: ${({ theme }) => theme.colors.grey_900};
  }
`;
