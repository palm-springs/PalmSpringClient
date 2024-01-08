'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';

import DashBoardNavContainer from './ui/DashBoardNavContainer';
import Line from './ui/Line';
import BlogList from './BlogList';
import DashBoardFooter from './DashBoardFooter';
import DashBoardNoTeamTitle from './DashBoardNoTeamTitle';
import DashBoardTitle from './DashBoardTitle';
import NavButton from './NavButton';

const DashBoardNav = () => {
  const [isBlogListOpen, setIsBlogListOpen] = useState<boolean>(false);

  const [currentBlog, setCurrentBlog] = useState<number>(0);
  const blogListRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  const pathName = usePathname();

  const handleClickBlogListOutside = (event: MouseEvent) => {
    if (
      titleRef.current &&
      blogListRef.current &&
      !titleRef.current.contains(event.target as Node) &&
      !blogListRef.current.contains(event.target as Node)
    ) {
      setIsBlogListOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickBlogListOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickBlogListOutside);
    };
  });

  return (
    <DashBoardNavContainer>
      {pathName.startsWith('/no-team') ? (
        <DashBoardNoTeamTitle
          isBlogOpen={isBlogListOpen}
          setIsBlogListOpen={setIsBlogListOpen}
          currentBlog={currentBlog}
          setCurrentBlog={setCurrentBlog}
          titleRef={titleRef}
        />
      ) : (
        <DashBoardTitle
          isBlogOpen={isBlogListOpen}
          setIsBlogListOpen={setIsBlogListOpen}
          currentBlog={currentBlog}
          setCurrentBlog={setCurrentBlog}
          titleRef={titleRef}
        />
      )}
      <NavButtonListContainer>
        <NavButton currentPageType="upload" />
        <NavButton currentPageType="tempsaved" />
        <Line sideBar />
        <NavButton currentPageType="page" />
        <NavButton currentPageType="category" />
        <NavButton currentPageType="nav" />
        <Line sideBar />
        <NavButton currentPageType="member" />
        <NavButton currentPageType="subscriber" />
        <Line sideBar />
        <NavButton currentPageType="blogdirectnav" />
        <NavButton currentPageType="blogconfignav" />
        <NavButton currentPageType="basicuserinfo" />
      </NavButtonListContainer>
      {isBlogListOpen && (
        <BlogList currentBlog={currentBlog} setCurrentBlog={setCurrentBlog} blogListRef={blogListRef} />
      )}
      {/* <DashBoardFooter /> */}
    </DashBoardNavContainer>
  );
};

export default DashBoardNav;

const NavButtonListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: calc(100vh - 24.6rem);
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
