'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { getNavList } from '@/api/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const NavContentList = () => {
  const blogUrl = 'Palms';

  const { data } = useQuery({
    queryKey: ['getCategoryList', blogUrl],
    queryFn: () => getNavList(blogUrl),
  });

  if (!data) return <div>로더가 들어갈 자리입니다.</div>;

  console.log(data);

  return (
    <DashBoardContentListContainer>
      {data.data.map(({ id, name, navUrl }) => {
        return (
          <DashBoardContent
            key={id}
            id={id}
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
