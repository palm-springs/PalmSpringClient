'use client';
import React from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import styled from 'styled-components';

import { postArticleCreateList } from '@/api/article';
import { postPageCreate } from '@/api/page';
import {
  QUERY_KEY_ARTICLE,
  useUpdateArticleContent,
  useUpdatePageContent,
  useUpdateTempArticleDraft,
  useUpdateTempPageDraft,
} from '@/hooks/editor';
import { UpdateArticleProps } from '@/types/article';

import { articleDataState, pageDataState } from '../../states/atom';

interface PublishBottomButtons {
  pageType: string;
  isDuplicate: boolean | null;
  articleData?: UpdateArticleProps;
  isEdit?: boolean;
  currentState?: string;
}

const PublishBottomButtons = (props: PublishBottomButtons) => {
  const router = useRouter();
  const { pageType, isDuplicate, currentState } = props;
  const pathName = usePathname();

  const queryClient = useQueryClient();

  const articleData = useRecoilValue(articleDataState);
  const { categoryId, description, articleUrl } = articleData;
  const pageData = useRecoilValue(pageDataState);
  const { pageUrl } = pageData;

  const { team, pageId, articleId } = useParams();

  const updatePageMutation = useUpdatePageContent(team);
  const updateArticleMutation = useUpdateArticleContent(team);

  const draftArticleMutation = useUpdateTempArticleDraft(team);
  const draftPageMutation = useUpdateTempPageDraft(team);

  const updatedArticleData = useRecoilValue(articleDataState);
  const updatedPageData = useRecoilValue(pageDataState);

  const resetArticleData = useResetRecoilState(articleDataState);
  const resetPageData = useResetRecoilState(pageDataState);

  //아티클 최종 발행하기
  const handleOnClickArticlePublish = async () => {
    await postArticleCreateList(team, articleData);
    queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getArticleList]);
    resetArticleData();
    router.push(`/${team}/dashboard/upload`);
  };

  //아티클 최종 수정하기
  const handleOnClickUpdateArticlePublish = () => {
    updateArticleMutation.mutate(
      {
        ...updatedArticleData,
        id: Number(articleId),
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getArticleList]);
        },
      },
    );
    resetArticleData();
    router.push(`/${team}/dashboard/upload`);
  };

  //임시저장 아티클 수정하기 후 최종 발행하기
  const handleTempArticleUpdatePublish = () => {
    draftArticleMutation.mutate(
      {
        ...updatedArticleData,
        id: Number(articleId),
        isPublish: true,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getArticleList]);
        },
      },
    );
    resetArticleData();
    router.push(`/${team}/dashboard/upload`);
  };

  //페이지 최종 발행하기
  const handleOnClickPagePublish = () => {
    postPageCreate(team, pageData);
    resetPageData();
    router.push(`/${team}/dashboard/page`);
  };

  //페이지 최종 수정하기 버튼
  const handleOnClickUpdatePagePublish = () => {
    updatePageMutation.mutate({ ...updatedPageData, id: Number(pageId) });
    resetPageData();
    router.push(`/${team}/dashboard/page`);
  };

  //임시저장 페이지 수정하기 후 최종 발행하기
  const handleTempPageUpdatePublish = () => {
    draftPageMutation.mutate({
      ...updatedPageData,
      id: Number(pageId),
      isPublish: true,
    });
    resetArticleData();
    router.push(`/${team}/dashboard/page`);
  };

  // 뒤로가기 -> 전 페이지로 바꾸는 걸로 바꾸기
  const handleBackButton = () => {
    router.back();
  };

  switch (pageType) {
    case `article`:
      return (
        <>
          <PublishBottomButtonsContainer>
            <BackButton type="button" onClick={handleBackButton}>
              뒤로가기
            </BackButton>
            {pathName === `/${team}/editor/article/${articleId}/edit/publish` ? (
              <PublishButton
                type="button"
                onClick={handleOnClickUpdateArticlePublish}
                disabled={
                  categoryId === null || description === '' || articleUrl === '' || isDuplicate || isDuplicate === null
                }>
                글 수정하기
              </PublishButton>
            ) : (
              <PublishButton
                type="button"
                onClick={currentState === 'draft' ? handleTempArticleUpdatePublish : handleOnClickArticlePublish}
                disabled={
                  categoryId === null || description === '' || articleUrl === '' || isDuplicate || isDuplicate === null
                }>
                글 발행하기
              </PublishButton>
            )}
          </PublishBottomButtonsContainer>
        </>
      );
    case `page`:
      return (
        <>
          <PublishBottomButtonsContainer>
            <BackButton type="button" onClick={handleBackButton}>
              뒤로가기
            </BackButton>
            {pathName === `/${team}/editor/page/${pageId}/edit/publish` ? (
              <PublishButton
                type="button"
                onClick={handleOnClickUpdatePagePublish}
                disabled={pageUrl === '' || isDuplicate || isDuplicate === null}>
                글 수정하기
              </PublishButton>
            ) : (
              <PublishButton
                type="button"
                onClick={currentState === 'draft' ? handleTempPageUpdatePublish : handleOnClickPagePublish}
                disabled={pageUrl === '' || isDuplicate || isDuplicate === null}>
                글 발행하기
              </PublishButton>
            )}
          </PublishBottomButtonsContainer>
        </>
      );
    default:
      break;
  }
};

export default PublishBottomButtons;

const PublishButton = styled.button<{ disabled: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 34.3rem;
  border-radius: 0.8rem;
  background-color: ${({ theme, disabled }) => (disabled ? theme.colors.background_green : theme.colors.green)};

  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  padding: 1rem 2.6rem;
  color: ${({ theme }) => theme.colors.grey_0};
  ${({ theme }) => theme.fonts.Button_large};
  font-weight: bold;
`;

const BackButton = styled.button`
  ${({ theme }) => theme.fonts.Body1_Regular};
  height: 4.2rem;
  color: ${({ theme }) => theme.colors.grey_700};
`;

const PublishBottomButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;
  padding-bottom: 17.75rem;

  width: 54rem;
`;
