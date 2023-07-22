'use client';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreatePagePage = () => {
  return (
    <AuthRequired>
      <Container>
        <ArticleTitle pageType="page" />
        <TextEditorBuild pageType="page" />
      </Container>
    </AuthRequired>
  );
};

export default CreatePagePage;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 4.4rem;
  width: 100vw;
  /* height: 100vh; */
`;
