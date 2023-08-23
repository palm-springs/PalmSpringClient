'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

import DeleteButton from '@/components/dashboard/BasicUserInfo/ui/DeleteButton';
import UserId from '@/components/dashboard/BasicUserInfo/ui/UserId';
import UserInfoSaveButton from '@/components/dashboard/BasicUserInfo/ui/UserInfoSaveButton';
import UserName from '@/components/dashboard/BasicUserInfo/ui/UserName';
import UserOneLiner from '@/components/dashboard/BasicUserInfo/ui/UserOneLiner';
import UserPosition from '@/components/dashboard/BasicUserInfo/ui/UserPosition';
import UserProfile from '@/components/dashboard/BasicUserInfo/ui/UserProfile';

const BasicUserInfoPage = () => {
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);

  return (
    <BasicUserInfoContainer>
      <UserProfile />
      <UserName />
      <UserId isDuplicate={isDuplicate} setIsDuplicate={setIsDuplicate} />
      <UserOneLiner />
      <UserPosition />
      <DeleteButton />
      <UserInfoSaveButton />
    </BasicUserInfoContainer>
  );
};

export default BasicUserInfoPage;

const BasicUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
  overflow-y: scroll;
`;
