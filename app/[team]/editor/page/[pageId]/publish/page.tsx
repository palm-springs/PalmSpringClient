'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import CategorySelect from '@/components/editor/publish/ui/CategorySelect';
import OneLiner from '@/components/editor/publish/ui/OneLiner';
import PublishBottomButtons from '@/components/editor/publish/ui/PublishBottom';
import PublishTitle from '@/components/editor/publish/ui/PublishTitle';
import ThumbnailInput from '@/components/editor/publish/ui/ThumbnailInput';
import UrlCustom from '@/components/editor/publish/ui/UrlCustom';

const PageDraftPublishPage = () => {
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);
  const [isAddressRulePassed, setIsAddressRulePassed] = useState<boolean>(true);

  return (
    <AuthRequired>
      <PublishContainer>
        <ArticlePublishContainer>
          <ThumbnailInput pageType="page" />
          <PublishTitle pageType="page" />
          <CategorySelect />
          <OneLiner />
          <UrlCustom
            pageType="page"
            isDuplicate={isDuplicate}
            setIsDuplicate={setIsDuplicate}
            isAddressRulePassed={isAddressRulePassed}
            setIsAddressRulePassed={setIsAddressRulePassed}
          />
          <PublishBottomButtons
            pageType="page"
            isDuplicate={isDuplicate}
            isAddressRulePassed={isAddressRulePassed}
            currentState="draft"
          />
        </ArticlePublishContainer>
      </PublishContainer>
    </AuthRequired>
  );
};

export default PageDraftPublishPage;

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
