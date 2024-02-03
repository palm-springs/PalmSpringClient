'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';
import { IcAuthorDefaultIcon } from '@/public/icons';

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
      {thumbnail ? (
        <AuthorProfile src={thumbnail} alt="author profile pic" width={160} height={160} />
      ) : (
        <IcAuthorDefaultIcon />
      )}
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

  & > svg {
    width: 16rem;
    height: 16rem;
  }
`;

const AuthorProfile = styled(Image)`
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
  word-wrap: break-word;
  color: ${({ theme }) => theme.colors.grey_700};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Body2_Regular};
    margin-top: 1.2rem;
    width: 31.1rem;
    word-wrap: break-word;
  }
`;
