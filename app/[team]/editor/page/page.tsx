'use client';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';

const CreatePagePage = () => {
  return (
    <AuthRequired>
      <ArticleWrapper>
        <ArticleTitle pageType="page" />
        <TextEditorBuild pageType="page" />
      </ArticleWrapper>
    </AuthRequired>
  );
};

export default CreatePagePage;

const ArticleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
