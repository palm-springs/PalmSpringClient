'use client';

import React from 'react';

import Line from '../components/ui/Line';

import UploadTemplateContainer from './components/ui/UploadTemplateContainer';
import UploadContentList from './components/UploadContentList';
import UploadTabBar from './components/UploadTabBar';

const UploadTemplate = () => {
  return (
    <UploadTemplateContainer>
      <UploadTabBar />
      <Line />
      <UploadContentList />
    </UploadTemplateContainer>
  );
};

export default UploadTemplate;
