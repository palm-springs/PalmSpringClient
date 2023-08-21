'use client';
import { useParams } from 'next/navigation';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import { pageDataState } from '@/components/editor/states/atom';
import TextEditorBuild from '@/components/editor/TextEditorImport';
import EditorInputTitle from '@/components/editor/ui/EditorInputTitle';
import { useGetUpdatePageContent } from '@/hooks/editor';
import { TextEditorStyle } from '@/styles/TextEditorStyle';

const EditPagePage = () => {
  const { pageId } = useParams();
  const updatePageEditContents = useGetUpdatePageContent(Number(pageId)); // number 값 pageId로 바꿀거이
  // console.log(updatePageEditContents.data.content);

  const initialPageDataState = {
    title: updatePageEditContents?.data.title || '', // 가져온 title 값
    content: '',
    images: [''],
    thumbnail: null,
    pageUrl: '',
  };

  return (
    <AuthRequired>
      {/* title 수정을 위한 초기값 설정 */}
      <RecoilRoot initializeState={({ set }) => set(pageDataState, initialPageDataState)}>
        <TextEditorStyle>
          <ArticleWrapper className="ProseMirror">
            {/* 데이터가 content 있는 페이지 */}
            {updatePageEditContents && (
              <EditorInputTitle pageType="page" currentState="edit" pageData={updatePageEditContents?.data} />
            )}
            {updatePageEditContents && (
              <TextEditorBuild pageType="page" currentState="edit" pageData={updatePageEditContents?.data} />
            )}
          </ArticleWrapper>
        </TextEditorStyle>
      </RecoilRoot>
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
