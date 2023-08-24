'use client';

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

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

// @params teamMember id 이건 나중에 author 페이지로 이동하는데 필요할수도 있을거 같아서 일단 받아왔습니당
// @params teamMember thumbnail 글쓴이 프로필 사진 없을 시 기본 프로필 아이콘으로 보여줌

const ContentInfo = (props: ContentInfoProps) => {
  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });

  const { team } = useParams();

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
            <WriterInfo href={`/author/${id}`}>
              {thumbnail ? <WriterProfilePic src={thumbnail} alt="writer profile pic" /> : <NoUserProfileIcon />}
              <WriterDetailBox>
                <WriterNameBox>
                  <WriterDetail className="mobile">{name}</WriterDetail>
                  <WriterDetail className="mobile">&nbsp;·&nbsp;{job}</WriterDetail>
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
              {thumbnail ? <WriterProfilePic src={thumbnail} alt="writer profile pic" /> : <NoUserProfileIcon />}
              <WriterDetailBox>
                <WriterNameBox>
                  <WriterDetail>{name}</WriterDetail>
                  <WriterDetail>&nbsp;·&nbsp;{job}</WriterDetail>
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

  margin: 3.2rem 0 1.2rem;
  width: 100%;

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

  color: ${({ theme }) => theme.colors.grey_950};

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Body1_Regular};
  }
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
  color: ${({ theme }) => theme.colors.grey_900};

  &.date {
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_700};
  }

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Body2_Regular};
  }
`;
