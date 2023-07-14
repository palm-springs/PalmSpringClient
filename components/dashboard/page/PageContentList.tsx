'use client';

import React from 'react';

import { useGetPageList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const PageContentList = () => {
  const blogUrl = 'Palms';

  const data = useGetPageList(blogUrl);

  if (!data) return <div>로더가 들어갈 자리입니다...</div>;

  return (
    <DashBoardContentListContainer>
      {data.data.map(({ id, title, createdAt, isDraft }) => {
        return (
          <DashBoardContent
            key={id}
            id={id}
            content={title}
            draft={isDraft}
            createdAt={createdAt}
            onTitleClick={() => {
              console.log('김서윤');
            }}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default PageContentList;
