'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';

import { CategoryListProps } from '@/types/dashboard';

import UploadTabBarContainer from './ui/UploadTabBarContainer';

// type ArrayLiteral<T extends ReadonlyArray<any>> = T[number];
export interface UploadTabBarProps {
  categoryListData: CategoryListProps[];
  currentCategory: string[];
  setCategory: Dispatch<SetStateAction<string>>;
}

const UploadTabBar = (props: UploadTabBarProps) => {
  const {
    currentCategory: [category],
  } = props;

  const [currentCategory, setCurrentCategory] = useState<string>('전체');

  return (
    <UploadTabBarContainer
      categoryDataList={props.categoryListData}
      currentCategory={currentCategory}
      setCurrentCategory={setCurrentCategory}
      setCategory={props.setCategory}
    />
  );
};

export default UploadTabBar;
