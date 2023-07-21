'use client';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { useGetCategoryList } from '@/hooks/dashboard';
import { EssentialCircleIcon } from '@/public/icons';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

import { articleDataState } from '../../states/atom';

const CategorySelect = () => {
  const [{ categoryId }, setArticleData] = useRecoilState(articleDataState);
  const [activeCategory, setActiveCategory] = useState('');

  const getCategoryList = useGetCategoryList('team');

  const clickActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!getCategoryList) return;

    const value = e.currentTarget.value;
    setActiveCategory(value);
    setArticleData((prev) => ({
      ...prev,
      categoryId: Number(getCategoryList.data[Number(value)].id),
    }));
    console.log(categoryId);
  };

  if (!getCategoryList) {
    return <>로딩</>;
  }

  const CATEGORY_LIST = getLiteralCategoryList(getCategoryList);

  return (
    <>
      <CategoryTitleContainer>
        <CategoryTitle>카테고리</CategoryTitle>
        <EssentialPointerIcon />
      </CategoryTitleContainer>

      <CategoryButtonContainer>
        {CATEGORY_LIST.map((title, index) => (
          <CategoryButton
            key={title}
            value={index}
            className={activeCategory === String(index) ? 'active' : ''}
            onClick={clickActive}>
            {title}
          </CategoryButton>
        ))}
      </CategoryButtonContainer>
    </>
  );
};

export default CategorySelect;

const EssentialPointerIcon = styled(EssentialCircleIcon)`
  margin: 0.5rem 0 0 0.8rem;
`;

const CategoryTitleContainer = styled.div`
  display: flex;
`;

const CategoryButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
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
  width: auto;
  height: 3.5rem;
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
