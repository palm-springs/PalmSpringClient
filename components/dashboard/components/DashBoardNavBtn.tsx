'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useResetRecoilState } from 'recoil';

import { IS_FIRST_DRAFT_CLICK } from '@/constants/editor';

import { articleDataState } from '../../editor/states/atom';

import DashBoardNavBtnContainer from './ui/DashBoardNavBtnContainer';

const DashBoardNavBtn = () => {
  const { team: blogUrl } = useParams();
  const resetArticleDataState = useResetRecoilState(articleDataState);

  // sessionStorage
  const sessionStorage = typeof window !== 'undefined' ? window.sessionStorage : undefined;

  const router = useRouter();

  const handleOnNewPage = () => {
    resetArticleDataState();
    sessionStorage?.removeItem(IS_FIRST_DRAFT_CLICK);
    router.push(`/${blogUrl}/editor/article`);
  };

  return <DashBoardNavBtnContainer onDashboardClick={handleOnNewPage}>새 글 작성하기</DashBoardNavBtnContainer>;
};

export default DashBoardNavBtn;
