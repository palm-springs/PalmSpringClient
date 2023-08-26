'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetCategoryList } from '@/hooks/dashboard';
import { EssentialCircleIcon } from '@/public/icons';
import { UpdateArticleProps } from '@/types/article';

import { articleDataState } from '../../states/atom';

interface CategorySelectProps {
  articleData?: UpdateArticleProps;
}

const CategorySelect = (props: CategorySelectProps) => {
  const { articleData } = props;
  const [{ categoryId }, setArticleData] = useRecoilState(articleDataState);
  const [activeCategory, setActiveCategory] = useState('');
  const { team } = useParams();

  const data = useGetCategoryList(team);

  useEffect(() => {
    if (articleData) {
      setArticleData((prev) => ({ ...prev, categoryId: Number(articleData.categoryId) }));
      setActiveCategory(String(articleData.categoryId));
    }
  }, []);

  const clickActive = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!data) return;
    const value = e.currentTarget.value;

    setActiveCategory(value);

    setArticleData((prev) => ({
      ...prev,
      categoryId: Number(value),
    }));
  };

  if (!data) {
    return <LoadingLottie width={4} height={4} fit />;
  }

  return (
    <CategContainer>
      <CategoryTitleContainer>
        <CategoryTitle>카테고리</CategoryTitle>
        <EssentialPointerIcon />
      </CategoryTitleContainer>

      <CategoryButtonContainer>
        {data.data.map(({ id, name }) => (
          <CategoryButton
            key={id}
            value={id}
            className={activeCategory === String(id) ? 'active' : ''}
            onClick={clickActive}>
            {name}
          </CategoryButton>
        ))}
      </CategoryButtonContainer>
    </CategContainer>
  );
};

export default CategorySelect;

const CategContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 54rem;
`;

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
  ${({ theme }) => theme.fonts.Body2_Semibold};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.8rem;
  border: 1px solid ${({ theme }) => theme.colors.grey_400};
  border-radius: 4rem;
  padding: 0.8rem 2rem;
  width: auto;
  height: 3.5rem;
  color: ${({ theme }) => theme.colors.grey_700};
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
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;
