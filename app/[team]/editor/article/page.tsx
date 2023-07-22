'use client';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreateArticlePage = () => {
  return (
    <AuthRequired>
      <Container>
        <ArticleTitle pageType="article" />
        <TextEditorBuild pageType="article" />
      </Container>
    </AuthRequired>
  );
};

export default CreateArticlePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
