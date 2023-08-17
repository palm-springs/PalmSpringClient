'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import { useGetCategoryList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';
import { dashBoardModalState } from '../state/modalState';

import IndivCategoryDashboardContent from './IndivCategoryDashboardContent';

const CategoryContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetCategoryList(blogUrl);

  const setModalState = useSetRecoilState(dashBoardModalState);

  if (!data || data.data.length === 0)
    return (
      <EmptyLanding
        header={true}
        message1="카테고리가 없어요."
        message2="새 카테고리를 작성해보세요."
        buttonText="새 카테고리 작성하기"
        buttonClick={() => setModalState('createCategory')}
      />
    );

  return (
    <DashBoardContentListContainer>
      <DashBoardContent id="컨텐츠바" content="이름" url="URL" description="한 줄 소개" />
      {data.data.map(({ id, name, categoryUrl, description }) => {
        return (
          <IndivCategoryDashboardContent
            key={id}
            id={Number(id)}
            content={name}
            categoryUrl={categoryUrl}
            blogUrl={blogUrl}
            description={description}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default CategoryContentList;
