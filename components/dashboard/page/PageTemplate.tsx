'use client';

import React from 'react';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';

import PageContentList from './PageContentList';

const PageTemplate = () => {
  return (
    <DashBoardTemplateContainer>
      <Line />
      <PageContentList />
    </DashBoardTemplateContainer>
  );
};

export default PageTemplate;
