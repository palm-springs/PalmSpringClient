'use client';

import React from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useResetRecoilState } from 'recoil';

import { checkSessionStorage } from '@/utils/checkSessionStorage';
import { removeDraftContentData } from '@/utils/removeContentData';

import { articleDataState } from '../../editor/states/atom';

import DashBoardNavBtnContainer from './ui/DashBoardNavBtnContainer';

const DashBoardNavBtn = () => {
  const { team: blogUrl } = useParams();
  const resetArticleDataState = useResetRecoilState(articleDataState);

  const pathName = usePathname();

  // sessionStorage
  const sessionStorage = checkSessionStorage();

  const router = useRouter();

  const handleOnNewPage = () => {
    resetArticleDataState();
    removeDraftContentData();
    router.push(`/${blogUrl}/editor/article`);
  };

  return (
    <DashBoardNavBtnContainer onDashboardClick={handleOnNewPage} disabled={pathName.startsWith('/no-team')}>
      새 글 작성하기
    </DashBoardNavBtnContainer>
  );
};

export default DashBoardNavBtn;
