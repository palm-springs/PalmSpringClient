'use client';

import React from 'react';
import styled from 'styled-components';

import AuthorDescription from './AuthorDescription';
import AuthorName from './AuthorName';
import AuthorPosition from './AuthorPosition';
import AuthorProfile from './AuthorProfile';

const AuthorInfo = () => {
  return (
    <AuthorInfoContainer>
      <AuthorProfile />
      <AuthorName />
      <AuthorPosition />
      <AuthorDescription />
    </AuthorInfoContainer>
  );
};

export default AuthorInfo;

const AuthorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
