'use client';

import React, { useState } from 'react';

import { dashBoardTabType } from '@/types/dashboard';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';

import UploadContentList from './components/UploadContentList';
import UploadTabBar from './components/UploadTabBar';

const UploadTemplate = () => {
  const [category, setCategory] = useState<dashBoardTabType>('all');

  return (
    <DashBoardTemplateContainer>
      <UploadTabBar category={category} setCategory={setCategory} />
      <Line />
      <UploadContentList category={category} />
    </DashBoardTemplateContainer>
  );
};

export default UploadTemplate;
