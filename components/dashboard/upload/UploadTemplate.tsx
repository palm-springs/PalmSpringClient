'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import { useGetArticleList } from '@/hooks/editor';
import { useGetCategoryList } from '@/hooks/dashboard';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';

import UploadContentList from './components/UploadContentList';
import UploadTabBar from './components/UploadTabBar';

const UploadTemplate = () => {
  const { team: blogUrl } = useParams();

  const [category, setCategory] = useState<string>('전체');

  const categoryData = useGetCategoryList(blogUrl);

  const currentCategoryId = categoryData?.data.find(({ name }) => name === category)?.id;

  const articleData = useGetArticleList(blogUrl, category === '전체' ? '' : String(currentCategoryId));

  if (!categoryData)
    return (
      <EmptyLanding
        header={true}
        message1="업로드된 글이 없어요."
        message2="새 글을 작성해보세요."
        buttonText="새 글 작성하기"
        buttonLink={`/${blogUrl}/editor/article`}
      />
    );

  const filteredCategory = getLiteralCategoryList(categoryData);

  return (
    <DashBoardTemplateContainer>
      <UploadTabBar
        setCategory={setCategory}
        currentCategory={[...filteredCategory]}
        categoryListData={categoryData.data}
      />
      <Line />
      <UploadContentList category={filteredCategory} currentCategory={category} articleData={articleData} />
    </DashBoardTemplateContainer>
  );
};

export default UploadTemplate;
