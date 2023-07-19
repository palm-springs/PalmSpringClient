'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import { useGetCategoryList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const CategoryContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetCategoryList(blogUrl);

  if (!data) return <div>로더가 들어갈 자리입니다.</div>;

  return (
    <DashBoardContentListContainer>
      {data.data.map(({ id, name, categoryUrl, description }) => {
        return (
          <DashBoardContent
            key={id}
            id={String(id)}
            content={name}
            url={`/category/${categoryUrl}`}
            description={description}
            onTitleClick={() => {
              console.log(categoryUrl);
            }}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default CategoryContentList;
