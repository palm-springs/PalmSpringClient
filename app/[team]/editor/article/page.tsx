'use client';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import ArticleTitle from '@/components/editor/article/ui/ArticleTitle';
import TextEditorBuild from '@/components/editor/TextEditorImport';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

const CreateArticlePage = () => {
  return (
    <AuthRequired>
      <TextEditorStyle>
        <ArticleWrapper className="ProseMirror">
          <ArticleTitle pageType="article" />
          <TextEditorBuild pageType="article" />
        </ArticleWrapper>
      </TextEditorStyle>
    </AuthRequired>
  );
};

export default CreateArticlePage;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
