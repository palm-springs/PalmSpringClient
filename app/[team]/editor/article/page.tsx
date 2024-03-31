'use client';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import TextEditorImport from '@/components/editor/TextEditorImport';
import EditorInputTitle from '@/components/editor/ui/EditorInputTitle';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

const CreateArticlePage = () => {
  return (
    <AuthRequired>
      <TextEditorWrapper>
        <TextEditorStyle className="editor">
          <ArticleWrapper className="ProseMirror">
            <EditorInputTitle pageType="article" />
            <TextEditorImport pageType="article" />
          </ArticleWrapper>
        </TextEditorStyle>
      </TextEditorWrapper>
    </AuthRequired>
  );
};

export default CreateArticlePage;

const TextEditorWrapper = styled.div``;

const ArticleWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
