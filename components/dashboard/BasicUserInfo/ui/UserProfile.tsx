'use client';
import React, { ChangeEvent } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { imageErrorCase } from '@/constants/image';
import { InputPlusButtonIcon, UserProfileDeleteIcon, UsersProfilesInputIcon } from '@/public/icons';
import { getImageMultipartData } from '@/utils/getImageMultipartData';
import { imageSizeErrorNotify } from '@/utils/imageSizeErrorNotify';

import { userInfoState } from '../state/user';

const UserProfile = () => {
  const { team } = useParams();

  const [{ thumbnail }, setUserInfoData] = useRecoilState(userInfoState);

  const handleOnFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;

    // const reader = new FileReader();
    if (files) {
      const remoteImgUrl = await getImageMultipartData(files[0]);
      if (remoteImgUrl === imageErrorCase.sizeError) {
        imageSizeErrorNotify();
      } else {
        remoteImgUrl && setUserInfoData((prev) => ({ ...prev, thumbnail: remoteImgUrl }));
      }
    }
  };

  const handleOnDeleteImg = () => {
    setUserInfoData((prev) => ({ ...prev, thumbnail: null }));
  };

  return (
    <>
      <UserProfileContainer>
        <ProfileInputLabel>
          <ImageGuideTitle>프로필 사진</ImageGuideTitle>

          {thumbnail ? (
            <ProfileContainer>
              <ImageUserBox src={thumbnail} alt="user profile" width={156} height={156} />
              <UsersProfilesDeleteButton type="button" onClick={handleOnDeleteImg}>
                <UserProfileDeleteIcon />
              </UsersProfilesDeleteButton>
            </ProfileContainer>
          ) : (
            <ImageLabel>
              <UsersProfilesInputBackground />
              <UsersProfilesInput />
              <input type="file" onChange={handleOnFileChange} accept=".jpg, .jpeg, .jpe, .png, .svg, .gif" />
            </ImageLabel>
          )}
        </ProfileInputLabel>
      </UserProfileContainer>
    </>
  );
};

export default UserProfile;

const ImageUserBox = styled(Image)`
  border-radius: 50%;
  width: 15.6rem;
  height: 15.6rem;
`;

const UsersProfilesDeleteButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
`;

const ImageLabel = styled.label`
  position: relative;
  cursor: pointer;
  & > input {
    display: none;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 15.6rem;
  height: 15.6rem;
`;

const UsersProfilesInputBackground = styled(UsersProfilesInputIcon)`
  position: relative;
`;

const UsersProfilesInput = styled(InputPlusButtonIcon)`
  position: absolute;

  right: 0;
  bottom: 0;
`;

const ImageGuideTitle = styled.h2`
  margin-right: 9.3rem;
  ${({ theme }) => theme.fonts.Body2_Semibold};
  height: 100%;
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
  height: 15.6rem;
`;
