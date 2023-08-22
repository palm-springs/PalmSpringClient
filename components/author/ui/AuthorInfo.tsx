'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

interface AuthorInfoComponentProps {
  thumbnail: string;
  nickname: string;
  job: string;
  description: string;
}

const AuthorInfo = (props: AuthorInfoComponentProps) => {
  const { thumbnail, nickname, job, description } = props;

  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });

  if (MOBILE)
    return (
      <AuthorInfoContainer>
        <AuthorProfile src={thumbnail} alt="author profile pic" />
        <AuthorName className="mobile">{nickname}</AuthorName>
        <AuthorPosition className="mobile">{job}</AuthorPosition>
        <AuthorDescription className="mobile">{description}</AuthorDescription>
      </AuthorInfoContainer>
    );
  else
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
  justify-content: center;

  margin-top: 6rem;
  width: 100vw;
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

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Title1};
  }
`;

const AuthorPosition = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Semibold};
  color: ${({ theme }) => theme.colors.grey_900};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Title2};
  }
`;

const AuthorDescription = styled.div`
  ${({ theme }) => theme.fonts.Body1_Regular};
  margin-top: 1.6rem;
  width: 60rem;
  text-align: center;
  word-break: keep-all;
  color: ${({ theme }) => theme.colors.grey_700};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Body2_Regular};
  }
`;
