'use client';

import React from 'react';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';

import CategoryContentList from './CategoryContentList';

const CategoryTemplate = () => {
  return (
    <DashBoardTemplateContainer>
      <Line />
      <CategoryContentList />
    </DashBoardTemplateContainer>
  );
};

export default CategoryTemplate;
