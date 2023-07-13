'use client';

import React from 'react';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const CategoryContentList = () => {
  return (
    <DashBoardContentListContainer>
      <DashBoardContent
        id="category_1"
        content="문화"
        url="/category/culture"
        description="문화 카테고리에 대한 한줄 소개... 우리 문화를 소개합니다..."
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="category_2"
        content="개발"
        url="/category/dev"
        description="문화 카테고리에 대한 한줄 소개... 우리 문화를 소개합니다..."
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="category_3"
        content="디자인"
        url="/category/design"
        description="문화 카테고리에 대한 한줄 소개... 우리 문화를 소개합니다..."
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="category_4"
        content="기술"
        url="/category/tech"
        description="문화 카테고리에 대한 한줄 소개... 우리 문화를 소개합니다..."
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
      <DashBoardContent
        id="category_5"
        content="환경"
        url="/category/environment"
        description="문화 카테고리에 대한 한줄 소개... 우리 문화를 소개합니다..."
        onTitleClick={() => {
          console.log('김서윤');
        }}
      />
    </DashBoardContentListContainer>
  );
};

export default CategoryContentList;
