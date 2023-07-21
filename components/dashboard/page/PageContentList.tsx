'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import { useGetPageList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const PageContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetPageList(blogUrl);

  const router = useRouter();

  if (!data || data.data.length === 0)
    return (
      <EmptyLanding
        header={true}
        message1="작성된 페이지가 없어요."
        message2="새 페이지를 만들어보세요."
        buttonText="새 페이지 만들기"
        buttonClick={() => router.push(`/${blogUrl}/editor/page`)}
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
