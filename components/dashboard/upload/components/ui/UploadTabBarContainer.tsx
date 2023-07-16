'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';

import { CategoryListProps } from '@/types/dashboard';
interface UploadTabBarContainerProps {
  categoryDataList: CategoryListProps[];
  currentCategory: string;
  setCurrentCategory: Dispatch<SetStateAction<string>>;
  setCategory: Dispatch<SetStateAction<string>>;
}

const UploadTabBarContainer = (props: UploadTabBarContainerProps) => {
  const { categoryDataList, currentCategory, setCurrentCategory, setCategory } = props;

  return (
    <UploadTabBarUI>
      <>
        <UploadTabBarTextUI
          key={0}
          $currentTab={currentCategory === '전체'}
          onClick={() => {
            setCurrentCategory('전체');
            setCategory('전체');
          }}>
          전체
        </UploadTabBarTextUI>
        {categoryDataList.map(({ id, name }) => {
          return (
            <UploadTabBarTextUI
              key={id}
              $currentTab={currentCategory === name}
              onClick={() => {
                setCurrentCategory(name);
                setCategory(name);
              }}>
              {name}
            </UploadTabBarTextUI>
          );
        })}
      </>
    </UploadTabBarUI>
  );
};

export default UploadTabBarContainer;

const UploadTabBarUI = styled.section`
  display: flex;
  gap: 2rem;
  margin-left: 4rem;

  height: 3.5rem;
`;

const UploadTabBarTextUI = styled.span<{ $currentTab: boolean }>`
  transition-duration: 0.3s ease-out;
  border-bottom: ${({ theme, $currentTab }) => ($currentTab ? `2px solid ${theme.colors.grey_950}` : 0)};
  ${({ theme }) => theme.fonts.Body1_Semibold};
  cursor: pointer;
  height: 3.5rem;
  color: ${({ theme, $currentTab }) => ($currentTab ? theme.colors.grey_900 : theme.colors.grey_600)};
  &:hover {
    color: ${({ theme, $currentTab }) => ($currentTab ? theme.colors.grey_800 : theme.colors.grey_700)};
  }
`;
