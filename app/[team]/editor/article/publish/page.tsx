'use client';
import React from 'react';

import CategorySelect from '@/components/editor/article/publish/UI/CategorySelect';
import OneLiner from '@/components/editor/article/publish/UI/OneLiner';
import PublishTitle from '@/components/editor/article/publish/UI/PublishTitle';
import ThumbnailInput from '@/components/editor/article/publish/UI/ThumbnailInput';
import UrlCustom from '@/components/editor/article/publish/UI/UrlCustom';

const ArticlePublishPage = () => {
  return (
    <>
      <ThumbnailInput />
      <PublishTitle />
      <CategorySelect />
      <OneLiner />
      <UrlCustom />
    </>
  );
};

export default ArticlePublishPage;
