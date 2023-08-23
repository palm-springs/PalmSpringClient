'use client';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import TextEditorBuild from '@/components/editor/TextEditorImport';
import EditorInputTitle from '@/components/editor/ui/EditorInputTitle';
import { useGetUpdateArticleContent } from '@/hooks/editor';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

const DraftArticlePage = () => {
  const { articleId } = useParams();
  const updateArticleEditContents = useGetUpdateArticleContent(Number(articleId));

  return (
    <AuthRequired>
      <TextEditorStyle>
        <ArticleWrapper className="ProseMirror">
          {/* 데이터가 content 있는 페이지 */}
          {updateArticleEditContents && (
            <>
              <EditorInputTitle pageType="article" currentState="draft" articleData={updateArticleEditContents.data} />
              <TextEditorBuild pageType="article" currentState="draft" articleData={updateArticleEditContents.data} />
            </>
          )}
        </ArticleWrapper>
      </TextEditorStyle>
    </AuthRequired>
  );
};

export default DraftArticlePage;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;
