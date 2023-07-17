'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import useGetIfContentPage from '@/hooks/useGetIfContentPage';
import { NoUserProfileIcon } from '@/public/icons';
import { ContentProps } from '@/types/content';

interface ContentInfoProps {
  content: ContentProps;
}

const ContentInfo = (props: ContentInfoProps) => {
  const ifContent = useGetIfContentPage();
  const {
    content: {
      title,
      description,
      teamMember: { thumbnail, name, job, createdAt },
    },
  } = props;

  return (
    <ContentInfoContainer className={ifContent === 'content' ? 'noHover' : 'hover'}>
      {ifContent === 'content' ? (
        <TestBox>
          <TitleBox>{title}</TitleBox>
          {description && <DescriptionBox>{description}</DescriptionBox>}
        </TestBox>
      ) : (
        <TestBox>
          <Link href={`/blogNameHere/content/contentNameHere`}>
            <TitleBox>{title}</TitleBox>
            {description && <DescriptionBox>{description}</DescriptionBox>}
          </Link>
        </TestBox>
      )}
      {name && (
        <WriterBox>
          <WriterInfo href={`/blogNameHere/author/authorNameHere`}>
            {thumbnail ? <WriterProfilePic src={thumbnail} alt="writer profile pic" /> : <NoUserProfileIcon />}
            <WriterDetailBox>
              <WriterNameBox>
                <WriterDetail>{name}</WriterDetail>&nbsp;·&nbsp;<WriterDetail>{job}</WriterDetail>
              </WriterNameBox>
              <WriterDetail className="date">{createdAt}</WriterDetail>
            </WriterDetailBox>
          </WriterInfo>
        </WriterBox>
      )}
    </ContentInfoContainer>
  );
};

export default ContentInfo;

const WriterBox = styled.article`
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

const WriterProfilePic = styled.img`
  border-radius: 50%;

  width: 5rem;
  height: 5rem;
`;

const TestBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.hover:hover {
    opacity: 0.8;
  }

  &.noHover:hover {
    opacity: 1;
  }
`;

const ContentInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: 72rem;
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

  margin: 3.2rem 0 1.2rem;
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
