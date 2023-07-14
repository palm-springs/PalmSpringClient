'use client';

import React, { useState } from 'react';

import { useDashboardContext } from '../context/dashboardContext';

import DashBoardContentContainer from './ui/DashBoardContentContainer';

export interface DashBoardContentProps {
  id: string | number;
  email?: string;
  content?: string;
  url?: string;
  tabType?: string;
  author?: string;
  description?: string;
  draft?: boolean; // 페이지에 글의 업로드 완료 or 임시저장 여부를 나타냄
  position?: string; // 아마 팀별 직무가 팀마다 다를 수 있으므로 나중에 서버에서 타입을 받아올 수 있다면 그거로 지정해줍시다.
  createdAt?: string;
  newsLetter?: number;
  onTitleClick: React.MouseEventHandler<HTMLButtonElement>;
}

const DashBoardContent = (props: DashBoardContentProps) => {
  const [isPopOverMenuOpen, setIsPopOverMenuOpen] = useState<boolean>(false);

  const { modalOpenContentId, setModalOpenContentId } = useDashboardContext();

  return (
    <DashBoardContentContainer
      contentObject={props}
      onMenuButtonClick={setIsPopOverMenuOpen}
      isPopOverMenuOpen={isPopOverMenuOpen}
      modalOpenContentId={modalOpenContentId}
      setModalOpenContentId={setModalOpenContentId}
    />
  );
};

export default DashBoardContent;
