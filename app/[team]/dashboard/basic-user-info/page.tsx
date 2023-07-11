'use client';
import React from 'react';
import styled from 'styled-components';

import DeleteButton from '@/components/dashboard/BasicUserInfo/UI/DeleteButton';
import UserId from '@/components/dashboard/BasicUserInfo/UI/UserId';
import UserInfoSaveButton from '@/components/dashboard/BasicUserInfo/UI/UserInfoSaveButton';
import UserName from '@/components/dashboard/BasicUserInfo/UI/UserName';
import UserOneLiner from '@/components/dashboard/BasicUserInfo/UI/UserOneLiner';
import UserPosition from '@/components/dashboard/BasicUserInfo/UI/UserPosition';
import UserProfile from '@/components/dashboard/BasicUserInfo/UI/UserProfile';

const BasicUserInfoPage = () => {
  return (
    <BasicUserInfoContainer>
      <UserProfile />
      <UserName />
      <UserOneLiner />
      <UserId />
      <UserPosition />
      <UserInfoSaveButton />
      <DeleteButton />
    </BasicUserInfoContainer>
  );
};

export default BasicUserInfoPage;

const BasicUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7.2rem;
`;
