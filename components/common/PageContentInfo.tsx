'use client';

import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import useCheckMobile from '@/hooks/useCheckMobile';
import useGetIfContentPage from '@/hooks/useGetIfContentPage';

import LoadingLottie from './ui/LoadingLottie';

interface PageContentInfoProps {
  contentInfoData?: {
    title: string;
    description?: string | null;
  };
  IndivContentId?: number;
  articleUrl?: string;
}

const PageContentInfo = (props: PageContentInfoProps) => {
  const MOBILE = useCheckMobile();

  const { contentInfoData, IndivContentId, articleUrl } = props;

  const ifContent = useGetIfContentPage();
  if (!contentInfoData) return <LoadingLottie height={4} width={4} fit={false} />;
  const { title, description } = contentInfoData;

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
      </ContentInfoContainer>
    );
};

export default PageContentInfo;

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

  width: 72rem;

  &.mobile {
    padding: 0 2.4rem;
    width: 100vw;
  }
`;

const TitleBox = styled.article`
  ${({ theme }) => theme.fonts.Title};

  display: flex;
  justify-content: flex-start;

  margin: 3.2rem 0 1.2rem;
  width: 100%;

  color: ${({ theme }) => theme.colors.grey_950};

  &.mobile {
    margin-top: 6rem;
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
