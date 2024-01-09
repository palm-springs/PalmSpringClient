'use client';
import { ChangeEvent } from 'react';
import { Toaster } from 'react-hot-toast';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { imageErrorCase } from '@/constants/image';
import { ProfilePhotoIcon, UserProfileDeleteIcon } from '@/public/icons';
import { getImageMultipartData } from '@/utils/getImageMultipartData';
import { imageSizeErrorNotify } from '@/utils/imageSizeErrorNotify';

import { invitedUserDataState } from '../states/userData';

const UserProfile = () => {
  const [{ thumbnail }, setInvitedUserData] = useRecoilState(invitedUserDataState);

  const handleOnFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.currentTarget;

    if (files) {
      const remoteImgUrl = await getImageMultipartData(files[0]);
      if (remoteImgUrl === imageErrorCase.sizeError) {
        imageSizeErrorNotify();
      } else {
        remoteImgUrl && setInvitedUserData((prev) => ({ ...prev, thumbnail: remoteImgUrl }));
      }
    }
  };

  const handleOnDeleteImg = () => {
    setInvitedUserData((prev) => ({ ...prev, thumbnail: null }));
  };

  const profile = () => {
    return thumbnail ? (
      <ProfileContainer>
        <ImageUserBox src={thumbnail} alt="user profile" />
        <UsersProfilesDeleteButton type="button" onClick={handleOnDeleteImg}>
          <UserProfileDeleteIcon />
        </UsersProfilesDeleteButton>
      </ProfileContainer>
    ) : (
      <Label>
        <ProfilePhotoIcon />
        <input type="file" onChange={handleOnFileChange} accept=".jpg, .jpeg, .jpe, .png, .webp, .svg, .gif" />
      </Label>
    );
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          bottom: 80,
        }}
      />
      {profile}
    </>
  );
};

export default UserProfile;

const Label = styled.label`
  margin-top: 3.2rem;

  cursor: pointer;
  width: 14.2rem;
  height: 14.2rem;

  & > input {
    display: none;
  }
`;

const ProfileContainer = styled.div`
  position: relative;
  margin-top: 3.2rem;
  width: 14.2rem;
  height: 14.2rem;
`;

const ImageUserBox = styled.img`
  border-radius: 50%;
  width: 14.2rem;
  height: 14.2rem;
`;
const UsersProfilesDeleteButton = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
`;
