'use client';

import React from 'react';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';

import SubscriberContentList from './SubscriberContentList';

const SubscriberTemplate = () => {
  return (
    <DashBoardTemplateContainer>
      <Line />
      <SubscriberContentList />
    </DashBoardTemplateContainer>
  );
};

export default SubscriberTemplate;
