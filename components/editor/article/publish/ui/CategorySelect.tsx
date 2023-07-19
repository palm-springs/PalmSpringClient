'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

import { useGetCategoryList } from '@/hooks/dashboard';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

const CategorySelect = () => {
  const [activeButton, setActiveButton] = useState('');

  const clickActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.value;
    setActiveButton(value === activeButton ? '' : value);
  };
  const getCategoryList = useGetCategoryList('helloworld');

  if (!getCategoryList) {
    return <>로딩</>;
  }

  const CATEGORY_LIST = getLiteralCategoryList(getCategoryList);

  return (
    <>
      <CategoryTitle>카테고리</CategoryTitle>
      <CategoryButtonContainer>
        {CATEGORY_LIST.map((title, index) => (
          <CategoryButton
            key={title}
            value={index}
            className={activeButton === String(index) ? 'active' : ''}
            onClick={clickActive}>
            {title}
          </CategoryButton>
        ))}
      </CategoryButtonContainer>
    </>
  );
};

export default CategorySelect;

const CategoryButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 4rem;
  padding: 0.8rem 2rem;
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.green};
  }

  &.active {
    border: 1px solid ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.green};
  }
`;

const CategoryTitle = styled.p`
  color: ${({ theme }) => theme.colors.grey_950};
  ${({ theme }) => theme.fonts.Body2_Semibold};
`;
