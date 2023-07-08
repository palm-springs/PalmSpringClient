'use client';
import React from 'react';
import styled from 'styled-components';

import PublishBottomButtons from '@/components/editor/page/publish/UI/PublishBottom';
import PublishTitle from '@/components/editor/page/publish/UI/PublishTitle';
import ThumbnailInput from '@/components/editor/page/publish/UI/ThumbnailInput';
import UrlCustom from '@/components/editor/page/publish/UI/UrlCustom';

const PagePublishPage = () => {
  return (
    <PagePublishContainer>
      <ThumbnailInput />
      <PublishTitle />
      <UrlCustom />
      <PublishBottomButtons />
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
