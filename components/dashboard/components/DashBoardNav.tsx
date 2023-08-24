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

  const [currentBlog, setCurrentBlog] = useState<number>(0);

  return (
    <DashBoardNavContainer>
      <DashBoardTitle
        isBlogOpen={isBlogListOpen}
        setIsBlogListOpen={setIsBlogListOpen}
        currentBlog={currentBlog}
        setCurrentBlog={setCurrentBlog}
      />
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
      {isBlogListOpen && <BlogList currentBlog={currentBlog} setCurrentBlog={setCurrentBlog} />}
      <DashBoardFooter />
    </DashBoardNavContainer>
  );
};

export default DashBoardNav;
