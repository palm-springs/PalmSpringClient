'use client';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import TextEditorBuild from '@/components/editor/TextEditorImport';
import EditorInputTitle from '@/components/editor/ui/EditorInputTitle';
import { useGetUpdateArticleContent, useGetUpdatePageContent } from '@/hooks/editor';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

const EditPagePage = () => {
  const { pageId } = useParams();
  const updatePageEditContents = useGetUpdatePageContent(Number(78)); // number 값 pageId로 바꿀거이
  // console.log(updatePageEditContents.data.content);
  return (
    <AuthRequired>
      <TextEditorStyle>
        <ArticleWrapper className="ProseMirror">
          {/* 데이터가 content 있는 페이지 */}
          {updatePageEditContents && (
            <EditorInputTitle pageType="page" currentState="edit" pageData={updatePageEditContents.data} />
          )}
          {updatePageEditContents && (
            <TextEditorBuild pageType="page" currentState="edit" pageData={updatePageEditContents.data} />
          )}
        </ArticleWrapper>
      </TextEditorStyle>
    </AuthRequired>
  );
};

export default EditPagePage;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
