'use client';
import React from 'react';
import styled from 'styled-components';

import PublishBottomButtons from '@/components/editor/article/publish/ui/PublishBottom';
import PublishTitle from '@/components/editor/article/publish/ui/PublishTitle';
import ThumbnailInput from '@/components/editor/article/publish/ui/ThumbnailInput';
import UrlCustom from '@/components/editor/article/publish/ui/UrlCustom';

const PagePublishPage = () => {
  return (
    <PagePublishContainer>
      <ThumbnailInput pageType="page" />
      <PublishTitle pageType="page" blogUrl={'helloworld'} articleId={1} />
      <UrlCustom pageType="page" />
      <PublishBottomButtons pageType="page" />
    </PagePublishContainer>
  );
};

export default PagePublishPage;

const PagePublishContainer = styled.div`
  align-items: center;
  justify-content: center;
  padding: 21.45rem 45rem;
  width: 100vw;
  height: 100vh;
`;
