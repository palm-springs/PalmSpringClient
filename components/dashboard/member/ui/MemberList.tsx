'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import LoadingLottie from '@/components/common/ui/LoadingLottie';
import { useGetMemberInfo } from '@/hooks/dashboard';
import userState from '@/recoil/atom/user';
import userRoleSelector from '@/recoil/selector/userRoleSelector';

import Member from './Member';

const MemberList = () => {
  const { team } = useParams();

  const [showPopOver, setShowPopOver] = useState<string>('');

  const [isPermissionModalOpen, setIsPermissionModalOpen] = useState<string>('');

  const res = useGetMemberInfo(team);

  const userRole = useRecoilValue(userRoleSelector);

  const user = useRecoilValue(userState);

  if (!res || !res.data || !user) return <LoadingLottie width={5} height={5} fit />;

  const MemberList = res.data.map(({ email, id, job, nickname, thumbnail, role }) => {
    const isUserCanEditIndivMemberPermission =
      userRole === 'OWNER' ? true : userRole === 'MANAGER' ? role === 'EDITOR' : false;
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
        isUserCanEditIndivMemberPermission={isUserCanEditIndivMemberPermission && user.email !== email}
        isPermissionModalOpen={isPermissionModalOpen}
        setIsPermissionModalOpen={setIsPermissionModalOpen}
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
