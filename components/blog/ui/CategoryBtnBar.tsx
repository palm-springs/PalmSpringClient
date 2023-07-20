'use client';

import React from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import styled from 'styled-components';

import useGetCategory from '@/hooks/useGetCategory';

const CategoryBtnBar = () => {
  const SELECTED = useGetCategory();
  const { team } = useParams();

  const CATEGORY_EXAMPLE: string[] = ['개발', '디자인', '팀문화'];

  const CATEGORY_LIST = CATEGORY_EXAMPLE.map((eachCategory) => {
    return (
      <CategoryBtn
        href={`/${team}/home/${eachCategory}`}
        key={eachCategory}
        type="button"
        className={eachCategory === decodeURI(SELECTED) ? 'selected' : ''}>
        {eachCategory}
      </CategoryBtn>
    );
  });

  return (
    <CategoryBtnBarContainer>
      <CategoryBtn href={'/${team}/home'} type="button" className={SELECTED === 'home' ? 'selected' : ''}>
        전체
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

  margin: 7.2rem 0 4.8rem;
  width: 72rem;
`;

const CategoryBtn = styled(Link)`
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

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_400};
  }

  &.selected {
    ${({ theme }) => theme.fonts.Body1_Regular};
    background-color: ${({ theme }) => theme.colors.grey_900};
    color: ${({ theme }) => theme.colors.grey_0};
  }
`;
