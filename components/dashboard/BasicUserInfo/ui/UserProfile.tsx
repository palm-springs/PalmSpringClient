'use client';
import React, { ChangeEvent } from 'react';
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
      //   setUserInfoData();
      // };
    }
  };

  const handleOnClickDelete = () => {
    setUserInfoData((prev) => ({ ...prev, thumbnail: '' }));
  };

  return (
    <UserProfileContainer>
      <ProfileInputLabel>
        <input type="file" />
        <ImageGuideContainer>
          <ImageGuideTitle>프로필 사진</ImageGuideTitle>
        </ImageGuideContainer>

        {thumbnail !== '' ? (
          <>
            <ImageUserBox src={thumbnail} alt="user profile" />
            <UsersProfilesDelete onClick={handleOnClickDelete} />
          </>
        ) : (
          <>
            <UsersProfilesInputBackground />
            <UsersProfilesInput />
            <input type="file" onChange={handleOnFileChange} />
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
