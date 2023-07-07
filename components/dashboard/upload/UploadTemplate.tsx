'use client';

import React from 'react';

import Line from '../components/ui/Line';

import UploadTemplateContainer from './components/ui/UploadTemplateContainer';
import UploadContentList from './components/UploadContentList';
import UploadHeader from './components/UploadHeader';

const UploadTemplate = () => {
  return (
    <UploadTemplateContainer>
      <UploadHeader />
      <Line />
      <UploadContentList />
    </UploadTemplateContainer>
  );
};

export default UploadTemplate;
