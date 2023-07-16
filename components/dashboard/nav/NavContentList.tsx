'use client';

import React from 'react';

import { useGetNavList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const NavContentList = () => {
  const blogUrl = 'Palms';

  const data = useGetNavList(blogUrl);

  if (!data) return <div>로더가 들어갈 자리입니다.</div>;

  return (
    <DashBoardContentListContainer>
      {data.data.map(({ id, name, navUrl }) => {
        return (
          <DashBoardContent
            key={id}
            id={String(id)}
            content={name}
            url={navUrl}
            onTitleClick={() => {
              console.log('김서윤');
            }}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default NavContentList;
