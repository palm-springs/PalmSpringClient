'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetCategoryList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';
import LoadingContainer from '../LoadingContainer';
import { dashBoardModalState } from '../state/modalState';

import IndivCategoryDashboardContent from './IndivCategoryDashboardContent';

const CategoryContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetCategoryList(blogUrl);

  const setModalState = useSetRecoilState(dashBoardModalState);

  const [currentModalId, setCurrentModalId] = useState<number | null>(null);

  if (!data)
    return (
      <LoadingContainer>
        <LoadingLottie width={10} height={10} />
      </LoadingContainer>
    );

  return data.data.length === 0 ? (
    <EmptyLanding
      header={true}
      message1="카테고리가 없어요."
      message2="새 카테고리를 작성해보세요."
      buttonText="새 카테고리 작성하기"
      buttonClick={() => setModalState('createCategory')}
    />
  ) : (
    <DashBoardContentListContainer>
      <DashBoardContent id="컨텐츠바" content="이름" url="URL" description="한 줄 소개" />
      {data.data.map(({ id, name, categoryUrl, description }) => {
        return (
          <IndivCategoryDashboardContent
            key={id}
            currentModalId={currentModalId}
            setCurrentModalId={setCurrentModalId}
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
