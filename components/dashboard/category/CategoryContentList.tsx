'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import { useGetCategoryList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const CategoryContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetCategoryList(blogUrl);

  const router = useRouter();

  if (!data || data.data.length === 0)
    return (
      <EmptyLanding
        header={true}
        message1="카테고리가 없어요."
        message2="새 카테고리를 작성해보세요."
        buttonText="새 카테고리 작성하기"
        buttonLink={`/${blogUrl}/editor/article`}
      />
    );

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
              router.push(`/${blogUrl}/home/${categoryUrl}`);
            }}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default CategoryContentList;
