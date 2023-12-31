'use client';

import React from 'react';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';

interface AuthorInfoComponentProps {
  thumbnail: string;
  nickname: string;
  job: string;
  description: string;
}

const AuthorInfo = (props: AuthorInfoComponentProps) => {
  const { thumbnail, nickname, job, description } = props;

  const MOBILE = useCheckMobile();

  return (
    <AuthorInfoContainer className={MOBILE ? 'mobile' : ''}>
      <AuthorProfile src={thumbnail} alt="author profile pic" />
      <AuthorName className={MOBILE ? 'mobile' : ''}>{nickname}</AuthorName>
      <AuthorPosition className={MOBILE ? 'mobile' : ''}>{job}</AuthorPosition>
      <AuthorDescription className={MOBILE ? 'mobile' : ''}>{description}</AuthorDescription>
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

  &.mobile {
    margin-top: 4rem;
  }
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
    margin-top: 1.6rem;
  }
`;

const AuthorPosition = styled.div`
  ${({ theme }) => theme.fonts.Heading3_Regular};
  color: ${({ theme }) => theme.colors.grey_900};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Title2};
    font-weight: 400;
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
    margin-top: 1.2rem;
  }
`;
