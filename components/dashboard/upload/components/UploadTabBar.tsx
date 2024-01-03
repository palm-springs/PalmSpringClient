'use client';

import React, { Dispatch, SetStateAction, useState } from 'react';

import { CategoryListProps } from '@/types/dashboard';

import UploadTabBarContainer from './ui/UploadTabBarContainer';

// type ArrayLiteral<T extends ReadonlyArray<any>> = T[number];
export interface UploadTabBarProps {
  categoryListData: CategoryListProps[];
  currentCategory: string;
  setCategory: Dispatch<SetStateAction<string>>;
}

const UploadTabBar = (props: UploadTabBarProps) => {
  const { categoryListData, currentCategory, setCategory } = props;

  return (
    <UploadTabBarContainer
      categoryDataList={categoryListData}
      currentCategory={currentCategory}
      setCurrentCategory={setCategory}
    />
  );
};

export default UploadTabBar;
