'use client';
import React from 'react';
import styled from 'styled-components';

import { InputProfileIcon } from '@/public/icons';

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <UserInfoTitle>내정보</UserInfoTitle>
      <ProfileInputLabel>
        <input type="file" />
        <ImageGuideContainer>
          <ImageGuideTitle>프로필 사진</ImageGuideTitle>
          <ImageGuideContent>000*000 JPEG (이미지 규격 가이드)</ImageGuideContent>
        </ImageGuideContainer>
        <InputProfileIcon />
      </ProfileInputLabel>
    </UserProfileContainer>
  );
};

export default UserProfile;

const ImageGuideContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2.4rem 0 0.8rem 0;
`;

const ImageGuideContent = styled.p`
  margin-left: 0.8rem;
  ${({ theme }) => theme.fonts.Caption};
  color: ${({ theme }) => theme.colors.grey_700};
`;

const ImageGuideTitle = styled.p`
  ${({ theme }) => theme.fonts.Body2_Semibold};
  color: ${({ theme }) => theme.colors.grey_950};
`;

const UserInfoTitle = styled.p`
  margin-top: 6rem;
  ${({ theme }) => theme.fonts.Heading1};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const ProfileInputLabel = styled.label`
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
