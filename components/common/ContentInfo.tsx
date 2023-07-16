'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import useGetIfContentPage from '@/hooks/useGetIfContentPage';
import { NoUserProfileIcon } from '@/public/icons';

interface ContentInfoProps {
  content: ContentProps;
}

const ContentInfo = (props: ContentInfoProps) => {
  const ifContent: string = useGetIfContentPage();
  const {
    content: {
      title,
      description,
      teamMember: { thumbnail, name, job, createdAt },
    },
  } = props;

  return (
    <ContentInfoContainer className={ifContent === 'content' ? 'noHover' : ''}>
      {ifContent === 'content' ? (
        <>
          <TitleBox>{title}</TitleBox>
          {description && <DescriptionBox>{description}</DescriptionBox>}
        </>
      ) : (
        <Link href={`/blogNameHere/content/contentNameHere`}>
          <TitleBox>{title}</TitleBox>
          {description && <DescriptionBox>{description}</DescriptionBox>}
        </Link>
      )}
      {name && (
        <WriterInfo href={`/blogNameHere/author/authorNameHere`}>
          {thumbnail ? <WriterProfilePic src={thumbnail} alt="writer profile pic" /> : <NoUserProfileIcon />}
          <WriterDetailBox>
            <WriterNameBox>
              <WriterDetail>{name}</WriterDetail>&nbsp;·&nbsp;<WriterDetail>{job}</WriterDetail>
            </WriterNameBox>
            <WriterDetail className="date">{createdAt}</WriterDetail>
          </WriterDetailBox>
        </WriterInfo>
      )}
    </ContentInfoContainer>
  );
};

export default ContentInfo;

const WriterProfilePic = styled.img`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`;

const ContentInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 72rem;

  &:hover {
    article,
    div {
      opacity: 0.8;
    }
  }
  &.noHover {
    pointer-events: none;
  }
`;

const WriterNameBox = styled.div`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.fonts.Body2_Regular};
`;

const TitleBox = styled.article`
  ${({ theme }) => theme.fonts.Title};
  display: flex;
  justify-content: flex-start;
  margin: 3.2rem 0 1.2rem 0;
  width: 100%;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const DescriptionBox = styled.article`
  ${({ theme }) => theme.fonts.Body1_Regular};
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2.8rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.grey_950};
`;

const WriterInfo = styled(Link)`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const WriterDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: flex-start;
`;

const WriterDetail = styled.div`
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_950};

  &.date {
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_700};
  }
`;
