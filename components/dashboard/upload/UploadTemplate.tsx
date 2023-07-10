'use client';

import React from 'react';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';

import UploadContentList from './components/UploadContentList';
import UploadTabBar from './components/UploadTabBar';

const UploadTemplate = () => {
  return (
    <DashBoardTemplateContainer>
      <UploadTabBar />
      <Line />
      <UploadContentList />
    </DashBoardTemplateContainer>
  );
};

export default UploadTemplate;
