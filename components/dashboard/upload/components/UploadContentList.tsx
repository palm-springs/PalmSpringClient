'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import { ArticleData } from '@/types/article';
import { Response } from '@/types/common';

import DashBoardContent from '../../components/DashBoardContent';
import DashBoardContentListContainer from '../../components/ui/DashBoardContentListContainer';

import IndivUploadContentList from './IndivUploadContentList';

interface UploadContentListProps {
  category: string[];
  currentCategory: string;
  articleData?: Response<ArticleData[]>;
}

const UploadContentList = (props: UploadContentListProps) => {
  const { articleData, currentCategory } = props;

  const { team } = useParams();

  const isAllCategory = currentCategory === '전체';

  if (!articleData || !articleData.data || articleData.data.length === 0)
    return (
      <EmptyLanding
        header={true}
        message1="업로드된 글이 없어요."
        message2="새 글을 작성해보세요."
        buttonText="새 글 작성하기"
        buttonLink={`/${team}/editor/article`}
      />
    );

  return (
    <DashBoardContentListContainer>
      <DashBoardContent
        id="컨텐츠바"
        content="제목"
        tabType={isAllCategory ? '카테고리' : undefined}
        author="작성자"
        position="직책"
        createdAt="작성일"
      />
      {articleData.data.map(({ id, title, memberName, job, createdAt, articleCategory, articleUrl }) => {
        return (
          <IndivUploadContentList
            key={id}
            id={id}
            title={title}
            memberName={memberName}
            job={job}
            createdAt={createdAt}
            articleCategory={articleCategory}
            articleUrl={articleUrl}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default UploadContentList;
