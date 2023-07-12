'use client';

import React from 'react';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';

import NavContentList from './NavContentList';

const NavTemplate = () => {
  return (
    <DashBoardTemplateContainer>
      <Line />
      <NavContentList />
    </DashBoardTemplateContainer>
  );
};

export default NavTemplate;
