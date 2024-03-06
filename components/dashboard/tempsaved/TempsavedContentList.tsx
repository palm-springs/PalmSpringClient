'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useResetRecoilState } from 'recoil';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { articleDataState } from '@/components/editor/states/atom';
import { IS_FIRST_DRAFT_CLICK } from '@/constants/editor';
import { useGetTempSavedList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';
import LoadingContainer from '../LoadingContainer';

import IndivTempsavedContentList from './IndivTempsavedContentList';

const TempsavedContentList = () => {
  const { team: blogUrl } = useParams();

  const router = useRouter();

  const data = useGetTempSavedList(blogUrl);

  const resetArticleDataState = useResetRecoilState(articleDataState);

  // sessionStorage
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  const [deleteModalId, setDeleteModalId] = useState<number | null>(null);

  if (!data)
    return (
      <LoadingContainer>
        <LoadingLottie width={10} height={10} />
      </LoadingContainer>
    );

  return data.length === 0 ? (
    <EmptyLanding
      header={true}
      message1="임시저장된 글이 없어요."
      message2="새 글을 작성해보세요."
      buttonText="새 글 작성하기"
      buttonClick={() => {
        resetArticleDataState();
        sessionStorage?.removeItem(IS_FIRST_DRAFT_CLICK);
        router.push(`/${blogUrl}/editor/article`);
      }}
    />
  ) : (
    <DashBoardContentListContainer>
      <DashBoardContent id="컨텐츠바" content="제목" author="작성자" position="직책" createdAt="작성일" />
      {data.map(({ id, title, teamMemberResponseDto: { name, job, createdAt } }) => {
        return (
          <IndivTempsavedContentList
            key={id}
            id={id}
            title={title}
            name={name}
            job={job}
            createdAt={createdAt}
            deleteModalId={deleteModalId}
            setDeleteModalId={setDeleteModalId}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default TempsavedContentList;
