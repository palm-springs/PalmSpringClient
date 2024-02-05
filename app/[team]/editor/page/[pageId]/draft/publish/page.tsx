'use client';
import React, { useState } from 'react';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import PublishBottomButtons from '@/components/editor/publish/ui/PublishBottom';
import PublishTitle from '@/components/editor/publish/ui/PublishTitle';
import ThumbnailInput from '@/components/editor/publish/ui/ThumbnailInput';
import UrlCustom from '@/components/editor/publish/ui/UrlCustom';

const PageDraftPublishPage = () => {
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);
  const [isAddressRulePassed, setIsAddressRulePassed] = useState<boolean>(true);

  return (
    <AuthRequired>
      <PagePublishContainer>
        <ThumbnailInput pageType="page" />
        <PublishTitle pageType="page" />
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
      </PagePublishContainer>
    </AuthRequired>
  );
};

export default PageDraftPublishPage;

const PagePublishContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 17.85rem 45rem;
  width: 100vw;
  /* height: 100vh; */
`;
