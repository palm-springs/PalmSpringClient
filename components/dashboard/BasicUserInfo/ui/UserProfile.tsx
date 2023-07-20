'use client';
import React from 'react';
import styled from 'styled-components';

import { InputProfileIcon } from '@/public/icons';

const UserProfile = () => {
  return (
    <UserProfileContainer>
      <ProfileInputLabel>
        <input type="file" />
        <ImageGuideContainer>
          <ImageGuideTitle>프로필 사진</ImageGuideTitle>
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

const ImageGuideTitle = styled.p`
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
