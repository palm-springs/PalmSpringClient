'use client';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import TextEditorBuild from '@/components/editor/TextEditorImport';
import EditorInputTitle from '@/components/editor/ui/EditorInputTitle';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

const CreatePagePage = () => {
  return (
    <AuthRequired>
      <TextEditorStyle>
        <PageWrapper className="ProseMirror">
          <EditorInputTitle pageType="page" />
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
  /* 내 컴퓨터에서는 안생겨서 이게 해결됐는지 모르겠네 */
  overflow-x: hidden;
`;
