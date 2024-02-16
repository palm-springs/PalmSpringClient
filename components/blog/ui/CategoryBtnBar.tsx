'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';
import useGetCategory from '@/hooks/useGetCategory';

interface CategoryBtnBarProps {
  LiteralList: string[];
}
const CategoryBtnBar = (props: CategoryBtnBarProps) => {
  const { category } = useParams();
  const { LiteralList } = props;
  const SELECTED = useGetCategory();
  const MOBILE = useCheckMobile();

  const CATEGORY_LIST = LiteralList.map((eachCategory) => {
    if (MOBILE)
      return (
        <MobileCategoryBtn
          href={`/${eachCategory}`}
          key={eachCategory}
          className={eachCategory === decodeURI(category) ? 'selected' : ''}>
          {eachCategory}
        </MobileCategoryBtn>
      );
    else
      return (
        <CategoryBtn
          href={{ pathname: `/${eachCategory}`, hash: '/' }}
          key={eachCategory}
          className={eachCategory === decodeURI(category) ? 'selected' : ''}>
          {eachCategory}
        </CategoryBtn>
      );
  });

  if (MOBILE)
    return (
      <CategoryBtnBarContainer className="mobile">
        <MobileCategoryBtn href={`/`} className={SELECTED === 'home' ? 'selected' : ''}>
          전체
        </MobileCategoryBtn>
        {CATEGORY_LIST}
      </CategoryBtnBarContainer>
    );
  else
    return (
      <CategoryBtnBarContainer id="/">
        <CategoryBtn href={{ pathname: `/`, hash: '/' }} className={SELECTED === 'home' ? 'selected' : ''}>
          전체
        </CategoryBtn>
        {CATEGORY_LIST}
      </CategoryBtnBarContainer>
    );
};

export default CategoryBtnBar;

const CategoryBtnBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  justify-content: flex-start;
  padding: 8rem 0 4.8rem;
  width: 72rem;

  &.mobile {
    padding: 2.8rem 2.4rem 2.2rem;
    width: 100%;
  }
`;

const CategoryBtn = styled(Link)`
  ${({ theme }) => theme.fonts.Body1_Regular};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 4rem;

  background-color: ${({ theme }) => theme.colors.grey_300};
  padding: 0 2rem;
  height: 4.2rem;

  white-space: nowrap;

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

const MobileCategoryBtn = styled(Link)`
  ${({ theme }) => theme.mobileFonts.Body2_Regular};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 4rem;

  background-color: ${({ theme }) => theme.colors.grey_300};
  padding: 0 1.5rem;
  height: 3.2rem;

  white-space: nowrap;

  color: ${({ theme }) => theme.colors.grey_700};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_400};
  }

  &.selected {
    ${({ theme }) => theme.mobileFonts.Body2_Semibold};

    background-color: ${({ theme }) => theme.colors.grey_900};
    color: ${({ theme }) => theme.colors.grey_0};
  }
`;
