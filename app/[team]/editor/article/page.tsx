'use client';
import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import SaveArticleButton from '@/components/editor/article/ui/SaveArticleButton';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreateArticlePage = () => {
  return (
    <>
      <ArticleTitle />
      <TextEditorBuild />
      <SaveArticleButton />
    </>
  );
};

export default CreateArticlePage;
