'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetNavList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';
import LoadingContainer from '../LoadingContainer';
import { dashBoardModalState } from '../state/modalState';

import IndivNavDashboardContent from './IndivNavDashboardContent';

const NavContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetNavList(blogUrl);

  const setDashBoardModalState = useSetRecoilState(dashBoardModalState);

  const [currentModalId, setCurrentModalId] = useState<number | null>(null);

  if (!data)
    return (
      <LoadingContainer>
        <LoadingLottie width={10} height={10} />
      </LoadingContainer>
    );

  console.log(data);

  return data.data.length === 0 ? (
    <EmptyLanding
      header={true}
      message1="네비게이션이 없어요."
      message2="새 네비게이션을 만들어보세요."
      buttonText="새 네비게이션 만들기"
      buttonClick={() => setDashBoardModalState('createNavigation')}
    />
  ) : (
    <DashBoardContentListContainer>
      <DashBoardContent id="컨텐츠바" content="이름" url="URL" />
      {data.data.map(({ id, name, navUrl, isPage }) => {
        return (
          <IndivNavDashboardContent
            key={id}
            currentModalId={currentModalId}
            setCurrentModalId={setCurrentModalId}
            id={id}
            content={name}
            url={navUrl}
            blogUrl={blogUrl}
            isPage={isPage}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default NavContentList;
