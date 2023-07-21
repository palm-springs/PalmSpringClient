import AuthRequired from '@/components/auth/AuthRequired';
import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreateArticlePage = () => {
  return (
    <AuthRequired>
      <ArticleTitle />
      <TextEditorBuild pageType="article" />
    </AuthRequired>
  );
};

export default CreateArticlePage;
