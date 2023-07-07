import React from 'react';

import ArticleTitle from '@/components/editor/article/UI/ArticleTitle';
import SaveArticleButton from '@/components/editor/article/UI/SaveArticleButton';
import ToolBox from '@/components/editor/article/UI/ToolBox';
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
