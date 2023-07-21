'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import { useGetUserBasicInfo } from '@/hooks/dashboard';
import { InputPlusButtonIcon, UserProfileDeleteIcon, UsersProfilesInputIcon } from '@/public/icons';
import { getUserBasicInfo } from '@/types/dashboard';

const UserProfile = () => {
  const { team } = useParams();
  const [inputImage, setInputImage] = useState(true);
  const basicUserData = useGetUserBasicInfo(team);
  if (!basicUserData) return;
  return (
    <UserProfileContainer>
      <ProfileInputLabel>
        <input type="file" />
        <ImageGuideContainer>
          <ImageGuideTitle>프로필 사진</ImageGuideTitle>
        </ImageGuideContainer>

        {inputImage ? (
          <>
            <ImageUserBox src={basicUserData.data.thumbnail} alt="user profile" />
            <UsersProfilesDelete />
          </>
        ) : (
          <>
            <UsersProfilesInputBackground />
            <UsersProfilesInput />
          </>
        )}
      </ProfileInputLabel>
    </UserProfileContainer>
  );
};

export default UserProfile;

const ImageUserBox = styled.img`
  border-radius: 50%;
  width: 15.6rem;
  height: 15.6rem;
`;

const UsersProfilesDelete = styled(UserProfileDeleteIcon)`
  position: absolute;
  top: 25rem;
  left: 64.5rem;
`;

const UsersProfilesInputBackground = styled(UsersProfilesInputIcon)`
  position: relative;
`;

const UsersProfilesInput = styled(InputPlusButtonIcon)`
  position: absolute;
  top: 25rem;
  left: 64.5rem;
`;

const ImageGuideContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2.4rem 0 0.8rem 0;
`;

const ImageGuideTitle = styled.h1`
  margin: -9rem 9.3rem 0 0;
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;

const ProfileInputLabel = styled.label`
  display: flex;
  border: none;
  border-radius: 0.5rem;
  input[type='file'] {
    position: absolute;
    margin: -1px;
    border: 0;
    padding: 0;
    width: 0;
    height: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }
`;

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
