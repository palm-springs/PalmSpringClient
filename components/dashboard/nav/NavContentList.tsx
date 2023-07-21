'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';

import EmptyLanding from '@/components/common/ui/EmptyLanding';
import { useGetNavList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';
import { dashBoardModalState } from '../state/modalState';

const NavContentList = () => {
  const { team: blogUrl } = useParams();

  const data = useGetNavList(blogUrl);

  const setDashBoardModalState = useSetRecoilState(dashBoardModalState);

  if (!data || data.data.length === 0)
    return (
      <EmptyLanding
        header={true}
        message1="네비게이션이 없어요."
        message2="새 네비게이션을 만들어보세요."
        buttonText="새 네비게이션 만들기"
        buttonClick={() => setDashBoardModalState('createNavigation')}
      />
    );

  return (
    <DashBoardContentListContainer>
      {data.data.map(({ id, name, navUrl }) => {
        return (
          <DashBoardContent
            key={id}
            id={String(id)}
            content={name}
            url={navUrl}
            onTitleClick={() => {
              console.log('김서윤');
            }}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default NavContentList;
