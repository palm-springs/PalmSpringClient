'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import CategorySelect from '@/components/editor/publish/ui/CategorySelect';
import OneLiner from '@/components/editor/publish/ui/OneLiner';
import PublishBottomButtons from '@/components/editor/publish/ui/PublishBottom';
import PublishTitle from '@/components/editor/publish/ui/PublishTitle';
import ThumbnailInput from '@/components/editor/publish/ui/ThumbnailInput';
import UrlCustom from '@/components/editor/publish/ui/UrlCustom';

const ArticlePublishPage = () => {
  const { team } = useParams();

  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);

  return (
    <AuthRequired>
      <PublishContainer>
        <ArticlePublishContainer>
          <ThumbnailInput pageType="article" />
          <PublishTitle pageType="article" />
          <CategorySelect />
          <OneLiner />
          <UrlCustom pageType="article" isDuplicate={isDuplicate} setIsDuplicate={setIsDuplicate} />
          <PublishBottomButtons pageType="article" isDuplicate={isDuplicate} />
        </ArticlePublishContainer>
      </PublishContainer>
    </AuthRequired>
  );
};

export default ArticlePublishPage;

const PublishContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100vw; */
`;

const ArticlePublishContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8.1rem 45rem;
  width: 54rem;
  /* height: 100vh; */
`;
