'use client';
import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';

import { postArticleCreateList } from '@/api/article';
import { postPageCreate } from '@/api/page';

import { articleDataState, pageDataState } from '../../states/atom';

interface PublishBottomButtons {
  pageType: string;
  isDuplicate: boolean | null;
}

const PublishBottomButtons = (props: PublishBottomButtons) => {
  const router = useRouter();
  const { pageType, isDuplicate } = props;

  const [isDisabled, setIsDisabled] = useState(true);

  const articleData = useRecoilValue(articleDataState);
  const { categoryId, description, articleUrl } = articleData;
  const pageData = useRecoilValue(pageDataState);
  const { pageUrl } = pageData;

  const { team } = useParams();

  const resetArticleData = useResetRecoilState(articleDataState);
  const resetPageData = useResetRecoilState(pageDataState);

  const handleOnClickLastPublish = () => {
    postArticleCreateList(team, articleData);
    resetArticleData();
    router.push(`/${team}/dashboard/upload`);
  };

  const handleOnClickArticlePublish = () => {
    postPageCreate(team, pageData);
    resetPageData();
    router.push(`/${team}/dashboard/page`);
  };

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
            <PublishButton
              type="button"
              onClick={handleOnClickLastPublish}
              disabled={
                categoryId === -1 || description === '' || articleUrl === '' || isDuplicate || isDuplicate === null
              }>
              글 발행하기
            </PublishButton>
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
            <PublishButton
              type="button"
              onClick={handleOnClickArticlePublish}
              disabled={pageUrl === '' || isDuplicate || isDuplicate === null}>
              글 발행하기
            </PublishButton>
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