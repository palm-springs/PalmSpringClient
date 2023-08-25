'use client';

import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import PageContentInfo from '@/components/common/PageContentInfo';
import Content from '@/components/content/Content';

interface ContentTemplateProps {
  data: {
    title: string;
    thumbnail: string;
    content: string;
  };
}

const PageTemplate = (props: ContentTemplateProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, []);

  const {
    data: { title, thumbnail, content },
  } = props;

  const MOBILE = useMediaQuery({
    query: '(min-width : 375px) and (max-width:768px)',
  });

  if (MOBILE)
    return (
      <ContentPageContainer className="mobile">
        {thumbnail && <PageThumbnail className="mobile" src={thumbnail} alt="page content thumbnail" />}
        <PageContentInfo contentInfoData={{ title }} />
        <Content content={content} />
      </ContentPageContainer>
    );
  else
    return (
      <ContentPageContainer>
        {thumbnail && <PageThumbnail src={thumbnail} alt="page content thumbnail" />}
        <PageContentInfo contentInfoData={{ title }} />
        <Content content={content} />
      </ContentPageContainer>
    );
};

export default PageTemplate;

const PageThumbnail = styled.img`
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
    height: 37.5rem;
  }
`;

const ContentPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 11.8rem 36rem;

  &.mobile {
    margin: 0;
    width: 100vw;
  }
`;
