import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreatePagePage = () => {
  return (
    <>
      <ArticleTitle />
      <TextEditorBuild pageType="page" />
    </>
  );
};

export default CreatePagePage;
