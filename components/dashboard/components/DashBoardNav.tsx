'use client';

import React, { useState } from 'react';

import DashBoardNavContainer from './ui/DashBoardNavContainer';
import Line from './ui/Line';
import BlogList from './BlogList';
import DashBoardFooter from './DashBoardFooter';
import DashBoardTitle from './DashBoardTitle';
import NavButton from './NavButton';

const DashBoardNav = () => {
  const [isBlogListOpen, setIsBlogListOpen] = useState<boolean>(false);

  return (
    <DashBoardNavContainer>
      <DashBoardTitle setIsBlogListOpen={setIsBlogListOpen} />
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
      <NavButton currentPageType="basicuserinfo" />
      {isBlogListOpen && <BlogList />}
      <DashBoardFooter />
    </DashBoardNavContainer>
  );
};

export default DashBoardNav;
