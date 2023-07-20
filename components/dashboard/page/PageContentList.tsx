'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import { useGetPageList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';
import { dashBoardModalState } from '../state/modalState';

const PageContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetPageList(blogUrl);

  const setDashBoardModalState = useSetRecoilState(dashBoardModalState);

  if (!data || data.data.length === 0)
    return (
      <EmptyLanding
        header={true}
        message1="작성된 페이지가 없어요."
        message2="새 페이지를 작성해보세요."
        buttonText="새 페이지 만들기"
        buttonClick={() => setDashBoardModalState('createPage')}
      />
    );

  return (
    <DashBoardContentListContainer>
      {data.data.map(({ id, title, createdAt, isDraft }) => {
        return (
          <DashBoardContent
            key={id}
            id={String(id)}
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
