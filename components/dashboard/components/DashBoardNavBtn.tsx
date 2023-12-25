'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useResetRecoilState } from 'recoil';

import { articleDataState } from '../../editor/states/atom';

import DashBoardNavBtnContainer from './ui/DashBoardNavBtnContainer';

const DashBoardNavBtn = () => {
  const { team: blogUrl } = useParams();
  const resetArticleDataState = useResetRecoilState(articleDataState);

  const router = useRouter();

  const handleOnNewPage = () => {
    router.push(`/${blogUrl}/editor/article`);
    resetArticleDataState();
  };

  return <DashBoardNavBtnContainer onDashboardClick={handleOnNewPage}>새 글 작성하기</DashBoardNavBtnContainer>;
};

export default DashBoardNavBtn;
