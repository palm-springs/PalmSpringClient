'use client';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

const CreatePagePage = () => {
  return (
    <AuthRequired>
      <TextEditorStyle>
        <PageWrapper className="ProseMirror">
          <ArticleTitle pageType="page" />
          <TextEditorBuild pageType="page" />
        </PageWrapper>
      </TextEditorStyle>
    </AuthRequired>
  );
};

export default CreatePagePage;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
