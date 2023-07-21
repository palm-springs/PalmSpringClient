'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import { ArticleData } from '@/types/article';
import { Response } from '@/types/common';

import DashBoardContent from '../../components/DashBoardContent';
import DashBoardContentListContainer from '../../components/ui/DashBoardContentListContainer';

interface UploadContentListProps {
  category: string[];
  articleData?: Response<ArticleData[]>;
}

const UploadContentList = (props: UploadContentListProps) => {
  const { articleData } = props;

  const { team } = useParams();

  if (!articleData || articleData.data.length === 0)
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
      {articleData.data.map(({ id, title, memberName, job, createdAt, articleCategory }) => {
        return (
          <DashBoardContent
            key={id}
            id={String(id)}
            content={title}
            tabType={articleCategory && articleCategory.categoryName}
            author={memberName}
            position={job}
            createdAt={createdAt}
            onTitleClick={console.log}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default UploadContentList;
