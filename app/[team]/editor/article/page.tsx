'use client';
import { useState } from 'react';

import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreateArticlePage = () => {
  const [title, setTitle] = useState('');

  return (
    <>
      <ArticleTitle title={title} setTitle={setTitle} />
      <TextEditorBuild />
    </>
  );
};

export default CreateArticlePage;
