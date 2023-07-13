'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import useGetCategory from '@/hooks/useGetCategory';

const CategoryBtnBar = () => {
  const SELECTED = useGetCategory();

  const CATEGORY_EXAMPLE: string[] = ['개발', '디자인', '팀문화'];

  const CATEGORY_LIST = CATEGORY_EXAMPLE.map((eachCategory) => {
    return (
      <CategoryBtn key={eachCategory} type="button" className={eachCategory === decodeURI(SELECTED) ? 'selected' : ''}>
        <Link href={`/blogNameHere/home/${eachCategory}`}>{eachCategory}</Link>
      </CategoryBtn>
    );
  });

  return (
    <CategoryBtnBarContainer>
      <CategoryBtn type="button" className={SELECTED === 'home' ? 'selected' : ''}>
        <Link href={'../home'}>전체</Link>
      </CategoryBtn>
      {CATEGORY_LIST}
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
