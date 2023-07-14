'use client';

import React from 'react';
import styled from 'styled-components';

import { AuthorInfoProps } from '@/types/author';

import AuthorProfile from './AuthorProfile';

const AuthorInfo = (props: AuthorInfoProps) => {
  const { name, position, description } = props;

  return (
    <AuthorInfoContainer>
      <AuthorProfile />
      <AuthorName>{name}</AuthorName>
      <AuthorPosition>{position}</AuthorPosition>
      <AuthorDescription>{description}</AuthorDescription>
    </AuthorInfoContainer>
  );
};

export default AuthorInfo;

const AuthorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const AuthorName = styled.div`
  ${({ theme }) => theme.fonts.Heading1};
  margin-top: 2.4rem;
  color: ${({ theme }) => theme.colors.grey_900};
`;

const AuthorPosition = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};
`;

const AuthorDescription = styled.div`
  ${({ theme }) => theme.fonts.Body1_Regular};
  margin-top: 1.6rem;
  width: 60rem;
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.colors.grey_700};
`;
