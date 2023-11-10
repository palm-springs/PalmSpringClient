'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useResetRecoilState } from 'recoil';

import { pageDataState } from '../../editor/states/atom';

import DashBoardNavBtnContainer from './ui/DashBoardNavBtnContainer';

const DashBoardNavBtn = () => {
  const { team: blogUrl } = useParams();
  const resetPageData = useResetRecoilState(pageDataState);

  const router = useRouter();

  const handleOnNewPage = () => {
    resetPageData();
    router.push(`/${blogUrl}/editor/article`);
  };

  return <DashBoardNavBtnContainer onDashboardClick={handleOnNewPage}>새 글 작성하기</DashBoardNavBtnContainer>;
};

export default DashBoardNavBtn;
