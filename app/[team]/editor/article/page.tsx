import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreateArticlePage = () => {
  return (
    <>
      {/* <ArticleTitle title={title} setTitle={setTitle} />
      <TextEditorBuild title={title} /> */}
      <ArticleTitle title={title} setTitle={setTitle} />
      <TextEditorBuild title={title} />
    </>
  );
};

export default CreateArticlePage;
