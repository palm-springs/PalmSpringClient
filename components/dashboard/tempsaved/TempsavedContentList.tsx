'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import { useGetTempSavedList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

import IndivTempsavedContentList from './IndivTempsavedContentList';

const TempsavedContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetTempSavedList(blogUrl);

  if (!data || data.length === 0)
    return (
      <EmptyLanding
        header={true}
        message1="임시저장된 글이 없어요."
        message2="새 글을 작성해보세요."
        buttonText="새 글 작성하기"
        buttonLink={`/${blogUrl}/editor/article`}
      />
    );

  return (
    <DashBoardContentListContainer>
      <DashBoardContent id="컨텐츠바" content="제목" author="작성자" position="직책" createdAt="작성일" />
      {data.map(({ id, title, teamMemberResponseDto: { name, job, createdAt } }) => {
        return <IndivTempsavedContentList key={id} id={id} title={title} name={name} job={job} createdAt={createdAt} />;
      })}
    </DashBoardContentListContainer>
  );
};

export default TempsavedContentList;
