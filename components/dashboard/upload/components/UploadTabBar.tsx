'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';

import { CategoryListProps } from '@/types/dashboard';

import UploadTabBarContainer from './ui/UploadTabBarContainer';

type ArrayLiteral<T extends ReadonlyArray<any>> = T[number];
export interface UploadTabBarProps {
  categoryListData: CategoryListProps[];
  currentCategory: string[];
  setCategory: Dispatch<SetStateAction<string>>;
}

const UploadTabBar = (props: UploadTabBarProps) => {
  const category = [...props.currentCategory] as const;

  const [currentCategory, setCurrentCategory] = useState<ArrayLiteral<typeof category> | '전체'>('전체');

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
