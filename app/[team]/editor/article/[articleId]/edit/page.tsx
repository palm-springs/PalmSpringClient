'use client';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import TextEditorBuild from '@/components/editor/TextEditorImport';
import EditorInputTitle from '@/components/editor/ui/EditorInputTitle';
import { useGetUpdateArticleContent } from '@/hooks/editor';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

const EditArticlePage = () => {
  const { articleId } = useParams();
  const updateArticleEditContents = useGetUpdateArticleContent(Number(articleId)); // number 값 articleId로 바꿀거이
  // console.log(updateArticleEditContents.data.content);
  return (
    <AuthRequired>
      <TextEditorStyle>
        <ArticleWrapper className="ProseMirror">
          {/* 데이터가 content 있는 페이지 */}
          {updateArticleEditContents && (
            <EditorInputTitle pageType="article" currentState="edit" articleData={updateArticleEditContents.data} />
          )}
          {updateArticleEditContents && (
            <TextEditorBuild pageType="article" currentState="edit" articleData={updateArticleEditContents.data} />
          )}
        </ArticleWrapper>
      </TextEditorStyle>
    </AuthRequired>
  );
};

export default EditArticlePage;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
