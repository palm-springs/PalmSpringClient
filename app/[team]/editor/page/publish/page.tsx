'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import PublishBottomButtons from '@/components/editor/publish/ui/PublishBottom';
import PublishTitle from '@/components/editor/publish/ui/PublishTitle';
import ThumbnailInput from '@/components/editor/publish/ui/ThumbnailInput';
import UrlCustom from '@/components/editor/publish/ui/UrlCustom';

const PagePublishPage = () => {
  const { team } = useParams();
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);
  return (
    <AuthRequired>
      <PagePublishContainer>
        <ThumbnailInput pageType="page" />
        <PublishTitle pageType="page" blogUrl={team} articleId={1} />
        <UrlCustom pageType="page" isDuplicate={isDuplicate} setIsDuplicate={setIsDuplicate} />
        <PublishBottomButtons pageType="page" isDuplicate={isDuplicate} />
      </PagePublishContainer>
    </AuthRequired>
  );
};

export default PagePublishPage;

const PagePublishContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 17.85rem 45rem;
  width: 100vw;
  /* height: 100vh; */
`;
