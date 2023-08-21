'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import useGetIfContentPage from '@/hooks/useGetIfContentPage';
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
}

// @params teamMember id 이건 나중에 author 페이지로 이동하는데 필요할수도 있을거 같아서 일단 받아왔습니당
// @params teamMember thumbnail 글쓴이 프로필 사진 없을 시 기본 프로필 아이콘으로 보여줌

const ContentInfo = (props: ContentInfoProps) => {
  const { team } = useParams();

  const { contentInfoData, IndivContentId } = props;

  const ifContent = useGetIfContentPage();

  if (!contentInfoData) return <LoadingLottie height={4} width={4} fit={false} />;

  const { title, description, teamMember } = contentInfoData;

  if (!teamMember) return <LoadingLottie height={4} width={4} fit={false} />;

  const { thumbnail, name, job, createdAt, id } = teamMember;

  return (
    <ContentInfoContainer className={ifContent === 'content' ? 'noHover' : 'hover'}>
      {ifContent === 'content' ? (
        <TestBox>
          <TitleBox>{title}</TitleBox>
          {description && <DescriptionBox>{description}</DescriptionBox>}
        </TestBox>
      ) : (
        <TestBox>
          <Link href={`/${team}/content/${IndivContentId}`}>
            <TitleBox>{title}</TitleBox>
            {description && <DescriptionBox>{description}</DescriptionBox>}
          </Link>
        </TestBox>
      )}
      {name && (
        <WriterBox>
          <WriterInfo href={`/${team}/author/${id}`}>
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
  color: ${({ theme }) => theme.colors.grey_900};

  &.date {
    ${({ theme }) => theme.fonts.Body3_Regular};
    color: ${({ theme }) => theme.colors.grey_700};
  }
`;
