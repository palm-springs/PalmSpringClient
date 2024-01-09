'use client';

import React from 'react';
import styled from 'styled-components';

const PageBtn = ({ children }: { children: React.ReactNode }) => {
  return <PageBtnContainer>{children}</PageBtnContainer>;
};

export default PageBtn;

const PageBtnContainer = styled.button`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.8rem;
  padding: 1rem;
  height: 3.6rem;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.grey_900};

  &:hover {
    background-color: ${({ theme }) => theme.colors.navItem_hover};
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
