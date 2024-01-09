'use client';

import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import styled from 'styled-components';

import ContentInfo from '@/components/common/ContentInfo';
import Content from '@/components/content/Content';
import Bar from '@/components/content/ui/Bar';
import Recommend from '@/components/content/ui/Recommend';
import useCheckMobile from '@/hooks/useCheckMobile';
import { ContentProps } from '@/types/content';
import { createToast } from '@/utils/lib/toast';

import MobileContent from '../MobileContent';

interface ArticleTemplateProps {
  data: ContentProps;
}

const ArticleTemplate = (props: ArticleTemplateProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const {
    data: { thumbnail, title, description, teamMember, content },
  } = props;

  const MOBILE = useCheckMobile();

  const linkCopiedNotify = createToast({ type: 'NORMAL', message: '링크가 복사되었습니다.', id: 'link copied' });

  const copyCurrentUrl = () => {
    if (typeof window !== undefined) {
      navigator.clipboard.writeText(window.location.href);
      linkCopiedNotify();
    }
  };

  const ArticleMain = () => {
    if (MOBILE)
      return (
        <ContentPageContainer className="mobile">
          {thumbnail ? (
            <ArticleThumbnail className="mobile" src={thumbnail} alt="article content thumbnail" />
          ) : (
            <Blank />
          )}
          <ContentInfo contentInfoData={{ title, description, teamMember }} />
          <MobileContent content={content} />
          <LinkBtn className="mobile" type="button" onClick={copyCurrentUrl}>
            아티클 링크 복사하기
          </LinkBtn>
          <Recommend />
        </ContentPageContainer>
      );
    else
      return (
        <ContentPageContainer>
          {thumbnail && <ArticleThumbnail src={thumbnail} alt="article content thumbnail" />}
          <ContentInfo contentInfoData={{ title, description, teamMember }} />
          <Content content={content} />
          <LinkBtn onClick={copyCurrentUrl}>아티클 링크 복사하기</LinkBtn>
          <Bar />
          <Recommend />
        </ContentPageContainer>
      );
  };

  return (
    <>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        containerClassName=""
        containerStyle={{
          bottom: 50,
        }}
      />
      {ArticleMain()}
    </>
  );
};

export default ArticleTemplate;
const Blank = styled.div`
  width: 100vw;
  height: 6rem;
`;
const ArticleThumbnail = styled.img`
  border-radius: 1.6rem;
  width: 72rem;
  height: 40.5rem;

  user-select: none;
  -webkit-user-drag: none;
  object-fit: cover;

  &.mobile {
    margin-top: 6rem;
    border-radius: 0;
    width: 100%;
    height: calc(100vw * 9 / 16);
  }
`;

const ContentPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12rem 36rem;

  &.mobile {
    margin: 0;
    width: 100vw;
  }
`;

const LinkBtn = styled.button`
  ${({ theme }) => theme.fonts.Button_medium};
  display: flex;
  align-items: center;

  margin: 6rem 0 5.8rem;

  border: none;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.grey_200};
  padding: 1rem 2rem;
  height: 3.6rem;

  color: ${({ theme }) => theme.colors.grey_900};

  &:hover {
    background-color: ${({ theme }) => theme.colors.grey_400};
  }

  &.mobile {
    ${({ theme }) => theme.mobileFonts.Button};

    margin: 4rem 0;
    padding: 0 2rem;
    height: 3.6rem;
  }
`;
