'use client';
import React from 'react';

import CategorySelect from '@/components/editor/article/publish/UI/CategorySelect';
import PublishTitle from '@/components/editor/article/publish/UI/PublishTitle';
import ThumbnailInput from '@/components/editor/article/publish/UI/ThumbnailInput';

const ArticlePublishPage = () => {
  return (
    <>
      <ThumbnailInput />
      <PublishTitle />
      <CategorySelect />
    </>
  );
};

export default ArticlePublishPage;
