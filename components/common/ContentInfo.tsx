'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';
import useGetIfContentPage from '@/hooks/useGetIfContentPage';
import useGetIfPage from '@/hooks/useGetIfPage';
import { NoUserProfileIcon } from '@/public/icons';

import LoadingLottie from './ui/LoadingLottie';

interface ContentInfoProps {
  contentInfoData?: {
    title: string;
    description?: string | null;
    teamMember?: {
      id: number;
      thumbnail: string | null;
      name: string;
      job: string;
      createdAt: string;
    };
  };
  IndivContentId?: number;
  articleUrl?: string;
}

const ContentInfo = (props: ContentInfoProps) => {
  const MOBILE = useCheckMobile();

  const { contentInfoData, IndivContentId, articleUrl } = props;

  const ifContent = useGetIfContentPage();
  const ifPage = useGetIfPage();
  if (!contentInfoData) return <LoadingLottie height={4} width={4} fit={false} />;
  const { title, description, teamMember } = contentInfoData;

  if (ifPage === 'page' && !teamMember) return <></>;
  if (!teamMember) return <LoadingLottie height={4} width={4} fit={false} />;

  const { thumbnail, name, job, createdAt, id } = teamMember;

  if (MOBILE)
    return (
      <ContentInfoContainer className="mobile">
        {ifContent === 'content' ? (
          <ContentDetailBox>
            <TitleBox className="mobile">{title}</TitleBox>
            {description && <DescriptionBox className="mobile">{description}</DescriptionBox>}
          </ContentDetailBox>
        ) : (
          <ContentDetailBox>
            <Link href={`/content/article/${articleUrl}/${IndivContentId}`}>
              <TitleBox className="mobile">{title}</TitleBox>
              {description && <DescriptionBox className="mobile">{description}</DescriptionBox>}
            </Link>
          </ContentDetailBox>
        )}
        {name && (
          <WriterBox>
            <WriterInfo href={`/author/${id}`} className="mobile">
              {thumbnail ? (
                <WriterProfilePic src={thumbnail} alt="writer profile pic" width={50} height={50} />
              ) : (
                <NoUserProfileIcon />
              )}
              <WriterDetailBox className="mobile">
                <WriterNameBox>
                  <WriterDetail className="mobile">{name}</WriterDetail>
                  {job && <WriterDetail className="mobile">&nbsp;·&nbsp;{job}</WriterDetail>}
                </WriterNameBox>
                <WriterDetail className="date">{createdAt}</WriterDetail>
              </WriterDetailBox>
            </WriterInfo>
          </WriterBox>
        )}
      </ContentInfoContainer>
    );
  else
    return (
      <ContentInfoContainer className={ifContent === 'content' ? 'noHover' : 'hover'}>
        {ifContent === 'content' ? (
          <ContentDetailBox>
            <TitleBox>{title}</TitleBox>
            {description && <DescriptionBox>{description}</DescriptionBox>}
          </ContentDetailBox>
        ) : (
          <ContentDetailBox>
            <Link href={`/content/article/${articleUrl}/${IndivContentId}`}>
              <TitleBox>{title}</TitleBox>
              {description && <DescriptionBox>{description}</DescriptionBox>}
            </Link>
          </ContentDetailBox>
        )}
        {name && (
          <WriterBox>
            <WriterInfo href={`/author/${id}`}>
              {thumbnail ? (
                <WriterProfilePic src={thumbnail} alt="writer profile pic" width={50} height={50} />
              ) : (
                <NoUserProfileIcon />
              )}
              <WriterDetailBox>
                <WriterNameBox>
                  <WriterDetail>{name}</WriterDetail>
                  {job && <WriterDetail>&nbsp;·&nbsp;{job}</WriterDetail>}
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

const WriterProfilePic = styled(Image)`
  border-radius: 50%;

  width: 5rem;
  height: 5rem;
`;

const ContentDetailBox = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

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
  align-items: flex-start;
  justify-content: flex-start;

  width: 72rem;

  &.mobile {
    padding: 0 2.4rem;
    width: 100vw;
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

  margin: 3.2rem 0 0.8rem;
  width: 100%;

  overflow: hidden;
  word-break: break-all;

  color: ${({ theme }) => theme.colors.grey_950};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Title1};
  }
`;

const DescriptionBox = styled.article`
  ${({ theme }) => theme.fonts.Body1_Regular};
  display: flex;
  justify-content: flex-start;

  margin-bottom: 2.8rem;
  width: 100%;

  overflow: hidden;
  word-break: break-all;

  color: ${({ theme }) => theme.colors.grey_950};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Body1_Regular};
  }
`;

const WriterInfo = styled(Link)`
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  &.mobile {
    gap: 0.8rem;
  }
`;

const WriterDetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &.mobile {
    gap: 0.1rem;
  }
`;

const WriterDetail = styled.div`
  ${({ theme }) => theme.fonts.Body2_Regular};
  color: ${({ theme }) => theme.colors.grey_900};

  &.date {
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_700};
  }

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Body2_Regular};
  }
`;
