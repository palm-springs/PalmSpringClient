'use client';

import React, { Dispatch, SetStateAction } from 'react';

import { dashBoardTabType } from '@/types/dashboard';

import UploadTabBarContainer from './ui/UploadTabBarContainer';

export interface UploadTabBarProps {
  category: dashBoardTabType;
  setCategory: Dispatch<SetStateAction<dashBoardTabType>>;
}

const UploadTabBar = (props: UploadTabBarProps) => {
  return <UploadTabBarContainer categoryProps={props} />;
};

export default UploadTabBar;
