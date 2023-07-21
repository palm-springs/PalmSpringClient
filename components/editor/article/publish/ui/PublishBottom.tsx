'use client';
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import router from 'next/router';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';

import { postArticleCreateList } from '@/api/article';
import { postPageCreate } from '@/api/page';

import { articleDataState, pageDataState } from '../../states/atom';

interface PublishBottomButtons {
  pageType: string;
}

const PublishBottomButtons = (props: PublishBottomButtons) => {
  const router = useRouter();
  const { pageType } = props;
  const articleData = useRecoilValue(articleDataState);
  const pageData = useRecoilValue(pageDataState);
  const { team } = useParams();

  const handleOnClickLastPublish = () => {
    postArticleCreateList(team, articleData);
    router.push(`/${team}/dashboard/upload`);
  };

  const handleOnClickPublish = () => {
    postPageCreate(team, pageData);
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
            <PublishButton type="button" onClick={handleOnClickLastPublish}>
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
            <PublishButton type="button" onClick={handleOnClickPublish}>
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

const PublishButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 34.3rem;
  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.colors.green};
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
  margin-top: 3.2rem;
  padding-bottom: 17.75rem;
`;
