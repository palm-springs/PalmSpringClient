'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import CategorySelect from '@/components/editor/article/publish/ui/CategorySelect';
import OneLiner from '@/components/editor/article/publish/ui/OneLiner';
import PublishBottomButtons from '@/components/editor/article/publish/ui/PublishBottom';
import PublishTitle from '@/components/editor/article/publish/ui/PublishTitle';
import ThumbnailInput from '@/components/editor/article/publish/ui/ThumbnailInput';
import UrlCustom from '@/components/editor/article/publish/ui/UrlCustom';

const ArticlePublishPage = () => {
  const { team } = useParams();

  return (
    <AuthRequired>
      <ArticlePublishContainer>
        <ThumbnailInput pageType="article" />
        <PublishTitle pageType="article" blogUrl={team} articleId={1} />
        <CategorySelect />
        <OneLiner />
        <UrlCustom pageType="article" />
        <PublishBottomButtons pageType="article" />
      </ArticlePublishContainer>
    </AuthRequired>
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
