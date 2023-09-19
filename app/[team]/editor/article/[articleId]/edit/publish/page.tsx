'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import styled from 'styled-components';

import AuthRequired from '@/components/auth/AuthRequired';
import CategorySelect from '@/components/editor/publish/ui/CategorySelect';
import OneLiner from '@/components/editor/publish/ui/OneLiner';
import PublishBottomButtons from '@/components/editor/publish/ui/PublishBottom';
import PublishTitle from '@/components/editor/publish/ui/PublishTitle';
import ThumbnailInput from '@/components/editor/publish/ui/ThumbnailInput';
import UrlCustom from '@/components/editor/publish/ui/UrlCustom';
import { useGetUpdateArticleContent } from '@/hooks/editor';

const ArticleEditPublishPage = () => {
  const { team, articleId } = useParams();
  const [isDuplicate, setIsDuplicate] = useState<boolean | null>(false);
  const updateArticleEditContents = useGetUpdateArticleContent(team, Number(articleId)); // number 값 ArticleId로 바꿀거이

  return (
    <AuthRequired>
      <PublishContainer>
        <ArticlePublishContainer>
          {updateArticleEditContents && (
            <>
              <ThumbnailInput pageType="article" articleData={updateArticleEditContents.data} />
              <PublishTitle pageType="article" articleData={updateArticleEditContents.data} />
              <CategorySelect articleData={updateArticleEditContents.data} />
              <OneLiner articleData={updateArticleEditContents.data} />
              <UrlCustom
                pageType="article"
                isDuplicate={isDuplicate}
                setIsDuplicate={setIsDuplicate}
                articleData={updateArticleEditContents.data}
              />
              <PublishBottomButtons
                pageType="article"
                currentState="edit"
                isDuplicate={isDuplicate}
                articleData={updateArticleEditContents.data}
              />
            </>
          )}
        </ArticlePublishContainer>
      </PublishContainer>
    </AuthRequired>
  );
};

export default ArticleEditPublishPage;

const PublishContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100vw; */
`;

const ArticlePublishContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8.1rem 45rem;
  width: 54rem;
  /* height: 100vh; */
`;
