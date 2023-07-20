'use client';

import React from 'react';
import styled from 'styled-components';

interface AuthorInfoComponentProps {
  thumbnail: string;
  nickname: string;
  job: string;
  description: string;
}

const AuthorInfo = (props: AuthorInfoComponentProps) => {
  const { thumbnail, nickname, job, description } = props;

  return (
    <AuthorInfoContainer>
      <AuthorProfile src={thumbnail} alt="author profile pic" />
      <AuthorName>{nickname}</AuthorName>
      <AuthorPosition>{job}</AuthorPosition>
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

const AuthorProfile = styled.img`
  border-radius: 50%;
  width: 16rem;
  height: 16rem;
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
