import ArticleLayout from '@/components/content/ArticleLayout';

const ContentLayout = ({ children }: { children: React.ReactElement }) => {
  return (
    <>
      <ArticleLayout>{children}</ArticleLayout>
    </>
  );
};

export default ContentLayout;
