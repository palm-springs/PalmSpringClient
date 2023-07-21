import AuthRequired from '@/components/auth/AuthRequired';
import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreatePagePage = () => {
  return (
    <AuthRequired>
      <ArticleTitle />
      <TextEditorBuild pageType="page" />
    </AuthRequired>
  );
};

export default CreatePagePage;
