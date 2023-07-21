'use client';

import React from 'react';
import styled from 'styled-components';

import Member from './Member';

interface MemberListProps {
  memberListData: {
    email: string;
    id: number;
    job: string;
    nickname: string;
    thumbnail: string;
  }[];
}
const MemberList = (props: MemberListProps) => {
  const { memberListData } = props;

  const MemberList = memberListData.map(({ email, id, job, nickname, thumbnail }) => {
    return <Member key={id} thumbnail={thumbnail} nickname={nickname} job={job} email={email} />;
  });

  return <MemberListContainer>{MemberList}</MemberListContainer>;
};

export default MemberList;

const MemberListContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
`;
