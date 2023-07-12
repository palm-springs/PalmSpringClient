'use client';

import React from 'react';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';

import TempsavedContentList from './TempsavedContentList';

const TempsavedTemplate = () => {
  return (
    <DashBoardTemplateContainer>
      <Line />
      <TempsavedContentList />
    </DashBoardTemplateContainer>
  );
};

export default TempsavedTemplate;
