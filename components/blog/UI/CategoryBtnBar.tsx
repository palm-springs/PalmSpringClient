'use client';

import React from 'react';
import styled from 'styled-components';

// interface CategoryBtnBarProps {
//   categoryList: string[];
// }

const CategoryBtnBar = () => {
  return (
    <CategoryBtnBarContainer>
      <CategoryBtn className="selected">전체</CategoryBtn>
      <CategoryBtn>개발</CategoryBtn>
      <CategoryBtn>디자인</CategoryBtn>
      <CategoryBtn>팀문화</CategoryBtn>
    </CategoryBtnBarContainer>
  );
};

export default CategoryBtnBar;

const CategoryBtnBarContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-start;
  margin-top: 6rem;
  margin-bottom: 5.8rem;
  width: 72rem;
`;

const CategoryBtn = styled.button`
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
  &.selected {
    ${({ theme }) => theme.fonts.Body1_Regular};
    background-color: ${({ theme }) => theme.colors.grey_900};
    color: ${({ theme }) => theme.colors.grey_0};
  }
`;
