'use client';

import React from 'react';

import DashBoardNavContainer from './ui/DashBoardNavContainer';
import Line from './ui/Line';
import DashBoardNavBtn from './DashBoardNavBtn';
import DashBoardTitle from './DashBoardTitle';
import NavButton from './NavButton';

const DashBoardNav = () => {
  return (
    <DashBoardNavContainer>
      <DashBoardTitle />
      <NavButton currentPageType="upload" />
      <NavButton currentPageType="tempsaved" />
      <Line />
      <NavButton currentPageType="page" />
      <NavButton currentPageType="category" />
      <NavButton currentPageType="nav" />
      <Line />
      <NavButton currentPageType="member" />
      <NavButton currentPageType="subscriber" />
      <Line />
      <NavButton currentPageType="blogdirectnav" />
      <NavButton currentPageType="blogconfignav" />
      <DashBoardNavBtn />
    </DashBoardNavContainer>
  );
};

export default DashBoardNav;
