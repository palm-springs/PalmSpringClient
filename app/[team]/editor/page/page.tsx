import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreatePagePage = () => {
  return (
    <>
      <ArticleTitle pageType="page" />
      <TextEditorBuild pageType="page" />
    </>
  );
};

export default CreatePagePage;
