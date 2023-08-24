'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { userInfoState } from '@/components/dashboard/BasicUserInfo/state/user';
import DeleteButton from '@/components/dashboard/BasicUserInfo/ui/DeleteButton';
import UserId from '@/components/dashboard/BasicUserInfo/ui/UserId';
import UserName from '@/components/dashboard/BasicUserInfo/ui/UserName';
import UserOneLiner from '@/components/dashboard/BasicUserInfo/ui/UserOneLiner';
import UserPosition from '@/components/dashboard/BasicUserInfo/ui/UserPosition';
import UserProfile from '@/components/dashboard/BasicUserInfo/ui/UserProfile';
import { useGetUserBasicInfo } from '@/hooks/dashboard';

const BasicUserInfoPage = () => {
  const { team } = useParams();

  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);
  const setUserInfoDataState = useSetRecoilState(userInfoState);

  const data = useGetUserBasicInfo(team);

  useEffect(() => {
    if (data) {
      const {
        data: { thumbnail, nickname, job, description },
      } = data;
      console.log(thumbnail, nickname, job, description);
      setUserInfoDataState({ thumbnail, nickname, job, description });
    }
  }, []);

  return (
    <BasicUserInfoContainer>
      <UserProfile />
      <UserName />
      <UserId isDuplicate={isDuplicate} setIsDuplicate={setIsDuplicate} />
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
