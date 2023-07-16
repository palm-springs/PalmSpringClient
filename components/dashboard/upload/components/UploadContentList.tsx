'use client';

import React from 'react';

import { ArticleProps } from '../../../../types/article';
import { Response } from '../../../../types/common';
import DashBoardContent from '../../components/DashBoardContent';
import DashBoardContentListContainer from '../../components/ui/DashBoardContentListContainer';

interface UploadContentListProps {
  category: string[];
  articleData?: Response<ArticleProps>;
}

const UploadContentList = (props: UploadContentListProps) => {
  const { articleData } = props;

  if (!articleData) return <div>로더</div>;

  return (
    <DashBoardContentListContainer>
      {articleData.data.map(({ id, title, memberName, job, createdAt, categoryArticleResponseDto }) => {
        return (
          <DashBoardContent
            key={id}
            id={id}
            content={title}
            tabType={categoryArticleResponseDto && categoryArticleResponseDto.categoryName}
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
