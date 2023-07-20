'use client';
import React from 'react';
import styled from 'styled-components';

import DeleteButton from '@/components/dashboard/BasicUserInfo/ui/DeleteButton';
import UserId from '@/components/dashboard/BasicUserInfo/ui/UserId';
import UserName from '@/components/dashboard/BasicUserInfo/ui/UserName';
import UserOneLiner from '@/components/dashboard/BasicUserInfo/ui/UserOneLiner';
import UserPosition from '@/components/dashboard/BasicUserInfo/ui/UserPosition';
import UserProfile from '@/components/dashboard/BasicUserInfo/ui/UserProfile';

const BasicUserInfoPage = () => {
  return (
    <BasicUserInfoContainer>
      <UserProfile />
      <UserName />
      <UserId />
      <UserOneLiner />
      <UserPosition />
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
