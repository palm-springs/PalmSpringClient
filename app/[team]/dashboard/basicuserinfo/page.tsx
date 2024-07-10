'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { userInfoState } from '@/components/dashboard/BasicUserInfo/state/user';
import DeleteButton from '@/components/dashboard/BasicUserInfo/ui/DeleteButton';
import UserId from '@/components/dashboard/BasicUserInfo/ui/UserId';
import UserInfoSaveButton from '@/components/dashboard/BasicUserInfo/ui/UserInfoSaveButton';
import UserName from '@/components/dashboard/BasicUserInfo/ui/UserName';
import UserOneLiner from '@/components/dashboard/BasicUserInfo/ui/UserOneLiner';
import UserPosition from '@/components/dashboard/BasicUserInfo/ui/UserPosition';
import UserProfile from '@/components/dashboard/BasicUserInfo/ui/UserProfile';
import { useGetUserBasicInfo } from '@/hooks/dashboard';

const BasicUserInfoPage = () => {
  const { team } = useParams();

  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);
  const setUserInfoDataState = useSetRecoilState(userInfoState);

  const data = useGetUserBasicInfo(team as string);
  useEffect(() => {
    if (!data) return;
    const {
      data: { thumbnail, nickname, url, job, description },
    } = data;
    setUserInfoDataState({ thumbnail, nickname, url, job, description });
  }, [data]);

  return (
    <PageContainer>
      <BasicUserInfoContainer>
        <UserProfile />
        <UserName />
        <UserId isDuplicate={isDuplicate} setIsDuplicate={setIsDuplicate} previousUrl={data?.data?.url} />
        <UserOneLiner />
        <UserPosition />
        <UserInfoSaveButton userPreviousData={data} />
      </BasicUserInfoContainer>
      <DeleteButton />
    </PageContainer>
  );
};

export default BasicUserInfoPage;

const PageContainer = styled.div`
  height: 100vh;
  overflow-y: scroll;
`;

const BasicUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 4rem;
`;
