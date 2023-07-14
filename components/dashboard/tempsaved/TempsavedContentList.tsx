'use client';

import React from 'react';

import { useGetTempSavedList } from '@/hooks/dashboard';

import DashBoardContent from '../components/DashBoardContent';
import DashBoardContentListContainer from '../components/ui/DashBoardContentListContainer';

const TempsavedContentList = () => {
  const blogUrl = 'Palms';

  const data = useGetTempSavedList(blogUrl);

  if (!data) return <div>로더가 들어갈 자리입니다...</div>;

  return (
    <DashBoardContentListContainer>
      {data.data.map(({ id, title, teamMemberResponseDto: { id: memberId, name, job, createdAt } }) => {
        return (
          <DashBoardContent
            key={id}
            id={id}
            content={title}
            author={name}
            position={job}
            createdAt={createdAt}
            onTitleClick={() => {
              console.log(name);
            }}
          />
        );
      })}
    </DashBoardContentListContainer>
  );
};

export default TempsavedContentList;
