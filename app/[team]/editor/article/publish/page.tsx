'use client';
import React from 'react';

import PublishTitle from '@/components/editor/article/publish/UI/PublishTitle';
import ThumbnailInput from '@/components/editor/article/publish/UI/ThumbnailInput';

const ArticlePublishPage = () => {
  return (
    <>
      <ThumbnailInput />
      <PublishTitle />
    </>
  );
};

export default ArticlePublishPage;
