import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreateArticlePage = () => {
  return (
    <>
      <ArticleTitle />
      <TextEditorBuild pageType="article" />
    </>
  );
};

export default CreateArticlePage;
