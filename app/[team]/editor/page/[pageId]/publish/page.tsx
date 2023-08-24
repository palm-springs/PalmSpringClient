'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import PublishBottomButtons from '@/components/editor/publish/ui/PublishBottom';
import PublishTitle from '@/components/editor/publish/ui/PublishTitle';
import ThumbnailInput from '@/components/editor/publish/ui/ThumbnailInput';
import UrlCustom from '@/components/editor/publish/ui/UrlCustom';
import { useGetUpdatePageContent } from '@/hooks/editor';

const UpdatePagePublishPage = () => {
  const { team, pageId } = useParams();
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);
  const updatePageEditContents = useGetUpdatePageContent(team, Number(pageId)); // number 값 pageId로 바꿀거이

  return (
    <AuthRequired>
      <PagePublishContainer>
        {updatePageEditContents && <ThumbnailInput pageType="page" pageData={updatePageEditContents?.data} />}
        <PublishTitle pageType="page" />
        {updatePageEditContents && (
          <UrlCustom
            pageType="page"
            isDuplicate={isDuplicate}
            setIsDuplicate={setIsDuplicate}
            pageData={updatePageEditContents?.data}
          />
        )}
        <PublishBottomButtons pageType="page" isDuplicate={isDuplicate} />
      </PagePublishContainer>
    </AuthRequired>
  );
};

export default UpdatePagePublishPage;

const PagePublishContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 17.85rem 45rem;
  width: 100vw;
  /* height: 100vh; */
`;
