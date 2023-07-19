'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

import { useGetArticleList } from '@/hooks/article';
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

  useEffect(() => {
    console.log(category, currentCategoryId);
  }, [articleData]);

  if (!categoryData || !articleData) return <div>로더</div>;

  const filteredCategory = getLiteralCategoryList(categoryData);

  return (
    <>
      <DashBoardTemplateContainer>
        <UploadTabBar
          setCategory={setCategory}
          currentCategory={[...filteredCategory]}
          categoryListData={categoryData.data}
        />
        <Line />
        <UploadContentList category={filteredCategory} articleData={articleData.data} />
      </DashBoardTemplateContainer>
    </>
  );
};

export default UploadTemplate;
