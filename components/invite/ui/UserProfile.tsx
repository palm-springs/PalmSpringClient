'use client';
import styled from 'styled-components';

import { ProfilePhotoIcon } from '@/public/icons';

const UserProfile = () => {
  return (
    <Label>
      <ProfilePhotoIcon />
      <input type="file" />
    </Label>
  );
};

export default UserProfile;

const Label = styled.label`
  margin-top: 3.2rem;

  cursor: pointer;

  & > input {
    display: none;
  }
`;
