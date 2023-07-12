'use client';
import React from 'react';
import styled from 'styled-components';

import CategorySelect from '@/components/editor/article/publish/UI/CategorySelect';
import OneLiner from '@/components/editor/article/publish/UI/OneLiner';
import PublishBottomButtons from '@/components/editor/article/publish/UI/PublishBottom';
import PublishTitle from '@/components/editor/article/publish/UI/PublishTitle';
import ThumbnailInput from '@/components/editor/article/publish/UI/ThumbnailInput';
import UrlCustom from '@/components/editor/article/publish/UI/UrlCustom';

const ArticlePublishPage = () => {
  return (
    <ArticlePublishContainer>
      <ThumbnailInput />
      <PublishTitle />
      <CategorySelect />
      <OneLiner />
      <UrlCustom />
      <PublishBottomButtons />
    </ArticlePublishContainer>
  );
};

export default ArticlePublishPage;

const ArticlePublishContainer = styled.div`
  align-items: center;
  justify-content: center;
  padding: 8.1rem 45rem;
  width: 100vw;
  height: 100vh;
`;
