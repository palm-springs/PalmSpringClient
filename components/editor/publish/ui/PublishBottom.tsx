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
import { UpdatePageProps } from '@/types/page';
import { checkSessionStorage } from '@/utils/checkSessionStorage';
import { removeDraftContentData } from '@/utils/removeContentData';

import { articleDataState, pageDataState } from '../../states/atom';

interface PublishBottomButtons {
  pageType: string;
  isDuplicate: boolean | null;
  isAddressRulePassed: boolean | null;
  updatedArticleData?: UpdateArticleProps;
  isEdit?: boolean;
  currentState?: string;
  pageData?: UpdatePageProps;
}

const PublishBottomButtons = (props: PublishBottomButtons) => {
  const router = useRouter();
  const { pageType, isDuplicate, currentState, isAddressRulePassed, updatedArticleData, pageData } = props;
  const pathName = usePathname();

  const queryClient = useQueryClient();

  const { team, pageId, articleId } = useParams();

  const updatePageMutation = useUpdatePageContent(String(team));
  const updateArticleMutation = useUpdateArticleContent(String(team));

  const draftArticleMutation = useUpdateTempArticleDraft(String(team));
  const draftPageMutation = useUpdateTempPageDraft(String(team));

  const articleData = useRecoilValue(articleDataState);
  const { categoryId, description, articleUrl, thumbnail, content, title } = articleData;
  const updatedPageData = useRecoilValue(pageDataState);
  const { pageUrl, thumbnail: pageThumbnail, content: pageContent, title: pageTitle } = updatedPageData;

  const resetArticleData = useResetRecoilState(articleDataState);
  const resetPageData = useResetRecoilState(pageDataState);

  // sessionStorage
  const sessionStorage = checkSessionStorage();

  //아티클 최종 발행하기
  const handleOnClickArticlePublish = async () => {
    await postArticleCreateList(String(team), articleData);
    queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getArticleList]);
    resetArticleData();
    removeDraftContentData();
    router.push(`/${team}/dashboard/upload`);
  };

  //아티클 최종 수정하기
  const handleOnClickUpdateArticlePublish = () => {
    updateArticleMutation.mutate(
      {
        ...articleData,
        id: Number(articleId),
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([QUERY_KEY_ARTICLE.getArticleList]);
        },
      },
    );
    resetArticleData();
    removeDraftContentData();
    router.push(`/${team}/dashboard/upload`);
  };

  //임시저장 아티클 수정하기 후 최종 발행하기
  const handleTempArticleUpdatePublish = () => {
    draftArticleMutation.mutate(
      {
        ...articleData,
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
    removeDraftContentData();
    router.push(`/${team}/dashboard/upload`);
  };

  //페이지 최종 발행하기
  const handleOnClickPagePublish = () => {
    postPageCreate(String(team), updatedPageData);
    resetPageData();
    removeDraftContentData();
    router.push(`/${team}/dashboard/page`);
  };

  //페이지 최종 수정하기 버튼
  const handleOnClickUpdatePagePublish = () => {
    updatePageMutation.mutate({ ...updatedPageData, id: Number(pageId) });
    resetPageData();
    removeDraftContentData();
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
    removeDraftContentData();
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
                  (updatedArticleData?.thumbnail === thumbnail &&
                    updatedArticleData?.description === description &&
                    updatedArticleData?.categoryId === categoryId &&
                    updatedArticleData?.articleUrl === articleUrl &&
                    updatedArticleData?.content === content &&
                    updatedArticleData?.title === title) ||
                  categoryId === null ||
                  description === '' ||
                  articleUrl === '' ||
                  isDuplicate ||
                  isDuplicate === null ||
                  !isAddressRulePassed
                }>
                글 수정하기
              </PublishButton>
            ) : (
              <PublishButton
                type="button"
                onClick={currentState === 'draft' ? handleTempArticleUpdatePublish : handleOnClickArticlePublish}
                disabled={
                  categoryId === null ||
                  description === '' ||
                  articleUrl === '' ||
                  isDuplicate ||
                  isDuplicate === null ||
                  !isAddressRulePassed
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
                disabled={
                  (pageData?.thumbnail === pageThumbnail &&
                    pageData?.pageUrl === pageUrl &&
                    pageData?.content === pageContent &&
                    pageData?.title === pageTitle) ||
                  pageUrl === '' ||
                  isDuplicate ||
                  isDuplicate === null ||
                  !isAddressRulePassed
                }>
                글 수정하기
              </PublishButton>
            ) : (
              <PublishButton
                type="button"
                onClick={currentState === 'draft' ? handleTempPageUpdatePublish : handleOnClickPagePublish}
                disabled={pageUrl === '' || isDuplicate || isDuplicate === null || !isAddressRulePassed}>
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

  &:hover {
    text-decoration: underline;
  }
`;

const PublishBottomButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;
  padding-bottom: 17.75rem;

  width: 54rem;
`;
