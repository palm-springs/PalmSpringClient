'use client';

import React from 'react';
import styled from 'styled-components';

const PageBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <label>
      <PageBtnContainer>{children}</PageBtnContainer>
    </label>
  );
};

export default PageBtn;

const PageBtnContainer = styled.div`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.grey_900};
`;
