'use client';
import React, { ChangeEvent, useState } from 'react';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { InputPlusButtonIcon, UserProfileDeleteIcon, UsersProfilesInputIcon } from '@/public/icons';
import { getImageMultipartData } from '@/utils/getImageMultipartData';

import { userInfoState } from '../state/user';

const UserProfile = () => {
  const { team } = useParams();

  const [{ thumbnail }, setUserInfoData] = useRecoilState(userInfoState);

  const handleOnFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;

    // const reader = new FileReader();
    if (files) {
      const remoteImgUrl = await getImageMultipartData(files[0], team);
      setUserInfoData((prev) => ({ ...prev, thumbnail: remoteImgUrl }));

      // reader.readAsDataURL(files[0] as Blob);
      // reader.onloadend = () => {
      //   setImgSrc();
      // };
    }
  };

  const handleOnDeleteImg = () => {
    setUserInfoData((prev) => ({ ...prev, thumbnail: null }));
  };

  return (
    <UserProfileContainer>
      <ProfileInputLabel>
        <ImageGuideContainer>
          <ImageGuideTitle>프로필 사진</ImageGuideTitle>
        </ImageGuideContainer>

        {thumbnail ? (
          <>
            <ImageUserBox src={thumbnail} alt="user profile" />
            <UsersProfilesDeleteButton type="button" onClick={handleOnDeleteImg}>
              <UserProfileDeleteIcon />
            </UsersProfilesDeleteButton>
          </>
        ) : (
          <ImageLabel>
            <UsersProfilesInputBackground />
            <UsersProfilesInput />
            <input type="file" onChange={handleOnFileChange} />
          </ImageLabel>
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

const UsersProfilesDeleteButton = styled.button`
  position: absolute;
  top: 25rem;
  left: 60.8rem;
`;

const ImageLabel = styled.label`
  cursor: pointer;
  & > input {
    display: none;
  }
`;

const UsersProfilesInputBackground = styled(UsersProfilesInputIcon)`
  position: relative;
`;

const UsersProfilesInput = styled(InputPlusButtonIcon)`
  position: absolute;
  top: 25rem;
  left: 60.8rem;
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

const ProfileInputLabel = styled.div`
  display: flex;
  border: none;
  border-radius: 0.5rem;
`;

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
