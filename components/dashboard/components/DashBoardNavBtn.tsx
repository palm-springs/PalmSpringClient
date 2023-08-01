'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

import DashBoardNavBtnContainer from './ui/DashBoardNavBtnContainer';

const DashBoardNavBtn = () => {
  const { team: blogUrl } = useParams();

  const router = useRouter();

  return (
    <DashBoardNavBtnContainer onDashboardClick={() => router.push(`/${blogUrl}/editor/page`)}>
      새 글 작성하기
    </DashBoardNavBtnContainer>
  );
};

export default DashBoardNavBtn;
