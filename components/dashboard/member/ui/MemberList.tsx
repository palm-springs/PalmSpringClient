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

  const MemberList = res?.data.map(({ email, id, role, job, nickname, thumbnail }) => {
    return (
      <Member
        key={id}
        thumbnail={thumbnail}
        nickname={nickname}
        job={job}
        role={role}
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
  display: flex;
  flex-direction: column;

  width: 100%;
`;
