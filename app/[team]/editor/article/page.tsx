'use client';
import React from 'react';

import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import SaveArticleButton from '@/components/editor/article/ui/SaveArticleButton';
import ToolBox from '@/components/editor/article/ui/ToolBox';
import TextEditor from '@/components/editor/TextEditor';

const CreateArticlePage = () => {
  return (
    <>
      <ArticleTitle />
      <ToolBox />
      <TextEditor />
      <SaveArticleButton />
    </>
  );
};

export default CreateArticlePage;
