'use client';

import React from 'react';
import styled from 'styled-components';

import CategoryBtn from '../CategoryBtn';
import CategorySelectedBtn from '../CategorySelectedBtn';

const CategoryBtnBar = () => {
  return (
    <CategoryBtnBarContainer>
      <CategorySelectedBtn>전체</CategorySelectedBtn>
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
`;
