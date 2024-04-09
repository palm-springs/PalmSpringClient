'use client';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import TextEditorImport from '@/components/editor/TextEditorImport';
import EditorInputTitle from '@/components/editor/ui/EditorInputTitle';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

const CreatePagePage = () => {
  return (
    <AuthRequired>
      <TextEditorStyle className="editor">
        <PageWrapper className="ProseMirror">
          <EditorInputTitle pageType="page" />
          <TextEditorImport pageType="page" />
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
  /* overflow-x: hidden; */
`;
