'use client';

import React from 'react';
import styled from 'styled-components';

const CategoryBtn = ({ children }: { children: React.ReactNode }) => {
  return <CategoryBtnContainer>{children}</CategoryBtnContainer>;
};

export default CategoryBtn;

const CategoryBtnContainer = styled.button`
  ${({ theme }) => theme.fonts.Body1_Regular};
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4rem;
  background-color: ${({ theme }) => theme.colors.grey_300};
  padding: 0.8rem 2rem;
  height: 4.2rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;
