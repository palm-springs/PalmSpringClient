'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetMemberInfo } from '@/hooks/dashboard';

import Member from './Member';

const MemberList = () => {
  const { team } = useParams();

  const [showPopOver, setShowPopOver] = useState('');

  const res = useGetMemberInfo(team);
  if (!res || !res.data) return <LoadingLottie width={5} height={5} fit />;

  const MemberList = res?.data.map(({ email, id, job, nickname, thumbnail, role }) => {
    return (
      <Member
        key={id}
        role={role}
        memberId={String(id)}
        thumbnail={thumbnail}
        nickname={nickname}
        job={job}
        email={email}
        showPopOver={showPopOver}
        setShowPopOver={setShowPopOver}
      />
    );
  });

  return <MemberListContainer>{MemberList}</MemberListContainer>;
};

export default MemberList;

const MemberListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 20rem);
  overflow: scroll;
`;
