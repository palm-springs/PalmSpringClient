'use client';

import React from 'react';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const NavContentList = () => {
  return (
    <DashBoardContentListContainer>
      <DashBoardContent
        content="팀 소개"
        url="https://우리도메인.com/about"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        content="팀 문화"
        url="https://우리도메인.com/culture"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        content="인스타그램"
        url="https://instagram.com/_9911120"
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
    </DashBoardContentListContainer>
  );
};

export default NavContentList;
