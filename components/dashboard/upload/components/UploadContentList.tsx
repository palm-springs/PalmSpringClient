'use client';

import React from 'react';

import mockUploadContentList from '@/constants/mockUploadList';

import DashBoardContent from '../../components/DashBoardContent';
import DashBoardContentListContainer from '../../components/ui/DashBoardContentListContainer';

interface UploadContentListProps {
  category: dashBoardTabType;
}

const switchTabType = (tabType: dashBoardTabType) => {
  switch (tabType) {
    case 'all':
      return '전체';
    case 'culture':
      return '문화';
    case 'design':
      return '디자인';
    case 'dev':
      return '개발';
    case 'plan':
      return '기획';
  }
};

const UploadContentList = (props: UploadContentListProps) => {
  const { category } = props;

  return (
    <DashBoardContentListContainer>
      {mockUploadContentList.map((indivContent) => {
        const { id, content, tabType, author, position, createdAt, onTitleClick } = indivContent;
        if (category === 'all' || category === tabType)
          return (
            <DashBoardContent
              key={id}
              id={id}
              content={content}
              tabType={switchTabType(tabType)}
              author={author}
              position={position}
              createdAt={createdAt}
              onTitleClick={onTitleClick}
            />
          );
      })}
    </DashBoardContentListContainer>
  );
};

export default UploadContentList;
