'use client';
import React, { useEffect, useState } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { postArticleCreateList } from '@/api/article';
import { postPageCreate } from '@/api/page';
import {
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
}

const PublishBottomButtons = (props: PublishBottomButtons) => {
  const router = useRouter();
  const { pageType, isDuplicate, isEdit } = props;
  const pathName = usePathname();

  const [isDisabled, setIsDisabled] = useState(true);

  const articleData = useRecoilValue(articleDataState);
  const { categoryId, description, articleUrl } = articleData;
  const pageData = useRecoilValue(pageDataState);
  const { pageUrl } = pageData;

  const { team, pageId, articleId } = useParams();

  const updatePageMutation = useUpdatePageContent();
  const updateArticleMutation = useUpdateArticleContent(team);

  const draftArticleMutation = useUpdateTempArticleDraft(team);
  const draftPageMutation = useUpdateTempPageDraft();

  const [updatedArticleData, setUpdatedArticleData] = useRecoilState(articleDataState);
  const [updatedPageData, setUpdatedPageData] = useRecoilState(pageDataState);

  const resetArticleData = useResetRecoilState(articleDataState);
  const resetPageData = useResetRecoilState(pageDataState);

  //아티클 최종 발행하기
  const handleOnClickArticlePublish = () => {
    postArticleCreateList(team, articleData);
    resetArticleData();
    router.push(`/${team}/dashboard/upload`);
  };

  //아티클 최종 수정하기
  const handleOnClickUpdateArticlePublish = () => {
    updateArticleMutation.mutate({
      ...updatedArticleData,
      id: Number(articleId),
    });
    resetArticleData();
    router.push(`/${team}/dashboard/page`);
  };

  //임시저장 아티클 수정하기 후 최종 발행하기
  const handleTempArticleUpdatePublish = () => {
    draftArticleMutation.mutate({
      ...updatedArticleData,
      id: Number(articleId),
      isPublish: true,
    });
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
    router.push(`/${team}/dashboard/article`);
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
  const handleBackArticleButton = () => {
    router.push(`/${team}/editor/article`);
  };
  const handleBackPageButton = () => {
    router.push(`/${team}/editor/page`);
  };

  switch (pageType) {
    case `article`:
      return (
        <>
          <PublishBottomButtonsContainer>
            <BackButton type="button" onClick={handleBackArticleButton}>
              뒤로가기
            </BackButton>
            {pathName === `/${team}/editor/article/${articleId}/publish` ? (
              <PublishButton
                type="button"
                onClick={handleOnClickUpdateArticlePublish}
                disabled={
                  categoryId === -1 || description === '' || articleUrl === '' || isDuplicate || isDuplicate === null
                }>
                글 수정하기
              </PublishButton>
            ) : (
              <PublishButton
                type="button"
                onClick={isEdit ? handleTempArticleUpdatePublish : handleOnClickArticlePublish}
                disabled={
                  categoryId === -1 || description === '' || articleUrl === '' || isDuplicate || isDuplicate === null
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
            <BackButton type="button" onClick={handleBackPageButton}>
              뒤로가기
            </BackButton>
            {pathName === `/${team}/editor/page/${pageId}/publish` ? (
              <PublishButton
                type="button"
                onClick={handleOnClickUpdatePagePublish}
                disabled={pageUrl === '' || isDuplicate || isDuplicate === null}>
                글 수정하기
              </PublishButton>
            ) : (
              <PublishButton
                type="button"
                onClick={isEdit ? handleTempPageUpdatePublish : handleOnClickPagePublish}
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
  ${({ theme }) => theme.fonts.Body2_Regular};
`;

const BackButton = styled.button`
  height: 4.2rem;
  color: ${({ theme }) => theme.colors.grey_700};
  ${({ theme }) => theme.fonts.Body2_Regular};
`;

const PublishBottomButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3.2rem;
  padding-bottom: 17.75rem;

  width: 54rem;
`;
