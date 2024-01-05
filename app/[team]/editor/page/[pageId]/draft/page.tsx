'use client';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import TextEditorBuild from '@/components/editor/TextEditorImport';
import EditorInputTitle from '@/components/editor/ui/EditorInputTitle';
import { useGetUpdatePageContent } from '@/hooks/editor';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

const DraftPagePage = () => {
  const { team, pageId } = useParams();
  const updatePageEditContents = useGetUpdatePageContent(team, Number(pageId));

  return (
    <AuthRequired>
      <TextEditorStyle>
        <ArticleWrapper className="ProseMirror">
          {/* 데이터가 content 있는 페이지 */}
          {updatePageEditContents && (
            <>
              <EditorInputTitle pageType="page" currentState="draft" pageData={updatePageEditContents.data} />
              <TextEditorBuild pageType="page" currentState="draft" pageData={updatePageEditContents.data} />
            </>
          )}
        </ArticleWrapper>
      </TextEditorStyle>
    </AuthRequired>
  );
};

export default DraftPagePage;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  overflow-x: hidden;
`;
