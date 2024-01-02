'use client';

import React, { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { articleDataState } from '@/components/editor/states/atom';
import { useGetCategoryList } from '@/hooks/dashboard';
import { useGetArticleList } from '@/hooks/editor';
import { getLiteralCategoryList } from '@/utils/getLiteralCategoryList';

import DashBoardTemplateContainer from '../components/ui/DashBoardTemplateContainer';
import Line from '../components/ui/Line';
import LoadingContainer from '../LoadingContainer';

import UploadContentList from './components/UploadContentList';
import UploadTabBar from './components/UploadTabBar';

const UploadTemplate = () => {
  const { team: blogUrl } = useParams();

  const router = useRouter();

  const [category, setCategory] = useState<string>('전체');

  const setArticleDataState = useSetRecoilState(articleDataState);

  const categoryData = useGetCategoryList(blogUrl);

  const currentCategoryId = categoryData?.data.find(({ name }) => name === category)?.id;

  const articleData = useGetArticleList(blogUrl, category === '전체' ? '' : String(currentCategoryId));

  if (!categoryData || !articleData)
    return (
      <LoadingContainer>
        <LoadingLottie width={10} height={10} />
      </LoadingContainer>
    );

  const filteredCategory = getLiteralCategoryList(categoryData);

  return articleData.data.length === 0 ? (
    <EmptyLanding
      header={true}
      message1="업로드된 글이 없어요."
      message2="새 글을 작성해보세요."
      buttonText="새 글 작성하기"
      buttonClick={() => {
        router.push(`/${blogUrl}/editor/article`);
        setArticleDataState((prev) => ({
          ...prev,
          title: '',
        }));
      }}
    />
  ) : (
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
